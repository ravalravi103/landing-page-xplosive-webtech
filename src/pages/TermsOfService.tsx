import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-tight py-20 prose prose-slate max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-secondary mt-8">Terms of Service</h1>
        <p className="text-muted-foreground text-sm">Last updated: September 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing xplosivewebtech.com or enrolling in any XplosiveWebTech program, you agree to these
          Terms of Service. If you do not agree, please do not use our services.
        </p>

        <h2>2. Programs & Enrollment</h2>
        <p>
          XplosiveWebTech offers online and offline coding bootcamps. Program details, duration, and fees are
          communicated during the enrollment process. Seats are limited per cohort; enrollment is confirmed
          only upon receipt of payment.
        </p>

        <h2>3. Payment & Refund Policy</h2>
        <ul>
          <li>Full program fees are payable before the batch start date unless an EMI plan is agreed in writing.</li>
          <li>Refund requests made more than 7 days before the batch start date are eligible for a full refund.</li>
          <li>No refunds are issued after the batch has commenced.</li>
          <li>For queries, contact us at info.xplosivewebtech@gmail.com.</li>
        </ul>

        <h2>4. Placement Assistance</h2>
        <p>
          XplosiveWebTech provides placement support including mock interviews, resume reviews, and referrals.
          We do not guarantee job placement. The 85% placement rate reflects historical outcomes and is not a
          contractual guarantee.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All course materials, recordings, slides, and content are the intellectual property of
          XplosiveWebTech. Students may not reproduce, distribute, or resell any materials without written
          permission.
        </p>

        <h2>6. Code of Conduct</h2>
        <p>
          Students are expected to treat mentors and fellow students with respect. Disruptive behaviour,
          plagiarism, or sharing of proprietary materials may result in removal from the program without refund.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          XplosiveWebTech is not liable for any indirect, incidental, or consequential damages arising from
          use of our services. Our total liability shall not exceed the fees paid by you for the program.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of Maharashtra, India. Any disputes shall be subject to the
          exclusive jurisdiction of courts in Mumbai, Maharashtra.
        </p>

        <h2>9. Contact</h2>
        <p>
          XplosiveWebTech · Mumbai, Maharashtra, India<br />
          Email: <a href="mailto:info.xplosivewebtech@gmail.com">info.xplosivewebtech@gmail.com</a><br />
          Phone: <a href="tel:+919987896573">+91 99878 96573</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
