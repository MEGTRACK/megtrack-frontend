import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { posts } from "@/lib/data/posts";
import { QuoteBand } from "@/components/home/QuoteBand";
import { BlogBrowser } from "@/components/blog/BlogBrowser";

export default function BlogPage() {
  return (
    <>
      <PageHero crumbs={[{ label: "Blog" }]} title="Insights for shipping from India to Australia" lead="Guides on freight, customs, documentation and planning, written for senders in India and businesses in Australia." />
      <Section>
        {posts.filter((post) => post.featured).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="mb-10 grid grid-cols-[1.2fr_1fr] items-center gap-9 rounded-[26px] border border-[var(--line)] bg-white p-4 no-underline max-[900px]:grid-cols-1">
            <div className="aspect-video rounded-2xl bg-[var(--jet)]" />
            <div><span className="rounded-full bg-[#fbe9eb] px-3 py-1 text-[0.78rem] font-bold text-[var(--red-deep)]">{post.category}</span><h2 className="mt-4 font-display text-[clamp(1.6rem,2.6vw,2.3rem)]">{post.title}</h2><p className="text-[var(--muted)]">{post.excerpt}</p><span className="font-bold text-[var(--red-deep)]">Read the article →</span></div>
          </Link>
        ))}
        <BlogBrowser />
      </Section>
      <QuoteBand />
    </>
  );
}