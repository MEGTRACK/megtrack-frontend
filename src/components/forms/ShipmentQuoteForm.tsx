"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/data/services";
import { AU_STATES, SHIPMENT_TYPES, RESPONSE_TIME } from "@/lib/data/quote";

type Initial = { service?: string; type?: string; kg?: string; state?: string };

const WHO = [
  "A courier or forwarder",
  "A business or seller",
  "Sending personally",
];
const TYPES = SHIPMENT_TYPES as readonly string[];
const DEFAULT_SVC = [
  "courier-import-handling",
  "customs-clearance",
  "last-mile-delivery",
];
const STEPS = ["Service", "Shipment", "Contact"];

export function ShipmentQuoteForm({ initial = {} }: { initial?: Initial }) {
  const typePre = initial.type ?? "";
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState<null | { name: string }>(null);
  const [tried, setTried] = useState(false);

  const [who, setWho] = useState(
    WHO[typePre === "Personal parcel" || typePre === "Gift" ? 2 : 1],
  );
  const [svc, setSvc] = useState<string[]>(
    initial.service ? [initial.service] : DEFAULT_SVC,
  );
  const [from, setFrom] = useState("");
  const [state, setState] = useState(initial.state ?? "");
  const [to, setTo] = useState("");
  const [type, setType] = useState<string>(
    TYPES.includes(typePre) ? typePre : TYPES[0],
  );
  const [kg, setKg] = useState(initial.kg ?? "");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ok, setOk] = useState(false);

  const bad = {
    svc: svc.length === 0,
    from: !from.trim(),
    state: !state,
    to: !to.trim(),
    kg: !(parseFloat(kg) > 0),
    name: !name.trim(),
    email: !/^\S+@\S+\.\S+$/.test(email),
    ok: !ok,
  };
  const stepBad =
    step === 1
      ? bad.svc
      : step === 2
        ? bad.from || bad.state || bad.to || bad.kg
        : bad.name || bad.email || bad.ok;
  const show = (k: keyof typeof bad) =>
    tried &&
    step === (k === "svc" ? 1 : ["name", "email", "ok"].includes(k) ? 3 : 2) &&
    bad[k];

  const next = () => {
    if (stepBad) return setTried(true);
    setTried(false);
    if (step < 3) return setStep(step + 1);
    // TODO: send to your backend / CRM here
    setSent({ name });
  };

  if (sent) {
    return (
      <div className="card">
        <div className="ok-box">
          <h3>Quote request sent</h3>
          <p style={{ margin: 0 }}>
            Thanks, {sent.name}. We&apos;ll reply within {RESPONSE_TIME} with
            your written quote for {type.toLowerCase()} from {from}, India to{" "}
            {to}, {state}.
          </p>
        </div>
      </div>
    );
  }

  const inv = (b: boolean) => (b ? "invalid" : undefined);

  return (
    <form
      className="card"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
    >
      <div className="steps-bar" aria-hidden="true">
        {STEPS.map((s, k) => (
          <div key={s} className={k < step ? "on" : undefined}>
            <i />
            <span>{s}</span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="fs">
          <div>
            <label>I am</label>
            <div className="choice">
              {WHO.map((x) => (
                <label key={x}>
                  <input
                    type="radio"
                    name="who"
                    checked={who === x}
                    onChange={() => setWho(x)}
                  />{" "}
                  {x}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label>Services needed</label>
            <div className="choice">
              {services.map((s) => (
                <label key={s.slug}>
                  <input
                    type="checkbox"
                    checked={svc.includes(s.slug)}
                    onChange={(e) =>
                      setSvc(
                        e.target.checked
                          ? [...svc, s.slug]
                          : svc.filter((v) => v !== s.slug),
                      )
                    }
                  />{" "}
                  {s.title}
                </label>
              ))}
            </div>
            {show("svc") && (
              <p className="err" style={{ display: "block" }}>
                Choose at least one service.
              </p>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="fs">
          <div className="f2">
            <div>
              <label htmlFor="qCountry">Shipping from</label>
              <select id="qCountry" defaultValue="India">
                <option>India</option>
              </select>
            </div>
            <div>
              <label htmlFor="qFrom">Pickup city, state</label>
              <input
                id="qFrom"
                className={inv(show("from"))}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="e.g. Jaipur, Rajasthan"
              />
              {show("from") && (
                <p className="err" style={{ display: "block" }}>
                  Enter the pickup city in India.
                </p>
              )}
            </div>
          </div>
          <div className="f2">
            <div>
              <label htmlFor="qState">Delivering to</label>
              <select
                id="qState"
                className={inv(show("state"))}
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select state or territory</option>
                {AU_STATES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              {show("state") && (
                <p className="err" style={{ display: "block" }}>
                  Choose a state or territory.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="qTo">Suburb or city</label>
              <input
                id="qTo"
                className={inv(show("to"))}
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="e.g. Parramatta"
              />
              {show("to") && (
                <p className="err" style={{ display: "block" }}>
                  Enter the delivery suburb.
                </p>
              )}
            </div>
          </div>
          <div className="f2">
            <div>
              <label htmlFor="qType">What are you sending?</label>
              <select
                id="qType"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="qKg">
                Approx. weight <span className="hint">(kg)</span>
              </label>
              <input
                id="qKg"
                type="number"
                min="0.1"
                step="0.1"
                className={inv(show("kg"))}
                value={kg}
                onChange={(e) => setKg(e.target.value)}
              />
              {show("kg") && (
                <p className="err" style={{ display: "block" }}>
                  Enter an approximate weight.
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="qNotes">
              Anything else <span className="hint">(optional)</span>
            </label>
            <textarea
              id="qNotes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contents, number of boxes, deadlines"
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="fs">
          <div className="f2">
            <div>
              <label htmlFor="qName">Name</label>
              <input
                id="qName"
                autoComplete="name"
                className={inv(show("name"))}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {show("name") && (
                <p className="err" style={{ display: "block" }}>
                  Enter your name.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="qCo">
                Company <span className="hint">(optional)</span>
              </label>
              <input
                id="qCo"
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className="f2">
            <div>
              <label htmlFor="qEmail">Email</label>
              <input
                id="qEmail"
                type="email"
                autoComplete="email"
                className={inv(show("email"))}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {show("email") && (
                <p className="err" style={{ display: "block" }}>
                  Enter a valid email.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="qPhone">
                Phone or WhatsApp <span className="hint">(optional)</span>
              </label>
              <input
                id="qPhone"
                type="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <label className="check">
            <input
              type="checkbox"
              checked={ok}
              onChange={(e) => setOk(e.target.checked)}
            />
            <span>
              MEGTRACK may contact me about this quote.{" "}
              <Link href="/privacy">Privacy policy</Link>
            </span>
          </label>
          {show("ok") && (
            <p className="err" style={{ display: "block" }}>
              Please agree so we can reply.
            </p>
          )}
        </div>
      )}

      <div className="fnav">
        {step > 1 && (
          <button
            type="button"
            className="btn btn-line"
            onClick={() => {
              setTried(false);
              setStep(step - 1);
            }}
          >
            Back
          </button>
        )}
        <button
          type="submit"
          className="btn btn-red"
          style={{ marginLeft: "auto" }}
        >
          {step === 3 ? "Send quote request" : "Continue"}
        </button>
      </div>
    </form>
  );
}
