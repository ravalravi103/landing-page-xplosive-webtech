import type { IconType } from "react-icons";
import {
  SiReact, SiNodedotjs, SiAngular, SiMongodb, SiExpress,
  SiTypescript, SiJavascript, SiSpring, SiPhp, SiLaravel,
  SiPython, SiDjango, SiFlask, SiTensorflow, SiPytorch,
  SiScikitlearn, SiPandas, SiMysql, SiPostgresql,
  SiDocker, SiGit, SiCplusplus, SiOpenjdk,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BrainCircuit, Layers, Network, Database, Code2 } from "lucide-react";

type Tech = {
  name: string;
  icon: IconType | React.FC<{ size?: number; className?: string }>;
  color: string;
};

const row1: Tech[] = [
  { name: "React",        icon: SiReact,         color: "#61DAFB" },
  { name: "Node.js",      icon: SiNodedotjs,     color: "#339933" },
  { name: "MongoDB",      icon: SiMongodb,       color: "#47A248" },
  { name: "Express.js",   icon: SiExpress,       color: "#888888" },
  { name: "Angular",      icon: SiAngular,       color: "#DD0031" },
  { name: "TypeScript",   icon: SiTypescript,    color: "#3178C6" },
  { name: "JavaScript",   icon: SiJavascript,    color: "#F7DF1E" },
  { name: "Java",         icon: SiOpenjdk,       color: "#ED8B00" },
  { name: "Spring Boot",  icon: SiSpring,        color: "#6DB33F" },
  { name: "PHP",          icon: SiPhp,           color: "#777BB4" },
  { name: "Laravel",      icon: SiLaravel,       color: "#FF2D20" },
  { name: "Python",       icon: SiPython,        color: "#3776AB" },
  { name: "Django",       icon: SiDjango,        color: "#44B78B" },
  { name: "Flask",        icon: SiFlask,         color: "#999999" },
];

const row2: Tech[] = [
  { name: "TensorFlow",        icon: SiTensorflow,          color: "#FF6F00" },
  { name: "PyTorch",           icon: SiPytorch,             color: "#EE4C2C" },
  { name: "Scikit-learn",      icon: SiScikitlearn,         color: "#F7931E" },
  { name: "Pandas",            icon: SiPandas,              color: "#150458" },
  { name: "MySQL",             icon: SiMysql,               color: "#4479A1" },
  { name: "PostgreSQL",        icon: SiPostgresql,          color: "#336791" },
  { name: "AWS",               icon: FaAws,                 color: "#FF9900" },
  { name: "Docker",            icon: SiDocker,              color: "#2496ED" },
  { name: "Git",               icon: SiGit,                 color: "#F05032" },
  { name: "C / C++",           icon: SiCplusplus,           color: "#00599C" },
  { name: "AI / ML",           icon: BrainCircuit,          color: "#A78BFA" },
  { name: "DSA",               icon: Code2,                 color: "#34D399" },
  { name: "System Design",     icon: Network,               color: "#60A5FA" },
  { name: "Solution Architect",icon: Layers,                color: "#F472B6" },
  { name: "Database",          icon: Database,              color: "#6EE7B7" },
];

const Chip = ({ name, icon: Icon, color }: Tech) => (
  <span className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/50 bg-background/70 text-secondary text-lg font-semibold whitespace-nowrap shadow-soft mx-3 backdrop-blur-sm select-none">
    {/* @ts-ignore — lucide and react-icons share compatible prop shapes */}
    <Icon size={26} style={{ color }} />
    {name}
  </span>
);

const TechStack = () => (
  <section className="py-10 bg-muted/20 overflow-hidden">
    <div className="container-tight mb-7 text-center">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
        Tech Stack
      </span>
      <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-secondary">
        Technologies we <span className="text-gradient">teach &amp; train</span>
      </h2>
    </div>

    {/* Edge fade mask */}
    <div
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      {/* Row 1 — scrolls left */}
      <div className="flex mb-3 overflow-hidden">
        <div className="flex animate-marquee">
          {row1.map((t) => <Chip key={t.name} {...t} />)}
          {row1.map((t) => <Chip key={`${t.name}-d`} {...t} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse">
          {row2.map((t) => <Chip key={t.name} {...t} />)}
          {row2.map((t) => <Chip key={`${t.name}-d`} {...t} />)}
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
