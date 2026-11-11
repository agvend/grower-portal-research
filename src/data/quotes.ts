export type Quote = {
  id: string;
  text: string;
  person: string;
  company: string;
  erp: string;
  sourceUrl?: string;
  sourceLabel?: string;
};

export type ThemeGroup = {
  id: string;
  title: string;
  summary: string;
  quotes: Quote[];
};

export const themes: ThemeGroup[] = [
  {
    id: "grain",
    title: "Grain contracts and offers",
    summary:
      "Visibility, naming, notifications, and hedge risk when a grower pulls an offer.",
    quotes: [
      {
        id: "grain-ryan",
        text: "There's target contracts. That gets confusing in the app because it shows it as a contract and not as a target.",
        person: "Ryan Keenleyside",
        company: "South West Terminal",
        erp: "Tronia",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, SWT transcript not in Granola yet",
      },
      {
        id: "grain-luke",
        text: "The one thing that we don't have in there is offers. There's no tab to be able to see, all right, I got this offer sitting out here.",
        person: "Luke Moore",
        company: "Keystone Cooperative",
        erp: "Agvance",
        sourceUrl: "https://notes.granola.ai/d/3c4c3058-cacb-4026-9bde-a99f4ea79c18",
        sourceLabel: "Granola notes, Keystone / Luke, Jul 30, 2026",
      },
      {
        id: "grain-mary",
        text: "We need that approval buffer before growers can withdraw a grain offer. Every offer is hedged.",
        person: "Mary Montag",
        company: "NEW Coop",
        erp: "Control",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, NEW Coop transcript not in Granola yet",
      },
      {
        id: "grain-russ",
        text: "When a grower first logs in and sees live pricing every day, that's the game-changing moment.",
        person: "Russ Reich",
        company: "Richardson Pioneer",
        erp: "Homegrown",
        sourceUrl: "https://notes.granola.ai/d/1d3338f9-3720-4448-968e-e4e30e90f402",
        sourceLabel: "Granola notes, Richardson / Russ, Aug 28, 2026",
      },
    ],
  },
  {
    id: "roles",
    title: "Multi-user accounts and roles",
    summary: "One email per farm is a workaround, not a product.",
    quotes: [
      {
        id: "roles-rachelle",
        text: "Some farms only have one email address and multiple people use that email address. The downfall is we can't have multiple accounts with that email address.",
        person: "Rachelle Foster",
        company: "South West Terminal",
        erp: "Tronia",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, SWT transcript not in Granola yet",
      },
      {
        id: "roles-pam",
        text: "It would be nice if we could do both on one account. Maybe he wants the pricing… but she wants to go online and pay.",
        person: "Pam Gedny",
        company: "South West Terminal",
        erp: "Tronia",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, SWT transcript not in Granola yet",
      },
      {
        id: "roles-bailie",
        text: "One thing that I really wish that we had in the portal as it pertains to customer use is roles by the type of individual.",
        person: "Bailie Hennes",
        company: "CVA",
        erp: "NE Merchant",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, CVA transcript not in Granola yet",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments and billing reliability",
    summary: "Trust in balances and notifications, not a missing “pay” feature.",
    quotes: [
      {
        id: "pay-bailie-1",
        text: "This month alone I've had about 15 accounts where inactive-then-reactivated accounts broke autopay. Growers got hit with late fees even though they had funds.",
        person: "Bailie Hennes",
        company: "CVA",
        erp: "NE Merchant",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, CVA transcript not in Granola yet",
      },
      {
        id: "pay-bailie-2",
        text: "A Finix payment failure from March didn't reach us until July… by the time we caught it they were convinced they'd already paid.",
        person: "Bailie Hennes",
        company: "CVA",
        erp: "NE Merchant",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, CVA transcript not in Granola yet",
      },
      {
        id: "pay-brian",
        text: "From our bookkeeping staff, that is probably the number one, notifications are not consistent enough.",
        person: "Brian Beckley",
        company: "CenDak Coop",
        erp: "Agvance",
        sourceUrl: "https://notes.granola.ai/d/c352ea7e-1c13-4b1a-9de6-c8a02d2b3650",
        sourceLabel: "Granola notes, CenDak / Brian, Aug 4, 2026",
      },
    ],
  },
  {
    id: "ux",
    title: "UX, discoverability, and “missing” features",
    summary:
      "Agronomy not on the home tile. Equity buried. Tiles that look identical. Features that exist on another line of business.",
    quotes: [
      {
        id: "ux-dan-1",
        text: "Agronomy is our largest revenue generator and it wasn't even worthy of its own tile on the home screen.",
        person: "Dan Dix",
        company: "NEW Coop",
        erp: "Control",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, NEW Coop transcript not in Granola yet",
      },
      {
        id: "ux-dan-2",
        text: "Equity: you have to dig and dig and dig to get to it. That's the money the farmer's got in the company.",
        person: "Dan Dix",
        company: "NEW Coop",
        erp: "Control",
        sourceUrl:
          "https://www.figma.com/board/44HN6g5hUeFPFyWXJIiy5x/Customer-Portal-Research-Synthesis--Aug-26-",
        sourceLabel: "Figma synthesis board, NEW Coop transcript not in Granola yet",
      },
      {
        id: "ux-brian",
        text: "Navigation opinions split by usage frequency… invoices, bookings, purchase history, quotes, statements all look visually identical at first glance.",
        person: "Brian Worsley",
        company: "Heritage Cooperative",
        erp: "Advantage",
        sourceUrl:
          "https://notes.granola.ai/d/23e23fc6-8d09-4bd7-94ab-0c9959547497",
        sourceLabel: "Granola notes, Heritage / Brian, Jul 29, 2026",
      },
    ],
  },
];
