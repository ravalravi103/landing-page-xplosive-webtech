import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";
import logo2 from "../../assets/website_white_png.png"

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-foreground pt-16 pb-8">
      <div className="container-tight">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            {/* <div className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="w-8 h-8 rounded-lg gradient-accent grid place-items-center text-accent-foreground">X</span>
              XplosiveWebTech
            </div> */}
            <img src={logo2} alt="" width={300} />
            <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
              From Beginner to Job-Ready Engineer. Live mentor-led bootcamp for the next generation of software engineers.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: MessageCircle, href: "https://wa.me/9987896573", label: "WhatsApp" },
                { Icon: Twitter, href: " https://x.com/xplosivewebTech", label: "Twitter" },
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61563686884533", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/info.xplosivewebtech/", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/raviraval103/", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-accent-foreground grid place-items-center transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#programs" className="hover:text-accent transition-smooth">Frontend + AI</a></li>
              <li><a href="#programs" className="hover:text-accent transition-smooth">Backend + AI</a></li>
              <li><a href="#programs" className="hover:text-accent transition-smooth">Full Stack + AI</a></li>
              <li><a href="#programs" className="hover:text-accent transition-smooth">Cloud Engineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#why-us" className="hover:text-accent transition-smooth">Why Us</a></li>
              {/* <li><a href="#pricing" className="hover:text-accent transition-smooth">Pricing</a></li> */}
              <li><a href="#faq" className="hover:text-accent transition-smooth">FAQ</a></li>
              <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" />info.xplosivewebtech@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} XplosiveWebTech. All rights reserved.</p>
          <p>Built for engineers, by engineers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
