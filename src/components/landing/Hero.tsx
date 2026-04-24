import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles, CheckCircle2 } from "lucide-react";
import heroBg from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-55 mt-20"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary-glow/20 blur-3xl -z-10 animate-glow-pulse" />

      <div className="container-tight relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium text-white animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            New cohort starting soon · Limited seats
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] animate-fade-in-up">
            Become a{" "}
            <span className="text-gradient-light">Job-Ready Software Engineer</span>{" "}
            in 90 Days
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up [animation-delay:100ms]">
            Live, mentor-led cohorts with real-world projects in Full Stack, Cloud & AI.
            Personal 1:1 mentorship from engineers with 5+ years of industry experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:200ms]">
            <Button variant="hero" size="xl" asChild>
              <a href="#cta">
                Book Free Demo <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#programs">
                <PlayCircle /> Explore Programs
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/75 animate-fade-in-up [animation-delay:300ms]">
            {["1:1 Live Mentorship", "Real-world Projects", "Placement Assistance"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> {t}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl animate-fade-in-up [animation-delay:400ms]">
          {[
            { v: "500+", l: "Engineers Trained" },
            { v: "92%", l: "Placement Rate" },
            { v: "5+ yrs", l: "Mentor Experience" },
            { v: "₹8 LPA", l: "Avg. Package" },
          ].map((s) => (
            <div key={s.l} className="bg-secondary/40 p-6 text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-white">{s.v}</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
