# SKILL: Batch Content Creator (Anthropic Batch API)

## Purpose

Generate large volumes of homogeneous content items in a single Anthropic Batch API call, achieving approximately 50% cost savings compared to sequential API calls. This skill applies to any task with 5 or more items of the same type: Reel script outlines, ebook chapters, copy variants, email templates, visual prompt sets, or FAQ expansions.

## When to Use

**Always use Batch API when ALL conditions are true:**
- [ ] Number of items ≥ 5
- [ ] All items are the same type (same prompt structure, same output format)
- [ ] You can wait up to 24 hours (Batch API SLA — typical: 10–30 minutes)
- [ ] Total sequential cost would be >$0.05

**Use sequential calls when:**
- Items < 5
- Results needed in real-time (<5 minutes)
- Items are heterogeneous (different prompt structures)
- Cost savings do not justify 24h wait

---

## Input Parameters

```typescript
interface BatchContentInput {
  task_type: 'reel-outlines' | 'ebook-chapters' | 'copy-variants' | 'email-templates' | 'visual-prompts' | 'custom';
  items: BatchItem[];
  model: 'claude-haiku-4-5-20251001' | 'claude-sonnet-4-6';
  system_prompt: string;         // Same system prompt for all items
  output_dir: string;            // Directory to save individual output files
  custom_id_prefix: string;      // e.g., "ch" for chapters, "reel" for scripts
}

interface BatchItem {
  id: string;                    // Unique ID suffix, e.g., "1-es", "001"
  user_message: string;          // The specific prompt for this item
  expected_output_file: string;  // Where to save this item's output
  min_word_count?: number;       // Validation threshold
}
```

---

## Step-by-Step Procedure

### Step 1: Eligibility Check
Run the eligibility checker from the cost-optimizer agent. If any condition fails, fall back to sequential calls and document why.

```python
def check_batch_eligibility(items, total_sequential_cost):
    conditions = {
        "items_gte_5": len(items) >= 5,
        "can_wait_24h": True,  # Human must confirm
        "cost_justifies": total_sequential_cost > 0.05
    }
    eligible = all(conditions.values())
    return eligible, conditions
```

### Step 2: Build Batch Requests
Structure all requests using the Anthropic SDK format. Apply the `custom_id` naming convention for easy result mapping.

### Step 3: Submit Batch
Call `client.messages.batches.create()`. Save the `batch_id` immediately to a local file in case of process interruption.

### Step 4: Poll for Completion
Check every 60 seconds. Log progress. Alert if >2 hours pass without completion.

### Step 5: Process Results
Download all results. For each result: validate, save to output file, log cost. Handle failures gracefully (log, do not crash).

### Step 6: Generate Completion Report
Output a markdown report showing: items completed, items failed, total tokens, actual cost, savings vs sequential.

---

## Exact Batch API Request Structure

### Python Implementation (recommended)

```python
# scripts/batch-generator.py
import anthropic
import json
import time
import os
from pathlib import Path
from datetime import datetime

client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

def run_batch(
    task_type: str,
    items: list[dict],
    system_prompt: str,
    model: str,
    output_dir: str,
    max_tokens: int = 4000
) -> dict:
    """
    Submit a batch of content generation requests and process results.
    Returns a completion report dict.
    """

    # Build requests
    requests = []
    for item in items:
        requests.append({
            "custom_id": item["id"],
            "params": {
                "model": model,
                "max_tokens": max_tokens,
                "system": system_prompt,
                "messages": [
                    {"role": "user", "content": item["user_message"]}
                ]
            }
        })

    # Submit batch
    print(f"Submitting batch: {len(requests)} requests | Model: {model} | Task: {task_type}")
    batch = client.messages.batches.create(requests=requests)
    batch_id = batch.id
    print(f"Batch ID: {batch_id}")

    # Save batch_id for recovery
    state_file = Path(output_dir) / f"batch-state-{task_type}.json"
    state_file.parent.mkdir(parents=True, exist_ok=True)
    state_file.write_text(json.dumps({
        "batch_id": batch_id,
        "task_type": task_type,
        "submitted_at": datetime.utcnow().isoformat(),
        "items": items
    }))

    # Poll for completion
    start_time = time.time()
    timeout_seconds = 86400  # 24 hours

    while True:
        status = client.messages.batches.retrieve(batch_id)
        counts = status.request_counts
        print(f"[{datetime.utcnow().strftime('%H:%M:%S')}] Status: {status.processing_status} | "
              f"Done: {counts.succeeded + counts.errored}/{len(requests)}")

        if status.processing_status == "ended":
            break

        elapsed = time.time() - start_time
        if elapsed > timeout_seconds:
            raise TimeoutError(f"Batch {batch_id} exceeded 24h timeout")

        time.sleep(60)

    # Process results
    output_path = Path(output_dir)
    completed = []
    failed = []
    total_input_tokens = 0
    total_output_tokens = 0

    for result in client.messages.batches.results(batch_id):
        custom_id = result.custom_id
        item = next((i for i in items if i["id"] == custom_id), None)

        if result.result.type == "succeeded":
            message = result.result.message
            content = message.content[0].text
            usage = message.usage

            total_input_tokens += usage.input_tokens
            total_output_tokens += usage.output_tokens

            # Validate content
            word_count = len(content.split())
            min_words = item.get("min_word_count", 0) if item else 0
            if word_count < min_words:
                print(f"WARNING: {custom_id} has only {word_count} words (target: {min_words}+)")

            # Save to file
            out_file = output_path / item["expected_output_file"] if item else output_path / f"{custom_id}.md"
            out_file.parent.mkdir(parents=True, exist_ok=True)
            out_file.write_text(content, encoding="utf-8")

            completed.append({
                "id": custom_id,
                "file": str(out_file),
                "words": word_count,
                "input_tokens": usage.input_tokens,
                "output_tokens": usage.output_tokens
            })
            print(f"Saved: {out_file} ({word_count} words)")

        else:
            error = result.result.error
            failed.append({"id": custom_id, "error": str(error)})
            print(f"FAILED: {custom_id} — {error}")

    # Calculate costs
    haiku_rates = {"input": 0.80, "output": 4.00}
    sonnet_rates = {"input": 3.00, "output": 15.00}
    rates = haiku_rates if "haiku" in model else sonnet_rates

    # Batch API discount: ~50%
    actual_cost = (
        (total_input_tokens / 1_000_000) * rates["input"] * 0.50 +
        (total_output_tokens / 1_000_000) * rates["output"] * 0.50
    )
    sequential_cost = (
        (total_input_tokens / 1_000_000) * rates["input"] +
        (total_output_tokens / 1_000_000) * rates["output"]
    )
    savings = sequential_cost - actual_cost

    report = {
        "task_type": task_type,
        "batch_id": batch_id,
        "model": model,
        "completed": len(completed),
        "failed": len(failed),
        "total_items": len(requests),
        "total_input_tokens": total_input_tokens,
        "total_output_tokens": total_output_tokens,
        "actual_cost_usd": round(actual_cost, 4),
        "sequential_cost_usd": round(sequential_cost, 4),
        "savings_usd": round(savings, 4),
        "savings_percent": round((savings / sequential_cost) * 100, 1) if sequential_cost > 0 else 0,
        "items_completed": completed,
        "items_failed": failed
    }

    # Save report
    report_file = output_path / f"batch-report-{task_type}-{datetime.utcnow().strftime('%Y%m%d')}.json"
    report_file.write_text(json.dumps(report, indent=2))
    print(f"\nBatch complete. Report: {report_file}")
    print(f"Cost: ${actual_cost:.4f} (saved ${savings:.4f} vs sequential)")

    return report
```

### custom_id Naming Convention

```
Format: {prefix}{number}-{language}

Examples:
- ch1-es         → Ebook chapter 1, Spanish
- ch7-en         → Ebook chapter 7, English
- reel-001-es    → Reel script 001, Spanish
- reel-001-en    → Reel script 001, English
- copy-hero-a-es → Landing copy, hero variant A, Spanish
- email-day2-en  → Email sequence day 2, English
```

### Polling Strategy

```python
POLL_INTERVAL_SECONDS = 60      # Check every 60 seconds
ALERT_AFTER_SECONDS = 7200      # Alert human if >2 hours
TIMEOUT_SECONDS = 86400         # Fail if >24 hours

# Progressive polling: start at 30s, increase to 60s after first 5 min
for attempt in range(1000):
    status = client.messages.batches.retrieve(batch_id)
    if status.processing_status == "ended":
        break
    sleep_time = 30 if attempt < 10 else 60
    time.sleep(sleep_time)
```

---

## Cost Comparison Table

### Example: 7 Ebook Chapters × 2 Languages (14 requests)

| Method | Input MTok | Output MTok | Input Cost | Output Cost | Total |
|--------|-----------|------------|------------|-------------|-------|
| Sequential (no cache) | 0.007 | 0.0224 | $0.021 | $0.336 | $0.357 |
| Sequential (with cache) | 0.0007 (reads) | 0.0224 | $0.002 | $0.336 | $0.338 |
| **Batch API** | 0.007 | 0.0224 | $0.011 | $0.168 | **$0.179** |
| Batch + cache (if applicable) | — | — | — | — | **$0.090** |

**Batch API saves ~50% vs sequential. For ebook chapters alone: save ~$0.178.**

### Example: 20 Reel Script Outlines (20 requests, Haiku)

| Method | Input MTok | Output MTok | Total |
|--------|-----------|------------|-------|
| Sequential | 0.016 | 0.040 | $0.173 |
| **Batch API** | 0.016 | 0.040 | **$0.086** |
| **Savings** | | | **$0.087 (50%)** |

---

## Output Processing Pattern

After batch completes, parse all results into individual files:

```
src/content/ebook/
├── es/
│   ├── ch1-es.md    ← from custom_id "ch1-es"
│   ├── ch2-es.md    ← from custom_id "ch2-es"
│   └── ...
└── en/
    ├── ch1-en.md    ← from custom_id "ch1-en"
    └── ...

src/content/reels/scripts/
├── reel-001-bilingual.md   ← assembled from "reel-001-es" + "reel-001-en"
└── ...

docs/
└── batch-report-ebook-chapters-20260401.json   ← completion report
```

---

## Error Recovery

If a batch partially fails:
1. Check the report JSON for `items_failed` list
2. Create a new, smaller batch with only the failed items
3. Reuse the same system prompt and output directory
4. Do NOT resubmit the entire batch (wastes budget on already-completed items)

```python
# Re-run only failed items
failed_items = [item for item in all_items if item["id"] in failed_ids]
recovery_report = run_batch(
    task_type=f"{task_type}-recovery",
    items=failed_items,
    system_prompt=system_prompt,
    model=model,
    output_dir=output_dir
)
```

---

## Integration with Cost Optimizer

After every batch, the cost-optimizer agent must:
1. Read the batch report JSON
2. Update `docs/cost-log.json` with actual costs
3. Compare actual vs estimated costs
4. If actual >125% of estimated: flag for review and update estimation formulas
