import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroBg from "../../assets/hero-bg.jpg";

const WA_DEMO_URL =
  "https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session.%20Please%20share%20the%20details.";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "85%", label: "Placement Rate" },
  { value: "4.9★", label: "Avg Rating" },
];

const CTA = () => {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-background">
      <div className="relative flex flex-col md:flex-row min-h-[520px]">
        {/* Image — fades into background on the right edge */}
        <div className="hidden md:block relative w-[45%] flex-shrink-0">
          <img
            src={heroBg}
            alt="Students learning at XplosiveWebTech"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center py-16 md:py-20 px-6 sm:px-10 md:px-16 lg:px-24">
          <div data-reveal className="max-w-xl w-full">
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-6 py-3 rounded-2xl bg-muted border border-border"
                >
                  <span className="font-display text-2xl font-bold text-secondary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary leading-tight">
              Your first job offer{" "}
              <span className="text-gradient">starts here.</span>
            </h2>

            <p className="mt-5 text-lg text-muted-foreground max-w-md">
              Book a free demo with our mentor on WhatsApp and get a personalised learning roadmap. No commitments. No spam.
            </p>

            <div className="mt-8">
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

            <p className="mt-6 text-sm text-muted-foreground">
              Limited seats per cohort · Next batch starts soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
