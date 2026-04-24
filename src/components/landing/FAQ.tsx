import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Who is this program for?", a: "College students (BCA, BSc IT, BE/BTech CS), recent freshers, and working professionals switching to tech. No prior coding experience required for foundation tracks." },
  { q: "Is it offline or online?", a: "Our flagship programs are offline with 1:1 private mentorship. This personalised attention is what makes our outcomes 10x better than recorded courses." },
  { q: "How is this different from a recorded course?", a: "You get a real engineer mentoring you live, reviewing your code, doing mock interviews and guiding you week by week — not a passive video library." },
  { q: "Will I get placement assistance?", a: "Yes. Resume reviews, mock interviews, referrals and a dedicated placement cell support you until you land your first offer." },
  { q: "What if I have zero coding background?", a: "Perfect. Our Phase 1 foundations are designed for absolute beginners. Hundreds of non-CS students have become engineers through our programs." },
  { q: "Can I pay in installments?", a: "Yes — we offer flexible EMI and installment options. Talk to us during the free demo and we'll help you pick the right plan." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/40">
      <div className="container-tight max-w-3xl">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">FAQ</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            Got questions? <span className="text-gradient">We've got answers.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="border border-border/70 bg-background rounded-xl px-5 shadow-soft data-[state=open]:shadow-card transition-smooth"
            >
              <AccordionTrigger className="font-display text-left text-secondary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
