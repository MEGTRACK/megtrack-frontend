import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/lib/data/services";

export function ServicesBento() {
  const [featured, ...rest] = services;
  const FeaturedIcon = featured.icon;

  return (
    <Section tone="mist">
      <SectionHeader
        kicker="Services"
        title="Everything from parcel to pallet."
        lead="Pick the lane that fits — we cover courier, cargo, clearance, storage and delivery."
        action={<Link href="/services" className="text-[var(--red-deep)] font-bold underline-offset-4 hover:underline">All services →</Link>}
      />
      <div className="grid grid-cols-[1.25fr_1fr_1fr] auto-rows-[minmax(250px,auto)] gap-[18px] max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1">
        <Link
          href={`/services/${featured.slug}`}
          className="group relative row-span-2 flex flex-col overflow-hidden rounded-[22px] border border-[var(--jet)] bg-[var(--jet)] p-7 text-white transition hover:-translate-y-[3px] hover:shadow-[0_24px_50px_-30px_rgba(209,41,59,.6)] max-[1000px]:col-span-2 max-[1000px]:row-auto max-[1000px]:min-h-[340px] max-[640px]:col-span-1"
        >
          <div className="mb-5 grid h-[54px] w-[54px] place-items-center rounded-2xl bg-[rgba(242,167,174,.14)] text-[var(--pink)]">
            <FeaturedIcon className="h-7 w-7" />
          </div>
          <h3 className="font-display text-[2rem] font-bold [font-stretch:104%]">{featured.title}</h3>
          <p className="mt-2 text-[#c9b8ba]">{featured.description}</p>
          {featured.tags && (
            <div className="mb-5 mt-1 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-2.5 py-1 text-[0.78rem] text-[#e9dfe0]">{t}</span>
              ))}
            </div>
          )}
          <span className="mt-auto inline-flex items-center gap-2 font-bold text-[var(--pink)]">
            Learn more <ArrowRight className="h-[18px] w-[18px] transition group-hover:translate-x-1" />
          </span>
          <Plane className="absolute -right-8 bottom-16 h-[300px] w-[300px] rotate-[-4deg] text-white opacity-[0.06] max-[640px]:h-[220px] max-[640px]:w-[220px]" />
        </Link>

        {rest.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-[22px] border border-[var(--line)] bg-white p-7 transition hover:-translate-y-[3px] hover:border-[var(--red)] hover:shadow-[0_24px_50px_-30px_rgba(209,41,59,.6)]"
            >
              <div className="mb-5 grid h-[54px] w-[54px] place-items-center rounded-2xl bg-[#fbe9eb] text-[var(--red)] transition group-hover:-rotate-12">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-[1.4rem] font-bold [font-stretch:104%]">{s.title}</h3>
              <p className="mt-2 text-[0.96rem] text-[var(--muted)]">{s.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 font-bold text-[var(--red-deep)]">
                Learn more <ArrowRight className="h-[18px] w-[18px] transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}