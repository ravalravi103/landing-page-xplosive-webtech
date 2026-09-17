import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Award, BookOpen, Briefcase, Star } from "lucide-react";

// TODO: Replace placeholder entries with real mentor data.
const mentors = [
  {
    initials: "A",
    name: "Faculty Name",
    experience: "8+ Years",
    role: "Full Stack Developer & Trainer",
    subjects: ["React", "Node.js", "MongoDB"],
    certifications: ["AWS Certified", "Google Cloud"],
    achievement: "Trained 500+ students",
    placeholder: true,
  },
  {
    initials: "B",
    name: "Faculty Name",
    experience: "6+ Years",
    role: "UI/UX Designer & Trainer",
    subjects: ["Figma", "Adobe XD", "CSS"],
    certifications: ["Adobe Certified Expert"],
    achievement: "Worked with Fortune 500 companies",
    placeholder: true,
  },
  {
    initials: "C",
    name: "Faculty Name",
    experience: "10+ Years",
    role: "Backend Engineer & Trainer",
    subjects: ["Java", "Spring Boot", "Microservices"],
    certifications: ["Oracle Java Certified", "AWS Solutions Architect"],
    achievement: "Ex-Senior Engineer at TCS",
    placeholder: true,
  },
  {
    initials: "D",
    name: "Faculty Name",
    experience: "5+ Years",
    role: "Data Science & AI Trainer",
    subjects: ["Python", "Machine Learning", "TensorFlow"],
    certifications: ["Google Data Analytics", "Coursera ML"],
    achievement: "Published 3 research papers",
    placeholder: true,
  },
  {
    initials: "E",
    name: "Faculty Name",
    experience: "7+ Years",
    role: "Mobile App Developer & Trainer",
    subjects: ["Flutter", "React Native", "Firebase"],
    certifications: ["Google Associate Android Developer"],
    achievement: "20+ apps live on Play Store",
    placeholder: true,
  },
  {
    initials: "F",
    name: "Faculty Name",
    experience: "9+ Years",
    role: "DevOps & Cloud Trainer",
    subjects: ["Docker", "Kubernetes", "CI/CD"],
    certifications: ["AWS DevOps Professional", "CKA"],
    achievement: "Ex-DevOps Lead at Infosys",
    placeholder: true,
  },
  {
    initials: "G",
    name: "Faculty Name",
    experience: "4+ Years",
    role: "Cybersecurity Trainer",
    subjects: ["Ethical Hacking", "Network Security", "OWASP"],
    certifications: ["CEH", "CompTIA Security+"],
    achievement: "Bug bounty hunter — 50+ CVEs",
    placeholder: true,
  },
  {
    initials: "H",
    name: "Faculty Name",
    experience: "11+ Years",
    role: "Database & SQL Trainer",
    subjects: ["MySQL", "PostgreSQL", "MongoDB"],
    certifications: ["Oracle DB Certified", "Microsoft Azure Data"],
    achievement: "Architected databases for 30+ projects",
    placeholder: true,
  },
  {
    initials: "I",
    name: "Faculty Name",
    experience: "6+ Years",
    role: "Digital Marketing Trainer",
    subjects: ["SEO", "Google Ads", "Social Media"],
    certifications: ["Google Ads Certified", "HubSpot Inbound"],
    achievement: "Managed ₹2Cr+ ad budget",
    placeholder: true,
  },
  {
    initials: "J",
    name: "Faculty Name",
    experience: "8+ Years",
    role: "Graphic Design Trainer",
    subjects: ["Photoshop", "Illustrator", "Branding"],
    certifications: ["Adobe Certified Expert"],
    achievement: "Designed for 100+ brands",
    placeholder: true,
  },
];

const Mentors = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!api) return;

    const start = () => {
      intervalRef.current = setInterval(() => api.scrollNext(), 2000);
    };
    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    paused ? stop() : start();
    return stop;
  }, [api, paused]);

  return (
    <section id="mentors" className="py-12 md:py-20">
      <div className="container-tight">
        <div data-reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">Faculty</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            Learn from <span className="text-gradient">working professionals</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our mentors are active industry professionals — not just teachers. Real experience, real projects, real guidance.
          </p>
        </div>

        <div
          className="mt-14 px-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-6">
              {mentors.map((m, i) => (
                <CarouselItem key={i} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="card-line-hover group relative gradient-card border-border/70 shadow-soft h-full flex flex-col transition-smooth hover:-translate-y-2 hover:shadow-elevated hover:border-primary/40 overflow-hidden">

                    {/* Top color band */}
                    <div className="h-2 w-full gradient-primary" />

                    <div className="p-6 flex flex-col flex-1">

                      {/* Coming soon badge */}
                      {m.placeholder && (
                        <span className="self-start mb-4 bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                          Profile Coming Soon
                        </span>
                      )}

                      {/* Avatar + Name row */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 rounded-full gradient-primary text-primary-foreground grid place-items-center font-display font-bold text-2xl shadow-md">
                          {m.initials}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-semibold text-secondary leading-tight truncate">{m.name}</h3>
                          <p className="text-sm text-primary font-medium mt-0.5 leading-tight">{m.role}</p>
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="mt-4 flex items-center gap-2 text-sm">
                        <Briefcase className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-semibold text-secondary">{m.experience}</span>
                        <span className="text-muted-foreground">Total Experience</span>
                      </div>

                      {/* Subjects */}
                      <div className="mt-3">
                        <div className="flex items-center gap-1.5 mb-2">
                          <BookOpen className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Subjects</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {m.subjects.map((s) => (
                            <Badge key={s} variant="secondary" className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div className="mt-3">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Award className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Certifications</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {m.certifications.map((c) => (
                            <Badge key={c} variant="outline" className="text-xs px-2 py-0.5 border-accent/30 text-accent">
                              {c}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievement */}
                      <div className="mt-4 pt-4 border-t border-border/60 flex items-start gap-2">
                        <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-snug">{m.achievement}</p>
                      </div>

                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="border-border/70 bg-background hover:bg-muted shadow-soft" />
            <CarouselNext className="border-border/70 bg-background hover:bg-muted shadow-soft" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
