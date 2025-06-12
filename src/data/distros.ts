import type { IconType } from "react-icons";
import { FaDragon, FaFedora, FaInfinity, FaLeaf, FaLinux, FaPaw, FaUbuntu } from "react-icons/fa";

export type Distro = {
  id: string;
  name: string;
  description: string;
  traits: string[];
  color: string;
  icon: IconType;
  personality: string;
  quote: string;
}

const distros: Distro[] = [
  {
    id: "ubuntu",
    name: "Ubuntu",
    description: "Friendly, stable, and community-focused. Perfect for beginners!",
    traits: ["user-friendly", "stable", "community-driven"],
    color: "from-orange-500 to-orange-700",
    icon: FaUbuntu,
    personality: "You're approachable and value simplicity and reliability. Ubuntu matches your preference for a system that just works without unnecessary complexity. Like Ubuntu, you believe technology should empower everyone.",
    quote: "For human beings by human beings"
  },
  {
    id: "arch",
    name: "Arch Linux",
    description: "Minimalist DIY enthusiast. You build exactly what you want.",
    traits: ["customizable", "minimalist", "bleeding-edge"],
    color: "from-blue-400 to-blue-600",
    icon: FaLinux,
    personality: "You're a tinkerer who loves complete control. Arch Linux matches your desire to build things exactly your way. Like Arch, you value simplicity, transparency and having full control over your environment.",
    quote: "Keep it simple, stupid"
  },
  {
    id: "fedora",
    name: "Fedora",
    description: "Innovator who loves new tech. The pioneer's choice.",
    traits: ["cutting-edge", "developer-friendly", "modern"],
    color: "from-blue-500 to-blue-700",
    icon: FaFedora,
    personality: "You're an innovator who loves being on the cutting edge. Fedora matches your enthusiasm for new technologies and forward-thinking approaches. Like Fedora, you're not afraid to embrace change and push boundaries.",
    quote: "Freedom. Friends. Features. First."
  },
  {
    id: "mint",
    name: "Linux Mint",
    description: "Practical, comfortable, and efficient. The reliable workhorse.",
    traits: ["user-friendly", "efficient", "pragmatic"],
    color: "from-green-500 to-green-700",
    icon: FaLeaf,
    personality: "You value practicality and comfort over flashy features. Linux Mint matches your preference for a system that just gets out of your way and lets you work. Like Mint, you believe technology should serve you, not the other way around.",
    quote: "From freedom came elegance"
  },
  {
    id: "kali",
    name: "Kali Linux",
    description: "Security-focused expert with specialized needs.",
    traits: ["secure", "specialized", "powerful"],
    color: "from-purple-500 to-purple-700",
    icon: FaDragon,
    personality: "You're a security-conscious professional who needs powerful tools. Kali Linux matches your focus on penetration testing and digital forensics. Like Kali, you're not afraid to dive deep into complex systems.",
    quote: "The quieter you become, the more you are able to hear"
  },
  {
    id: "tails",
    name: "Tails OS",
    description: "Privacy advocate who values anonymity above all.",
    traits: ["private", "secure", "portable"],
    color: "from-yellow-500 to-yellow-700",
    icon: FaPaw,
    personality: "You prioritize privacy and security in everything you do. Tails OS matches your need for anonymity and leaving no digital footprint. Like Tails, you believe privacy is a fundamental right.",
    quote: "Privacy is not an option, and it shouldn't be the price we accept for just getting on the internet"
  },
  {
    id: "gentoo",
    name: "Gentoo",
    description: "Ultimate control seeker who builds from source.",
    traits: ["customizable", "optimized", "source-based"],
    color: "from-cyan-400 to-blue-600",
    icon: FaInfinity,
    personality: "You're a perfectionist who wants complete control over your system. Gentoo matches your desire to compile everything from source for ultimate optimization. Like Gentoo, you believe in doing things your way.",
    quote: "Choice, not chance, determines destiny"
  }
];

export default distros