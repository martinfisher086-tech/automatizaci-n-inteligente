import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ROICalculator = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(20);

  const weeklySaving = hours * rate;
  const annualSaving = weeklySaving * 52;
  const investment = 800;
  const breakEvenMonths = Math.ceil(investment / (weeklySaving * 4.33));

  return (
    <section aria-labelledby="roi-heading" className="py-16 md:py-24 bg-[hsl(240_20%_5%)]">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl px-6 animate-section ${isVisible ? "visible" : ""}`}
      >
        <h2 id="roi-heading" className="mb-3 text-center text-3xl font-bold text-foreground md:text-4xl">
          ¿Cuánto te cuesta no automatizar?
        </h2>
        <p className="mb-10 text-center text-base text-muted-foreground">
          Calculá el ROI potencial en tu negocio.
        </p>

        <div className="rounded-2xl border border-border bg-card p-8 space-y-8">
          {/* Slider horas */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="roi-hours" className="text-sm font-semibold text-foreground">
                Horas semanales en tareas manuales
              </label>
              <span className="text-lg font-bold text-primary">{hours}h</span>
            </div>
            <input
              id="roi-hours"
              type="range"
              min={1}
              max={50}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full accent-primary"
              aria-valuemin={1}
              aria-valuemax={50}
              aria-valuenow={hours}
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>1h</span><span>50h</span>
            </div>
          </div>

          {/* Slider costo hora */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="roi-rate" className="text-sm font-semibold text-foreground">
                Costo por hora de tu equipo (USD)
              </label>
              <span className="text-lg font-bold text-primary">${rate}</span>
            </div>
            <input
              id="roi-rate"
              type="range"
              min={5}
              max={100}
              step={5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-primary"
              aria-valuemin={5}
              aria-valuemax={100}
              aria-valuenow={rate}
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>$5</span><span>$100</span>
            </div>
          </div>

          {/* Resultados */}
          <div className="grid grid-cols-3 gap-4 rounded-xl border border-[hsl(var(--success-subtle))] bg-[hsl(var(--success-subtle)/0.15)] p-5">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Ahorro semanal</p>
              <p className="text-xl font-bold text-[hsl(var(--success-foreground))]">
                ${weeklySaving.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Ahorro anual</p>
              <p className="text-xl font-bold text-[hsl(var(--success-foreground))]">
                ${annualSaving.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Break-even</p>
              <p className="text-xl font-bold text-[hsl(var(--success-foreground))]">
                {breakEvenMonths === 1 ? "mes 1" : `mes ${breakEvenMonths}`}
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Estimado sobre una inversión inicial de $800 (plan Recomendado).
          </p>

          <div className="text-center">
            <a
              href="#contacto"
              className="inline-block rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Ver si aplica a mi negocio<span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
