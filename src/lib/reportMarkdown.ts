export type Inline =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "cite"; id: string };

export type Block =
  | { type: "p"; inlines: Inline[] }
  | { type: "ul"; items: Inline[][] }
  | { type: "chart-sheet" };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
  modal: Block[];
};

export type ReportDoc = {
  sections: Section[];
  notes: Record<string, string>;
};

const inlinePattern = /\[\^([^\]]+)\]|\*\*(.+?)\*\*/g;

export function inlinesFrom(text: string): Inline[] {
  const parts: Inline[] = [];
  let last = 0;
  for (const match of text.matchAll(inlinePattern)) {
    const index = match.index ?? 0;
    if (index > last) {
      parts.push({ type: "text", text: text.slice(last, index) });
    }
    if (match[0].startsWith("[^")) {
      parts.push({ type: "cite", id: match[1] });
    } else {
      parts.push({ type: "strong", text: match[2] });
    }
    last = index + match[0].length;
  }
  if (last < text.length) {
    parts.push({ type: "text", text: text.slice(last) });
  }
  return parts;
}

function slug(title: string) {
  return title
    .replace(/^\d+\.\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function displayTitle(title: string) {
  return title.replace(/^\d+\.\s*/, "");
}

export function parseReport(markdown: string): ReportDoc {
  const notes: Record<string, string> = {};
  const lines: string[] = [];
  for (const line of markdown.split(/\r?\n/)) {
    const definition = line.match(/^\[\^([^\]]+)\]:\s*(.*)$/);
    if (definition) {
      notes[definition[1]] = definition[2].trim();
      continue;
    }
    lines.push(line);
  }

  const start = lines.findIndex((line) => line.startsWith("## "));
  const body = start === -1 ? [] : lines.slice(start);
  const sections: Section[] = [];
  let section: Section | null = null;
  let intoModal = false;
  let paragraph: string[] = [];
  let list: string[] | null = null;

  function flushParagraph() {
    if (!section || paragraph.length === 0) {
      paragraph = [];
      return;
    }
    const block: Block = {
      type: "p",
      inlines: inlinesFrom(paragraph.join(" ").replace(/\s+/g, " ").trim()),
    };
    if (block.inlines.length > 0) {
      (intoModal ? section.modal : section.blocks).push(block);
    }
    paragraph = [];
  }

  function flushList() {
    if (!section || !list || list.length === 0) {
      list = null;
      return;
    }
    const block: Block = {
      type: "ul",
      items: list.map((item) => inlinesFrom(item.trim())),
    };
    (intoModal ? section.modal : section.blocks).push(block);
    list = null;
  }

  function flush() {
    flushParagraph();
    flushList();
  }

  for (const line of body) {
    if (line.startsWith("## ")) {
      flush();
      intoModal = false;
      const title = line.slice(3).trim();
      section = { id: slug(title), title, blocks: [], modal: [] };
      sections.push(section);
      continue;
    }
    if (line.startsWith("### ")) {
      flush();
      intoModal = /^modal$/i.test(line.slice(4).trim());
      continue;
    }
    if (!section) continue;
    if (line.trim() === ":::chart-sheet") {
      flush();
      (intoModal ? section.modal : section.blocks).push({ type: "chart-sheet" });
      continue;
    }
    if (line.trim() === "") {
      flush();
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      list = list ?? [];
      list.push(line.slice(2));
      continue;
    }
    flushList();
    paragraph.push(line.trim());
  }
  flush();

  return { sections, notes };
}

export function citationOrder(doc: ReportDoc): string[] {
  const order: string[] = [];
  const seen = new Set<string>();
  const visit = (inlines: Inline[]) => {
    for (const inline of inlines) {
      if (inline.type === "cite" && !seen.has(inline.id)) {
        seen.add(inline.id);
        order.push(inline.id);
      }
    }
  };
  for (const section of doc.sections) {
    for (const block of [...section.blocks, ...section.modal]) {
      if (block.type === "p") visit(block.inlines);
      else if (block.type === "ul") block.items.forEach(visit);
    }
  }
  return order;
}
