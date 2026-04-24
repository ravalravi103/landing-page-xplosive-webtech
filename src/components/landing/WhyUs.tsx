import { UserCheck, Rocket, Briefcase, BookOpen, GitBranch, Trophy } from "lucide-react";

const items = [
  { icon: UserCheck, title: "1:1 Live Mentorship", desc: "Private offline mentorship from engineers with 5+ years industry experience — not pre-recorded videos." },
  { icon: Rocket, title: "Real-world Projects", desc: "Ship 6+ production-grade projects that look great on resumes and impress recruiters." },
  { icon: Briefcase, title: "Placement Assistance", desc: "Resume reviews, mock interviews, referrals and dedicated placement support until you land an offer." },
  { icon: BookOpen, title: "Industry-level Curriculum", desc: "Curriculum designed around what top product companies actually hire for in 2025." },
  { icon: GitBranch, title: "Modern Workflow", desc: "Git, code reviews, CI/CD, testing — learn how real engineering teams ship software." },
  { icon: Trophy, title: "Outcome Focused", desc: "We measure success by your offer letter, not your attendance. Job-ready, guaranteed." },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />

      <div className="container-tight relative">
        <div className="max-w-2xl mx-auto text-center">
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
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-accent/50 transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="w-11 h-11 rounded-lg gradient-accent grid place-items-center mb-4 shadow-accent-glow">
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
