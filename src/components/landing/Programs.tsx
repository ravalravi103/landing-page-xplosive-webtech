import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Monitor, MapPin, User, CheckCircle2, ArrowRight } from "lucide-react";

const programs = [
  {
    badge: "Best Value",
    icon: Play,
    title: "Self-Paced Full Stack",
    originalPrice: "₹7,999",
    price: "₹5,999",
    discount: "25% OFF",
    mode: "Online · Learn Anywhere",
    modeEmoji: "🌐",
    for: "Learn at your own pace, on your own schedule.",
    features: [
      "Recorded video lessons",
      "Full course material & notes",
      "Assignments & hands-on projects",
      "Git, GitHub & deployment basics",
      "React, Node.js, databases & deployment",
      "AI-assisted development concepts",
      "Certificate on completion",
    ],
    cta: "Get Started",
    highlight: false,
    ring: false,
  },
  {
    badge: "Most Popular",
    icon: Monitor,
    title: "Live Online Full Stack + AI",
    originalPrice: "₹23,999",
    price: "₹17,999",
    discount: "25% OFF",
    mode: "Online · Live Classes",
    modeEmoji: "💻",
    for: "Structured learning with a real teacher, from anywhere.",
    features: [
      "Everything in Self-Paced",
      "Live online classes with a teacher",
      "Regular doubt-solving sessions",
      "Code reviews & live coding",
      "Student community & batch recordings",
      "Basic interview preparation",
      "Clear batch start & end dates",
    ],
    cta: "Book Free Demo",
    highlight: true,
    ring: false,
  },
  {
    badge: "Our Flagship",
    icon: MapPin,
    title: "Offline Full Stack + AI Career",
    originalPrice: "₹53,999",
    price: "₹39,999",
    discount: "25% OFF",
    mode: "Offline · Bhayander",
    modeEmoji: "📍",
    for: "Classroom learning with personal mentoring & career support.",
    features: [
      "Everything in Live Online",
      "Physical classroom in Bhayander",
      "Smaller batch, face-to-face mentoring",
      "Resume & LinkedIn guidance",
      "Mock interviews",
      "Placement assistance",
      "Networking with other students",
    ],
    cta: "Book Free Demo",
    highlight: false,
    ring: true,
  },
  {
    badge: "Most Personal",
    icon: User,
    title: "1:1 Full Stack Career Mentorship",
    originalPrice: "₹93,999",
    price: "₹69,999",
    discount: "25% OFF",
    mode: "Online · Fully Personal",
    modeEmoji: "🎯",
    for: "A dedicated mentor, focused entirely on you.",
    features: [
      "Personal learning plan",
      "1:1 mentoring sessions",
      "Personal code review",
      "Interview & career preparation",
      "Resume & LinkedIn personal review",
      "GitHub / portfolio review",
      "Career planning & guidance",
    ],
    cta: "Talk to a Mentor",
    highlight: false,
    ring: false,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-12 md:py-16 relative">
      <div data-parallax="0.15" className="absolute inset-0 gradient-radial -z-10" />
      <div className="container-tight">
        <div data-reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">Our Programs</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            Four clear options. <span className="text-gradient">One strong foundation.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every program teaches the same core Full Stack & AI skills. What changes is how much live support, mentoring and career help you receive.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Limited time — 25% off all programs
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.title}
                className={`scroll-card group relative p-6 transition-smooth hover:-translate-y-3 ${
                  p.highlight
                    ? "gradient-hero text-primary-foreground border-accent shadow-elevated hover:shadow-[0_20px_48px_-8px_rgba(34,197,94,0.4)]"
                    : p.ring
                    ? "gradient-card border-accent/40 ring-2 ring-accent/20 shadow-accent-glow hover:shadow-elevated hover:ring-accent/50"
                    : "gradient-card border-border/70 shadow-soft hover:shadow-elevated hover:border-primary/40"
                }`}
              >
                <span
                  className={`absolute -top-3 right-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-soft ${
                    p.highlight ? "gradient-accent text-accent-foreground" : "gradient-primary text-primary-foreground"
                  }`}
                >
                  {p.badge}
                </span>

                <div className="flex items-start gap-4">
                  <div
                    className={`icon-spring w-11 h-11 rounded-xl grid place-items-center flex-shrink-0 shadow-card ${
                      p.highlight ? "bg-white/20 text-white" : "gradient-primary text-primary-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-display text-xl font-semibold ${p.highlight ? "text-white" : "text-secondary"}`}>
                      {p.title}
                    </h3>
                    <span className={`text-xs mt-1 inline-block ${p.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                      {p.modeEmoji} {p.mode}
                    </span>
                  </div>
                </div>

                <p className={`mt-4 text-sm ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>{p.for}</p>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${p.highlight ? "text-white/85" : "text-secondary/80"}`}>
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={`mt-5 pt-4 border-t flex items-center justify-between ${p.highlight ? "border-white/20" : "border-border/60"}`}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium line-through decoration-2 ${p.highlight ? "text-white/40" : "text-muted-foreground"}`}>
                        {p.originalPrice}
                      </span>
                      <span className="gradient-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-accent-glow">
                        {p.discount}
                      </span>
                    </div>
                    <div className={`font-display text-2xl font-bold mt-0.5 ${p.highlight ? "text-white" : "text-secondary"}`}>
                      {p.price}
                    </div>
                  </div>
                  <Button variant={p.highlight ? "accent" : "hero"} size="sm" asChild>
                    <a
                      href="https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session.%20Please%20share%20the%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.cta} <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All prices are starting points and subject to confirmation at enrollment. Upgrade paths are available between programs.
        </p>

        <div className="mt-6 text-center">
          <a href="#compare" className="text-sm text-primary font-medium hover:underline underline-offset-4 transition-smooth">
            See full program comparison ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
