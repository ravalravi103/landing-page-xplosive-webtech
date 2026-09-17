import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div data-parallax="0.25" className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl" />
      <div data-parallax="0.15" className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />

      <div className="container-tight relative">
        <div data-reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent">Student Stories</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
            Real students. <span className="text-gradient-light">Real outcomes.</span>
          </h2>
          <p className="mt-5 text-white/70 max-w-xl mx-auto leading-relaxed">
            We believe every review on this page should be genuine and verifiable.
            We are collecting real testimonials from our students — check back soon.
          </p>
          <div className="mt-8">
            <Button variant="accent" size="lg" asChild>
              <a
                href="https://wa.me/919987896573?text=Hi%2C%20I%20want%20to%20know%20more%20about%20XplosiveWebTech%20programs."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Ask a Student — Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
