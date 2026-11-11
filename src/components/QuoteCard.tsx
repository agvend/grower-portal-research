import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import type { Quote } from "@/data/quotes";

function QuoteFields({ quote }: { quote: Quote }) {
  return (
    <>
      <p className="text-base leading-relaxed text-card-foreground">
        {quote.text}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{quote.person}</span>
        <br />
        {quote.company}, {quote.erp}
      </p>
    </>
  );
}

export function QuoteCard({ quote }: { quote: Quote }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
      <Card
        role="button"
        tabIndex={0}
        size="sm"
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className="cursor-pointer border-l-4 border-l-amber-400 text-left transition-shadow hover:shadow-md"
      >
        <CardContent>
          <QuoteFields quote={quote} />
        </CardContent>
      </Card>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quote</DrawerTitle>
          <DrawerDescription>
            {quote.sourceUrl
              ? "Open the source notes to read this in context."
              : "Fields already shown on the card. Source links will be added as we find them."}
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 p-4">
          <QuoteFields quote={quote} />
          <Separator />
          <dl className="grid gap-4">
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Transcript snippet
              </dt>
              <dd className="mt-1">{quote.text}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Person
              </dt>
              <dd className="mt-1">{quote.person}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Company
              </dt>
              <dd className="mt-1">{quote.company}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                ERP
              </dt>
              <dd className="mt-1">{quote.erp}</dd>
            </div>
            {quote.sourceUrl && (
              <div>
                <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Source
                </dt>
                <dd className="mt-1">
                  <a
                    href={quote.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {quote.sourceLabel ?? "Open source notes"}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
