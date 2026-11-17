import { ShieldCheck, Clock, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { DeparturesBoard } from "./DeparturesBoard";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--jet)] text-white">
      <div className="grid min-h-[min(100svh,860px)] w-full grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] max-[1000px]:min-h-0 max-[1000px]:grid-cols-1">
        <div className="relative z-[2] flex flex-col justify-center bg-[var(--jet)] py-[clamp(112px,15vh,156px)] pl-[max(28px,calc((100vw-1240px)/2+28px))] pr-[clamp(28px,4vw,64px)] [clip-path:polygon(0_0,100%_0,calc(100%-7vw)_100%,0_100%)] max-[1000px]:py-[112px] max-[1000px]:pl-[22px] max-[1000px]:pr-[22px] max-[1000px]:[clip-path:none]">
          <div className="mb-[22px] inline-flex items-center gap-3 font-display text-[0.95rem] font-bold tracking-[0.02em] text-[var(--pink)] [font-stretch:118%]">
            IND → AUS <i className="block h-[2px] w-[70px] bg-[repeating-linear-gradient(90deg,var(--pink)_0_6px,transparent_6px_11px)]" />
          </div>
          <h1 className="mb-[0.35em] max-w-[17ch] font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold italic leading-[1.06] tracking-[-0.01em] [font-stretch:118%]">
            India to Australia, without the runaround.
          </h1>
          <p className="mb-[30px] max-w-[52ch] text-[#d9cacc]">
            Pickup anywhere in India through our partners, customs clearance coordinated on arrival,
            and delivery to every state in Australia.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink href="/quote" variant="red">Get a quote</ButtonLink>
            <ButtonLink href="/track" variant="ghost">Track a shipment</ButtonLink>
          </div>
          <div className="mt-[26px] flex flex-wrap gap-x-[22px] gap-y-3 text-[0.9rem] text-[#c9b8ba] max-[600px]:text-[0.84rem]">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-[18px] w-[18px] text-[var(--pink)]" /> ABF clearance coordination</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-[18px] w-[18px] text-[var(--pink)]" /> 5–10 business day courier</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-[18px] w-[18px] text-[var(--pink)]" /> Every AU state</span>
          </div>
        </div>
        <div className="grad-red relative flex items-center justify-center px-[clamp(24px,5vw,88px)] py-[96px] max-[1000px]:px-[22px] max-[1000px]:py-[64px] max-[1000px]:[clip-path:polygon(0_24px,100%_0,100%_100%,0_100%)]">
          <DeparturesBoard />
        </div>
      </div>
    </section>
  );
}