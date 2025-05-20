import {
  FaChartBar,
  FaShieldAlt,
  FaCreditCard,
  FaRobot,
  FaDatabase,
  FaChalkboardTeacher,
  FaAmbulance,
  FaHeartbeat,
  FaHandsHelping,
  FaUserShield,
  FaSlidersH,
  FaLaptopCode,
  FaPlayCircle,
  FaBookOpen,
  FaCertificate,
  FaUserGraduate,
} from "react-icons/fa";
import { IconType } from "react-icons";

export const servicesMenu = [
  {
    title: "Healthcare Data Analytics & BI",
    description:
      "AI-powered insights from clinical and operational data to optimize care and reduce costs.",
    href: "/services#analytics",
    icon: FaChartBar,
  },
  {
    title: "Cybersecurity for Digital Health",
    description:
      "End-to-end security solutions including compliance, encryption, and threat prevention.",
    href: "/services#cybersecurity",
    icon: FaShieldAlt,
  },
  {
    title: "Healthcare E-Payment & Fintech",
    description:
      "Fraud-proof payment systems, digital wallets, and revenue cycle optimization tools.",
    href: "/services#fintech",
    icon: FaCreditCard,
  },
  {
    title: "Predictive Analytics & AI",
    description:
      "Forecasting tools for disease patterns, patient outcomes, and resource planning.",
    href: "/services#ai",
    icon: FaRobot,
  },
  {
    title: "Health Informatics & EHR Optimization",
    description:
      "Improving interoperability and streamlining workflows through smarter EHR systems.",
    href: "/services#informatics",
    icon: FaDatabase,
  },
  {
    title: "Training & Capacity Building",
    description:
      "Workshops and programs to train teams in analytics, cybersecurity, and digital health.",
    href: "/services#training",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Medical Transportation Analytics",
    description:
      "Optimize patient transport and emergency logistics using real-time data and AI.",
    href: "/services#transport",
    icon: FaAmbulance,
  },
  {
    title: "Rehabilitation & Wellness Recovery",
    description:
      "Data-informed recovery programs to support therapy and post-acute care outcomes.",
    href: "/services#rehab",
    icon: FaHeartbeat,
  },
  {
    title: "Sports Promotion, Engagement and Education (SPEED)",
    description:
      "Partnering to deliver humanitarian services and organize wellness/sporting events.",
    href: "/services#speed",
    icon: FaHandsHelping,
  },
];

export interface FintechStep {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  image: string; // Lottie/SVG or static fallback
  altText: string;
}

export const fintechFlowSteps: FintechStep[] = [
  {
    id: 0,
    title: "Onboard & Authenticate",
    description:
      "Securely register your healthcare organization and verify access credentials on our encrypted web portal.",
    icon: FaUserShield,
    image: "/images/health-record.jpeg", // or /assets/images/secure-login.svg
    altText: "Secure Web Login",
  },
  {
    id: 1,
    title: "Set Transaction Preferences",
    description:
      "Customize payment rules, revenue streams, and automation logic to suit your organization’s needs.",
    icon: FaSlidersH,
    image: "/images/custom-dashboard.jpg",
    altText: "Settings Preferences Panel",
  },
  {
    id: 2,
    title: "Initiate Smart Payments",
    description:
      "Process fraud-resistant payments via card, digital wallet, or automated billing systems.",
    icon: FaCreditCard,
    image: "/images/credit-card.jpg",
    altText: "Online Payment Gateway",
  },
  {
    id: 3,
    title: "Track & Report in Real Time",
    description:
      "Monitor payment activity, revenue metrics, and audit trails via a real-time analytics dashboard.",
    icon: FaChartBar,
    image: "/images/track.jpg",
    altText: "Finance Reporting Dashboard",
  },
];

export const healthInformatics = [
  {
    title: "Workflow Intelligence",
    description:
      "Streamline daily clinical operations with unified workflows that reduce friction and boost efficiency.",
    image: "/images/workflow.jpg",
    className: "col-span-full lg:col-span-3",
  },
  {
    title: "EHR Interoperability",
    description:
      "Enable seamless exchange of patient data across platforms and devices through smart informatics.",
    image: "/images/ehr.jpg",
    className: "col-span-full lg:col-span-3",
  },
  {
    title: "Outcome Optimization",
    description:
      "Leverage digital records to drive better diagnosis, treatment plans, and measurable outcomes.",
    image: "/images/integrated.gif",
    className: "col-span-full lg:col-span-full",
  },
];

export const trainingFeatures = [
  {
    id: "0",
    icon: FaChalkboardTeacher,
    caption: "Capacity Development",
    title: "Upskill Healthcare Professionals",
    text: "Through intensive workshops, Finex equips clinical and technical teams with the tools to implement, analyze, and sustain digital health innovations.",
    button: {
      icon: FaPlayCircle,
      title: "View Programs",
    },
  },
  {
    id: "1",
    icon: FaLaptopCode,
    caption: "Flexible Learning",
    title: "Learn Anytime, Anywhere",
    text: "Our modular e-learning platform supports self-paced learning, virtual mentorship, and resource access for long-term team growth and autonomy.",
    button: {
      icon: FaBookOpen,
      title: "Explore Modules",
    },
  },
];

export const trainingDetails = [
  {
    id: "0",
    icon: FaChalkboardTeacher,
    title: "Mentorship Sessions",
  },
  {
    id: "1",
    icon: FaUserGraduate,
    title: "Live Expert-Led Workshops",
  },
  {
    id: "2",
    icon: FaBookOpen,
    title: "Access to Resources",
  },
  {
    id: "3",
    icon: FaCertificate,
    title: "Certification on Completion",
  },
];
