"use client";

import { useRef, useState } from "react";

export function TrackForm({ initial = "" }: { initial?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initial);
  const [bad, setBad] = useState(false);
  const [searched, setSearched] = useState(initial.trim());

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = value.trim();
    if (!v) {
      setBad(true);
      setSearched("");
      inputRef.current?.focus();
      return;
    }
    setBad(false);
    setSearched(v);
  }

  return (
    <form className="card" noValidate onSubmit={onSubmit}>
      <label htmlFor="tn">Tracking number</label>
      <div style={{ display: "flex", gap: 10 }}>
        <input
          id="tn"
          ref={inputRef}
          required
          autoComplete="off"
          value={value}
          className={bad ? "invalid" : undefined}
          aria-invalid={bad}
          onChange={(e) => {
            setValue(e.target.value);
            if (bad) setBad(false);
          }}
        />
        <button className="btn btn-red" type="submit">
          Track
        </button>
      </div>
      {bad && (
        <p className="err" style={{ display: "block" }}>
          Enter a tracking number.
        </p>
      )}

      <div style={{ marginTop: 20 }} aria-live="polite">
        {searched && (
          <div className="ok-box">
            <h3>Live tracking connects at launch</h3>
            <p style={{ margin: 0 }}>
              This preview isn&apos;t linked to MEGTRACK&apos;s systems yet.
              Reference {searched} will show each milestone here: picked up in
              India, departed, landed, cleared, delivered.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
