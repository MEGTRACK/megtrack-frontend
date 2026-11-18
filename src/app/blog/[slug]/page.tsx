import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { posts } from "@/lib/data/posts";
import { QuoteBand } from "@/components/home/QuoteBand";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <>
      <PageHero crumbs={[{ label: "Blog", href: "/blog" }, { label: post.category }, { label: post.title }]} title={post.title} lead={post.excerpt} />
      <Section>
        <article className="mx-auto max-w-[760px] text-[1.08rem] leading-[1.75]">
          <p>{post.content}</p>
          <div className="mt-10 border-t border-[var(--line)] pt-6"><b>Related services</b><div className="mt-3 flex flex-wrap gap-2"><Link href="/services/customs-clearance" className="rounded-full border border-[var(--line)] px-4 py-2 no-underline">Customs Clearance</Link><Link href="/ship-from/india-to-australia" className="rounded-full border border-[var(--line)] px-4 py-2 no-underline">India to Australia</Link></div></div>
        </article>
      </Section>
      <QuoteBand />
    </>
  );
}