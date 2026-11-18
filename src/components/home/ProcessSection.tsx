"use client";

import { useEffect, useRef } from "react";

const steps: [string, string][] = [
  [
    "Request a quote",
    "Tell us what you're sending and where. You get a clear written quote.",
  ],
  ["Pickup in India", "Our partner collects from your door."],
  [
    "Flight to Australia",
    "Your shipment travels to an Australian gateway airport.",
  ],
  [
    "Clearance coordinated",
    "Declarations lodged with the ABF; biosecurity checks handled.",
  ],
  ["Delivered", "Handed to delivery partners, with tracking shared."],
];

const PATH_D = "M40 150 C 200 30, 330 190, 500 110 S 820 30, 960 80";

export function ProcessSection() {
  const secRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const doneRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);
  const dotsRef = useRef<SVGGElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const sec = secRef.current,
      path = pathRef.current,
      done = doneRef.current;
    const plane = planeRef.current,
      dots = dotsRef.current,
      list = listRef.current;
    if (!sec || !path || !done || !plane || !dots || !list) return;
    const lis = Array.from(list.querySelectorAll("li"));
    const L = path.getTotalLength();
    done.style.strokeDasharray = String(L);

    dots.innerHTML = [0, 0.25, 0.5, 0.75, 1]
      .map((t) => {
        const p = path.getPointAtLength(L * t);
        return `<circle cx="${p.x}" cy="${p.y}" r="7" fill="#211414" stroke="#F2A7AE" stroke-width="2"/>`;
      })
      .join("");

    const place = (t: number) => {
      const p = path.getPointAtLength(L * t);
      const a = path.getPointAtLength(Math.min(L, L * t + 1));
      const b = path.getPointAtLength(Math.max(0, L * t - 1));
      const ang = (Math.atan2(a.y - b.y, a.x - b.x) * 180) / Math.PI + 12;
      plane.setAttribute(
        "transform",
        `translate(${p.x} ${p.y}) rotate(${ang})`,
      );
      done.style.strokeDashoffset = String(L * (1 - t));
      lis.forEach((li, k) => li.classList.toggle("on", t >= k * 0.25 - 0.02));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      place(1);
      return;
    }
    const onScroll = () => {
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      place(Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height * 0.75))));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={secRef}
      className="dark pad tilt"
      id="process"
      aria-labelledby="pr-h"
    >
      <div className="wrap proc">
        <div className="shead">
          <div>
            <span className="kicker">How it works</span>
            <h2 id="pr-h">How our shipping process works</h2>
          </div>
          <p className="lead" style={{ maxWidth: "44ch" }}>
            Five stages, one team. Scroll to follow a shipment from India to an
            Australian doorstep.
          </p>
        </div>
        <svg className="path" viewBox="0 0 1000 200" aria-hidden="true">
          <path
            ref={pathRef}
            d={PATH_D}
            fill="none"
            stroke="#4A3536"
            strokeWidth="2"
            strokeDasharray="3 8"
          />
          <path
            ref={doneRef}
            d={PATH_D}
            fill="none"
            stroke="#D1293B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <g ref={dotsRef} />
          <g ref={planeRef}>
            <image href="/plane.png" x="-40" y="-9" width="80" height="18" />
          </g>
        </svg>
        <ol className="psteps" ref={listRef}>
          {steps.map(([h, p], k) => (
            <li key={h}>
              <span className="n">{String(k + 1).padStart(2, "0")}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
