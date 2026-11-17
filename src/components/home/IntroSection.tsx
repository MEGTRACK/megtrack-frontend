import { Truck, ShieldCheck, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const facts = [
  { icon: Truck, title: "One partner, end-to-end", body: "Pickup to delivery handled by a single team." },
  { icon: ShieldCheck, title: "Clearance coordinated", body: "ABF, biosecurity and duty handled on arrival." },
  { icon: MapPin, title: "Every AU state", body: "Metro, regional and remote delivery available." },
];

export function IntroSection() {
  return (
    <Section>
      <div className="grid grid-cols-[.8fr_1.6fr] items-start gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-5">
        <SectionHeader kicker="Why MEGTRACK" title={<>Built for the India–Australia lane.</>} />
        <div>
          <p className="mb-7 max-w-none font-display text-[clamp(1.35rem,2.3vw,1.9rem)] font-semibold leading-[1.35] [font-stretch:102%]">
            We coordinate every step from an Indian doorstep to an Australian one — pickup, export documentation,
            air or sea freight, customs, and final-mile delivery.
          </p>
          <div className="grid grid-cols-3 gap-[14px] max-[900px]:grid-cols-1">
            {facts.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t-2 border-[var(--jet)] pt-[14px]">
                <Icon className="mb-2.5 h-[26px] w-[26px] text-[var(--red)]" />
                <b className="block font-display text-[1.08rem]">{title}</b>
                <span className="text-[0.92rem] text-[var(--muted)]">{body}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}