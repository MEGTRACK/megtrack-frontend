"use client";

import { useState } from "react";

export function PreviewNote() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <div
      role="note"
      className="fixed left-3 bottom-3 z-[200] max-w-[420px] rounded-[10px] border border-[#e8cf84] bg-[#fff1c2] px-[14px] py-[10px] pr-10 text-[0.82rem] leading-snug text-[#5b4300] shadow-[0_10px_30px_-12px_rgba(0,0,0,.35)] max-[760px]:bottom-[76px] max-[760px]:inset-x-[10px] max-[760px]:max-w-none"
    >
      Preview build. Items <span className="rounded bg-[#fff1c2] px-1 font-medium">highlighted</span> need
      MEGTRACK to confirm. Reviews are placeholders until genuine feedback is supplied. Forms, payments and
      tracking are not connected yet.
      <button
        type="button"
        aria-label="Hide note"
        onClick={() => setHidden(true)}
        className="absolute right-2 top-1.5 px-1 text-xl leading-none"
      >
        ×
      </button>
    </div>
  );
}