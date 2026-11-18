import { Estimator } from "@/components/tools/Estimator";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { QuoteBand } from "@/components/home/QuoteBand";

export default function EstimatePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Rate estimate" }]}
        title="Rate estimate, India to Australia"
        lead="A price range for your shipment in seconds. No contact details needed."
        ctas={false}
      />
      <Section>
        <Estimator />
      </Section>
      <QuoteBand />
    </>
  );
}
