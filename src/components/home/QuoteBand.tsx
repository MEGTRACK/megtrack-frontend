"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

const AU_STATES = [
  "New South Wales",
  "Victoria",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "Australian Capital Territory",
  "Northern Territory",
];

const TYPES = [
  "Personal parcel",
  "Gift",
  "Commercial goods",
  "E-commerce orders",
  "Larger cargo",
];

const RESPONSE_TIME = "1 business day";

export function QuoteBand() {
  const router = useRouter();
  const stateRef = useRef<HTMLSelectElement>(null);
  const kgRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState("");
  const [kg, setKg] = useState("");
  const [type, setType] = useState(TYPES[0]);
  const [badState, setBadState] = useState(false);
  const [badKg, setBadKg] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const stateBad = !state;
    const kgBad = !(parseFloat(kg) > 0);
    setBadState(stateBad);
    setBadKg(kgBad);
    if (stateBad) return stateRef.current?.focus();
    if (kgBad) return kgRef.current?.focus();
    router.push(
      `/quote?state=${encodeURIComponent(state)}&kg=${encodeURIComponent(kg)}&type=${encodeURIComponent(type)}`,
    );
  }

  return (
    <section className="qband pad tilt" aria-labelledby="qb-h">
      <div className="wrap in">
        <div>
          <span className="kicker" style={{ color: "#F6DADC" }}>
            Request a quote
          </span>
          <h2 id="qb-h">Ready to ship from India?</h2>
          <p className="lead" style={{ color: "#F6DADC" }}>
            Tell us where it&apos;s going and roughly how much it weighs.
            We&apos;ll reply within {RESPONSE_TIME} with a written quote.
          </p>
          <p style={{ margin: 0 }}>
            Prefer to chat?{" "}
            <a
              href={
                siteConfig.whatsapp
                  ? `https://wa.me/${siteConfig.whatsapp}`
                  : "/contact"
              }
              target={siteConfig.whatsapp ? "_blank" : undefined}
              rel={siteConfig.whatsapp ? "noopener" : undefined}
              style={{ color: "#fff", fontWeight: 700 }}
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>

        <form className="qform" onSubmit={onSubmit} noValidate>
          <div className="from">
            <MapPin aria-hidden="true" />
            <span>
              Shipping from <b>India</b>
            </span>
          </div>

          <div className="f2">
            <div>
              <label htmlFor="qbState">Delivering to</label>
              <select
                id="qbState"
                ref={stateRef}
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  setBadState(false);
                }}
                className={badState ? "invalid" : ""}
                required
              >
                <option value="">Select state or territory</option>
                {AU_STATES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <p className="err">Choose a state or territory.</p>
            </div>
            <div>
              <label htmlFor="qbKg">
                Approx. weight <span className="hint">(kg)</span>
              </label>
              <input
                id="qbKg"
                ref={kgRef}
                type="number"
                min="0.1"
                step="0.1"
                inputMode="decimal"
                value={kg}
                onChange={(e) => {
                  setKg(e.target.value);
                  setBadKg(false);
                }}
                className={badKg ? "invalid" : ""}
                required
              />
              <p className="err">Enter a weight.</p>
            </div>
          </div>

          <div>
            <label htmlFor="qbType">What are you sending?</label>
            <select
              id="qbType"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {TYPES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <Button variant="red" type="submit">
            Continue to quote <ArrowRight />
          </Button>
        </form>
      </div>
    </section>
  );
}
