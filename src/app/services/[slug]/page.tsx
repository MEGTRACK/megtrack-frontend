import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { Section } from "@/components/ui/Section";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <Section className="pt-[140px]">
      <h1 className="font-display text-[clamp(2.1rem,4.4vw,3.6rem)] font-extrabold">{service.title}</h1>
      <p className="mt-4 text-lg text-[var(--muted)]">{service.description}</p>
    </Section>
  );
}