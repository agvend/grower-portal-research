import { useRef } from "react";
import { Scrollspy } from "@/components/reui/scrollspy";
import { Button } from "@/components/ui/button";

const items = [
  { id: "why", label: "Why" },
  { id: "who", label: "Who" },
  { id: "heard", label: "What we heard" },
  { id: "next", label: "Next" },
];

export function ScrollSpy() {
  const pageRef = useRef<Document>(document);

  return (
    <Scrollspy
      targetRef={pageRef}
      offset={96}
      className="fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 flex-col gap-1.5 md:flex"
    >
      {items.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          size="sm"
          data-scrollspy-anchor={item.id}
          className="justify-start text-muted-foreground data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
        >
          {item.label}
        </Button>
      ))}
    </Scrollspy>
  );
}
