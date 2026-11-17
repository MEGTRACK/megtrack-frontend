import { Truck, ShieldCheck, Clock, Package } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cards = [
  { icon: Truck, title: "Single accountable team", body: "One point of contact from pickup to delivery — no hand-offs between brokers." },
  { icon: ShieldCheck, title: "Clearance done right", body: "Licensed customs brokers coordinate ABF and biosecurity on arrival." },
  { icon: Clock, title: "Realistic timelines", body: "We quote lane times based on experience, not optimistic guesses." },
  { icon: Package, title: "Care at handover", body: "Consolidation, repacking and inspection-ready cartons where needed." },
];

export function WhyUs() {
  return (
    <Section tone="dark">
      <div className="grid grid-cols-[.85fr_1.15fr] items-start gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-7">
        <div className="sticky top-[110px] max-[900px]:static">
          <SectionHeader kicker="Why us" title="Reliable by design." dark />
        </div>
        <div className="grid gap-[14px]">
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="grid grid-cols-[64px_1fr] gap-5 rounded-[18px] border border-[var(--line)] border-l-4 border-l-[var(--line)] bg-white p-6 text-[var(--jet)] transition hover:border-l-[var(--red)] max-[900px]:grid-cols-1">
              <div className="grid h-16 w-16 place-items-center rounded-[18px] bg-[var(--jet)] text-[var(--pink)]">
                <Icon className="h-[30px] w-[30px]" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-[1.25rem] font-bold">{title}</h3>
                <p className="m-0 text-[var(--muted)]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}