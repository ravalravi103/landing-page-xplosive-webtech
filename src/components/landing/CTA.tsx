import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="container-tight">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-center shadow-elevated">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-glow/40 blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Ready to become a <span className="text-gradient-light">job-ready engineer?</span>
            </h2>
            <p className="mt-5 text-lg text-white/80">
              Book a free 1:1 demo with our mentor and get a personalised learning roadmap. No commitments. No spam.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe8sp45kagsf11WHzl3mrNmghbP9jnTd5n-aGd_KRBjB-oCRQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a free demo"
                >
                  <Calendar /> Book Free Demo <ArrowRight />
                </a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a
                  href="https://wa.me/919987896573?text=Hi%2C%20I%20am%20interested%20in%20your%20course.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> Let's Connect on WhatsApp
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
