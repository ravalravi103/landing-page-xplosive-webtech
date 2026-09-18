import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Shield, Eye, Lock, Users, Bell, Trash2, Mail, Globe, Cookie, Database } from "lucide-react";

const sections = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "data-collected", label: "Data We Collect" },
  { id: "how-we-use", label: "How We Use It" },
  { id: "sharing", label: "Sharing Your Data" },
  { id: "cookies", label: "Cookies & Analytics" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Retention" },
  { id: "your-rights", label: "Your Rights" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Policy Changes" },
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

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[hsl(210_40%_98%)]">
      <Navbar />

      {/* Hero */}
      <section className="[background:var(--gradient-hero)] text-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span>Your privacy is our commitment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            We believe in transparency. This policy explains what data we collect, why we collect it, and
            how we protect it — in plain language.
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
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-8 flex gap-4">
            <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              XplosiveWebTech ("we", "us", "our") is committed to protecting your personal data in
              accordance with India's <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and
              applicable rules. By using our website or enrolling in a program you agree to the practices
              described here.
            </p>
          </div>

          <SectionCard id="who-we-are" icon={Globe} number="Section 01" title="Who We Are">
            <p>
              <strong>XplosiveWebTech</strong> is an IT training institute based in Mumbai, Maharashtra,
              India. We offer coding bootcamps, full-stack development courses, and placement support for
              aspiring software developers.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Legal name:</strong> XplosiveWebTech</li>
              <li><strong>Registered address:</strong> Mumbai, Maharashtra, India</li>
              <li><strong>Contact email:</strong> info.xplosivewebtech@gmail.com</li>
              <li><strong>Phone:</strong> +91 99878 96573</li>
            </ul>
            <p className="text-sm">
              XplosiveWebTech acts as the <strong>Data Fiduciary</strong> (controller) for all personal data
              processed under this policy.
            </p>
          </SectionCard>

          <SectionCard id="data-collected" icon={Database} number="Section 02" title="Data We Collect">
            <p>We collect the following categories of personal data:</p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  heading: "Identity & Contact",
                  items: ["Full name", "Email address", "Phone / WhatsApp number", "City / state"],
                },
                {
                  heading: "Educational Background",
                  items: ["Current qualification", "Course / batch enrolled", "Learning progress & assessments"],
                },
                {
                  heading: "Payment Information",
                  items: ["Transaction IDs", "Payment method type (not card numbers)", "Fee receipt details"],
                },
                {
                  heading: "Technical & Usage Data",
                  items: ["IP address", "Browser & device type", "Pages visited & session duration", "Referral source (UTM parameters)"],
                },
              ].map((group) => (
                <div key={group.heading} className="bg-muted/50 rounded-xl p-4">
                  <p className="font-semibold text-secondary text-sm mb-2">{group.heading}</p>
                  <ul className="text-sm space-y-1 list-disc pl-4 text-foreground/70">
                    {group.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-sm mt-2">
              We collect this data when you fill in an enquiry or enrollment form, message us on WhatsApp,
              visit our website, or communicate with our team.
            </p>
          </SectionCard>

          <SectionCard id="how-we-use" icon={Eye} number="Section 03" title="How We Use Your Data">
            <p>We process your personal data only for the following lawful purposes:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Enquiry & enrollment:</strong> To respond to your questions, schedule demo sessions, and confirm batch seats.</li>
              <li><strong>Program delivery:</strong> To provide course access, track progress, and issue completion certificates.</li>
              <li><strong>Placement support:</strong> To share your profile (with consent) with hiring partners, conduct mock interviews, and assist with job applications.</li>
              <li><strong>Communications:</strong> To send batch schedules, fee reminders, live-session links, and important program updates.</li>
              <li><strong>Marketing:</strong> To run Google Ads and WhatsApp remarketing campaigns targeting prospective students (you can opt out at any time).</li>
              <li><strong>Service improvement:</strong> To analyse how visitors use our website and improve the student experience.</li>
              <li><strong>Legal compliance:</strong> To meet our obligations under applicable Indian law.</li>
            </ul>
            <p className="text-sm bg-primary/5 border border-primary/15 rounded-xl p-4">
              We do <strong>not</strong> sell, rent, or trade your personal data to any third party for their
              own marketing purposes.
            </p>
          </SectionCard>

          <SectionCard id="sharing" icon={Users} number="Section 04" title="Sharing Your Data">
            <p>
              We share personal data only where necessary and with appropriate safeguards in place:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Hiring partners & employers</strong> — your resume and profile are shared with
                prospective employers <em>only with your explicit consent</em> as part of placement support.
              </li>
              <li>
                <strong>Payment processors</strong> — Razorpay or similar gateways process fee payments
                securely; we do not store card or bank details.
              </li>
              <li>
                <strong>Cloud infrastructure</strong> — our website and data are hosted on secure cloud
                servers (e.g., AWS / GCP) with industry-standard encryption.
              </li>
              <li>
                <strong>Analytics & advertising</strong> — Google Analytics and Google Ads receive anonymised
                or pseudonymous identifiers to measure website performance and ad reach.
              </li>
              <li>
                <strong>Legal authorities</strong> — we disclose data when required by a court order,
                government authority, or applicable law.
              </li>
            </ul>
            <p className="text-sm">
              All third-party service providers are contractually obligated to process your data only for
              the purposes we specify and to maintain appropriate security measures.
            </p>
          </SectionCard>

          <SectionCard id="cookies" icon={Cookie} number="Section 05" title="Cookies & Analytics">
            <p>We use the following types of cookies on xplosivewebtech.com:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left px-4 py-2 rounded-tl-lg font-semibold text-secondary">Type</th>
                    <th className="text-left px-4 py-2 font-semibold text-secondary">Purpose</th>
                    <th className="text-left px-4 py-2 rounded-tr-lg font-semibold text-secondary">Can you opt out?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium">Essential</td>
                    <td className="px-4 py-3 text-foreground/70">Site navigation, form submissions</td>
                    <td className="px-4 py-3 text-foreground/70">No (required for core function)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Analytics</td>
                    <td className="px-4 py-3 text-foreground/70">Google Analytics — page views, session data</td>
                    <td className="px-4 py-3 text-foreground/70">Yes — browser settings or GA opt-out</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Advertising</td>
                    <td className="px-4 py-3 text-foreground/70">Google Ads remarketing to previous visitors</td>
                    <td className="px-4 py-3 text-foreground/70">
                      Yes —{" "}
                      <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        adssettings.google.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">
              You can disable cookies at any time in your browser settings. Disabling analytics and
              advertising cookies will not affect your ability to use the website.
            </p>
          </SectionCard>

          <SectionCard id="security" icon={Lock} number="Section 06" title="Data Security">
            <p>
              We implement technical and organisational measures to protect your personal data from
              unauthorised access, loss, or misuse:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HTTPS encryption for all data in transit.</li>
              <li>Access to student records is restricted to authorised staff only.</li>
              <li>Payment processing is handled exclusively by PCI-DSS-compliant payment gateways.</li>
              <li>Regular security reviews of our website and internal systems.</li>
            </ul>
            <p className="text-sm">
              While we take every reasonable precaution, no method of transmission over the internet is
              100% secure. If you suspect any unauthorised use of your data, please contact us immediately.
            </p>
          </SectionCard>

          <SectionCard id="retention" icon={Database} number="Section 07" title="Data Retention">
            <p>We retain your personal data only for as long as necessary:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Enrolled students:</strong> For the duration of the program plus <strong>3 years</strong>
                {" "}thereafter (for certificate verification and placement reference).
              </li>
              <li>
                <strong>Enquiry leads (not enrolled):</strong> Up to <strong>12 months</strong> from your
                last interaction.
              </li>
              <li>
                <strong>Payment records:</strong> Retained for <strong>7 years</strong> as required under
                Indian tax and accounting laws.
              </li>
              <li>
                <strong>Website analytics:</strong> Aggregated data retained per Google Analytics default
                retention settings (26 months).
              </li>
            </ul>
            <p className="text-sm">
              After the applicable retention period, your data is securely deleted or anonymised.
            </p>
          </SectionCard>

          <SectionCard id="your-rights" icon={Shield} number="Section 08" title="Your Rights">
            <p>
              Under India's Digital Personal Data Protection (DPDP) Act, 2023, you have the following
              rights as a Data Principal:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-2">
              {[
                { right: "Right to Access", desc: "Request a copy of the personal data we hold about you." },
                { right: "Right to Correction", desc: "Ask us to correct inaccurate or incomplete data." },
                { right: "Right to Erasure", desc: "Request deletion of your data where it is no longer needed." },
                { right: "Right to Grievance Redressal", desc: "Raise a complaint with our Grievance Officer and receive a response within 30 days." },
                { right: "Right to Withdraw Consent", desc: "Withdraw consent for marketing communications at any time without affecting past lawful processing." },
                { right: "Right to Nominate", desc: "Nominate a person to exercise your rights on your behalf in the event of death or incapacity." },
              ].map((r) => (
                <div key={r.right} className="bg-muted/40 rounded-xl p-4">
                  <p className="font-semibold text-secondary text-sm">{r.right}</p>
                  <p className="text-sm text-foreground/70 mt-1">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm mt-4">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:info.xplosivewebtech@gmail.com" className="text-primary font-medium underline">
                info.xplosivewebtech@gmail.com
              </a>{" "}
              with the subject line <em>"Data Rights Request"</em>. We will respond within <strong>30 days</strong>.
            </p>
          </SectionCard>

          <SectionCard id="children" icon={Users} number="Section 09" title="Children's Privacy">
            <p>
              Our programs are designed for individuals aged <strong>18 and above</strong>. We do not
              knowingly collect personal data from anyone under the age of 18 without verifiable parental
              consent.
            </p>
            <p className="text-sm">
              If you believe a minor has submitted personal data to us without consent, please contact us
              immediately at{" "}
              <a href="mailto:info.xplosivewebtech@gmail.com" className="text-primary underline">
                info.xplosivewebtech@gmail.com
              </a>{" "}
              and we will promptly delete that information.
            </p>
          </SectionCard>

          <SectionCard id="changes" icon={Bell} number="Section 10" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technology, or legal requirements. When we make material changes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>We will update the "Last updated" date at the top of this page.</li>
              <li>For significant changes, we will notify enrolled students via email.</li>
              <li>Continued use of our website or services after the update constitutes acceptance of the revised policy.</li>
            </ul>
            <p className="text-sm">
              We encourage you to review this policy periodically to stay informed about how we protect
              your information.
            </p>
          </SectionCard>

          <SectionCard id="contact" icon={Mail} number="Section 11" title="Contact & Grievance Officer">
            <p>
              For any privacy-related questions, data requests, or complaints, please reach out to our
              designated Grievance Officer:
            </p>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-xl p-6 mt-2">
              <p className="font-bold text-secondary text-lg">XplosiveWebTech — Grievance Officer</p>
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
                <p className="text-muted-foreground pt-1">Response time: within 30 days of receiving your request.</p>
              </div>
            </div>
            <p className="text-sm mt-4">
              If you are not satisfied with our response, you may lodge a complaint with India's{" "}
              <strong>Data Protection Board</strong> once the DPDP Rules are notified by the Government of India.
            </p>
          </SectionCard>

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
