"use client";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.getElementById("app")?.focus({ preventScroll: true });
      }}
      className="cursor-pointer rounded-full border-[1.5px] border-[#4a3536] bg-transparent px-4 py-2 text-[0.85rem] font-semibold text-white"
    >
      Back to top
    </button>
  );
}