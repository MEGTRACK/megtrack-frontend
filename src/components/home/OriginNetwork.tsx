import { ArrowRight, MapPin, Plane } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const origins = ["Delhi", "Mumbai", "Bengaluru", "Chennai", "Hyderabad"];

export function OriginNetwork() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div className="grid grid-cols-[.9fr_1.1fr] items-center gap-14 max-[900px]:grid-cols-1">
        <div>
          <SectionHeader
            kicker="India origin network"
            title="From your doorstep to Australia."
            lead="Pickup can be arranged across India through our origin partners, then coordinated through to your Australian delivery address."
            dark
          />
          <ButtonLink href="/ship-from/india-to-australia" variant="light">
            Explore the India–Australia lane <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#211719] p-7 sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:30px_30px]"
          />
          <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div>
              <span className="mb-4 block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--pink)]">
                Pick up across India
              </span>
              <ul className="m-0 grid list-none gap-3 p-0">
                {origins.map((city) => (
                  <li key={city} className="flex items-center gap-2 text-[0.95rem]">
                    <MapPin className="h-4 w-4 shrink-0 text-[var(--pink)]" />
                    {city}
                  </li>
                ))}
                <li className="pl-6 text-[0.85rem] text-[#c9b8ba]">And more cities</li>
              </ul>
            </div>
            <div className="grid justify-items-center gap-2 text-[var(--pink)]">
              <span className="h-px w-9 bg-[var(--pink)]" />
              <Plane className="h-6 w-6" />
              <ArrowRight className="h-4 w-4" />
              <span className="h-px w-9 bg-[var(--pink)]" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
              <span className="mb-3 block text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--pink)]">
                Deliver across Australia
              </span>
              <p className="mb-2 font-display text-xl font-bold">One coordinated journey</p>
              <p className="m-0 text-[0.9rem] text-[#c9b8ba]">
                Freight, clearance coordination and final-mile delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}