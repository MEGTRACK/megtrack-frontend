"use client";

import Link from "next/link";
import { useState } from "react";

type Kind = "no" | "limit" | "ok";
const ITEMS: [string, Kind, string][] = [
  [
    "Fresh fruit and vegetables",
    "no",
    "Not allowed in parcels. Biosecurity risk.",
  ],
  [
    "Seeds, raw nuts, live plants",
    "no",
    "Generally not allowed without an import permit.",
  ],
  ["Soil, sand, plant material", "no", "Not allowed."],
  [
    "Meat and meat products",
    "no",
    "Most meat products are not allowed, including dried and homemade.",
  ],
  [
    "Dairy products, ghee, paneer",
    "limit",
    "Restricted. Many dairy products need a permit or are refused.",
  ],
  [
    "Sweets (mithai) containing dairy or eggs",
    "limit",
    "Restricted. Commercially packaged, labelled items have a better chance; homemade sweets are often refused.",
  ],
  ["Eggs and egg products", "limit", "Restricted. Declare; may be refused."],
  [
    "Spices and masala",
    "limit",
    "Usually allowed if commercially packaged and labelled. Must be declared.",
  ],
  ["Rice, lentils, flour", "limit", "Must be declared and may be inspected."],
  ["Tea and coffee", "ok", "Usually allowed if commercially packaged."],
  [
    "Ayurvedic and herbal medicines",
    "limit",
    "May be restricted by the TGA or biosecurity. Declare all medicines.",
  ],
  [
    "Prescription medicines",
    "limit",
    "Personal quantities only, with a prescription. Some are prohibited.",
  ],
  [
    "Wooden handicrafts, cane, bamboo",
    "limit",
    "May be inspected for insects and bark. Must be clean.",
  ],
  [
    "Clothing, textiles, shoes",
    "ok",
    "Generally fine. Shoes must be clean of soil.",
  ],
  ["Books, documents, photos", "ok", "Generally fine."],
  [
    "Jewellery",
    "limit",
    "Allowed, but declare the true value. Duty and GST may apply above AUD 1,000.",
  ],
  [
    "Electronics with lithium batteries",
    "limit",
    "Carrier rules apply to batteries. Tell us before booking.",
  ],
  ["Weapons, knives, imitation firearms", "no", "Prohibited or need a permit."],
  ["Illegal drugs, counterfeit goods", "no", "Prohibited."],
  [
    "Alcohol and tobacco",
    "limit",
    "Duty and taxes apply at any value. Limits and permits apply.",
  ],
  ["Cash and currency", "limit", "Do not send cash in parcels."],
];
const LABEL: Record<Kind, [string, string]> = {
  no: ["Not allowed", "bg-[#FCE4E6] text-[#8A1724]"],
  limit: ["Declare, may be restricted", "bg-[#FFF1C2] text-[#5B4300]"],
  ok: ["Usually fine", "bg-[#DDF1E6] text-[#145C3A]"],
};

export function Checker({ full = false }: { full?: boolean }) {
  const [q, setQ] = useState("");
  const s = q.trim().toLowerCase();
  const list = ITEMS.filter(
    ([n, , d]) => !s || `${n} ${d}`.toLowerCase().includes(s),
  );
  const show = s || full ? list : list.slice(0, 4);

  return (
    <div className="card">
      <h3 className="mb-1 text-[1.35rem]">Can I send it from India?</h3>
      <p className="text-[0.92rem] text-[var(--muted)]">
        Search an item. General guidance only; the ABF and DAFF make the final
        decision.
      </p>
      <label htmlFor="pq">Item</label>
      <input
        id="pq"
        type="search"
        placeholder="e.g. ghee, spices, mithai, shoes"
        autoComplete="off"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <ul className="m-0 mt-4 grid list-none gap-2 p-0" aria-live="polite">
        {show.length ? (
          show.map(([n, k, d]) => (
            <li
              key={n}
              className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 rounded-xl border border-[var(--line)] px-3.5 py-3"
            >
              <b>{n}</b>
              <span
                className={`self-start whitespace-nowrap rounded-full px-[9px] py-[3px] text-xs font-bold ${LABEL[k][1]}`}
              >
                {LABEL[k][0]}
              </span>
              <span className="col-span-full text-[0.88rem] text-[var(--muted)]">
                {d}
              </span>
            </li>
          ))
        ) : (
          <li className="grid gap-1 rounded-xl border border-[var(--line)] px-3.5 py-3">
            <b>No match for &quot;{q}&quot;</b>
            <span className="text-[0.88rem] text-[var(--muted)]">
              Ask us before you send it.{" "}
              <Link href="/contact" className="underline">
                Contact us
              </Link>
            </span>
          </li>
        )}
      </ul>
      {!full && (
        <p className="mb-0 mt-3.5">
          <Link href="/prohibited" className="font-bold text-[var(--red-deep)]">
            See the full list
          </Link>
        </p>
      )}
    </div>
  );
}
