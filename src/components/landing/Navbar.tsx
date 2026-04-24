import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import heroBg from "../../assets/hero-bg.jpg";
import logo2 from "../../assets/website_logo.png"

const links = [
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Curriculum", href: "#curriculum" },
  // { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container-tight flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          {/* <span className="w-8 h-8 rounded-lg gradient-primary grid place-items-center text-primary-foreground shadow-glow">X</span> */}
          {/* <span className="text-secondary">Xplosive<span className="text-primary">WebTech</span></span> */}
          <img src={logo2} alt="" width={300} />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#cta">Book Free Demo</a>
          </Button>
        </div>
        <button className="md:hidden text-secondary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-tight py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild onClick={() => setOpen(false)}>
              <a href="#cta">Book Free Demo</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
