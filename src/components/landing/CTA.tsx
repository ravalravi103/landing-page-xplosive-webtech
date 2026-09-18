import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WA_DEMO_URL =
  "https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session.%20Please%20share%20the%20details.";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "85%", label: "Placement Rate" },
  { value: "4.9★", label: "Avg Rating" },
];

const CTA = () => {
  return (
    <section id="cta" className="bg-secondary text-primary-foreground relative py-20 md:py-28 overflow-hidden">
      {/* Blur blobs — same gradient as WhyUs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      <div className="relative container-tight">
        <div data-reveal className="max-w-lg mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-12 text-center shadow-elevated">

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-5 py-2.5 rounded-xl bg-white/8 border border-white/10"
              >
                <span className="font-display text-xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/60 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <h2 className="font-display text-2xl md:text-4xl font-bold leading-tight">
            Your first job offer{" "}
            <span className="text-gradient-light">starts here.</span>
          </h2>

          <p className="mt-4 text-base text-white/70">
            Book a free demo with our mentor on WhatsApp and get a personalised learning roadmap. No commitments. No spam.
          </p>

          <div className="mt-7">
            <Button variant="accent" size="xl" asChild>
              <a
                href={WA_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free demo on WhatsApp"
              >
                <MessageCircle /> Book Free Demo on WhatsApp <ArrowRight />
              </a>
            </Button>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Limited seats per cohort · Next batch starts soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
