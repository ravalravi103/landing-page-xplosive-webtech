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

const TOPICS = [
  "All",
  "MERN",
  "MEAN",
  "Java",
  "PHP",
  "Python",
  "Data Science",
  "AI / ML",
  "Database",
  "AWS",
  "C / C++",
  "DSA",
  "System Design",
] as const;

type Topic = (typeof TOPICS)[number];

const mentors: {
  initials: string;
  name: string;
  experience: string;
  role: string;
  subjects: string[];
  certifications: string[];
  achievement: string;
  topic: Topic;
  placeholder: boolean;
}[] = [
  {
    initials: "A",
    name: "Faculty Name",
    experience: "7+ Years",
    role: "MERN Stack Developer & Trainer",
    subjects: ["MongoDB", "Express.js", "React", "Node.js"],
    certifications: ["AWS Certified Developer", "MongoDB Associate"],
    achievement: "Built 20+ production MERN apps",
    topic: "MERN",
    placeholder: true,
  },
  {
    initials: "B",
    name: "Faculty Name",
    experience: "6+ Years",
    role: "MEAN Stack Developer & Trainer",
    subjects: ["MongoDB", "Express.js", "Angular", "Node.js"],
    certifications: ["Google Angular Certified", "MongoDB Associate"],
    achievement: "Trained 400+ full-stack developers",
    topic: "MEAN",
    placeholder: true,
  },
  {
    initials: "C",
    name: "Faculty Name",
    experience: "10+ Years",
    role: "Java Backend Engineer & Trainer",
    subjects: ["Java", "Spring Boot", "Microservices", "Hibernate"],
    certifications: ["Oracle Java SE Certified", "AWS Solutions Architect"],
    achievement: "Ex-Senior Engineer at TCS",
    topic: "Java",
    placeholder: true,
  },
  {
    initials: "D",
    name: "Faculty Name",
    experience: "8+ Years",
    role: "PHP / Laravel Developer & Trainer",
    subjects: ["PHP", "Laravel", "MySQL", "REST APIs"],
    certifications: ["Zend PHP Certified", "AWS Cloud Practitioner"],
    achievement: "Delivered 50+ client web projects",
    topic: "PHP",
    placeholder: true,
  },
  {
    initials: "E",
    name: "Faculty Name",
    experience: "7+ Years",
    role: "Python Developer & Trainer",
    subjects: ["Python", "Django", "Flask", "FastAPI"],
    certifications: ["Python Institute PCEP", "AWS Developer Associate"],
    achievement: "Open-source contributor — 2k+ GitHub stars",
    topic: "Python",
    placeholder: true,
  },
  {
    initials: "F",
    name: "Faculty Name",
    experience: "9+ Years",
    role: "Data Science Trainer",
    subjects: ["Python", "Pandas", "Statistics", "Power BI"],
    certifications: ["Google Data Analytics", "IBM Data Science Pro"],
    achievement: "Published 5 data-science research papers",
    topic: "Data Science",
    placeholder: true,
  },
  {
    initials: "G",
    name: "Faculty Name",
    experience: "8+ Years",
    role: "AI / ML Engineer & Trainer",
    subjects: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"],
    certifications: ["Google ML Engineer", "DeepLearning.AI Specialization"],
    achievement: "3 AI models deployed in production at scale",
    topic: "AI / ML",
    placeholder: true,
  },
  {
    initials: "H",
    name: "Faculty Name",
    experience: "11+ Years",
    role: "Database Architect & Trainer",
    subjects: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    certifications: ["Oracle DB Certified", "Microsoft Azure Data"],
    achievement: "Architected databases for 30+ enterprise projects",
    topic: "Database",
    placeholder: true,
  },
  {
    initials: "I",
    name: "Faculty Name",
    experience: "9+ Years",
    role: "AWS Cloud Engineer & Trainer",
    subjects: ["AWS EC2", "S3", "Lambda", "CloudFormation"],
    certifications: ["AWS Solutions Architect Pro", "AWS DevOps Professional"],
    achievement: "Migrated 15+ enterprises to AWS cloud",
    topic: "AWS",
    placeholder: true,
  },
  {
    initials: "J",
    name: "Faculty Name",
    experience: "12+ Years",
    role: "C / C++ Programmer & Trainer",
    subjects: ["C", "C++", "OOP", "Memory Management"],
    certifications: ["ISO C++ Foundation", "Intel Parallel Programming"],
    achievement: "Contributed to 3 open-source C++ libraries",
    topic: "C / C++",
    placeholder: true,
  },
  {
    initials: "K",
    name: "Faculty Name",
    experience: "8+ Years",
    role: "DSA & Competitive Programming Trainer",
    subjects: ["Data Structures", "Algorithms", "Problem Solving", "LeetCode"],
    certifications: ["ICPC Regionalist", "Codeforces Expert"],
    achievement: "Placed 500+ students in top product companies",
    topic: "DSA",
    placeholder: true,
  },
  {
    initials: "L",
    name: "Faculty Name",
    experience: "14+ Years",
    role: "Solution Architect & System Design Trainer",
    subjects: ["System Design", "Microservices", "Scalability", "Design Patterns"],
    certifications: ["AWS Solutions Architect Pro", "TOGAF Certified"],
    achievement: "Architected systems serving 10M+ users",
    topic: "System Design",
    placeholder: true,
  },
];

const Mentors = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<Topic>("All");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filtered =
    selectedTopic === "All" ? mentors : mentors.filter((m) => m.topic === selectedTopic);

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

  // Scroll back to start whenever the topic filter changes
  useEffect(() => {
    if (api) api.scrollTo(0);
  }, [api, selectedTopic]);

  return (
    <section id="mentors" className="py-12 md:py-20 bg-secondary">
      <div className="container-tight">
        <div data-reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
            Faculty
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-white">
            Learn from <span className="text-gradient">working professionals</span>
          </h2>
          <p className="mt-4 text-white/60">
            Our mentors are active industry professionals — not just teachers. Real experience, real
            projects, real guidance.
          </p>
        </div>

        {/* Topic filter tabs */}
        <div className="mt-10 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max mx-auto justify-center flex-wrap">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 whitespace-nowrap ${
                  selectedTopic === topic
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-transparent text-white/60 border-white/20 hover:border-primary/50 hover:text-white"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div
          className="mt-8 px-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Carousel
            key={selectedTopic}
            setApi={setApi}
            opts={{ align: "start", loop: filtered.length > 3 }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {filtered.map((m, i) => (
                <CarouselItem
                  key={i}
                  className={`pl-6 ${
                    filtered.length === 1
                      ? "basis-full sm:basis-1/2 lg:basis-1/3"
                      : filtered.length === 2
                      ? "basis-full sm:basis-1/2"
                      : "basis-full sm:basis-1/2 lg:basis-1/3"
                  }`}
                >
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

                      {/* Topic pill */}
                      <span className="self-start mb-3 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                        {m.topic}
                      </span>

                      {/* Avatar + Name row */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 rounded-full gradient-primary text-primary-foreground grid place-items-center font-display font-bold text-2xl shadow-md">
                          {m.initials}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-semibold text-secondary leading-tight truncate">
                            {m.name}
                          </h3>
                          <p className="text-sm text-primary font-medium mt-0.5 leading-tight">
                            {m.role}
                          </p>
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
                          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                            Subjects
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {m.subjects.map((s) => (
                            <Badge
                              key={s}
                              variant="secondary"
                              className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15"
                            >
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div className="mt-3">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Award className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                            Certifications
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {m.certifications.map((c) => (
                            <Badge
                              key={c}
                              variant="outline"
                              className="text-xs px-2 py-0.5 border-accent/30 text-accent"
                            >
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
