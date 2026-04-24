import { Card } from "@/components/ui/card";
import { Code2, Server, Layers, Cloud, Network, Brain, ArrowUpRight, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Code2,
    title: "Frontend Development + AI",
    duration: "3 Months",
    mode: "Offline · 1:1",
    outcome: "Job-ready Frontend Engineer",
    features: ["React & Next.js", "TypeScript", "Tailwind & UI Systems", "AI-assisted dev workflows"],
    accent: false,
  },
  {
    icon: Server,
    title: "Backend Development + AI",
    duration: "3 Months",
    mode: "Offline · 1:1",
    outcome: "Backend Engineer Role",
    features: ["Node.js & NestJS", "PostgreSQL & Redis", "REST + GraphQL APIs", "AI integrations"],
    accent: false,
  },
  {
    icon: Layers,
    title: "Full Stack Development + AI",
    duration: "6 Months",
    mode: "Offline · 1:1",
    outcome: "Full Stack Engineer",
    features: ["End-to-end React + Node", "System design basics", "Production deployments", "Capstone projects"],
    accent: true,
    badge: "Hero Product",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    duration: "3 Months",
    mode: "Offline · 1:1",
    outcome: "Cloud / DevOps Roles",
    features: ["AWS Core Services", "Docker & Kubernetes", "CI/CD Pipelines", "Infra as Code"],
    accent: false,
  },
  {
    icon: Network,
    title: "Solution Architecture",
    duration: "2 Months",
    mode: "Offline · 1:1",
    outcome: "Senior IC / Architect track",
    features: ["System Design", "Scalability patterns", "Microservices", "Trade-off analysis"],
    accent: false,
  },
  {
    icon: Brain,
    title: "SE Principles + Mindset",
    duration: "1 Month",
    mode: "Offline · 1:1",
    outcome: "Senior engineering thinking",
    features: ["Clean code & SOLID", "Git, testing, agile", "Modern tooling", "Engineering mindset"],
    accent: false,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 gradient-radial -z-10" />
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">Our Programs</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            Career-aligned tracks built for <span className="text-gradient">real outcomes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every program is offline, mentor-led and project-based — designed to take you from beginner to confident, hireable engineer.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.title}
                className={`group relative p-6 gradient-card border-border/70 transition-smooth hover:-translate-y-1 hover:shadow-elevated animate-fade-in-up ${
                  p.accent ? "ring-2 ring-accent/40 shadow-accent-glow" : "shadow-soft"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {p.badge && (
                  <span className="absolute -top-3 right-4 gradient-accent text-accent-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-soft">
                    {p.badge}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl grid place-items-center mb-5 ${p.accent ? "gradient-accent" : "gradient-primary"} text-primary-foreground shadow-card`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-secondary">{p.title}</h3>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.duration}</span>
                  <span className="inline-flex items-center gap-1">· {p.mode}</span>
                </div>

                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="font-medium text-secondary">{p.outcome}</span>
                </div>

                <a href="#cta" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-smooth">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </a>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#cta">Talk to a Mentor</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
