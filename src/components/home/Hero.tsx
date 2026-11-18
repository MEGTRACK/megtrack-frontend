import { ShieldCheck, Clock, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { DeparturesBoard } from "./DeparturesBoard";

export function Hero() {
  return (
    <section className="hero">
      <div className="l">
          <div className="route">
            INDIA <i className="block h-[2px] w-[70px] bg-[repeating-linear-gradient(90deg,var(--pink)_0_6px,transparent_6px_11px)]" /> AUSTRALIA
          </div>
          <h1 className="mb-[0.35em] max-w-[17ch] font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold italic leading-[1.06] tracking-[-0.01em] [font-stretch:118%]">
            From any PIN code in India to any doorstep in Australia.
          </h1>
          <p className="sub">
            MEGTRACK collects across India through our partners, coordinates customs clearance when your shipment lands,
            and delivers Australia-wide. One team, one timeline you can follow.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/quote" variant="red">Request a quote</ButtonLink>
            <ButtonLink href="/services" variant="ghost">Explore our services</ButtonLink>
          </div>
          <div className="assure">
            <span><ShieldCheck /> Clearance coordinated</span>
            <span><Clock /> Tracking shared</span>
            <span><MapPin /> Every state and territory</span>
          </div>
        </div>
        <div className="r">
          <DeparturesBoard />
        </div>
    </section>
  );
}