import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container-tight py-20 prose prose-slate max-w-3xl mx-auto">
        <h1 className="font-display text-3xl font-bold text-secondary mt-8">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">Last updated: September 2025</p>

        <h2>1. Information We Collect</h2>
        <p>
          When you interact with XplosiveWebTech — through our website, WhatsApp, or enrollment forms — we may
          collect your name, email address, phone number, and any messages you send us. We also collect
          anonymised usage data (pages visited, session duration) via Google Analytics.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to your enquiries and book demo sessions</li>
          <li>To send course updates, batch schedules, and placement support communications</li>
          <li>To improve our website and marketing campaigns</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p>We do not sell or share your personal data with third parties for their own marketing purposes.</p>

        <h2>3. Google Ads & Remarketing</h2>
        <p>
          We use Google Ads to reach prospective students. Google may use cookies to show you our ads on
          other websites based on your previous visits to xplosivewebtech.com. You can opt out of
          personalised advertising at{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            adssettings.google.com
          </a>.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Our site uses essential cookies for functionality and analytics cookies (Google Analytics) to
          understand how visitors use the site. You can disable cookies in your browser settings at any time.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your contact information for as long as you are enrolled or actively interested in our
          programs, and for up to 2 years after your last interaction, unless you request deletion earlier.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete the personal data we hold about you. To make a
          request, email us at{" "}
          <a href="mailto:info.xplosivewebtech@gmail.com">info.xplosivewebtech@gmail.com</a>.
        </p>

        <h2>7. Contact</h2>
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

export default PrivacyPolicy;
