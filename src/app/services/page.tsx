import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <Section className="pt-[140px]">
      <SectionHeader kicker="Services" title="Everything we handle." />
      <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-2xl border border-[var(--line)] bg-white p-6 hover:border-[var(--red)]">
            <h3 className="font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-[var(--muted)]">{s.shortDescription}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}