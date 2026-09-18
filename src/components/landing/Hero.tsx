import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import heroBg from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-8 md:pt-32 md:pb-10 overflow-hidden">
      <div
        data-parallax="0.4"
        className="absolute inset-0 -z-55 mt-20"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {/* Color gradient over the background image */}
      <div
        className="absolute inset-0 -z-[30]"
        style={{ background: "linear-gradient(135deg, hsl(206 87% 8% / 0.93) 0%, hsl(209 98% 18% / 0.82) 50%, hsl(195 85% 32% / 0.68) 100%)" }}
      />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-40" />
      <div data-parallax="0.2" className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary-glow/20 blur-3xl -z-10 animate-glow-pulse" />

      <div className="container-tight relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-xs font-medium text-white animate-fade-in">
            <span className="text-accent">Online</span>
            <span className="text-white/40">·</span>
            <span className="text-accent">Offline</span>
            <span className="text-white/40">·</span>
            <span className="text-accent">Self-Paced</span>
            <span className="text-white/40">·</span>
            <span className="text-accent">1:1 Mentorship</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] animate-fade-in-up">
            Become a{" "}
            <span className="text-gradient-light">Job-Ready Full Stack & AI Developer</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up [animation-delay:100ms]">
            Learn online or offline through industry-focused training, real projects and mentor support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:200ms]">
            <Button variant="hero" size="xl" asChild>
              <a href="#programs">
                <PlayCircle /> Explore Programs
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a
                href="https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session.%20Please%20share%20the%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Demo <ArrowRight className="ml-1" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/75 animate-fade-in-up [animation-delay:300ms]">
            {["Online & Offline Options", "Real-world Projects", "Placement Assistance"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
