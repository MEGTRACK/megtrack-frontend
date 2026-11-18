import type { ReactNode } from "react";

export function Faq({ items }: { items: { q: string; a: ReactNode; text: string }[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.text },
    })),
  };
  return (
    <>
      <div className="faq">
        {items.map((i) => (
          <details key={i.q} className="group open:border-[var(--line)] open:bg-white">
            <summary className="flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden after:h-3 after:w-3 after:flex-none after:rotate-45 after:border-b-2 after:border-r-2 after:border-[var(--red)] after:transition-transform after:content-[''] group-open:after:rotate-[225deg]">
              {i.q}
            </summary>
            <p className="mb-[18px] mt-0 text-[var(--muted)]">{i.a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}