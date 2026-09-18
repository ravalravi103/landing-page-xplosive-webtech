import { Eye, Target, Quote, AlertTriangle } from "lucide-react";

// TODO: Replace all placeholder values below with real content.
const founder = {
  initials: "PR",
  name: "Pooja Raval",
  title: "Founder & CEO, XplosiveWebTech",
  quote:
    "I started XplosiveWebTech because I saw talented people fail to get jobs — not because they lacked ability, but because their training was disconnected from what companies actually need. We built this institute to bridge that gap: real skills, real projects, real mentors.",
};

const problemStat =
  "Over 90% of BSc IT, MSc IT, and CS Engineering graduates never pursue coding as a profession — not because they lack talent, but because they lack structured, directional guidance. We exist to close that gap.";

const vision =
  "To become India's most trusted tech training institute — turning every IT graduate who dreams of a coding career into a confident, job-ready software professional, regardless of where they start.";

const mission =
  "To provide structured, discipline-driven, industry-oriented training — online and offline — through systematic, AI-powered, mentor-led programs that give IT and CS students the clear direction, practical skills, and professional foundation they were never given in college.";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "90%", label: "Placement Rate" },
  { value: "10+", label: "Expert Mentors" },
  { value: "3+", label: "Years of Impact" },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container-tight">

        {/* Section label */}
        <div data-reveal className="text-center mb-10">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            Built to close{" "}
            <span className="text-gradient">the guidance gap</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Thousands of IT graduates have the potential — they just never had the right direction.
          </p>
        </div>

        {/* Problem statement callout */}
        <div data-reveal className="mb-12 rounded-2xl border border-primary/30 bg-primary/6 px-6 py-5 flex gap-4 items-start">
          <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg gradient-primary grid place-items-center">
            <AlertTriangle className="w-4 h-4 text-primary-foreground" />
          </div>
          <p className="text-secondary text-sm md:text-base leading-relaxed font-medium">
            {problemStat}
          </p>
        </div>

        {/* Two-column: photo left, content right */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">

          {/* Left — founder card */}
          <div data-reveal className="lg:col-span-1 flex flex-col items-center lg:items-start gap-6">

            {/* Photo / avatar */}
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl gradient-primary opacity-20 blur-xl scale-105" />

              <img
                src="/WX_founder.png"
                alt={`${founder.name} — ${founder.title}`}
                className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl object-cover shadow-elevated"
              />
            </div>

            {/* Name + title */}
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-secondary">{founder.name}</h3>
              <p className="text-primary font-medium mt-1">{founder.title}</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border/70 bg-background p-4 text-center shadow-soft"
                >
                  <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Vision, Mission, quote */}
          <div data-reveal className="lg:col-span-2 flex flex-col gap-7">

            {/* Vision */}
            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg gradient-primary grid place-items-center shrink-0">
                  <Eye className="w-4 h-4 text-primary-foreground" />
                </div>
                <h4 className="font-display text-lg font-semibold text-secondary">Our Vision</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{vision}</p>
            </div>

            {/* Mission */}
            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg gradient-accent grid place-items-center shrink-0">
                  <Target className="w-4 h-4 text-accent-foreground" />
                </div>
                <h4 className="font-display text-lg font-semibold text-secondary">Our Mission</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{mission}</p>
            </div>

            {/* Founder quote */}
            <div className="rounded-2xl border border-primary/40 bg-primary/8 p-6 relative overflow-hidden">
              {/* Blue left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-primary" />
              <div className="pl-4">
                <Quote className="w-7 h-7 text-primary mb-3" />
                <blockquote className="text-secondary font-medium leading-relaxed text-sm italic">
                  "{founder.quote}"
                </blockquote>
                <p className="mt-4 text-xs text-primary font-semibold">
                  — {founder.name}, {founder.title}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
