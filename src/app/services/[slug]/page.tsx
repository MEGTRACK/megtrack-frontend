import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import { QuoteBand } from "@/components/home/QuoteBand";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return (
    <>
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        title={`${service.title} from India`}
        lead={service.description}
      />
      <Section>
        <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-14 max-[960px]:grid-cols-1">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3vw,2.5rem)]">What is included</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
              {service.included?.map((item) => (
                <div key={item.title} className="rounded-2xl bg-[var(--mist)] p-[18px]">
                  <h3 className="mb-1 font-display text-[1.02rem]">{item.title}</h3>
                  <p className="m-0 text-[0.92rem] text-[var(--muted)]">{item.body}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-12 font-display text-[clamp(1.9rem,3vw,2.5rem)]">What you can count on</h2>
            <ul className="mt-5 grid gap-3">
              {service.points?.map((point) => <li key={point} className="text-[var(--jet)]">{point}</li>)}
            </ul>
          </div>
          <aside className="h-fit sticky top-[104px] rounded-[22px] bg-[var(--jet)] p-7 text-white max-[960px]:static">
            <h3 className="font-display text-xl">Get a {service.title.toLowerCase()} quote</h3>
            <p className="text-[#c9b8ba]">Tell us what you are shipping from India. We reply within 1 business day with a written quote.</p>
            <Link href={`/quote?service=${service.slug}`} className="mt-4 flex rounded-full bg-[var(--red)] px-6 py-3.5 text-center font-bold no-underline">Request a quote</Link>
          </aside>
        </div>
      </Section>
      <QuoteBand />
    </>
  );
}