import { motion } from "framer-motion";
import {
  Droplets, Wrench, ShowerHead, Pipette, Bath,
  Flame, Trash2, TreePine, Waves, Layers, Settings,
} from "lucide-react";

const services = [
  { icon: Droplets, title: "Leak Detection", desc: "Advanced leak detection & repair" },
  { icon: Wrench, title: "Pipe Repair", desc: "All types of pipe repair & replacement" },
  { icon: ShowerHead, title: "Shower Install & Repair", desc: "Complete shower solutions" },
  { icon: Pipette, title: "Tap Install & Repair", desc: "Faucet installation & maintenance" },
  { icon: Bath, title: "Toilet Install & Repair", desc: "Toilet fitting & troubleshooting" },
  { icon: Flame, title: "Water Heater Install", desc: "Geyser & water heater services" },
  { icon: Trash2, title: "Drain Cleaning", desc: "Clogged drain & sewer cleaning" },
  { icon: TreePine, title: "Outdoor Plumbing", desc: "Garden & outdoor pipe repair" },
  { icon: Waves, title: "Pool Plumbing", desc: "Swimming pool plumbing repair" },
  { icon: Layers, title: "Grouting", desc: "Professional grouting services" },
  { icon: Settings, title: "All Plumbing Work", desc: "Complete plumbing solutions" },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Our <span className="text-gradient-blue">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Comprehensive plumbing services for residential and commercial properties.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <s.icon className="w-8 h-8 text-copper mb-4 group-hover:text-primary transition-colors" />
            <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
