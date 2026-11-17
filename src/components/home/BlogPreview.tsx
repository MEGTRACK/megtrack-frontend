import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { posts } from "@/lib/data/posts";

export function BlogPreview() {
  return (
    <Section>
      <SectionHeader
        kicker="From the blog"
        title="Useful reads before you ship."
        lead="Straightforward guidance on international shipping, customs and preparing your parcel."
        action={
          <Link
            href="/blog"
            className="font-bold text-[var(--red-deep)] underline-offset-4 hover:underline"
          >
            All insights <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        }
      />
      <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {posts.slice(0, 3).map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-[20px] border border-[var(--line)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-30px_rgba(33,20,20,.4)]"
          >
            <div className="mb-5 flex items-center justify-between gap-3 text-[0.82rem] text-[var(--muted)]">
              <span className="rounded-full bg-[var(--mist)] px-3 py-1 font-semibold text-[var(--red-deep)]">
                {post.category}
              </span>
              <time dateTime={post.publishedAt}>
                {new Date(`${post.publishedAt}T00:00:00`).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <h3 className="mb-3 font-display text-[1.25rem] font-bold leading-snug">
              <Link
                href={`/blog/${post.slug}`}
                className="text-[var(--jet)] no-underline hover:text-[var(--red-deep)]"
              >
                {post.title}
              </Link>
            </h3>
            <p className="mb-5 text-[0.95rem] text-[var(--muted)]">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-auto inline-flex items-center gap-2 font-bold text-[var(--red-deep)] no-underline"
            >
              Read article <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}