import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "Single Track",
    price: "₹29,999",
    sub: "per program · 3 months",
    features: ["Choose any one program", "1:1 offline mentorship", "4+ real projects", "Resume + interview prep", "Placement assistance"],
    cta: "Enroll Now",
    highlight: false,
  },
  {
    name: "Full Stack + AI",
    price: "₹59,999",
    sub: "Hero program · 6 months",
    features: ["Frontend + Backend + AI", "1:1 private mentorship", "8+ production projects", "System design coaching", "Dedicated placement cell", "Lifetime alumni access"],
    cta: "Book Free Demo",
    highlight: true,
  },
  {
    name: "Career Pro",
    price: "₹89,999",
    sub: "All access · 9 months",
    features: ["All programs included", "Priority 1:1 mentorship", "Cloud + Architecture track", "Mock interviews (10+)", "Job offer assistance", "Lifetime updates"],
    cta: "Talk to Mentor",
    highlight: false,
  },
];

const compare = [
  { feature: "Offline 1:1 mentorship", us: true, others: false },
  { feature: "Live (not recorded)", us: true, others: false },
  { feature: "Real production projects", us: true, others: false },
  { feature: "Placement assistance", us: true, others: true },
  { feature: "Avg. competitor price", us: "₹29,999+", others: "₹80,000–₹3L" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">Pricing</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            Premium mentorship at <span className="text-gradient">honest pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We charge a fraction of what big bootcamps charge — and deliver more personalized attention.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Card
              key={t.name}
              className={`relative p-7 transition-smooth hover:-translate-y-1 animate-fade-in-up ${
                t.highlight
                  ? "gradient-hero text-primary-foreground border-accent shadow-elevated scale-[1.02]"
                  : "gradient-card border-border/70 shadow-soft hover:shadow-card"
              }`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-accent text-accent-foreground text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-accent-glow">
                  Most Popular
                </span>
              )}
              <h3 className={`font-display text-xl font-bold ${t.highlight ? "text-white" : "text-secondary"}`}>{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className={`font-display text-4xl font-bold ${t.highlight ? "text-white" : "text-secondary"}`}>{t.price}</span>
              </div>
              <div className={`text-sm ${t.highlight ? "text-white/70" : "text-muted-foreground"}`}>{t.sub}</div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${t.highlight ? "text-white/90" : "text-secondary/85"}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${t.highlight ? "text-accent" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={t.highlight ? "accent" : "hero"}
                size="lg"
                className="mt-7 w-full"
                asChild
              >
                <a href="#cta">{t.cta}</a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Comparison */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-center font-display text-xl md:text-2xl font-bold text-secondary">
            How we compare to other bootcamps
          </h3>
          <Card className="mt-6 overflow-hidden border-border/70 shadow-soft">
            <div className="grid grid-cols-3 bg-secondary text-primary-foreground text-sm font-semibold">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center bg-primary">XplosiveWebTech</div>
              <div className="p-4 text-center">Other Bootcamps</div>
            </div>
            {compare.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-muted/40" : "bg-background"}`}>
                <div className="p-4 font-medium text-secondary">{row.feature}</div>
                <div className="p-4 text-center">
                  {typeof row.us === "boolean" ? (
                    row.us ? <Check className="inline w-5 h-5 text-accent" /> : <X className="inline w-5 h-5 text-destructive" />
                  ) : (
                    <span className="font-semibold text-primary">{row.us}</span>
                  )}
                </div>
                <div className="p-4 text-center text-muted-foreground">
                  {typeof row.others === "boolean" ? (
                    row.others ? <Check className="inline w-5 h-5 text-accent" /> : <X className="inline w-5 h-5 text-destructive" />
                  ) : (
                    row.others
                  )}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
