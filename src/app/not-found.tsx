import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="pt-[140px]">
      <p className="font-semibold uppercase tracking-wide text-[var(--red)]">404</p>
      <h1 className="mt-2 font-display text-[clamp(2rem,4vw,3.4rem)] font-extrabold">
        Page not found
      </h1>
      <p className="mt-4 max-w-[60ch] text-lg text-[var(--muted)]">
        That page may have moved or is no longer available.
      </p>
      <ButtonLink href="/" className="mt-6">
        Return home
      </ButtonLink>
    </Section>
  );
}