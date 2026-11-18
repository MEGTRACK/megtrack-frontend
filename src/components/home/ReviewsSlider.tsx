"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { reviews } from "@/lib/data/reviews";

type Item = {
  name: string;
  company?: string;
  quote: string;
  rating?: number;
  ph?: boolean;
};

const placeholders: Item[] = [1, 2, 3].map(() => ({
  name: "Customer name",
  company: "Company, where authorised",
  quote:
    "Genuine customer feedback will appear here once MEGTRACK has permission to publish it.",
  ph: true,
}));

const initials = (n: string) =>
  n
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("") || "?";

const css = `
.rv-track { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; margin: 0 -9px; padding: 14px 0 22px; outline: none; }
.rv-track::-webkit-scrollbar { display: none; }
.rv-slide { flex: 0 0 33.3333%; padding: 0 9px; scroll-snap-align: start; }
.rv-card { position: relative; height: 100%; display: flex; flex-direction: column; padding: 34px 30px 28px; border-radius: 24px; background: #fff; border: 1px solid var(--line); overflow: hidden; transition: transform .25s, box-shadow .25s, border-color .25s; }
.rv-card::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 4px; background: var(--grad); }
.rv-card:hover { transform: translateY(-4px); border-color: var(--red); box-shadow: 0 28px 50px -32px rgba(209,41,59,.55); }
.rv-q { position: absolute; right: 22px; top: 22px; width: 64px; height: 64px; color: var(--red); opacity: .09; }
.rv-stars { display: flex; gap: 3px; margin-bottom: 14px; }
.rv-stars svg { width: 18px; height: 18px; color: #D6CFD0; }
.rv-stars svg.on { color: #E0A100; fill: #E0A100; }
.rv-card blockquote { margin: 0 0 26px; font: 500 1.12rem/1.55 var(--f-b); color: var(--jet); position: relative; }
.rv-who { margin-top: auto; display: flex; gap: 14px; align-items: center; padding-top: 20px; border-top: 1px solid var(--line); }
.rv-av { width: 46px; height: 46px; flex: none; border-radius: 50%; background: var(--grad); color: #fff; display: grid; place-items: center; font: 700 1rem var(--f-d); letter-spacing: .02em; }
.rv-who b { display: block; font-family: var(--f-d); }
.rv-who span { font-size: .86rem; color: var(--muted); }
.rv-card.ph { border-style: dashed; background: repeating-linear-gradient(135deg,#fff 0 14px,#FBF9F9 14px 28px); }
.rv-card.ph::before { display: none; }
.rv-card.ph blockquote { color: var(--muted); font-style: italic; }
.rv-card.ph .rv-av { background: var(--mist); color: var(--muted); }
.rv-foot { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-top: 8px; }
.rv-dots { display: flex; gap: 8px; }
.rv-dots button { width: 10px; height: 10px; padding: 0; border: 0; border-radius: 999px; background: #D6CFD0; cursor: pointer; transition: width .25s, background .25s; }
.rv-dots button[aria-current="true"] { width: 30px; background: var(--red); }
.rv-count { font: 700 .9rem var(--f-d); font-stretch: 118%; color: var(--muted); letter-spacing: .04em; }
.rv-arrows { display: flex; gap: 8px; }
.rv-arrows button { width: 48px; height: 48px; border-radius: 50%; border: 1.5px solid var(--jet); background: #fff; color: var(--jet); cursor: pointer; display: grid; place-items: center; transition: background .15s, color .15s; }
.rv-arrows button:hover:not(:disabled) { background: var(--jet); color: #fff; }
.rv-arrows button:disabled { opacity: .35; cursor: default; }
.rv-arrows svg { width: 20px; height: 20px; }
@media (max-width:1000px) { .rv-slide { flex-basis: 50%; } }
@media (max-width:640px) { .rv-slide { flex-basis: 88%; } .rv-arrows { display: none; } }
`;

export function ReviewsSlider() {
  const has = reviews.length > 0;
  const items: Item[] = has ? (reviews as Item[]) : placeholders;

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(items.length);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const step = first.offsetWidth;
    const perView = Math.max(1, Math.round(el.clientWidth / step));
    setPages(Math.max(1, items.length - perView + 1));
    setActive(
      Math.min(items.length - perView, Math.round(el.scrollLeft / step)),
    );
  }, [items.length]);

  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const go = (i: number) => {
    const el = trackRef.current;
    const first = el?.children[0] as HTMLElement | undefined;
    if (!el || !first) return;
    const idx = Math.max(0, Math.min(pages - 1, i));
    el.scrollTo({ left: idx * first.offsetWidth, behavior: "smooth" });
  };

  return (
    <section className="pad mist" aria-labelledby="rv-h">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="wrap">
        <div className="shead">
          <div>
            <span className="kicker">Customer reviews</span>
            <h2 id="rv-h">What our customers say</h2>
            <p className="lead">
              {has
                ? "Feedback from people and businesses who ship with MEGTRACK."
                : "We only publish genuine reviews, with each customer's permission. These cards show where they'll appear."}
            </p>
          </div>
          <div className="rv-arrows">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => go(active - 1)}
              disabled={active <= 0}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => go(active + 1)}
              disabled={active >= pages - 1}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div
          className="rv"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          <div className="rv-track" ref={trackRef} tabIndex={0}>
            {items.map((r, i) => (
              <div
                className="rv-slide"
                key={`${r.name}-${i}`}
                aria-label={`Review ${i + 1} of ${items.length}`}
              >
                <article className={`rv-card${r.ph ? " ph" : ""}`}>
                  <Quote className="rv-q" aria-hidden="true" />
                  {r.rating ? (
                    <div
                      className="rv-stars"
                      role="img"
                      aria-label={`${r.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }, (_, s) => (
                        <Star
                          key={s}
                          className={s < (r.rating ?? 0) ? "on" : ""}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  ) : null}
                  <blockquote>{r.quote}</blockquote>
                  <div className="rv-who">
                    <span className="rv-av" aria-hidden="true">
                      {r.ph ? "?" : initials(r.name)}
                    </span>
                    <div>
                      <b>{r.name}</b>
                      {r.company && <span>{r.company}</span>}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="rv-foot">
            <div className="rv-dots">
              {Array.from({ length: pages }, (_, k) => (
                <button
                  key={k}
                  type="button"
                  aria-label={`Show review ${k + 1}`}
                  aria-current={k === active ? "true" : undefined}
                  onClick={() => go(k)}
                />
              ))}
            </div>
            <span className="rv-count" aria-live="polite">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(pages).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
