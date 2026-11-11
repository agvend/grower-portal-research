import { memo } from "react";

type Kind = "known" | "users-known" | "placeholder";

type PartnerPoint = {
  partner: string;
  users: number;
  events: number;
  kind: Kind;
};

/**
 * Known pairs are from Daniel's Aug 3 Slack note (RVC, Frontier) and
 * the June 29 selection post (Keystone and South West Terminal user counts).
 * Everything else is a draft coordinate so the page can show the story
 * until the ranking sheet is available.
 */
const partners: PartnerPoint[] = [
  { partner: "Keystone", users: 31000, events: 5200000, kind: "users-known" },
  { partner: "Valley Wide", users: 14000, events: 900000, kind: "placeholder" },
  { partner: "NEW Coop", users: 8500, events: 1100000, kind: "placeholder" },
  { partner: "Heritage", users: 6200, events: 480000, kind: "placeholder" },
  { partner: "Richardson Pioneer", users: 4100, events: 320000, kind: "placeholder" },
  { partner: "Frontier", users: 3251, events: 1120000, kind: "known" },
  { partner: "River Valley", users: 3091, events: 2100000, kind: "known" },
  { partner: "CVA", users: 2400, events: 210000, kind: "placeholder" },
  { partner: "CenDak", users: 1900, events: 1600000, kind: "placeholder" },
  { partner: "South West Terminal", users: 396, events: 48000, kind: "users-known" },
];

const colors: Record<Kind, string> = {
  known: "#e54d42",
  "users-known": "#c4894a",
  placeholder: "#5c6b73",
};

const width = 640;
const height = 320;
const pad = { top: 28, right: 28, bottom: 44, left: 52 };

function logLerp(value: number, min: number, max: number) {
  const start = Math.log10(min);
  const end = Math.log10(max);
  return (Math.log10(value) - start) / (end - start);
}

function formatCount(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${Math.round(value / 1_000)}k`;
  return String(value);
}

const xMin = 300;
const xMax = 40000;
const yMin = 30000;
const yMax = 7000000;
const xTicks = [400, 1000, 3000, 10000, 30000];
const yTicks = [50000, 200000, 1000000, 5000000];

function xPos(users: number) {
  return pad.left + logLerp(users, xMin, xMax) * (width - pad.left - pad.right);
}

function yPos(events: number) {
  return (
    height -
    pad.bottom -
    logLerp(events, yMin, yMax) * (height - pad.top - pad.bottom)
  );
}

export const PartnerUsageChart = memo(function PartnerUsageChart() {
  return (
    <div className="flex w-full flex-col rounded-lg bg-background px-6 py-5">
      <p className="mb-1 text-center font-heading text-lg font-semibold tracking-tight">
        Unique users and product events
      </p>
      <p className="mb-4 text-center text-sm text-muted-foreground">
        Draft. Points above the pack use the portal harder than their headcount
        would suggest. That is why CenDak is in the set.
      </p>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-80 w-full"
        role="img"
        aria-label="Scatter of ten partners by unique users and product events"
      >
        {xTicks.map((tick) => (
          <g key={`x-${tick}`}>
            <line
              x1={xPos(tick)}
              x2={xPos(tick)}
              y1={pad.top}
              y2={height - pad.bottom}
              stroke="currentColor"
              className="text-border"
              strokeDasharray="3 3"
            />
            <text
              x={xPos(tick)}
              y={height - pad.bottom + 16}
              textAnchor="middle"
              className="fill-muted-foreground"
              fontSize="11"
            >
              {formatCount(tick)}
            </text>
          </g>
        ))}
        {yTicks.map((tick) => (
          <g key={`y-${tick}`}>
            <line
              x1={pad.left}
              x2={width - pad.right}
              y1={yPos(tick)}
              y2={yPos(tick)}
              stroke="currentColor"
              className="text-border"
              strokeDasharray="3 3"
            />
            <text
              x={pad.left - 8}
              y={yPos(tick) + 4}
              textAnchor="end"
              className="fill-muted-foreground"
              fontSize="11"
            >
              {formatCount(tick)}
            </text>
          </g>
        ))}
        <text
          x={width / 2}
          y={height - 6}
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize="11"
        >
          Unique users
        </text>
        <text
          x={14}
          y={height / 2}
          textAnchor="middle"
          transform={`rotate(-90 14 ${height / 2})`}
          className="fill-muted-foreground"
          fontSize="11"
        >
          Product events
        </text>
        {partners.map((row) => (
          <g key={row.partner}>
            <circle
              cx={xPos(row.users)}
              cy={yPos(row.events)}
              r={6}
              fill={colors[row.kind]}
            />
            <text
              x={xPos(row.users)}
              y={yPos(row.events) - 10}
              textAnchor="middle"
              className="fill-foreground"
              fontSize="10"
            >
              {row.partner}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
});
