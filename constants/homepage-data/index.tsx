import { FaChartLine, FaUserMd, FaRobot, FaDatabase } from "react-icons/fa";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaqItemProps } from "@/components/sections/home/faq-item";

export const heroButtons = [
  { label: "Brain", slug: "brain" },
  { label: "Heart", slug: "heart" },
  { label: "Lungs", slug: "lungs" },
  { label: "Liver", slug: "liver" },
  { label: "Kidney", slug: "kidney" },
];

export const logos = [
  {
    id: "0",
    title: "Afterpay",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "Amplitude",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Sonos",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "Maze",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Drips",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];

export const aboutSections = [
  {
    Icon: FaUserMd,
    name: "Policy Advisory",
    description:
      "Providing strategic guidance on healthcare financing & sustainability to enhance financial viability.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="flex justify-center items-center bg-gray-100 absolute inset-0 object-cover w-full h-full">
        <DotLottieReact
          src="/lotties/policy.lottie" // <-- replace this with your actual path
          autoplay
          loop
        />
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FaChartLine,
    name: "Healthcare Data Analytics",
    description:
      "Leveraging AI and machine learning to extract actionable insights from complex healthcare data.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        width={400}
        height={400}
        className="absolute inset-0 object-cover min-h-full mask-b-from-50% mask-b-to-100% w-full"
        src="/images/brain-ai.png"
        alt="brain-ai"
        loading="lazy"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FaRobot,
    name: "Health Informatics",
    description:
      "EHR optimization, health informatics consulting, and interoperability solutions for better data sharing.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        width={400}
        height={400}
        className="absolute inset-0 object-cover min-h-full mask-b-from-50% mask-b-to-100% w-full"
        src="/images/health-record.jpeg"
        alt="health-record"
        priority={true}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: FaDatabase,
    name: "AI-Driven Healthcare",
    description:
      "Predictive analytics and AI for healthcare decision-making, risk stratification, and operational forecasting.",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="flex justify-center items-center bg-gray-100 absolute inset-0 object-cover w-full min-h-full">
        <div className="relative w-full max-w-md mx-auto xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-xl 2xl:max-w-2xl">
          <DotLottieReact
            src="/lotties/robot.lottie"
            autoplay
            loop
            className="w-full h-auto"
            style={{ maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
];

export const outlinedServices = [
  { label: "Informatics", slug: "informatics" },
  { label: "Policy Advisory", slug: "policy" },
  { label: "Capacity", slug: "training" },
  { label: "Integration", slug: "ai" },
  { label: "Health Projects", slug: "community" },
];

export const services = [
  {
    id: 1,
    title: "Healthcare Data Analytics",
    description:
      "Turn complex healthcare data into actionable insights to optimize care, cut costs, and drive smarter decisions.",
    image: "/images/health-analytics.jpeg",
    alt: "Healthcare Data Analytics",
    stat: "90%",
    statDescription:
      "healthcare leaders believe AI will improve good health decisions.",
  },
  {
    id: 2,
    title: "E-Payment & Fintech Solutions for Healthcare",
    description:
      "Streamline healthcare payments, prevent fraud, and improve financial efficiency with digital-first solutions.",
    image: "/images/e-payment.jpeg",
    alt: "E-Payment & Fintech Solutions",
  },
  {
    id: 3,
    title: "Cybersecurity Solutions for Digital Health Systems",
    description:
      "Protect sensitive health data and ensure full compliance with robust, AI-powered cybersecurity frameworks.",
  },
  {
    id: 4,
    title: "Sports Promotion, Engagement and Education (SPEED)",
    description:
      "We promote wellness through sports, education, and community engagement by supporting talent, partnering with NGOs, and sponsoring programs.",
    image: "/images/speed.jpeg",
    alt: "SPEED Wellness",
    link: "/services/#speed",
  },
];

// faqData.ts
export const faqData: FaqItemProps[] = [
  {
    id: 1,
    question: "What services does Finex offer to healthcare institutions?",
    answer:
      "Finex provides services such as healthcare data analytics, digital health strategy, cybersecurity, e-payment system integration, policy advisory, and professional training—empowering institutions to improve care, efficiency, and compliance.",
  },
  {
    id: 2,
    question:
      "How does Finex ensure data privacy and cybersecurity for hospitals?",
    answer:
      "Finex implements industry-standard security protocols including HIPAA, PCI DSS, and GDPR compliance, along with risk assessments, encryption, penetration testing, and tailored cybersecurity frameworks for digital health systems.",
  },
  {
    id: 3,
    question:
      "Can Finex customize solutions for small or medium-sized healthcare providers?",
    answer:
      "Yes, Finex offers modular and scalable services that are designed to fit the unique needs of small to medium-sized healthcare organizations, ensuring cost-effectiveness without compromising on innovation or compliance.",
  },
  {
    id: 4,
    question:
      "What makes Finex different from other healthcare consulting firms?",
    answer:
      "Finex combines expertise in healthcare analytics, AI, cybersecurity, and fintech. Unlike most firms, it delivers end-to-end solutions including fraud prevention, financing optimization, and training—especially focused on underserved and emerging markets.",
  },
  {
    id: 5,
    question: "How can my organization work with Finex?",
    answer:
      "Start by contacting Finex for a discovery consultation. We assess your needs, propose a tailored roadmap, and offer implementation, training, and ongoing support for your healthcare transformation journey.",
  },
];
export const whyChooseFinex = [
  {
    title: "Integrated Expertise in Healthcare, Fintech, and Cybersecurity",
    description:
      "Finex combines analytics, digital health transformation, financial strategy, and advanced cybersecurity into one powerful service suite. Unlike most consulting firms that specialize in just one area, we offer comprehensive, cross-functional expertise tailored to the unique challenges in modern healthcare. Our solutions are built on a foundation of HIPAA/GDPR, PCI DSS compliance, AI-powered decision intelligence, and real-time risk mitigation.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="my-6 ">
          <Image
            width={100}
            height={100}
            src="/images/integrated.gif"
            alt="Integrated Expertise"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
          {/* Alternative for using an icon component:
          <HealthcareIcon className="w-16 h-16 text-cyan-600" /> */}
        </div>
        <div className="font-semibold text-xl">
          Full-Spectrum Digital Health Expertise
        </div>
      </div>
    ),
  },
  {
    title: "Affordable, Scalable, and Customizable Solutions",
    description:
      "Whether you're a small rural clinic or a large hospital network, Finex offers cost-effective, modular packages designed to scale. Our subscription-based consulting models, flexible pricing, and tailored service tiers ensure that institutions of all sizes benefit from advanced technology without straining budgets. We empower underserved and emerging markets with scalable innovation.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={100}
            height={100}
            src="/images/scalable.jpeg"
            alt="Scalable Solutions"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Scalable Innovation for Every Institution
        </div>
      </div>
    ),
  },
  {
    title: "Training & Capacity Building for Long-Term Impact",
    description:
      "Finex goes beyond service delivery by investing in people. We offer hands-on training, workshops, and upskilling programs in healthcare analytics, cybersecurity, and e-payment systems. This ensures that our clients aren't just using technology — they're mastering it, building internal capabilities, and creating a sustainable digital future.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={900}
            height={900}
            src="/images/medical-training.jpeg"
            alt="Training & Education"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Empowering Through Education
        </div>
      </div>
    ),
  },
  {
    title: "NGO & Community Collaboration for Social Impact",
    description:
      "Beyond tech, Finex partners with NGOs and community organizations to deliver humanitarian services and organize wellness-focused sporting events. These initiatives promote public health, drive awareness, and foster holistic wellbeing in both urban and underserved regions. We believe that innovation should uplift communities, not just enterprises.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={100}
            height={100}
            src="/images/sporting.jpg"
            alt="Community Impact"
            className="w-[300px] h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="font-semibold text-xl">
          Social Wellness & Community Engagement
        </div>
      </div>
    ),
  },
  {
    title: "AI-Powered Solutions that Drive Smarter Decisions",
    description:
      "At the core of Finex's platform is intelligence. We leverage machine learning, predictive analytics, and big data to improve decision-making, reduce fraud, and drive better patient and financial outcomes. Our AI models adapt to new information and continuously improve — offering our clients a dynamic edge in a rapidly changing industry.",
    content: (
      <div className="flex flex-col h-full w-full items-center justify-center text-neutral-800 p-4 text-center">
        <div className="mb-6">
          <Image
            width={100}
            height={100}
            src="/images/ai-model.gif"
            alt="AI Solutions"
            className="w-[300px] h-[200px] object-cover rounded-xl"
            unoptimized
          />
        </div>
        <div className="font-semibold text-xl">
          Smarter Systems with Predictive AI
        </div>
      </div>
    ),
  },
];

import { Lightbulb, ShieldCheck, Handshake, Activity } from "lucide-react";
import Image from "next/image";

export interface CoreValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const coreValues: CoreValueCard[] = [
  {
    title: "Innovation",
    description:
      "We embrace emerging technologies and creative thinking to develop smarter, more sustainable healthcare solutions.",
    icon: <Lightbulb className="w-10 h-10 text-red-600/30" />,
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in everything we do—ensuring trust, transparency, and accountability.",
    icon: <ShieldCheck className="w-10 h-10 text-red-600/30" />,
  },
  {
    title: "Collaboration",
    description:
      "We partner with hospitals, governments, fintechs, and NGOs to co-create impactful health solutions.",
    icon: <Handshake className="w-10 h-10 text-red-600/30" />,
  },

  {
    title: "Community Impact",
    description:
      "Beyond business, we collaborate with NGOs to host health-driven sporting events and public wellness campaigns.",
    icon: <Activity className="w-10 h-10 text-red-600/30" />,
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Brian",
    username: "@johnbrian",
    body: "I'm at a loss for words. Amazing healthcare analytics. I love it.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Jane Ranne",
    username: "@janeranne",
    body: "This blew my mind. Clean, smart, and seamless delivery.",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Jenny Smith",
    username: "@jennysmith",
    body: "Their insights transformed our decision-making process.",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "James Fisher",
    username: "@jamesfisher",
    body: "Exceptional service. The team truly understands healthcare.",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];
