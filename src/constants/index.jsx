import { BotMessageSquare } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { GlobeLock } from "lucide-react";


export const navItems = [
  { label: "Home", href: "/" },
  // { label: "Analyzer", href: "/analyzer" },
  { label: "Classifier", href: "/classifier" },
  { label: "Open Assist", href: "/assist" },
  { label: "About", href: "/about" },
];



export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Optimized Medical Assistant",
    description:
      "Effortlessly get your medical assistance environments with a user-friendly interface offered by MediTech, enhanced by AI.",
  },
  {
    icon: <ShieldHalf />,
    text: "AI Medical Image Classifier",
    description:
      "Jumpstart on our services with a variety of built-in classifiers specifically designed for different medical applications and scenarios.",
  },
  {
    icon: <GlobeLock />,
    text: "Smart AI Medical Analyzer",
    description:
      "Gain valuable insights within our medical assistant applications with an integrated analytics systems powered by advanced AI algorithms.",
  },
];
