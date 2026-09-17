import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    program: "Offline Full Stack + AI Career",
    outcome: "Junior Frontend Developer",
    initials: "AM",
    text: "I was a BCA student with zero confidence in coding. The offline classes and personal mentor attention changed everything. I got placed as a Frontend Developer within 3 months of finishing the program.",
    stars: 5,
  },
  {
    name: "Sneha Patil",
    program: "1:1 Career Mentorship",
    outcome: "Switched to Full Stack from Marketing",
    initials: "SP",
    text: "I was in marketing with no coding background. My mentor built a personal learning plan, reviewed my code every week and helped me crack my first tech interview. Best investment I have ever made.",
    stars: 5,
  },
  {
    name: "Rohan Desai",
    program: "Live Online Full Stack + AI",
    outcome: "Full Stack Developer — Remote",
    initials: "RD",
    text: "The live classes felt like having a real teacher, not just a video on a screen. Doubt sessions were incredibly helpful and I shipped four real projects during the program that I still show in every interview.",
    stars: 5,
  },
  {
    name: "Priya Joshi",
    program: "Self-Paced Full Stack",
    outcome: "Freelance Web Developer",
    initials: "PJ",
    text: "I could not afford expensive bootcamps. The self-paced course gave me everything I needed at an honest price. The curriculum is genuinely industry-level and I am now a confident freelance developer.",
    stars: 5,
  },
  {
    name: "Karan Shah",
    program: "Offline Full Stack + AI Career",
    outcome: "IT Support → Developer",
    initials: "KS",
    text: "I was doing IT support for two years and wanted to switch to development. The offline program in Bhayander was perfect — small batch, great mentor, and the placement support got me an interview at my dream company.",
    stars: 5,
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-12 md:py-16 bg-secondary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div data-parallax="0.25" className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/20 blur-3xl" />
      <div data-parallax="0.15" className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />

      <div className="container-tight relative">
        {/* Heading */}
        <div data-reveal className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent">Student Stories</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold">
            Real students. <span className="text-gradient-light">Real outcomes.</span>
          </h2>
          <p className="mt-4 text-white/65 text-sm">
            These are placeholder testimonials — real quotes from our students will be added here soon.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full p-6 gradient-card border-border/60 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-smooth relative flex flex-col">
                  {/* Decorative quote */}
                  <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/10" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, k) => (
                      <Star key={k} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-secondary/80 text-sm leading-relaxed flex-1">"{t.text}"</p>

                  {/* Author */}
                  <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary text-primary-foreground grid place-items-center font-display font-bold text-sm flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-secondary text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.outcome}</div>
                      <div className="text-[10px] text-accent/80 font-medium mt-0.5">{t.program}</div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Prev / Next — positioned outside cards on large screens */}
          <CarouselPrevious className="hidden sm:flex -left-5 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
          <CarouselNext className="hidden sm:flex -right-5 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white" />
        </Carousel>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
