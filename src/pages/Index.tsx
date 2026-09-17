import { useScrollEffects } from "@/hooks/useScrollEffects";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Programs from "@/components/landing/Programs";
import ProgramComparison from "@/components/landing/ProgramComparison";
import WhyUs from "@/components/landing/WhyUs";
import Curriculum from "@/components/landing/Curriculum";
import TechStack from "@/components/landing/TechStack";
import Mentors from "@/components/landing/Mentors";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import AboutUs from "@/components/landing/AboutUs";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useScrollEffects();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <TechStack />
      <WhyUs />
      <AboutUs />
      <Mentors />
      <Curriculum />
      <Testimonials />
      <ProgramComparison />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
