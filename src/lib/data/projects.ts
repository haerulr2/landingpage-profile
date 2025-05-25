import { projects } from "../data";

export const projectsList: projects[] = [
  {
    title: "PayTrack Dashboard",
    description: "Stripe-inspired dashboard app to showcase frontend architecture and real-world UI logic: metric cards, charts, filters, pagination, dark mode.",
    image: "/images/pay-track.png",
    link: "https://pay-track-eta.vercel.app",
    tech: ["Next.js", "Tailwind", "Recharts", "Framer Motion"]
  },
  {
    title: "Haerul Blogs",
    description: "Markdown-based personal blog prototype with clean layout and responsive design, built for writing, sharing, and showcasing tech notes.",
    image: "https://placehold.co/600x400.png",
    link: "",
    tech: ["Next.js", "Tailwind", "MDX"]
  }
];