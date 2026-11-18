"use client";

import { useState, type FormEvent } from "react";

export function ShipmentQuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [who, setWho] = useState("A business or seller");
  const [services, setServices] = useState<string[]>(["courier-import-handling", "customs-clearance", "last-mile-delivery"]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  }
  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#b7dec7] bg-[#e3f4eb] p-7 text-[#0f4a2e]">
        <h3 className="font-display text-xl">Quote request received</h3>
        <p className="m-0">Our team will reply within 1 business day.</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="card">
      <div className="steps-bar" aria-hidden="true">
        {[["Service"], ["Shipment"], ["Contact"]].map(([label], index) => <div key={label} className={index < step ? "on" : ""}><i /><span>{label}</span></div>)}
      </div>
      {step === 1 && (
      <div className="grid gap-4">
        <div><label>I am</label><div className="choice">{["A courier or forwarder","A business or seller","Sending personally"].map((item) => <label key={item}><input type="radio" name="who" value={item} checked={who === item} onChange={() => setWho(item)} />{item}</label>)}</div></div>
        <div><label>Services needed</label><div className="choice">{[
          ["courier-import-handling","Courier Import Handling"],
          ["cargo-import-handling","Cargo Import Handling"],
          ["customs-clearance","Customs Clearance"],
          ["warehousing","Warehousing & Storage"],
          ["last-mile-delivery","Last-Mile Delivery"],
        ].map(([slug,label]) => <label key={slug}><input type="checkbox" checked={services.includes(slug)} onChange={() => setServices((current) => current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug])} />{label}</label>)}</div></div>
      </div>
      )}
      {step === 2 && (
      <div className="fs">
        <div className="f2"><div><label>Shipping from<select name="country"><option>India</option></select></label></div><div><label>Pickup city, state<input name="from" required placeholder="e.g. Jaipur, Rajasthan" /></label></div></div>
        <div className="f2"><div><label>Delivering to<select name="state" required><option value="">Select state or territory</option>{["New South Wales","Victoria","Queensland","Western Australia","South Australia","Tasmania","Australian Capital Territory","Northern Territory"].map((state) => <option key={state}>{state}</option>)}</select></label></div><div><label>Suburb or city<input name="to" required placeholder="e.g. Parramatta" /></label></div></div>
        <div className="f2"><div><label>What are you sending?<select name="type"><option>Personal parcel</option><option>Gift</option><option>Documents</option><option>Commercial goods</option><option>E-commerce orders</option><option>Larger cargo</option></select></label></div><div><label>Approx. weight (kg)<input name="weight" type="number" min="0.1" step="0.1" required /></label></div></div>
        <label>Anything else (optional)<textarea name="notes" rows={3} placeholder="Contents, number of boxes, deadlines" /></label>
      </div>
      )}
      {step === 3 && (
      <div className="fs">
        <div className="f2"><label>Name<input name="name" required /></label><label>Company (optional)<input name="company" /></label></div>
        <div className="f2"><label>Email<input name="email" type="email" required /></label><label>Phone or WhatsApp (optional)<input name="phone" type="tel" /></label></div>
        <label className="check"><input type="checkbox" required /><span>MEGTRACK may contact me about this quote.</span></label>
      </div>
      )}
      <div className="fnav">
        {step > 1 && <button type="button" className="btn btn-line" onClick={() => setStep(step - 1)}>Back</button>}
        <button type="submit" className="btn btn-red" style={{ marginLeft: "auto" }}>{step === 3 ? "Send quote request" : "Continue"}</button>
      </div>
    </form>
  );
}
