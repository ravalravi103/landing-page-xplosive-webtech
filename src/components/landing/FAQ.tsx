import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What are the four program options?",
    a: "We offer four options: Self-Paced Full Stack (₹5,999) for independent learners, Live Online Full Stack + AI (₹17,999) for structured online learning with live classes, Offline Full Stack + AI Career (₹39,999) for classroom learning in Bhayander, and 1:1 Full Stack Career Mentorship (₹69,999) for personal one-on-one guidance. All programs cover the same core Full Stack and AI skills — what changes is the level of live support, mentoring and career help.",
  },
  {
    q: "Is the training online or offline?",
    a: "We offer both. You can learn fully online with the Self-Paced or Live Online options, attend a physical classroom in Bhayander with the Offline program, or get personal 1:1 mentoring online. Choose whichever works best for your location and learning style.",
  },
  {
    q: "Who is this program for?",
    a: "College students (BCA, BSc IT, BE/BTech CS), recent graduates and working professionals looking to switch into tech or strengthen their existing skills. No prior coding experience is required — the curriculum starts from the foundations.",
  },
  {
    q: "How is this different from a pre-recorded course?",
    a: "The Self-Paced program is recorded and self-directed. The Live Online, Offline and 1:1 programs give you a real mentor teaching live, reviewing your code, doing mock interviews and guiding you throughout — not just a video library.",
  },
  {
    q: "Will I get placement assistance?",
    a: "Placement assistance — including resume reviews, mock interviews and career guidance — is included in the Offline and 1:1 programs. Basic interview preparation is included in the Live Online program. The Self-Paced program does not include personal placement support.",
  },
  {
    q: "Can I upgrade from one program to a higher one?",
    a: "Yes. We allow students to upgrade to a higher-support program by paying the difference. For example, you can start with Self-Paced and upgrade to Live Online within a defined window. Upgrade rules and timelines are confirmed at the time of enrollment.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes — flexible installment options are available. Talk to us during the free demo session and we will help you find a payment plan that works for you.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-16 bg-muted/40">
      <div className="container-tight max-w-3xl">
        <div data-reveal className="text-center">
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
