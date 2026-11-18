"use client";

import { useState } from "react";

const RESPONSE_TIME = "1 business day";

const REQUIRED: { id: string; kind?: "email" }[] = [
  { id: "pCo" },
  { id: "pName" },
  { id: "pEmail", kind: "email" },
];

export function PartnerForm() {
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const bad: Record<string, boolean> = {};
    let first: string | null = null;

    for (const { id, kind } of REQUIRED) {
      const el = form.elements.namedItem(id) as HTMLInputElement | null;
      const v = el?.value.trim() ?? "";
      const isBad = !v || (kind === "email" && !/^\S+@\S+\.\S+$/.test(v));
      if (isBad) {
        bad[id] = true;
        first ??= id;
      }
    }

    setInvalid(bad);
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setSent(true);
  }

  const clear = (id: string) =>
    setInvalid((p) => (p[id] ? { ...p, [id]: false } : p));

  if (sent) {
    return (
      <div className="card" style={{ position: "sticky", top: 104 }}>
        <div className="ok-box">
          <h3>Partner enquiry sent</h3>
          <p style={{ margin: 0 }}>
            Our partner team will contact you within {RESPONSE_TIME} to discuss
            pickup cities, volumes and integration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      className="card"
      onSubmit={onSubmit}
      noValidate
      style={{ position: "sticky", top: 104 }}
    >
      <h3>Become a partner</h3>
      <div className="fs">
        <div>
          <label htmlFor="pCo">Company</label>
          <input
            id="pCo"
            name="pCo"
            required
            className={invalid.pCo ? "invalid" : ""}
            onChange={() => clear("pCo")}
          />
          <p className="err">Enter your company name.</p>
        </div>

        <div className="f2">
          <div>
            <label htmlFor="pName">Your name</label>
            <input
              id="pName"
              name="pName"
              required
              className={invalid.pName ? "invalid" : ""}
              onChange={() => clear("pName")}
            />
            <p className="err">Enter your name.</p>
          </div>
          <div>
            <label htmlFor="pEmail">Work email</label>
            <input
              id="pEmail"
              name="pEmail"
              type="email"
              required
              className={invalid.pEmail ? "invalid" : ""}
              onChange={() => clear("pEmail")}
            />
            <p className="err">Enter a valid email.</p>
          </div>
        </div>

        <div className="f2">
          <div>
            <label htmlFor="pCountry">Origin country</label>
            <select id="pCountry" name="pCountry" defaultValue="India">
              <option>India</option>
            </select>
          </div>
          <div>
            <label htmlFor="pCities">Main pickup cities</label>
            <input
              id="pCities"
              name="pCities"
              placeholder="e.g. Delhi, Mumbai"
            />
          </div>
        </div>

        <div className="f2">
          <div>
            <label htmlFor="pVol">Monthly shipments</label>
            <select id="pVol" name="pVol">
              <option>Under 1,000</option>
              <option>1,000 – 10,000</option>
              <option>10,000 – 50,000</option>
              <option>Over 50,000</option>
            </select>
          </div>
          <div>
            <label htmlFor="pData">Data format</label>
            <select id="pData" name="pData">
              <option>Manifest file</option>
              <option>API</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>

        <button className="btn btn-red" type="submit">
          Send partner enquiry
        </button>
      </div>
    </form>
  );
}
