import { Globe2, MapPin, Truck } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const facts = [
  { icon: MapPin, title: "India origin", body: "Pickup from any city or PIN code in India through our partners" },
  { icon: Globe2, title: "Australia-wide", body: "Delivery to every state and territory" },
  { icon: Truck, title: "One team", body: "A single point of contact from landing to doorstep" },
];

export function IntroSection() {
  return (
    <Section>
      <div className="grid grid-cols-[.8fr_1.6fr] items-start gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-5">
        <SectionHeader
          kicker="Meet MEGTRACK"
          title="The Australian landing team for shipments from India"
        />
        <div>
          <p className="mb-7 max-w-none font-display text-[clamp(1.35rem,2.3vw,1.9rem)] font-semibold leading-[1.35] [font-stretch:102%]">
            Indian couriers and shippers hand their freight to us. We make sure everything that lands in Australia is
            cleared, stored if needed, and delivered, with clear answers at every step.
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