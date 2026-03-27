import { motion } from "framer-motion";
import { Wrench, CreditCard, Smartphone, CheckCircle2 } from "lucide-react";

const features = [
  {
    category: "Offerings",
    icon: Wrench,
    items: ["Repair Services", "New Installations", "Emergency Plumbing", "Maintenance Contracts"],
  },
  {
    category: "Payments",
    icon: CreditCard,
    items: ["Cash Payment", "NFC Mobile Payments", "UPI / QR Code", "Online Transfer"],
  },
  {
    category: "Convenience",
    icon: Smartphone,
    items: ["On-site Estimates", "Same Day Service", "Weekend Availability", "WhatsApp Booking"],
  },
];

const FeaturesSection = () => (
  <section className="py-24 bg-gradient-section">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Business <span className="text-gradient-copper">Features</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We make it easy for you — flexible payments, quick service, and professional support.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.category}
            className="p-8 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg mb-4">{f.category}</h3>
            <ul className="space-y-3">
              {f.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-copper shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
