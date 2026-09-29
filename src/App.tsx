import { useEffect, useRef, useState } from "react";
import "./App.css";

const navLinks = [
  ["Essence", "#essence"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Voices", "#voices"],
];

const brands = [
  { name: "The Lalit Suri Hospitality Group", icon: "crown" },
  { name: "Radisson Blu", icon: "tower" },
  { name: "RBD Sarovar Portico", icon: "landmark" },
  { name: "EARA Group", icon: "gem" },
  { name: "Inventree Hotels", icon: "tree" },
  { name: "PRHUB", icon: "mega" },
  { name: "The Park Hotels", icon: "leaf" },
  { name: "Akshaya Patra", icon: "heart" },
];

const impact = [
  {
    value: "45+",
    label: "Media coverages",
    detail:
      "Secured across national hospitality, lifestyle, and business titles.",
    icon: "press",
  },
  {
    value: "18+",
    label: "Years in brand and communications",
    detail:
      "Across hospitality, real estate, media, and purpose-led organisations.",
    icon: "years",
  },
  {
    value: "09",
    label: "Hotels and hospitality brands led",
    detail: "From single properties to multi-property groups across India.",
    icon: "hotel",
  },
  {
    value: "04",
    label: "Hospitality houses",
    detail: "Teams worked alongside, from property level to group leadership.",
    icon: "team",
  },
];

const pillars = [
  {
    number: "01",
    title: "Intention — Karma",
    text: "Every idea, every brand, every creation starts with an intention. The work begins by naming it clearly, so everything after it moves in one direction.",
    icon: "intention",
  },
  {
    number: "02",
    title: "Foundation — Roots",
    text: "Strong roots hold through every season. Brand standards, shared language, and systems your team can run long after the engagement ends.",
    icon: "foundation",
  },
  {
    number: "03",
    title: "Energy — Growth",
    text: "Purposeful action with grounded creativity. Coverage, engagement, and leads that compound into reputation, not noise that fades.",
    icon: "energy",
  },
];

const services = [
  {
    number: "01",
    title: "Root — Strategy & Branding",
    text: "Strong brands start with clarity. Root sets purpose, positioning and identity systems that give every story and experience a solid foundation.",
    offerings: [
      {
        title: "Brand Strategy",
        detail: "Purpose, positioning, architecture & brand direction",
      },
      {
        title: "Brand Identity",
        detail: "Visual identity, brand language & brand guidelines",
      },
      {
        title: "Founder & Leadership Branding",
        detail: "Personal branding, leadership presence & executive positioning",
      },
      {
        title: "Corporate Branding",
        detail: "Brand consistency across communication, touchpoints & experiences",
      },
    ],
    icon: "root",
  },
  {
    number: "02",
    title: "Story — Content & Communications",
    text: "Ideas become influence when they are told well. Story builds narratives, copy and media programmes that keep you in the right conversations.",
    offerings: [
      {
        title: "Content Strategy",
        detail: "Ideas, narratives, content pillars & editorial planning",
      },
      {
        title: "Copywriting",
        detail: "Brand copy, campaigns, digital & corporate communication",
      },
      {
        title: "Public Relations",
        detail: "Media strategy, outreach, relations & publicity",
      },
      {
        title: "Corporate Communications",
        detail: "Internal, external & stakeholder communications",
      },
    ],
    icon: "story",
  },
  {
    number: "03",
    title: "Reach — Digital & Marketing",
    text: "Visibility that earns engagement. Reach plans social, campaigns and creator partnerships that build presence across digital touchpoints.",
    offerings: [
      {
        title: "Social Media",
        detail: "Strategy, content & channel management",
      },
      {
        title: "Digital Campaigns",
        detail: "Campaign ideation, planning & execution",
      },
      {
        title: "Influencer Marketing",
        detail: "Influencer, creator & blogger collaborations",
      },
      {
        title: "Digital Brand Building",
        detail: "Online visibility, engagement & brand presence",
      },
    ],
    icon: "reach",
  },
  {
    number: "04",
    title: "Experience — Launches & Brand Experiences",
    text: "Moments people remember. Experience designs launches, events, media programmes and visual content that turn attention into lasting impression.",
    offerings: [
      {
        title: "Brand Launches",
        detail: "Launch strategy, planning & execution",
      },
      {
        title: "Events & Activations",
        detail: "Brand experiences, engagements & activations",
      },
      {
        title: "Media Events",
        detail:
          "Press Release, media interactions, brand participation and Awards & Accolades",
      },
      {
        title: "Photography & Videography",
        detail:
          "Brand, people, products, spaces & events — brand films, reels, interviews & event films",
      },
      {
        title: "Visual Content",
        detail: "Creative concepts, visual storytelling & campaign assets",
      },
    ],
    icon: "experience",
  },
  {
    number: "05",
    title: "Growth — Marketing & Growth Advisory",
    text: "Senior direction for your next stage. Growth advises on marketing, campaigns, go-to-market and pitches — leadership without a full-time hire.",
    offerings: [
      {
        title: "Marketing Strategy",
        detail: "Marketing direction, planning & market positioning",
      },
      {
        title: "Campaign Strategy",
        detail: "Big ideas, campaign planning & integrated execution",
      },
      {
        title: "Go-to-Market Strategy",
        detail: "Launch planning, market entry & audience strategy",
      },
      {
        title: "Presentation & Pitch Strategy",
        detail:
          "Corporate presentations, business pitches & investor-facing storytelling",
      },
      {
        title: "Fractional Marketing Leadership",
        detail:
          "Strategic marketing leadership for businesses that need senior expertise without a full-time function",
      },
    ],
    icon: "growth",
  },
];

const work = [
  {
    number: "01",
    client: "Hospitality group",
    sector: "Brand direction",
    title: "Four properties, one voice",
    detail:
      "Built the group positioning, the leadership profiles, and a shared language every property team could run with.",
    outcome: "One story told consistently across every guest touchpoint.",
  },
  {
    number: "02",
    client: "City hotel",
    sector: "Launch and media",
    title: "An opening week people talked about",
    detail:
      "Shaped the launch narrative, the spokesperson story, and the press programme for the opening season.",
    outcome: "Coverage across national travel, business, and lifestyle titles.",
  },
  {
    number: "03",
    client: "Dining destination",
    sector: "Identity and content",
    title: "A table worth returning to",
    detail:
      "Named the experience, wrote the menu story, and set the voice for the room and its channels.",
    outcome:
      "A content rhythm that kept the restaurant in conversation after launch.",
  },
  {
    number: "04",
    client: "Real estate portfolio",
    sector: "Positioning",
    title: "Credibility, said plainly",
    detail:
      "Turned a technical portfolio into a human story for investors, buyers, and the press.",
    outcome: "A messaging system that held through every new project launch.",
  },
];

const career = [
  {
    period: "Jun 2026 – Present",
    role: "Associate Vice President – Marketing, Branding & PR",
    company: "EARA Group",
    points: [
      "Brand strategy & positioning for the group portfolio",
      "New office branding and corporate communications",
      "Budget ownership & performance marketing",
      "Ownership & leadership branding",
      "Agency & vendor management",
      "Digital marketing, PR, media management, website & lead generation",
    ],
  },
  {
    period: "2024 – 2026",
    role: "Marketing, Branding & PR",
    company: "RG Hospitality & Infrastructure",
    points: [
      "Brand and communications across the hospitality portfolio",
      "Media relations and digital storytelling for properties & leadership",
    ],
  },
  {
    period: "May 2024 – Oct 2024",
    role: "Corporate Head – Marketing & Communications",
    company: "Inventree Hotels & Resorts",
    points: [
      "Revamped branding collaterals with new brand standards & guidelines",
      "Digital activation: social strategy, website reconstruction, timely updates",
      "Online reputation and qualified traffic growth",
      "Market research to guide strategy",
      "Launch promotions including Aranya Inventree Resort, Coorg",
    ],
  },
  {
    period: "2022 – 2024",
    role: "Associate Director – Marketing & Communications",
    company: "Radisson Blu & RBD Sarovar Portico, ORR",
    points: [
      "End-to-end marketing, communications & PR for both hotels",
      "In-house social media operations & content strategy",
      "Targeted campaigns with Datalekt across F&B, Rooms & Banquets",
      "Media relationships for announcements, events & promotions",
      "Directed hotel photoshoots; chaired the POSH committee",
    ],
  },
  {
    period: "2021 – 2022",
    role: "Senior Consultant – PR",
    company: "PRHUB Integrated Marketing Communications",
    points: [
      "Go-to-market & launch strategies that met or exceeded client goals",
      "Blogger, influencer & media networks for sustained visibility",
      "Integrated PR, communication strategy & customer relationship management",
      "Mentored a team on press releases, pitch notes & social campaigns",
    ],
  },
  {
    period: "2020 – 2021",
    role: "Consultant, Regional Head – Communications",
    company: "ISKCON & The Akshaya Patra Foundation",
    points: [
      "Integrated communication strategy across PR, digital & traditional media",
      "Custodian of editorial content online & offline, including leadership communication",
      "Celebrity, influencer & opinion-leader relationships",
      "Innovative PR campaigns aligned to organisational objectives",
    ],
  },
  {
    period: "2014 – 2019",
    role: "Marketing & Communications & PR Manager",
    company: "The Lalit Suri Hospitality Group, Bangalore & Bekal",
    points: [
      "Marketing budgets managed for maximum ROI",
      "Print, electronic, blogger & influencer relationships for consistent coverage",
      "Cross-functional sales collaterals, presentations & proposals",
      "Visual content direction across photo & video",
      "Website content and social promotions driving conversions & loyalty",
    ],
  },
  {
    period: "2008 – 2014",
    role: "Assistant Manager – PR & GM Office",
    company: "Apeejay Surrendra Park Hotels, Bangalore",
    points: [
      "GM office administration & cross-department alignment",
      "Solitaire loyalty programme driving repeat business",
      "Monthly press, media-spend (₹30L PR budget) & PR performance reviews",
      "9,200-contact guest database built in 9 months",
      "Park Hotels rebranding; Twilight & Park New Festival events",
      "I-BAR Ladies Night at ~₹3L weekly revenue; relaunch of Monsoon & Aqua",
    ],
  },
  {
    period: "2007 – 2008",
    role: "Customer Service Expert",
    company: "Dell International Services",
    points: [
      "International billing query resolution",
      "Best Team of the Month; top client-survey feedback",
    ],
  },
];

const skills = [
  "Strategic brand management",
  "Integrated marketing & PR",
  "Media & influencer relations",
  "Team leadership & mentorship",
  "Digital & social media expertise",
  "Event planning & activation",
  "FAM trips & influencer campaigns",
  "Luxury brand marketing",
  "Corporate communications",
  "Vendor & stakeholder management",
];

const voices = [
  {
    quote:
      "Sandhya has an instinct for the sentence that makes a brand make sense. We stopped explaining ourselves and started being understood.",
    name: "Meera Krishnan",
    role: "Marketing head, hotel group",
  },
  {
    quote:
      "The press programme was calm, prepared, and relentlessly consistent. The coverage followed on its own.",
    name: "Arjun Pillai",
    role: "General manager, city hotel",
  },
  {
    quote:
      "She brought eighteen years of hospitality instinct into one room and left us with a story we could actually use.",
    name: "Rahul Menon",
    role: "Director, real estate group",
  },
];

const faq = [
  [
    "What kind of brands do you work with?",
    "Mostly hospitality, real estate, and purpose-led businesses. Hotels, resorts, restaurants, and the teams behind them, from single properties to groups.",
  ],
  [
    "Do you work with in-house teams or replace them?",
    "Alongside them. The aim is to leave your team with a clear system, the words to use it, and the confidence to keep going.",
  ],
  [
    "How long does an engagement usually run?",
    "A focused brand sprint runs a few weeks. A full brand and media programme runs across a season or longer, depending on what is already in place.",
  ],
  [
    "Can you handle media relations as well as brand work?",
    "Yes. Brand direction and media relations work best together, so both usually sit inside the same engagement.",
  ],
  [
    "How do we start?",
    "Send a note about what you are building and what is not working yet. We will talk it through and agree on the smallest useful first step.",
  ],
];

const phoneDisplay = "+91 96634 67337";
const phoneHref = "tel:+919663467337";
const email = "Sandhyanair2904@gmail.com";
const linkedin = "https://www.linkedin.com/in/sandhya-nair-033ba6156/";

const footerLinks = [
  ["Essence", "#essence"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Voices", "#voices"],
];

const footerServices = [
  "Root — Strategy & Branding",
  "Story — Content & Communications",
  "Reach — Digital & Marketing",
  "Experience — Launches & Brand Experiences",
  "Growth — Marketing & Growth Advisory",
];

function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function ImpactFigure({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const target = parseInt(value, 10);
    if (Number.isNaN(target)) return;
    const hasPlus = value.includes("+");
    const padded = (n: number) =>
      value.startsWith("0") ? String(n).padStart(2, "0") : String(n);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          const duration = 1200;
          const t0 = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(
              `${padded(Math.round(target * eased))}${hasPlus ? "+" : ""}`,
            );
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
          observer.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);
  const hasPlus = display.endsWith("+");
  return (
    <dt className="impact-figure" ref={ref}>
      {hasPlus ? display.slice(0, -1) : display}
      {hasPlus && <span className="impact-plus">+</span>}
    </dt>
  );
}

function ChatIcon() {
  return (
    <svg
      className="button-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.36-4.1-1L3 20l1.05-4.4A8.5 8.5 0 1 1 21 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10.8h.01M12 10.8h.01M15.5 10.8h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg
      className="button-icon"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="button-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="button-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m3.5 7 8.5 6 8.5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="button-icon"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      className="button-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 2.5h8L19.5 8v13.5H6V2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 2.5V8.5h5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5h6M9 15.8h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PillarIcon({ kind }: { kind: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  } as const;
  if (kind === "foundation") {
    return (
      <svg className="pillar-icon" {...common}>
        <path
          d="M12 21v-8M12 13c-4 0-7-2.5-7.5-6.5C8 7 10 9 12 9c2 0 4-2 7.5-2.5C19 10.5 16 13 12 13Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 21h7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "energy") {
    return (
      <svg className="pillar-icon" {...common}>
        <path
          d="M12 2.5c.8 4.5-.5 7-3 9.5-1.4 1.4-2 2.8-2 4.5a5 5 0 0 0 10 0c0-1.2-.4-2.2-1-3.2-.5 1-1.2 1.7-2.3 2.2.6-2.7.2-5.5-3-7.5.3 2-1.7 3-2.2 1.5C9 7 10.4 4.5 12 2.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg className="pillar-icon" {...common}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

function ImpactIcon({ kind }: { kind: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  } as const;
  if (kind === "years") {
    return (
      <svg className="impact-icon" {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 7.5V12l3 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "hotel") {
    return (
      <svg className="impact-icon" {...common}>
        <path
          d="M4 21V7l8-4 8 4v14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M4 21h16M9 21v-4h6v4M9 10.5h.01M12 10.5h.01M15 10.5h.01M9 13.5h.01M12 13.5h.01M15 13.5h.01"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "team") {
    return (
      <svg className="impact-icon" {...common}>
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M15.5 5.4a3.2 3.2 0 0 1 0 5.6M17.5 14.9c1.7.8 2.7 2.4 3 4.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg className="impact-icon" {...common}>
      <path
        d="M5 5.5h11L19.5 9v9.5H5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M16 5.5V9h3.5M8.5 12.5h7M8.5 15.5h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ServiceIcon({ kind }: { kind: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  } as const;
  if (kind === "story") {
    return (
      <svg className="service-icon" {...common}>
        <path
          d="M5 4.5h14v12H9l-4 3.5v-15.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9h7M8.5 12h4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "reach") {
    return (
      <svg className="service-icon" {...common}>
        <path
          d="M3.5 12a8.5 8.5 0 0 1 17 0"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M6.5 12a5.5 5.5 0 0 1 11 0"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
        <path
          d="M12 13.5V21M8.5 17.5h7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (kind === "experience") {
    return (
      <svg className="service-icon" {...common}>
        <path
          d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m9.5 9.5 4.8 2.5-4.8 2.5v-5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "growth") {
    return (
      <svg className="service-icon" {...common}>
        <path
          d="M4 20V4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M4 20h16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="m7 15 4-4 3 3 5-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 8H19v3.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "talk") {
    return (
      <svg className="service-icon" {...common}>
        <path
          d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.36-4.1-1L3 20l1.05-4.4A8.5 8.5 0 1 1 21 11.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg className="service-icon" {...common}>
      <path
        d="M12 21v-8M12 13c-4 0-7-2.5-7.5-6.5C8 7 10 9 12 9c2 0 4-2 7.5-2.5C19 10.5 16 13 12 13Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 21h7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandIcon({ kind }: { kind: string }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  } as const;
  switch (kind) {
    case "crown":
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="m3 8 3.5 3L12 5l5.5 6L21 8l-1.6 9.5H4.6L3 8Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M5 20.5h14"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "tower":
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="M9 3h6l1 18H8L9 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 7.5h5M9.2 11.5h5.6M8.8 15.5h6.4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "landmark":
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="m12 3 9 5H3l9-5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7M3.5 20.5h17"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "gem":
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="M7 3.5h10l4 5.5-9 11.5L3 9l4-5.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M3 9h18M12 20.5 8.5 9l2-5.5M12 20.5 15.5 9l-2-5.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tree":
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="M12 3 6.5 11h3.5L5.5 17h13L14 11h3.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M12 17v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mega":
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="M4 10v5l8 4V6l-8 4Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M12 9.5a4 4 0 0 1 6.5-1M12 14.5a4 4 0 0 0 6.5 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.5 15v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="M5 19C5 10 11 4.5 20 4.5c0 9-5.5 15-15 14.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M5 19c3.5-5.5 7.5-9.5 12-11.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg className="brands-icon" {...common}>
          <path
            d="M12 20.5s-7.5-4.6-7.5-10.3A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3.2c0 5.7-7.5 10.3-7.5 10.3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function VoicesSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = voices.length;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 5600);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const go = (step: number) =>
    setActive((current) => (current + step + count) % count);
  const current = voices[active];

  return (
    <section
      className="voices wrap"
      id="voices"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="voices-head" data-reveal>
        <p className="section-label">In their words</p>
        <h2>
          What it is like
          <br />
          <em>on the other side.</em>
        </h2>
      </div>
      <div className="voices-stage" data-reveal>
        <figure className="voice-feature">
          <span className="voice-count">
            {String(active + 1).padStart(2, "0")}
            <i> / {String(count).padStart(2, "0")}</i>
          </span>
          <blockquote key={active} className="voice-anim">
            {current.quote}
          </blockquote>
          <figcaption key={`meta-${active}`} className="voice-anim">
            <strong>{current.name}</strong>
            <span>{current.role}</span>
          </figcaption>
          <div className="voice-controls">
            <div className="voice-arrows">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous story"
              >
                &larr;
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next story">
                &rarr;
              </button>
            </div>
            <div className="voice-dots">
              {voices.map((voice, index) => (
                <button
                  key={voice.name}
                  type="button"
                  data-active={index === active}
                  onClick={() => setActive(index)}
                  aria-label={`Show story from ${voice.name}`}
                />
              ))}
            </div>
          </div>
          <div className="voice-progress" aria-hidden="true">
            {!paused && <span key={`bar-${active}`} />}
          </div>
        </figure>
        <div className="voice-cards">
          {voices.map((voice, index) => (
            <button
              key={voice.name}
              type="button"
              className="voice-card"
              data-active={index === active}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <span className="voice-card-index">0{index + 1}</span>
              <span className="voice-card-body">
                <span className="voice-card-text">{voice.quote}</span>
                <span className="voice-card-meta">
                  <strong>{voice.name}</strong>
                  <span>{voice.role}</span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [
      "#top",
      ...navLinks.map(([, href]) => href),
      "#contact",
    ];
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter((el): el is Element => el !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header" data-scrolled={scrolled || menuOpen}>
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="#top" aria-label="Karma Roots, back to top">
          <img
            className="brand-mark-img"
            src="/karma-roots-mark.svg"
            alt=""
            width="46"
            height="48"
          />
          <span className="brand-text">
            <span className="brand-word">
              <b>karma</b>
              <span>Roots</span>
            </span>
            <small>Ideas that grow, stories that stay</small>
          </span>
        </a>
        <div className="nav-links">
          {navLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              data-active={href === active}
              onClick={() => setActive(href)}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            <span className="nav-cta-label">Let's talk</span>
            <span className="nav-cta-icon" aria-hidden="true">
              <ChatIcon />
            </span>
          </a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-bars" data-open={menuOpen} aria-hidden="true">
            <i />
            <i />
          </span>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <span
          className="header-progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
          hidden
        />
      </nav>
      <div
        className="mobile-menu"
        id="site-menu"
        data-open={menuOpen}
        hidden={!menuOpen}
      >
        <div className="mobile-menu-inner wrap">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            Questions
          </a>
          <a
            className="mobile-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk{" "}
            <span className="mobile-cta-icon" aria-hidden="true">
              <ChatIcon />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero-section wrap" id="top">
          <div className="hero-media" aria-hidden="true">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/profile-image.jpg"
            >
              <source src="https://videos.pexels.com/video-files/7651891/7651891-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
            <span className="hero-veil" />
            <span className="hero-orb hero-orb-a" />
            <span className="hero-orb hero-orb-b" />
            <span className="hero-grain" />
          </div>
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              Marketing &amp; communications · 18+ years
            </p>
            <h1>
              Rooted strategy.
              <br />
              <em>Stories that stay.</em>
            </h1>
            <p className="hero-intro">
              I help hospitality and purpose-led brands find their voice, build
              their presence, and create impact that lasts beyond the campaign.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                <span className="button-label">Start a conversation</span>
                <span className="button-icon-wrap" aria-hidden="true">
                  <ChatIcon />
                </span>
              </a>
              <a
                className="button button-ghost"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="button-label">View LinkedIn</span>
                <span className="button-icon-wrap" aria-hidden="true">
                  <LinkedInMark />
                </span>
              </a>
            </div>
            <div className="hero-proof">
              <span className="hero-stars" aria-hidden="true">
                ★★★★★
              </span>
              <p>
                “Sandhya finds the sentence that makes a brand make sense.” —
                trusted across The Lalit, Radisson Blu, The Park &amp; EARA
              </p>
            </div>
            <ul className="hero-meta">
              <li>
                <strong>45+</strong>
                <span>media coverages</span>
              </li>
              <li>
                <strong>09</strong>
                <span>hospitality brands</span>
              </li>
              <li>
                <strong>18</strong>
                <span>years of craft</span>
              </li>
            </ul>
          </div>
          <figure className="hero-visual">
            <div className="portrait-stack">
              <span className="portrait-disc" aria-hidden="true" />
              <span className="portrait-ring" aria-hidden="true" />
              <div className="portrait-frame">
                <img
                  src="/profile-image.jpg"
                  alt="Sandhya Nair, marketing and communications leader"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85";
                  }}
                />
              </div>
              <span className="portrait-dot" aria-hidden="true" />
              <span
                className="portrait-chip portrait-chip-top"
                aria-hidden="true"
              >
                Brand direction
              </span>
              <span
                className="portrait-chip portrait-chip-bottom"
                aria-hidden="true"
              >
                PR &amp; media
              </span>
            </div>
            <figcaption>
              <strong>Sandhya Nair</strong>
              <span>Marketing, brand &amp; PR</span>
            </figcaption>
          </figure>
        </section>

        <section className="brands wrap" aria-label="Brand houses worked with">
          <span className="brands-glow" aria-hidden="true" />
          <p className="brands-label">
            <span className="brands-label-dot" aria-hidden="true" />
            Brand houses &amp; clients worked with
            <span className="brands-label-dot" aria-hidden="true" />
          </p>
          <div className="brands-marquee" aria-hidden="false">
            <ul>
              {brands.map((brand) => (
                <li key={brand.name}>
                  <span className="brands-chip">
                    <BrandIcon kind={brand.icon} />
                    {brand.name}
                  </span>
                  <span className="brands-dot" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <ul aria-hidden="true">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <span className="brands-chip">
                    <BrandIcon kind={brand.icon} />
                    {brand.name}
                  </span>
                  <span className="brands-dot" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="essence wrap" id="essence">
          <span className="essence-orb essence-orb-a" aria-hidden="true" />
          <span className="essence-orb essence-orb-b" aria-hidden="true" />
          <span className="essence-ring" aria-hidden="true" />
          <div className="essence-lead" data-reveal>
            <p className="section-label">Brand essence</p>
            <h2>
              More than a name.
              <br />
              <em>A belief.</em>
            </h2>
            <p className="essence-belief">
              Karma Roots is more than a name, it is a belief. Every idea, every
              brand, every creation starts with an intention{" "}
              <strong>(Karma)</strong> and grows from its foundation{" "}
              <strong>(Roots)</strong>. Purposeful action with grounded
              creativity, helping brands grow authentically, with strong roots
              and positive energy.
            </p>
            <div className="essence-words" aria-hidden="true">
              <span>Karma · intention</span>
              <i />
              <span>Roots · foundation</span>
              <i />
              <span>Growth · energy</span>
            </div>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <article
                className="pillar-card"
                key={pillar.number}
                data-reveal
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="pillar-top">
                  <span className="pillar-icon-wrap">
                    <PillarIcon kind={pillar.icon} />
                  </span>
                  <span className="pillar-number">{pillar.number}</span>
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <span className="pillar-line" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="essence-quote" data-reveal>
            <span className="essence-quote-glow" aria-hidden="true" />
            <div className="essence-quote-copy">
              <p className="essence-quote-kicker">The belief, in practice</p>
              <p>
                Good communication is not louder. <em>It is more true.</em>
              </p>
              <cite>
                With 18+ years across hospitality, lifestyle, media, and
                purpose-led organisations, Sandhya brings strategy and soul to
                every story.
              </cite>
              <div className="essence-quote-tags" aria-hidden="true">
                <span>Strategy</span>
                <span>Soul</span>
                <span>Story</span>
              </div>
            </div>
            <figure className="essence-quote-figure">
              <img
                className="essence-quote-image"
                src="/profile-image.jpg"
                alt="Sandhya Nair, founder of Karma Roots"
              />
              <figcaption>
                <strong>Sandhya Nair</strong>
                <span>Founder · Karma Roots</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="impact wrap"
          id="impact"
          aria-label="Selected impact"
        >
          <div className="impact-heading">
            <p className="section-label">Selected impact</p>
            <h2>
              Proof in the
              <br />
              <em>work itself.</em>
            </h2>
            <p className="impact-intro">
              A grounded record of the brands, teams, and stories shaped across
              hospitality, lifestyle, media, and purpose-led organisations.
            </p>
            <p className="impact-note">
              <span>01</span>
              <span>Measured in reach, trust, and lasting momentum.</span>
            </p>
          </div>
          <dl className="impact-list">
            {impact.map((item, index) => (
              <div
                className="impact-item"
                key={item.value}
                data-reveal
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="impact-top">
                  <ImpactFigure value={item.value} />
                  <span className="impact-icon-wrap">
                    <ImpactIcon kind={item.icon} />
                  </span>
                </span>
                <dd className="impact-copy">
                  <strong>{item.label}</strong>
                  <p>{item.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="services" id="services">
          <span className="services-glow" aria-hidden="true" />
          <span className="services-ring" aria-hidden="true" />
          <div className="wrap services-inner">
            <div className="section-heading">
              <div className="section-heading-lead">
                <p className="section-label">Our expertise</p>
                <p className="section-heading-note">
                  Five disciplines, one throughline: strategy, story and
                  systems that turn a good brand into the one people remember.
                </p>
                <p className="services-count" aria-hidden="true">
                  <strong>05</strong>
                  <span>core disciplines</span>
                </p>
              </div>
              <h2>
                Ideas that grow.
                <br />
                <em>Stories that stay.</em>
              </h2>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  className="service-card"
                  key={service.number}
                  data-reveal
                  style={{ animationDelay: `${(index % 3) * 80}ms` }}
                >
                  <span className="service-top">
                    <span className="service-icon-wrap">
                      <ServiceIcon kind={service.icon} />
                    </span>
                    <span className="service-number">{service.number}</span>
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul className="service-offerings">
                    {service.offerings.map((offering) => (
                      <li key={offering.title}>
                        <strong>{offering.title}</strong>
                        <span>{offering.detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work wrap" id="work">
          <div className="section-heading">
            <div className="section-heading-lead">
              <p className="section-label">Selected work</p>
              <p className="section-heading-note">
                A few moments where clear positioning, useful stories, and
                steady execution changed the conversation.
              </p>
            </div>
            <h2>
              Work that had to
              <br />
              <em>earn attention.</em>
            </h2>
          </div>
          <div className="work-list">
            {work.map((item, index) => (
              <article
                className="work-row"
                key={item.number}
                data-index={item.number}
                data-reveal
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="work-meta">
                  <span>{item.number}</span>
                  <strong>{item.client}</strong>
                  <small>{item.sector}</small>
                </div>
                <div className="work-story">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <div className="work-outcome">
                  <span>Outcome</span>
                  <p>{item.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="wrap experience-grid">
            <div className="experience-left">
              <div className="experience-image" data-reveal>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=85"
                  alt="Modern glass office corridor"
                />
                <p>
                  Always curious.
                  <br />
                  <em>Always creating.</em>
                </p>
              </div>
              <aside className="experience-aside" data-reveal>
                <p className="section-label">The throughline</p>
                <p className="experience-aside-quote">
                  Good work gets clearer with time: listen closely, choose a
                  point of view, and build the rhythm to carry it forward.
                </p>
                <div className="experience-aside-meta">
                  <strong>18+</strong>
                  <span>
                    years turning experience into useful brand momentum
                  </span>
                </div>
              </aside>
            </div>
            <div className="experience-content">
              <p className="section-label">A career in motion</p>
              <h2>
                Built on experience.
                <br />
                <em>Led by instinct.</em>
              </h2>
              <p className="experience-strap">
                Marketing &amp; Communications Leader · Strategic &amp; brand
                storytelling · Media relations · Driving brand growth · Luxury
                brand marketing · Corporate communications · Social media &amp;
                digital marketing strategist.
              </p>
              <ol className="career-list">
                {career.map((job, index) => (
                  <li key={`${job.company}-${index}`}>
                    <details
                      className="career-item"
                      open={index === 0}
                    >
                      <summary>
                        <span className="career-head">
                          <span className="career-period">{job.period}</span>
                          <span className="career-summary">
                            <strong>{job.role}</strong>
                            <small>{job.company}</small>
                          </span>
                        </span>
                        <span className="career-toggle" aria-hidden="true">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M6 1v10M1 6h10"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </summary>
                      <ul>
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ol>
              <div className="skills-block">
                <h3>Skills</h3>
                <ul className="skills-list">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-actions">
                <a className="button button-dark" href={`mailto:${email}`}>
                  <span className="button-label">Ask for the full profile</span>
                  <span className="button-icon-wrap" aria-hidden="true">
                    <FileIcon />
                  </span>
                </a>
                <a
                  className="text-link"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn{" "}
                  <span className="text-link-icon" aria-hidden="true">
                    <LinkedInMark />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <VoicesSection />

        <section className="connect" id="contact">
          <div className="wrap connect-inner">
            <div className="connect-lead">
              <p className="section-label">Have a story to tell?</p>
              <h2>
                Let's grow something
                <br />
                <em>meaningful.</em>
              </h2>
              <p className="contact-note">
                Tell me what you are building and what is not working yet. If it
                is a fit, we will find the smallest useful first step.
              </p>
              <div className="connect-actions">
                <a className="button button-dark" href={`mailto:${email}`}>
                  <span className="button-label">Email Sandhya</span>
                  <span className="button-icon-wrap" aria-hidden="true">
                    <MailIcon />
                  </span>
                </a>
                <a className="button button-ghost" href={phoneHref}>
                  <span className="button-icon-wrap" aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <span className="button-label">{phoneDisplay}</span>
                </a>
              </div>
              <a className="contact-email" href={`mailto:${email}`}>
                {email}{" "}
                <span className="contact-email-icon" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </a>
              <a className="contact-phone" href={phoneHref}>
                {phoneDisplay}
              </a>
            </div>
            <div className="connect-faq" id="faq">
              <h3>Worth asking before we start</h3>
              <div className="faq-list">
                {faq.map(([question, answer]) => (
                  <details key={question}>
                    <summary>
                      {question}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-media" aria-hidden="true">
          <span className="footer-orb footer-orb-a" />
          <span className="footer-orb footer-orb-b" />
          <span className="footer-orb footer-orb-c" />
          <span className="footer-beam" />
          <span className="footer-grain" />
          <span className="footer-giant">roots</span>
        </div>
        <div className="wrap footer-inner">
          <div className="footer-lead">
            <img
              className="footer-mark"
              src="/karma-roots-mark.svg"
              alt=""
              width="64"
              height="67"
            />
            <span className="brand-word footer-word">
              <b>karma</b>
              <span>Roots</span>
            </span>
            <p>
              Brand and communications for hospitality and purpose-led teams.
              Ideas that grow, stories that stay.
            </p>
            <a className="footer-mail" href={`mailto:${email}`}>
              {email}
            </a>
            <a className="footer-phone" href={phoneHref}>
              {phoneDisplay}
            </a>
            <div className="footer-social">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInMark />
              </a>
              <a href={`mailto:${email}`} aria-label="Email">
                <MailIcon />
              </a>
              <a href={phoneHref} aria-label="Call">
                <PhoneIcon />
              </a>
            </div>
          </div>
          <nav className="footer-col" aria-labelledby="footer-explore">
            <h2 id="footer-explore">Explore</h2>
            <ul>
              {footerLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-col">
            <h2 id="footer-services">Services</h2>
            <ul className="footer-plain">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2 id="footer-connect">Connect</h2>
            <ul>
              <li>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`}>Email</a>
              </li>
              <li>
                <a href={phoneHref}>{phoneDisplay}</a>
              </li>
            </ul>
            <a className="to-top" href="#top">
              <span>Back to top</span>
              <span className="to-top-icon" aria-hidden="true">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
        <div className="wrap footer-base">
          <span>&copy; 2026 Karma Roots &middot; Sandhya Nair</span>
          <span className="footer-tagline">
            Ideas that grow, stories that stay.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
