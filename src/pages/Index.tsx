import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Programs from "@/components/landing/Programs";
import WhyUs from "@/components/landing/WhyUs";
import Curriculum from "@/components/landing/Curriculum";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <WhyUs />
      <Curriculum />
      <Testimonials />
      {/* <Pricing /> */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
