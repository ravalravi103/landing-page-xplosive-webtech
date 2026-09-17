import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WA_DEMO_URL =
  "https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session.%20Please%20share%20the%20details.";

const CTA = () => {
  return (
    <section id="cta" className="py-12 md:py-16">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-center shadow-elevated">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div data-parallax="0.3" className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />
          <div data-parallax="0.2" className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-glow/40 blur-3xl" />

          <div data-reveal className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Ready to become a <span className="text-gradient-light">job-ready engineer?</span>
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Book a free demo with our mentor on WhatsApp and get a personalised learning roadmap. No commitments. No spam.
            </p>

            <div className="mt-8 flex justify-center">
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

            <p className="mt-6 text-sm text-white/60">Limited seats per cohort · Next batch starts soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
