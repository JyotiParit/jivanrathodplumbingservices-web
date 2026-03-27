import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (id: string) => {
    setPendingSectionId(id);
    setOpen(false);
  };

  useEffect(() => {
    if (!pendingSectionId || open) return;

    const timeout = window.setTimeout(() => {
      const target = document.getElementById(pendingSectionId);
      if (!target) return;

      const offset = (navRef.current?.offsetHeight ?? 80) + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
      window.history.replaceState(null, "", `#${pendingSectionId}`);
      setPendingSectionId(null);
    }, 260);

    return () => window.clearTimeout(timeout);
  }, [open, pendingSectionId]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Jivan Rathod Plumbing Services Logo" className="w-10 h-10 rounded-full object-cover border border-copper/30" />
          <div className="flex flex-col">
            <span className="text-lg font-display font-bold text-gradient-copper leading-tight">Jivan Rathod</span>
            <span className="hidden sm:block text-xs text-muted-foreground leading-tight">Plumbing Services</span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+918830861783" className="inline-flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button type="button" className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => scrollToSection(l.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a href="tel:+918830861783" className="inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 rounded-lg font-medium text-primary-foreground">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
