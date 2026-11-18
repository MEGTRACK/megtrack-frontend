import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ProhibitedChecker } from "@/components/tools/ProhibitedChecker";
import { QuoteBand } from "@/components/home/QuoteBand";

export default function ProhibitedItemsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Prohibited items" }]} title="Can I send it to Australia?" lead="Search any item you plan to send from India. General guidance only: the Australian Border Force and DAFF make the final decision." />
      <Section>
        <div className="mx-auto max-w-[860px]">
          <ProhibitedChecker />
          <p className="mt-5 text-[var(--muted)]">Not sure? <Link href="/contact" className="font-bold text-[var(--red-deep)]">Ask us before you send it.</Link></p>
        </div>
      </Section>
      <QuoteBand />
    </>
  );
}