import Link from "next/link";
import { MapPin, Package, ShieldCheck, Tag } from "lucide-react";

const origins: [string, number, number][] = [
  ["Amritsar", 118, 70],
  ["Delhi", 150, 104],
  ["Ahmedabad", 92, 160],
  ["Mumbai", 100, 200],
  ["Hyderabad", 160, 210],
  ["Kolkata", 240, 150],
  ["Bengaluru", 138, 258],
  ["Chennai", 188, 276],
  ["Kochi", 124, 312],
];
const SYD = [540, 262];
const MEL = [488, 318];

function Network() {
  return (
    <svg
      className="net"
      viewBox="0 0 620 380"
      role="img"
      aria-label="Network map: pickup cities across India connecting to Sydney and Melbourne"
    >
      <rect width="620" height="380" rx="20" fill="#2A1B1C" />
      <g stroke="#3A2627">
        {[60, 120, 180, 240, 300].map((y) => (
          <line key={y} x1="0" x2="620" y1={y} y2={y} strokeDasharray="2 8" />
        ))}
      </g>
      {origins.map(([n, x, y], k) => {
        const [tx, ty] = k % 2 ? MEL : SYD;
        return (
          <path
            key={n}
            className="flow"
            d={`M${x} ${y} C ${x + 120} ${y - 100 - k * 6}, ${tx - 80} ${ty - 150}, ${tx} ${ty}`}
            fill="none"
            stroke={k % 2 ? "#F2A7AE" : "#D1293B"}
            strokeWidth="1.6"
            opacity=".85"
          />
        );
      })}
      <g fontFamily="Noto Sans, sans-serif" fontSize="11" fill="#E9DFE0">
        {origins.map(([n, x, y]) => (
          <g key={n}>
            <circle
              cx={x}
              cy={y}
              r="4.5"
              fill="#D1293B"
              stroke="#211414"
              strokeWidth="1.5"
            />
            <text
              x={n === "Bengaluru" ? x - 8 : x + 8}
              y={y - 6}
              textAnchor={n === "Bengaluru" ? "end" : "start"}
            >
              {n}
            </text>
          </g>
        ))}
      </g>
      <text
        x="40"
        y="44"
        fontFamily="Saira, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#fff"
      >
        India
      </text>
      <text
        x="470"
        y="226"
        fontFamily="Saira, sans-serif"
        fontWeight="800"
        fontSize="20"
        fill="#fff"
      >
        Australia
      </text>
      <circle
        cx={SYD[0]}
        cy={SYD[1]}
        r="10"
        fill="#211414"
        stroke="#F2A7AE"
        strokeWidth="3"
      />
      <text
        x={SYD[0] - 6}
        y={SYD[1] + 28}
        textAnchor="middle"
        fontFamily="Saira, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#fff"
      >
        SYD
      </text>
      <circle
        cx={MEL[0]}
        cy={MEL[1]}
        r="10"
        fill="#211414"
        stroke="#F2A7AE"
        strokeWidth="3"
      />
      <text
        x={MEL[0]}
        y={MEL[1] + 30}
        textAnchor="middle"
        fontFamily="Saira, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#fff"
      >
        MEL
      </text>
    </svg>
  );
}

const caps = [
  {
    Icon: MapPin,
    title: "Pickup anywhere in India",
    body: "Metro cities, Punjab, Gujarat, the South and beyond.",
  },
  {
    Icon: Package,
    title: "Personal and commercial",
    body: "Gifts and family parcels, samples, stock and e-commerce orders.",
  },
  {
    Icon: ShieldCheck,
    title: "Rules checked before you send",
    body: "Biosecurity, prohibited items and the AUD 1,000 threshold explained up front.",
  },
  {
    Icon: Tag,
    title: "Know the cost first",
    body: "An instant estimate, then a written quote.",
  },
];

export function OriginNetwork() {
  return (
    <section className="dark pad tilt" aria-labelledby="or-h">
      <div className="wrap origin">
        <figure style={{ margin: 0 }}>
          <Network />
          <figcaption
            className="muted"
            style={{ fontSize: ".8rem", marginTop: 8 }}
          >
            Schematic, not to scale.
          </figcaption>
        </figure>
        <div>
          <span className="kicker">India-origin shipping</span>
          <h2 id="or-h">Built for one route, India to Australia</h2>
          <p className="lead">
            Every process, form and guide on this site is designed around
            shipments leaving India.
          </p>
          <ul className="caps">
            {caps.map(({ Icon, title, body }) => (
              <li key={title}>
                <span className="ic">
                  <Icon />
                </span>
                <div>
                  <b>{title}</b>
                  <span>{body}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="ctas">
            <Link className="btn btn-red" href="/ship-from/india-to-australia">
              India to Australia shipping
            </Link>
            <Link className="btn btn-ghost" href="/estimate">
              Rate estimate
            </Link>
            <Link className="btn btn-ghost" href="/prohibited">
              Can I send it?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
