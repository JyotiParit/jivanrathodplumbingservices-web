import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/918830861783?text=Hi%2C%20I%20need%20plumbing%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-[hsl(0,0%,100%)]" />
    </a>
    <a
      href="tel:+918830861783"
      className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow-blue"
      aria-label="Call"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </a>
  </div>
);

export default FloatingButtons;
