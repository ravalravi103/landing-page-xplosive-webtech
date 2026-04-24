import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const modules = [
  { phase: "Phase 1 · Foundations", weeks: "Weeks 1–3", topics: ["Modern JavaScript & TypeScript", "Git, CLI & engineering workflow", "HTML/CSS & responsive UI", "Problem-solving fundamentals"] },
  { phase: "Phase 2 · Frontend Mastery", weeks: "Weeks 4–6", topics: ["React 18 + Hooks", "Next.js App Router", "State, forms & data fetching", "Component design systems"] },
  { phase: "Phase 3 · Backend Engineering", weeks: "Weeks 7–9", topics: ["Node.js + NestJS APIs", "PostgreSQL & data modeling", "Authentication & authorization", "Caching, queues & background jobs"] },
  { phase: "Phase 4 · Cloud, AI & Capstone", weeks: "Weeks 10–13", topics: ["AWS deployment & CI/CD", "AI APIs & LLM integration", "System design fundamentals", "Capstone project + interview prep"] },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-20 md:py-28">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">Curriculum</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            A 90-day path to <span className="text-gradient">becoming hireable</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Structured into 4 phases. Every week ships a project, every phase moves you closer to your first offer.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {modules.map((m, i) => (
            <Card
              key={m.phase}
              className="p-6 md:p-8 gradient-card border-border/70 shadow-soft hover:shadow-card transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-accent">{m.weeks}</div>
                  <h3 className="mt-1 font-display text-xl font-bold text-secondary">{m.phase}</h3>
                </div>
                <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground grid place-items-center font-display font-bold shadow-card flex-shrink-0">
                  {i + 1}
                </div>
              </div>
              <ul className="mt-5 space-y-2.5">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-secondary/80">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
