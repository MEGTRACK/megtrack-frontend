"use client";

import Link from "next/link";
import { useState } from "react";
import { posts } from "@/lib/data/posts";

export function BlogBrowser() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];
  const filtered = posts.filter((post) =>
    (category === "All" || post.category === category) &&
    (`${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <div className="bfilter">
        <div className="chips" role="group" aria-label="Filter by category">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
          ))}
        </div>
        <div className="bsearch"><label className="sr" htmlFor="bq">Search articles</label><input id="bq" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles" /></div>
      </div>
      <p className="muted text-[0.9rem]" aria-live="polite">{filtered.length} article{filtered.length === 1 ? "" : "s"}</p>
      <div className="pcards">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="pcard">
            <div className="cover aspect-video" />
            <div className="meta"><span className="cat">{post.category}</span><time>{post.publishedAt}</time></div>
            <h3>{post.title}</h3><p>{post.excerpt}</p><span className="tlink">Read article</span>
          </Link>
        ))}
      </div>
    </>
  );
}
