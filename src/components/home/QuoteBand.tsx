import { MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function QuoteBand() {
  return (
    <Section className="grad-red !text-white">
      <div className="grid grid-cols-2 items-center gap-12 max-[900px]:grid-cols-1">
        <div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold italic [font-stretch:118%]">
            Ready to get it moving?
          </h2>
          <p className="mt-3 max-w-[52ch] text-[#f6dadc]">
            Send us your pickup city, delivery suburb and what you&apos;re sending. We&apos;ll get back within{" "}
            one business day with a real answer.
          </p>
        </div>
        <form className="grid gap-[14px] rounded-[22px] bg-white p-[26px] text-[var(--jet)] shadow-[0_40px_80px_-40px_rgba(0,0,0,.6)]">
          <div className="flex items-center gap-3 rounded-xl bg-[var(--mist)] px-[14px] py-3 font-semibold">
            <MapPin className="h-[18px] w-[18px] text-[var(--red)]" />
            Anywhere in India → Anywhere in Australia
          </div>
          <input placeholder="Your name" className="rounded-xl border-[1.5px] border-[var(--line)] px-[14px] py-3" />
          <input placeholder="Email" type="email" className="rounded-xl border-[1.5px] border-[var(--line)] px-[14px] py-3" />
          <input placeholder="What are you sending?" className="rounded-xl border-[1.5px] border-[var(--line)] px-[14px] py-3" />
          <Button variant="red" type="submit">Get my quote</Button>
        </form>
      </div>
    </Section>
  );
}