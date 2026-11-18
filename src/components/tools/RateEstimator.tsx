"use client";

import { useState } from "react";

export function RateEstimator() {
  const [weight, setWeight] = useState("5");
  const [service, setService] = useState("courier");
  const [regional, setRegional] = useState(false);
  const kg = Math.max(Number(weight) || 0, 0);
  const base = service === "cargo" ? 110 : 25;
  const perKg = service === "cargo" ? 7 : 11;
  const total = base + kg * perKg + (regional ? 15 : 0);
  const min = Math.max(0, total - 20);
  const max = total + 30;

  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-[22px] border border-[var(--line)] max-[760px]:grid-cols-1">
      <div className="grid content-start gap-4 p-7">
        <label>Shipment type
          <select value={service} onChange={(event) => setService(event.target.value)} className="mt-2">
            <option value="courier">Courier parcel</option>
            <option value="cargo">Commercial cargo</option>
          </select>
        </label>
        <label>Approximate weight (kg)
          <input type="number" min="0.1" step="0.1" value={weight} onChange={(event) => setWeight(event.target.value)} className="mt-2" />
        </label>
        <label className="flex items-center gap-3 font-medium">
          <input type="checkbox" checked={regional} onChange={(event) => setRegional(event.target.checked)} className="h-auto w-auto" />
          Regional or remote delivery
        </label>
      </div>
      <div className="flex flex-col bg-[var(--jet)] p-7 text-[#f1e7e8]">
        <span className="text-[0.9rem] text-[#c9b8ba]">Indicative range</span>
        <strong className="my-3 font-display text-[clamp(2rem,4vw,2.8rem)]">A${min.toFixed(0)}–A${max.toFixed(0)}</strong>
        <p className="mt-auto text-[0.8rem] text-[#b9a5a7]">Sample estimate only. Duties, GST and customs charges are separate and may apply. A written quote is required for booking.</p>
      </div>
    </div>
  );
}
