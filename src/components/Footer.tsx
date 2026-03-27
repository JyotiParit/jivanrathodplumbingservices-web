import { Phone, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover border border-copper/30" />
          <div>
            <p className="text-xl font-display font-bold text-gradient-copper">Jivan Rathod Plumbing Services</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" /> Serving Pune & nearby areas
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+918830861783" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" /> +91 8830861783
          </a>
          <a href="https://instagram.com/jivan_rathod_plumbing_services" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} Jivan Rathod Plumbing Services. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
