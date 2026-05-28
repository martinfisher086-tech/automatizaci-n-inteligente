import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? process.env.resend);
const TO_EMAIL = process.env.TO_EMAIL ?? "martinfisher086@gmail.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 16px 8px 0;color:#8892A0;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:8px 0;color:#F1F5F9">${value}</td>
  </tr>`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name, email, phone, empresa, service,
    budget, message, submitted_at, website,
  } = req.body ?? {};

  // Honeypot
  if (website) return res.status(200).json({ ok: true });

  if (!name?.trim() || !email?.trim() || !service?.trim()) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const rows = [
    row("Nombre", name),
    row("Email", `<a href="mailto:${email}" style="color:#2DDDB8">${email}</a>`),
    phone ? row("WhatsApp", `<a href="https://wa.me/${String(phone).replace(/\D/g, "")}" style="color:#2DDDB8">${phone}</a>`) : "",
    empresa ? row("Empresa", empresa) : "",
    row("Servicio", `<strong style="color:#7C6DFA">${service}</strong>`),
    budget ? row("Presupuesto", budget) : "",
    message ? row("Mensaje", String(message).replace(/\n/g, "<br>")) : "",
    row("Fecha", submitted_at ?? new Date().toISOString()),
  ].join("");

  try {
    await resend.emails.send({
      from: "Automatizaciones.dev <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nueva consulta: ${service} — ${name}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#0D0F1E;color:#F1F5F9;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
          <p style="margin:0 0 4px;font-size:11px;color:#2DDDB8;font-family:monospace;letter-spacing:.1em;text-transform:uppercase">NUEVA CONSULTA · automatizaciones.dev</p>
          <h2 style="margin:0 0 24px;font-size:22px;color:#F1F5F9">${name} quiere hablar</h2>
          <table style="width:100%;border-collapse:collapse">${rows}</table>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0" />
          <p style="margin:0;font-size:12px;color:#8892A0">Respondé este email para contestarle directamente a ${name}.</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
