import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Tabs } from "@base-ui/react/tabs";
import { X } from "lucide-react";
import reportSource from "../../drafts/phase-1-report.md?raw";
import { PersonaBarChart } from "@/components/PersonaBarChart";
import { PartnerUsageChart } from "@/components/PartnerUsageChart";
import {
  citationOrder,
  displayTitle,
  parseReport,
  type Block,
  type Inline,
  type Section,
} from "@/lib/reportMarkdown";

export function ReportPage() {
  const doc = useMemo(() => parseReport(reportSource), []);
  const order = useMemo(() => citationOrder(doc), [doc]);
  const numbers = useMemo(() => {
    const map = new Map<string, number>();
    order.forEach((id, index) => map.set(id, index + 1));
    return map;
  }, [order]);
  const [open, setOpen] = useState<{
    id: string;
    anchor: HTMLButtonElement;
    top: number;
    left: number;
  } | null>(null);
  const [collapse, setCollapse] = useState(0);
  const [read, setRead] = useState(0);
  const collapseRef = useRef(0);
  const readRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    const scroller = document.getElementById("root");
    if (!scroller) return;
    function update() {
      frameRef.current = 0;
      const scrolled = scroller.scrollTop;
      const remainingScroll = scroller.scrollHeight - scroller.clientHeight;
      const nextRead =
        remainingScroll > 0 ? Math.min(1, scrolled / remainingScroll) : 0;
      const raw = Math.min(1, Math.max(0, (scrolled - 24) / 220));
      const nextCollapse = 1 - (1 - raw) ** 3;
      if (Math.abs(nextRead - readRef.current) > 0.002) {
        readRef.current = nextRead;
        setRead(nextRead);
      }
      if (Math.abs(nextCollapse - collapseRef.current) > 0.004) {
        collapseRef.current = nextCollapse;
        setCollapse(nextCollapse);
      }
    }
    function onScroll() {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(update);
    }
    update();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
    }
    function onPointer(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-citation]")) return;
      setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, []);

  function openCitation(id: string, anchor: HTMLButtonElement) {
    if (open?.anchor === anchor) {
      setOpen(null);
      return;
    }
    const rect = anchor.getBoundingClientRect();
    const width = 320;
    const left = Math.min(rect.left, window.innerWidth - width - 16);
    setOpen({ id, anchor, top: rect.bottom + 8, left: Math.max(16, left) });
  }

  return (
    <div className="report min-h-screen">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm">
        <div
          className="h-1 bg-secondary"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round((1 - read) * 100)}
          aria-label={`${Math.round((1 - read) * 100)} percent of the article left`}
        >
          <div
            className="h-full bg-primary transition-[width] duration-150"
            style={{ width: `${read * 100}%` }}
          />
        </div>
        <div
          className="grid w-full grid-cols-[1fr_minmax(0,42rem)_1fr] items-start px-6"
          style={{
            paddingTop: 24 - 12 * collapse,
            paddingBottom: 24 - 12 * collapse,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}agvend-logo.png`}
            alt="AgVend"
            className="h-6 w-auto justify-self-start"
          />
          <div
            className="flex min-w-0 flex-col text-center"
            style={{ gap: 16 * (1 - collapse) }}
          >
            <h1
              className="font-heading font-semibold tracking-tight"
              style={{
                fontSize: `${2.5 - 1.25 * collapse}rem`,
                lineHeight: 1.15,
              }}
            >
              Grower Portal Research: Discovering what matters to Partners
            </h1>
            <p
              className="overflow-hidden text-sm leading-6 text-muted-foreground"
              style={{
                maxHeight: 72 * (1 - collapse),
                opacity: Math.max(0, 1 - collapse * 1.35),
              }}
            >
              8 minute read. Staff at ten partners already use the portal for
              the same facts and the next step, and they want work still stuck
              in a second app, email, or phone call brought there.
            </p>
          </div>
          <div aria-hidden />
        </div>
      </header>

      <main className="pt-10">
        <div className="mx-auto max-w-2xl px-6">
          {doc.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-14 scroll-mt-24"
            >
              {section.id === "summary" ? (
                <div className="relative left-1/2 w-[calc(100%+120px)] -translate-x-1/2 rounded-xl border border-border bg-muted p-9">
                  <SectionBody
                    section={section}
                    numbers={numbers}
                    openId={open?.id ?? null}
                    onOpen={openCitation}
                  />
                </div>
              ) : (
                <SectionBody
                  section={section}
                  numbers={numbers}
                  openId={open?.id ?? null}
                  onOpen={openCitation}
                />
              )}
            </section>
          ))}
        </div>

        {order.length > 0 && (
          <section
            id="references"
            className="mt-10 bg-muted px-32 pt-12 pb-16"
          >
            <h3 className="font-heading mb-4 text-2xl font-semibold tracking-tight">
              Footnotes
            </h3>
            <ol className="list-decimal space-y-3 pl-6 font-serif text-[1rem] leading-[1.625rem]">
              {order.map((id) => {
                const number = numbers.get(id);
                const active = open?.id === id;
                return (
                  <li
                    key={id}
                    id={`ref-${number}`}
                    value={number}
                    data-citation=""
                    className={
                      active
                        ? "rounded-lg bg-accent px-2 py-1"
                        : "text-foreground"
                    }
                  >
                    {doc.notes[id] ?? "This citation has no note in the markdown file."}
                  </li>
                );
              })}
            </ol>
          </section>
        )}
      </main>
      {open && (
        <div
          data-citation=""
          role="note"
          className="fixed z-[60] w-80 max-w-[calc(100vw-2rem)] rounded-lg border border-border bg-popover p-3 text-sm leading-6 shadow-md"
          style={{ top: open.top, left: open.left }}
        >
          <p className="mb-1 text-xs font-medium text-primary">
            [{numbers.get(open.id)}]
          </p>
          {doc.notes[open.id] ??
            "This citation has no note in the markdown file."}
        </div>
      )}
    </div>
  );
}

function SectionBody({
  section,
  numbers,
  openId,
  onOpen,
}: {
  section: Section;
  numbers: Map<string, number>;
  openId: string | null;
  onOpen: (id: string, anchor: HTMLButtonElement) => void;
}) {
  return (
    <>
      {section.id !== "summary" && (
        <h2 className="font-heading mb-4 text-3xl font-semibold tracking-tight">
          {displayTitle(section.title)}
        </h2>
      )}
      <div className="prose space-y-5 text-[1.075rem]">
        {section.blocks.map((block, index) =>
          block.type === "chart-sheet" ? (
            <ChartSheet key={index} />
          ) : (
            <ProseBlock
              key={index}
              block={block}
              numbers={numbers}
              openId={openId}
              onOpen={onOpen}
            />
          ),
        )}
      </div>
      {section.modal.length > 0 && (
        <Dialog.Root>
          <Dialog.Trigger className="mt-6 text-sm text-primary underline-offset-4 hover:underline">
            More from these calls
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-50 bg-stone-900/40 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
            <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 flex max-h-[min(40rem,calc(100dvh-3rem))] w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl border border-border bg-popover text-popover-foreground shadow-lg outline-none">
              <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-2">
                <div>
                  <Dialog.Title className="font-heading text-2xl font-semibold tracking-tight">
                    {displayTitle(section.title)}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                    Detail that supports this section and stays off the main page.
                  </Dialog.Description>
                </div>
                <Dialog.Close
                  aria-label="Close"
                  className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <X />
                </Dialog.Close>
              </div>
              <div className="prose space-y-4 overflow-y-auto px-6 pt-2 pb-6 text-base">
                {section.modal.map((block, index) => (
                  <ProseBlock
                    key={index}
                    block={block}
                    numbers={numbers}
                    openId={openId}
                    onOpen={onOpen}
                  />
                ))}
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </>
  );
}

const CHART_TOGGLES = [
  { value: "chart-1", label: "Individuals" },
  { value: "chart-2", label: "Retail Partners" },
] as const;

const ChartSheet = memo(function ChartSheet() {
  return (
    <div className="relative left-1/2 my-3 w-[calc(100%+120px)] -translate-x-1/2 rounded-xl border border-border bg-muted p-9">
      <Tabs.Root defaultValue="chart-1" className="flex flex-col gap-6">
        <Tabs.List className="group/tabs-list inline-flex h-8 w-fit items-center justify-center rounded-lg bg-background p-[3px] text-muted-foreground">
          {CHART_TOGGLES.map((tab) => (
            <Tabs.Tab
              key={tab.value}
              value={tab.value}
              className="relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center rounded-md border border-transparent px-3 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring data-active:bg-muted data-active:text-foreground data-active:shadow-sm"
            >
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Tabs.Panel value="chart-1">
          <PersonaBarChart />
        </Tabs.Panel>
        <Tabs.Panel value="chart-2">
          <PartnerUsageChart />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
});

function ProseBlock({
  block,
  numbers,
  openId,
  onOpen,
}: {
  block: Block;
  numbers: Map<string, number>;
  openId: string | null;
  onOpen: (id: string, anchor: HTMLButtonElement) => void;
}) {
  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {block.items.map((item, index) => (
          <li key={index}>
            <InlineText
              inlines={item}
              numbers={numbers}
              openId={openId}
              onOpen={onOpen}
            />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p>
      <InlineText
        inlines={block.inlines}
        numbers={numbers}
        openId={openId}
        onOpen={onOpen}
      />
    </p>
  );
}

function InlineText({
  inlines,
  numbers,
  openId,
  onOpen,
}: {
  inlines: Inline[];
  numbers: Map<string, number>;
  openId: string | null;
  onOpen: (id: string, anchor: HTMLButtonElement) => void;
}) {
  return (
    <>
      {inlines.map((inline, index) => {
        if (inline.type === "text") return <span key={index}>{inline.text}</span>;
        if (inline.type === "strong") {
          return (
            <strong key={index} className="font-bold">
              {inline.text}
            </strong>
          );
        }
        const number = numbers.get(inline.id);
        const active = openId === inline.id;
        return (
          <button
            key={index}
            type="button"
            data-citation=""
            aria-expanded={active}
            className={
              active
                ? "mx-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded bg-primary px-1 align-super font-sans text-[0.7rem] font-medium text-primary-foreground"
                : "mx-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded bg-secondary px-1 align-super font-sans text-[0.7rem] font-medium text-primary hover:bg-accent"
            }
            onClick={(event) => onOpen(inline.id, event.currentTarget)}
          >
            {number}
          </button>
        );
      })}
    </>
  );
}
