import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/website_white_png.png"

const Footer = () => {
  return (
    <footer className="bg-muted/50 text-foreground pt-16 pb-8">
      <div className="container-tight">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand + Social */}
          <div className="md:col-span-1">
            <img src={logo2} alt="XplosiveWebTech" width={220} />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              From Beginner to Job-Ready Engineer. Live mentor-led bootcamp for the next generation of software engineers.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: MessageCircle, href: "https://wa.me/919987896573", label: "WhatsApp" },
                { Icon: Twitter, href: "https://x.com/xplosivewebTech", label: "Twitter" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61563686884533", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/info.xplosivewebtech/", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/xplosive-webtech/", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-foreground/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#programs" className="hover:text-accent transition-smooth">Self-Paced Full Stack</a></li>
              <li><a href="#programs" className="hover:text-accent transition-smooth">Live Online Full Stack + AI</a></li>
              <li><a href="#programs" className="hover:text-accent transition-smooth">Offline Full Stack + AI Career</a></li>
              <li><a href="#programs" className="hover:text-accent transition-smooth">1:1 Career Mentorship</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#why-us" className="hover:text-accent transition-smooth">Why Us</a></li>
              <li><a href="#about" className="hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#faq" className="hover:text-accent transition-smooth">FAQ</a></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-smooth">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-accent transition-smooth">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact — critical for Google Ads NAP consistency */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+919987896573"
                  className="flex items-start gap-2 hover:text-accent transition-smooth"
                >
                  <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  +91 99878 96573
                </a>
              </li>
              <li>
                <a
                  href="mailto:info.xplosivewebtech@gmail.com"
                  className="flex items-start gap-2 hover:text-accent transition-smooth"
                >
                  <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  info.xplosivewebtech@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-medium transition-smooth"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} XplosiveWebTech. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-accent transition-smooth">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms-of-service" className="hover:text-accent transition-smooth">Terms of Service</Link>
            <span>·</span>
            <span>Built for engineers, by engineers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
