import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FileText, BookOpen, CreditCard, Briefcase, Lock, UserCheck, AlertTriangle, Scale, RefreshCw, Mail } from "lucide-react";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "programs", label: "Programs & Enrollment" },
  { id: "payment", label: "Payment & Refunds" },
  { id: "placement", label: "Placement Assistance" },
  { id: "ip", label: "Intellectual Property" },
  { id: "conduct", label: "Code of Conduct" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "governing", label: "Governing Law" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact Us" },
];

const SectionCard = ({
  id,
  icon: Icon,
  number,
  title,
  children,
}: {
  id: string;
  icon: React.ElementType;
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div id={id} className="scroll-mt-24 bg-white rounded-2xl border border-border shadow-sm p-8 mb-6">
    <div className="flex items-start gap-4 mb-5">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <span className="text-xs font-semibold text-accent uppercase tracking-widest">{number}</span>
        <h2 className="text-xl font-bold text-secondary mt-0.5">{title}</h2>
      </div>
    </div>
    <div className="text-[15px] text-foreground/80 leading-relaxed space-y-4">{children}</div>
  </div>
);

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[hsl(210_40%_98%)]">
      <Navbar />

      {/* Hero */}
      <section className="[background:var(--gradient-hero)] text-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <FileText className="w-4 h-4 text-accent" />
            <span>Please read these carefully before enrolling</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            These terms govern your use of XplosiveWebTech's website and programs. By enrolling, you agree
            to be bound by them.
          </p>
          <p className="text-white/50 text-sm mt-4">Last updated: September 2025 · Effective: September 2025</p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col lg:flex-row gap-10">

        {/* Sticky sidebar TOC */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl border border-border shadow-sm p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Contents</p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg px-3 py-1.5 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">

          {/* Intro callout */}
          <div className="bg-primary/8 border border-primary/20 rounded-2xl p-6 mb-8 flex gap-4">
            <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and
              <strong> XplosiveWebTech</strong> ("we", "us", "our"). By accessing our website or enrolling
              in any program, you confirm that you have read, understood, and agree to these Terms and our{" "}
              <a href="/privacy-policy" className="text-primary underline font-medium">Privacy Policy</a>.
            </p>
          </div>

          <SectionCard id="acceptance" icon={FileText} number="Section 01" title="Acceptance of Terms">
            <p>
              By visiting <strong>xplosivewebtech.com</strong>, submitting an enquiry form, attending a
              demo session, or enrolling in any XplosiveWebTech program, you agree to be bound by these
              Terms. If you do not agree, you must not use our services.
            </p>
            <p>
              These Terms apply to all visitors, prospective students, enrolled students, and anyone who
              interacts with our website or staff. We reserve the right to update these Terms at any time;
              continued use of our services after an update constitutes acceptance of the revised Terms.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Eligibility:</strong> You must be at least 18 years of age to enrol independently.
              Individuals under 18 may enrol only with the written consent of a parent or legal guardian.
            </div>
          </SectionCard>

          <SectionCard id="programs" icon={BookOpen} number="Section 02" title="Programs & Enrollment">
            <p>
              XplosiveWebTech offers full-stack development bootcamps and IT training programs delivered
              online, offline, and in hybrid formats. Program details, curriculum, batch schedules, and fees
              are communicated during the enquiry and enrollment process.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  heading: "Seat Confirmation",
                  body: "A batch seat is reserved only upon receipt of the registration fee or full payment. Enquiring or attending a demo does not constitute enrollment.",
                },
                {
                  heading: "Batch Schedules",
                  body: "Batch dates, timings, and formats are communicated at enrollment. We reserve the right to adjust schedules with reasonable notice to enrolled students.",
                },
                {
                  heading: "Program Changes",
                  body: "We may update course content, curriculum, or delivery format to reflect industry developments. Core learning outcomes will not be materially altered without notice.",
                },
                {
                  heading: "Minimum Batch Size",
                  body: "If a batch does not meet the minimum enrollment threshold, we may defer or merge it. Enrolled students will be offered an alternative batch or a full refund.",
                },
              ].map((item) => (
                <div key={item.heading} className="bg-muted/50 rounded-xl p-4">
                  <p className="font-semibold text-secondary text-sm mb-1">{item.heading}</p>
                  <p className="text-sm text-foreground/70">{item.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard id="payment" icon={CreditCard} number="Section 03" title="Payment & Refund Policy">
            <p>All fees are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</p>

            <div>
              <p className="font-semibold text-secondary mb-3">Payment Terms</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Full program fees are payable before the batch start date.</li>
                <li>
                  EMI or installment plans may be available and must be agreed upon <em>in writing</em> before
                  enrollment is confirmed.
                </li>
                <li>Payments are accepted via bank transfer, UPI, or payment gateway (Razorpay). Cash payments are not accepted.</li>
                <li>A payment confirmation receipt will be issued within 24 hours of a successful transaction.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-secondary mb-3">Refund Policy</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/60">
                      <th className="text-left px-4 py-2 rounded-tl-lg font-semibold text-secondary">When you request</th>
                      <th className="text-left px-4 py-2 rounded-tr-lg font-semibold text-secondary">Refund amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3">More than 7 days before batch start</td>
                      <td className="px-4 py-3 font-medium text-accent">100% refund</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Within 7 days of batch start (before it begins)</td>
                      <td className="px-4 py-3 font-medium text-amber-600">50% refund</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">After batch has commenced</td>
                      <td className="px-4 py-3 font-medium text-destructive">No refund</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Batch cancelled by XplosiveWebTech</td>
                      <td className="px-4 py-3 font-medium text-accent">100% refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                Refunds are processed to the original payment method within 7–10 business days. To request a
                refund, email{" "}
                <a href="mailto:info.xplosivewebtech@gmail.com" className="text-primary underline">
                  info.xplosivewebtech@gmail.com
                </a>{" "}
                with your enrollment details.
              </p>
            </div>
          </SectionCard>

          <SectionCard id="placement" icon={Briefcase} number="Section 04" title="Placement Assistance">
            <p>
              XplosiveWebTech provides placement support to eligible students as part of select programs.
              Placement support includes, but is not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Resume and LinkedIn profile reviews</li>
              <li>Mock technical interviews and HR preparation</li>
              <li>Referrals to hiring partners and IT companies</li>
              <li>Job lead sharing and application guidance</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <strong>Important disclaimer:</strong> XplosiveWebTech does <strong>not guarantee</strong> job
              placement or a specific salary package. The stated placement rate reflects historical outcomes
              of past batches and is not a contractual commitment. Placement outcomes depend on individual
              performance, market conditions, and employer decisions.
            </div>
            <p className="text-sm">
              Placement support is available to students who have completed the program, maintained
              satisfactory attendance, and met the portfolio/project submission requirements communicated
              during the program.
            </p>
          </SectionCard>

          <SectionCard id="ip" icon={Lock} number="Section 05" title="Intellectual Property">
            <p>
              All content made available through XplosiveWebTech programs — including but not limited to
              course videos, slides, assignments, projects, code samples, recorded sessions, study notes,
              and written materials — is the <strong>exclusive intellectual property of XplosiveWebTech</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Students are granted a <strong>personal, non-transferable licence</strong> to access course materials for their own learning during and after the program.</li>
              <li>You may <strong>not</strong> reproduce, redistribute, resell, share, upload, or create derivative works from any course material without prior written permission.</li>
              <li>Recording of live sessions is <strong>not permitted</strong> without the instructor's explicit consent.</li>
              <li>Projects and assignments you submit remain your own intellectual property; however, XplosiveWebTech may use anonymised examples for educational demonstrations with appropriate credit.</li>
            </ul>
            <p className="text-sm">
              Violation of these intellectual property terms may result in immediate removal from the program
              without refund, and we reserve the right to pursue legal remedies under applicable law.
            </p>
          </SectionCard>

          <SectionCard id="conduct" icon={UserCheck} number="Section 06" title="Code of Conduct">
            <p>
              XplosiveWebTech is committed to providing a safe, respectful, and inclusive learning
              environment. All students, mentors, and staff are expected to uphold the following standards:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {[
                { label: "Respect", body: "Treat all mentors, peers, and staff with courtesy and professionalism, whether online or in person." },
                { label: "Integrity", body: "Submit only your own work. Plagiarism, copying, or using AI to complete assessments without disclosure is prohibited." },
                { label: "Confidentiality", body: "Do not share proprietary course materials, other students' work, or internal communications outside the program." },
                { label: "Attendance", body: "Maintain the minimum attendance required for your batch as communicated at enrollment. Excessive absences may affect placement eligibility." },
              ].map((item) => (
                <div key={item.label} className="bg-muted/40 rounded-xl p-4">
                  <p className="font-semibold text-secondary text-sm">{item.label}</p>
                  <p className="text-sm text-foreground/70 mt-1">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="text-sm">
              Violations of the Code of Conduct — including harassment, hate speech, or deliberate disruption
              of sessions — may result in a <strong>warning, suspension, or removal</strong> from the program at
              XplosiveWebTech's sole discretion. Removal for conduct violations does not entitle the student
              to a refund.
            </p>
          </SectionCard>

          <SectionCard id="liability" icon={AlertTriangle} number="Section 07" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, XplosiveWebTech shall not be liable for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</li>
              <li>Loss of employment, income, or business opportunity, even if we have been advised of such possibility.</li>
              <li>Interruptions to live sessions or platform access due to technical issues, internet outages, or force majeure events.</li>
              <li>Actions or decisions made by third-party employers, partners, or hiring platforms.</li>
            </ul>
            <div className="bg-muted/50 border border-border rounded-xl p-4 text-sm">
              <strong>Cap on liability:</strong> In no event shall XplosiveWebTech's total aggregate liability
              to you exceed the <strong>total fees paid by you</strong> for the specific program giving rise
              to the claim.
            </div>
            <p className="text-sm">
              Our services are provided "as is" and "as available." We make no warranties — express or
              implied — regarding the completeness, accuracy, or fitness for purpose of any course content.
            </p>
          </SectionCard>

          <SectionCard id="governing" icon={Scale} number="Section 08" title="Governing Law & Disputes">
            <p>
              These Terms are governed by and construed in accordance with the laws of the
              <strong> State of Maharashtra, India</strong>, without regard to its conflict of law provisions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="font-semibold text-secondary text-sm mb-2">Informal Resolution</p>
                <p className="text-sm text-foreground/70">
                  Before initiating any formal proceedings, you agree to first contact us at{" "}
                  <a href="mailto:info.xplosivewebtech@gmail.com" className="text-primary underline">
                    info.xplosivewebtech@gmail.com
                  </a>{" "}
                  to attempt to resolve the dispute informally within 30 days.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <p className="font-semibold text-secondary text-sm mb-2">Jurisdiction</p>
                <p className="text-sm text-foreground/70">
                  If informal resolution fails, disputes shall be subject to the exclusive jurisdiction of
                  the competent courts in <strong>Mumbai, Maharashtra</strong>.
                </p>
              </div>
            </div>
            <p className="text-sm">
              Nothing in this clause shall prevent either party from seeking urgent injunctive relief in any
              court of competent jurisdiction.
            </p>
          </SectionCard>

          <SectionCard id="changes" icon={RefreshCw} number="Section 09" title="Changes to These Terms">
            <p>
              We reserve the right to modify these Terms at any time. When we make changes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>The "Last updated" date at the top of this page will be revised.</li>
              <li>For material changes affecting enrolled students, we will notify you via email at least 14 days before the change takes effect.</li>
              <li>Your continued use of our services after the effective date constitutes your acceptance of the updated Terms.</li>
            </ul>
            <p className="text-sm">
              If you disagree with a material change, you may discontinue your enrollment and request a
              pro-rated refund for unused program portions — subject to the refund policy in Section 03.
            </p>
          </SectionCard>

          <SectionCard id="contact" icon={Mail} number="Section 10" title="Contact Us">
            <p>
              For questions about these Terms, billing disputes, or any other enquiries, please reach out to us:
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-xl p-6 mt-2">
              <p className="font-bold text-secondary text-lg">XplosiveWebTech</p>
              <div className="mt-3 space-y-2 text-sm text-foreground/80">
                <p>📍 Mumbai, Maharashtra, India</p>
                <p>
                  📧{" "}
                  <a href="mailto:info.xplosivewebtech@gmail.com" className="text-primary font-medium underline">
                    info.xplosivewebtech@gmail.com
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a href="tel:+919987896573" className="text-primary font-medium underline">
                    +91 99878 96573
                  </a>
                </p>
                <p className="text-muted-foreground pt-1">Response time: within 2 business days.</p>
              </div>
            </div>
            <p className="text-sm mt-4">
              Our{" "}
              <a href="/privacy-policy" className="text-primary underline font-medium">
                Privacy Policy
              </a>{" "}
              is incorporated by reference into these Terms and forms part of this agreement.
            </p>
          </SectionCard>

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
