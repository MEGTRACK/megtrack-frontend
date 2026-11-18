"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function TrackPage() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  function track(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(`Live tracking connects at launch. Reference ${number.trim()} will show: picked up in India, departed, landed, cleared and delivered.`);
  }
  return (
    <>
      <PageHero crumbs={[{ label: "Track" }]} title="Track a shipment" lead="Enter the MEGTRACK or airway bill reference supplied for your shipment." />
      <Section>
        <div className="split">
          <form onSubmit={track} className="card">
            <label htmlFor="tn">Tracking number</label>
            <div className="mt-2 flex gap-2 max-[560px]:flex-col"><input id="tn" value={number} onChange={(event) => setNumber(event.target.value)} required placeholder="MEGTRACK or airway bill no." /><button type="submit" className="btn btn-red">Track</button></div>
            {result && <div className="ok-box mt-5"><h3>Live tracking preview</h3><p className="m-0">{result}</p></div>}
          </form>
          <aside><div className="qcard"><h3 className="text-white">Waiting for a parcel from India?</h3><p>See what happens when it lands and what you might need to do.</p><Link className="btn btn-red" href="/receiving">Receiving a parcel</Link></div></aside>
        </div>
      </Section>
    </>
  );
}