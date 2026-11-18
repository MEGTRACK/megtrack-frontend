"use client";

import { useState } from "react";

const items = [
  ["Fresh fruit and vegetables", "Not allowed", "Not allowed in parcels. Biosecurity risk."],
  ["Seeds, raw nuts, live plants", "Restricted", "Generally not allowed without an import permit."],
  ["Meat and meat products", "Not allowed", "Most meat products are not allowed."],
  ["Dairy products, ghee, paneer", "Restricted", "Many dairy products need a permit or are refused."],
  ["Sweets (mithai)", "Restricted", "Commercially packaged items have a better chance than homemade sweets."],
  ["Spices and masala", "Usually allowed", "Usually allowed if commercially packaged and labelled."],
  ["Rice, lentils, flour", "Restricted", "Must be declared and may be inspected."],
  ["Prescription medicines", "Restricted", "Personal quantities only, with a prescription."],
  ["Clothing, textiles, shoes", "Usually allowed", "Generally fine. Shoes must be clean of soil."],
  ["Jewellery", "Restricted", "Declare the true value. Duty and GST may apply above AUD 1,000."],
  ["Lithium batteries", "Restricted", "Carrier rules apply. Tell us before booking."],
  ["Weapons, knives, imitation firearms", "Not allowed", "Prohibited or require a permit."],
] as const;

export function ProhibitedChecker() {
  const [query, setQuery] = useState("");
  const matches = items.filter(([name]) => name.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <div>
      <label htmlFor="item-search">Search an item</label>
      <input id="item-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try spices, medicines or sweets" />
      {query && (
        <ul className="mt-4 grid list-none gap-2 p-0">
          {matches.length ? matches.map(([name, status, detail]) => (
            <li key={name} className="grid gap-1 rounded-xl border border-[var(--line)] p-4">
              <div className="flex justify-between gap-3"><b>{name}</b><span className="text-[0.78rem] font-bold">{status}</span></div>
              <span className="text-[0.88rem] text-[var(--muted)]">{detail}</span>
            </li>
          )) : <li className="rounded-xl border border-dashed border-[var(--line)] p-5 text-[var(--muted)]">No match. Ask us before sending it.</li>}
        </ul>
      )}
    </div>
  );
}
