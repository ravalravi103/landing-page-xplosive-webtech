import { UserCheck, Rocket, Briefcase, BookOpen, GitBranch, Trophy } from "lucide-react";

const items = [
  {
    icon: UserCheck,
    title: "Live Mentorship",
    desc: "Learn from engineers with real industry experience — available through live online classes and in-person offline sessions in Bhayander.",
  },
  {
    icon: Rocket,
    title: "Real-world Projects",
    desc: "Build real, deployable projects you can show in interviews — not toy examples built just to complete an assignment.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    desc: "Resume reviews, mock interviews and dedicated placement support included in the Offline and 1:1 programs. Basic interview prep in Live Online.",
  },
  {
    icon: BookOpen,
    title: "Industry-level Curriculum",
    desc: "Curriculum built around what companies actually hire for — Full Stack development and practical AI integration included.",
  },
  {
    icon: GitBranch,
    title: "Modern Workflow",
    desc: "Git, code reviews, CI/CD, deployment — learn how real engineering teams actually ship software.",
  },
  {
    icon: Trophy,
    title: "Outcome Focused",
    desc: "We measure success by your growth, not your attendance. Your career progress is what we work toward.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-12 md:py-16 bg-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div data-parallax="0.25" className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl" />
      <div data-parallax="0.15" className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />

      <div className="container-tight relative">
        <div data-reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent">Why XplosiveWebTech</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
            We don't sell courses. <br className="hidden md:block" />
            <span className="text-gradient-light">We engineer careers.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="scroll-card group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-accent/50 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(34,197,94,0.15)] transition-smooth"
              >
                <div className="icon-spring w-11 h-11 rounded-lg gradient-accent grid place-items-center mb-4 shadow-accent-glow">
                  <Icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
