import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import heroBg from "../../assets/hero-bg.jpg";
import logo2 from "../../assets/website_logo.png"

const NAV_LINKS = [
  { label: "Programs", hash: "programs" },
  { label: "Compare", hash: "compare" },
  { label: "Why Us", hash: "why-us" },
  { label: "Curriculum", hash: "curriculum" },
  { label: "FAQ", hash: "faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const navHref = (hash: string) => isHome ? `#${hash}` : `/#${hash}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container-tight flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 font-display font-bold text-lg">
          {/* <span className="w-8 h-8 rounded-lg gradient-primary grid place-items-center text-primary-foreground shadow-glow">X</span> */}
          {/* <span className="text-secondary">Xplosive<span className="text-primary">WebTech</span></span> */}
          <img src={logo2} alt="" width={300} />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.hash} href={navHref(l.hash)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session.%20Please%20share%20the%20details." target="_blank" rel="noopener noreferrer">Book Free Demo</a>
          </Button>
        </div>
        <button className="md:hidden text-secondary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-tight py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.hash} href={navHref(l.hash)} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild onClick={() => setOpen(false)}>
              <a href="https://wa.me/919987896573?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20demo%20session.%20Please%20share%20the%20details." target="_blank" rel="noopener noreferrer">Book Free Demo</a>
            </Button>
          </div>
        </div>
      )}
      <div className="scroll-progress-bar" aria-hidden="true" />
    </header>
  );
};

export default Navbar;
