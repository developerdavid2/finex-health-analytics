import type { LucideIcon } from "lucide-react";

export interface Ebook {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  thumbnails: string[];
  shortDescription: string;
  longDescription: string;
  story: string;
  purpose: string;
  heritage: string;
  audience: string;
  whyMatters: string[];
  pricing: { type: string; price: string; link: string }[];
  bonuses: string[];
  proceeds: string;
  author: { name: string; bio: string; photo?: string };
  cta: string;
  className?: string;
  icon?: LucideIcon; // Optional if using icons like in milestones
}

export const ebooksData: Ebook[] = [
  {
    id: "naija-football-renaissance",
    slug: "naija-football-renaissance",
    title: "Naija Football Renaissance",
    subtitle: "The Untold Story of Nigerian Football",
    cover: "/ebooks/ebook-1.webp",
    thumbnails: [
      "/images/ebooks/naija-ebook.jpg",
      "/images/ebooks/naija-paperback.jpg",
      "/images/ebooks/naija-hardcover.jpg",
      "/images/ebooks/naija-collector.jpg",
    ],
    shortDescription:
      "From grassroots to glory. From police barracks to international stadiums. Discover the untold story of Nigerian football, from the dusty Police Detective College Uwani, Enugu pitches to the bright lights of international glory.",
    longDescription:
      "NIGERIA’S FOOTBALL STORY IS NOT OVER — A NEW ERA IS RISING. For decades, Nigerian football has lived at the intersection of talent, passion, heartbreak, and hope. From the golden eras of the 1980s and 1990s to the turbulence of the 2000s, the Nigerian game has carried the dreams of millions yet struggled to reclaim its rightful place on the global stage. Naija Football Renaissance is a powerful, deeply personal journey into the past, present, and future of Nigerian football, blending storytelling, sports memory, grassroots experience, analytics, and national pride.",
    story:
      "This is more than a book; it is a movement to preserve our football heritage, honor our forgotten fields, and inspire the next generation of Naija football legends. Every dusty pitch. Every childhood rivalry. Every legendary field. Every unforgettable moment of passion, unity, and community. All captured. All preserved. All celebrated. This book is a living archive — a tribute to Nigerian football history, grassroots identity, and the timeless spirit of Naija sportsmanship.",
    purpose:
      "The Renaissance Begins Now. Naija Football Renaissance — A story of legacy, leadership, and national pride. The Naija Football Renaissance is not an idea — it has officially begun.",
    heritage:
      "From the streets of Enugu to the world stage — this is the story of how passion, purpose, and perseverance can rebuild a nation’s pride. Every fan. Every player. Every dreamer. Join me on this journey to spark a football renaissance that begins with you.",
    audience:
      "If you love football, Nigeria, storytelling, culture, or national transformation, this book is for you. Whether you’re a fan, coach, analyst, or policymaker, your voice matters.",
    whyMatters: [
      "authentic grassroots football history",
      "rare archival photographs",
      "Nigerian cultural heritage",
      "powerful storytelling",
      "community memories",
      "a blueprint for the rebirth of Nigerian football",
    ],
    pricing: [
      {
        type: "E-Book",
        price: "$39.99",
        link: "https://funnel-flight-plan.lovable.app/",
      },
      {
        type: "Premium Paperback",
        price: "$59.99",
        link: "https://funnel-flight-plan.lovable.app/",
      },
      {
        type: "Collector's Edition Hardcover",
        price: "$99.99",
        link: "https://funnel-flight-plan.lovable.app/",
      },
    ],
    bonuses: ["Quick-Action Playbook", "Digital Poster"],
    proceeds:
      "A portion of proceeds will be used to support the families of fallen beloved ones who left behind wives and children. And in honor of the loved ones named in the dedication, a portion of the proceeds will support their families, ensuring their memory continues to bless others.",
    author: {
      name: "Chris N. Anazia",
      bio: "Author | Founder, Beyond Scoreline & NaijaBallNation. Chris Nnamdi Anazia is a multidisciplinary leader, visionary, thinker, and innovator with a deep passion for digital transformation, sports development, and public health advancement. A dynamic professional whose career spans payment card and digital technology, e-payment systems, analytics, informatics, healthcare advocacy, and cybersecurity. Chris brings a rare blend of technical expertise, strategic foresight, and human-centered leadership to every project he undertakes.",
      photo: "/authors/chris-anazia.png",
    },
    cta: "Join the Movement. Revive the Game. Reignite the Spirit. Get your copy now and be part of the new generation rewriting our football story.",
    className: "",
    // icon: optional, add if needed
  },
  // Add more e-books here as they are produced
];
