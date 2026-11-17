import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function ComingSoonPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Section className="pt-[140px]">
      <h1 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold">
        {title}
      </h1>
      <p className="mt-4 max-w-[60ch] text-lg text-[var(--muted)]">{description}</p>
      <ButtonLink href="/contact" className="mt-6">
        Contact our team
      </ButtonLink>
    </Section>
  );
}
