"use client";

import { useState } from "react";
import Link from "next/link";

// SAMPLE rates; MEGTRACK to supply
const RATES = { base: 25, perKg: 11, regional: 15 };
const DIVISOR = 5000;
const THRESHOLD = 1000;
const aud = (n: number) =>
  n.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  });

export function Estimator() {
  const [dest, setDest] = useState("metro");
  const [kg, setKg] = useState(10);
  const [l, setL] = useState(50);
  const [w, setW] = useState(40);
  const [h, setH] = useState(30);
  const [val, setVal] = useState(300);

  const vol = (l * w * h) / DIVISOR;
  const cw = Math.ceil(Math.max(kg, vol) * 2) / 2;
  const p =
    RATES.base + RATES.perKg * cw + (dest === "regional" ? RATES.regional : 0);
  const over = val > THRESHOLD;
  const num =
    (set: (n: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) =>
      set(parseFloat(e.target.value) || 0);

  return (
    <div className="est">
      <form
        className="grid content-start gap-3.5 p-7"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <h3 className="mb-1 text-[1.35rem]">Rate estimate</h3>
          <p className="m-0 text-[0.92rem] text-[var(--muted)]">
            India to Australia. No contact details needed.
          </p>
        </div>
        <div className="f2">
          <div>
            <label htmlFor="eFrom">Shipping from</label>
            <select id="eFrom" defaultValue="india">
              <option value="india">India</option>
            </select>
          </div>
          <div>
            <label htmlFor="eDest">Delivering to</label>
            <select
              id="eDest"
              value={dest}
              onChange={(e) => setDest(e.target.value)}
            >
              <option value="metro">Capital city</option>
              <option value="regional">Regional area</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="eKg">
            Weight <span className="hint">(kg)</span>
          </label>
          <input
            id="eKg"
            type="number"
            min={0.5}
            step={0.5}
            inputMode="decimal"
            value={kg}
            onChange={num(setKg)}
          />
        </div>
        <div>
          <label>
            Box size <span className="hint">(cm, L × W × H)</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="number"
              min={1}
              aria-label="Length in cm"
              value={l}
              onChange={num(setL)}
            />
            <input
              type="number"
              min={1}
              aria-label="Width in cm"
              value={w}
              onChange={num(setW)}
            />
            <input
              type="number"
              min={1}
              aria-label="Height in cm"
              value={h}
              onChange={num(setH)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="eVal">
            Value of contents <span className="hint">(AUD)</span>
          </label>
          <input
            id="eVal"
            type="number"
            min={0}
            step={10}
            value={val}
            onChange={num(setVal)}
          />
        </div>
      </form>

      <div
        className="flex flex-col bg-[var(--jet)] p-7 text-[#f1e7e8]"
        aria-live="polite"
      >
        <span className="text-[#c9b8ba]">Estimated price</span>
        <div className="my-1.5 font-display text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-[1.05] [font-stretch:115%]">
          {cw > 0 ? `${aud(p * 0.92)} – ${aud(p * 1.08)}` : "—"}
        </div>
        <ul className="m-0 mt-[18px] grid list-none gap-2 p-0 text-[0.92rem]">
          <li className="flex justify-between gap-3 border-b border-[#3a2627] pb-2">
            <span>Chargeable weight</span>
            <b>
              {cw.toFixed(1)} kg{vol > kg ? " (by size)" : ""}
            </b>
          </li>
          <li className="flex justify-between gap-3 border-b border-[#3a2627] pb-2">
            <span>Clearance route</span>
            <b>
              {over ? "Full import declaration" : "Self-assessed clearance"}
            </b>
          </li>
        </ul>
        {over && (
          <div className="mt-3.5 rounded bg-[rgba(242,167,174,0.12)] px-3 py-2.5 text-[0.88rem] [border-left:3px_solid_var(--pink)]">
            Over AUD {THRESHOLD.toLocaleString()}: duty and GST are assessed
            before release. We&apos;ll include them in your quote.
          </div>
        )}
        <div className="mt-5">
          <Link href={`/quote?kg=${cw}`} className="btn btn-red w-full">
            Get a firm quote
          </Link>
        </div>
        <p className="mt-auto pt-[18px] text-[0.8rem] text-[#b9a5a7]">
          Sample rates for preview{" "}
          <span className="rounded-[3px] bg-[#FFF1C2] px-1 text-[0.86em] font-medium text-[#5B4300]">
            [MEGTRACK to supply]
          </span>
          . Chargeable weight is the greater of actual weight and L×W×H÷
          {DIVISOR}. Duty, GST and biosecurity charges are not included.
        </p>
      </div>
    </div>
  );
}
