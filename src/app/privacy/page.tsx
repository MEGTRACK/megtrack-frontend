import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export default function PrivacyPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Privacy and terms" }]} title="Privacy, terms and accessibility" />
      <Section containerClassName="max-w-[780px]">
        <p className="rounded bg-[#fff1c2] px-1 text-[0.86rem] text-[#5b4300]">MEGTRACK&apos;s privacy policy under the Australian Privacy Principles (Privacy Act 1988), booking terms and accessibility statement go here. Legal review required.</p>
      </Section>
    </>
  );
}
