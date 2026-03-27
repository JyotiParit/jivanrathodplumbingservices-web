import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";

const stats = [
  { icon: Shield, label: "Trusted Service", value: "100+" },
  { icon: Clock, label: "Quick Response", value: "30 min" },
  { icon: Award, label: "Happy Clients", value: "500+" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-gradient-section">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          About <span className="text-gradient-copper">Our Services</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Jivan Plumbing Services offers expert plumbing solutions across Warje, Pune, and nearby areas. We are committed to providing reliable, high-quality service for all plumbing needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <s.icon className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient-blue">{s.value}</span>
            <span className="text-sm text-muted-foreground">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
