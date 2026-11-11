import { memo } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

/** Seat = script used. Counts from the methodology roster (19 conversations). */
const personaCounts = [
  { row: "seats", relationship: 8, sales: 6, operations: 5 },
];

const chartConfig = {
  relationship: {
    label: "Executive sponsor",
    color: "#e54d42",
  },
  sales: {
    label: "Sales rep",
    color: "#c4894a",
  },
  operations: {
    label: "Operations & Admin",
    color: "#5c6b73",
  },
} satisfies ChartConfig;

const segments = ["relationship", "sales", "operations"] as const;

/** Actual titles from the interview files. Names stay off the page. */
const rolesBySeat: Record<(typeof segments)[number], string[]> = {
  relationship: [
    "CEO and general manager",
    "Chief innovation officer",
    "Vice president, crop inputs",
    "Director of marketing and communications",
    "Director of marketing",
    "Director of energy sales",
    "Agronomy and seed manager",
    "Manager, sales direction and agronomy",
  ],
  sales: [
    "Supervisor, agronomy and grain",
    "Grain and row crop merchandiser",
    "Grain merchandiser",
    "Grain originator",
    "Agronomy sales rep",
    "Energy sales",
  ],
  operations: [
    "Director of member experience",
    "Marketing and PR",
    "Portal admin and training",
    "Agronomy financing and software",
    "Credit and collections analyst",
  ],
};

export const PersonaBarChart = memo(function PersonaBarChart() {
  return (
    <div className="flex w-full flex-col rounded-lg bg-background px-6 py-5">
      <p className="mb-3 text-center font-heading text-lg font-semibold tracking-tight">
        Who we talked to
      </p>
      <div className="relative h-12 w-full">
        <ChartContainer
          config={chartConfig}
          className="absolute inset-0 aspect-auto h-full w-full"
        >
          <BarChart
            data={personaCounts}
            layout="vertical"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            barCategoryGap={0}
          >
            <XAxis type="number" domain={[0, 19]} hide />
            <YAxis type="category" dataKey="row" hide />
            {segments.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                stackId="seats"
                fill={`var(--color-${key})`}
                barSize={28}
                activeBar={false}
                isAnimationActive={false}
                radius={
                  index === 0
                    ? [6, 0, 0, 6]
                    : index === segments.length - 1
                      ? [0, 6, 6, 0]
                      : 0
                }
              />
            ))}
          </BarChart>
        </ChartContainer>
        <div
          className="pointer-events-none absolute inset-0 flex items-center text-xs font-medium text-primary-foreground"
          aria-hidden
        >
          {segments.map((key) => (
            <span
              key={key}
              className="flex items-center justify-center"
              style={{ flex: personaCounts[0][key] }}
            >
              {personaCounts[0][key]}
            </span>
          ))}
        </div>
      </div>
      <div className="not-prose mt-4 grid grid-cols-3 items-start gap-x-4 gap-y-2 text-sm">
        {segments.map((key) => (
          <p
            key={`${key}-label`}
            className="flex items-center gap-2 font-medium text-foreground"
          >
            <span
              className="size-2.5 shrink-0 rounded-sm"
              style={{ backgroundColor: chartConfig[key].color }}
            />
            {chartConfig[key].label}
          </p>
        ))}
        {segments.map((key) => (
          <ul
            key={`${key}-roles`}
            className="space-y-1 pl-4.5 text-muted-foreground"
          >
            {rolesBySeat[key].map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
});
