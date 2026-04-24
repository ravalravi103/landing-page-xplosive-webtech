import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "SDE-1 @ Razorpay",
    text: "I went from a Tier-3 college fresher to landing an SDE role in 4 months. The 1:1 mentorship and real projects made all the difference.",
  },
  {
    name: "Priya Verma",
    role: "Frontend Engineer @ Swiggy",
    text: "The curriculum is genuinely industry-grade. The mentor pushed me to ship a real product and that's what cracked my interviews.",
  },
  {
    name: "Aman Khan",
    role: "Full Stack Dev @ Zoho",
    text: "Best decision I made. Switched from non-tech to a full stack role with a 9 LPA package. The placement support is unmatched.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/40 bg-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />
      <div className="container-tight">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent">Success Stories</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
            Real students. <span className="text-gradien-light">Real offers.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              className="p-6 gradient-card border-border/60 shadow-soft hover:shadow-elevated transition-smooth hover:-translate-y-1 animate-fade-in-up relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute top-5 right-5 w-7 h-7 text-primary/10" />
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-secondary/85 text-sm leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground grid place-items-center font-display font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-secondary text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
