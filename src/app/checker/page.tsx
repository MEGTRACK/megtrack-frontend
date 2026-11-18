import { Checker } from "@/components/tools/Checker";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export default function CheckerPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Prohibited items" }]}
        title="Can I send it to Australia?"
        lead="Search any item you plan to send from India. General guidance only: the Australian Border Force and DAFF make the final decision."
        ctas={false}
      />
      <Section>
        <div className="mx-auto max-w-[860px]">
          <Checker full />
        </div>
      </Section>
    </>
  );
}
