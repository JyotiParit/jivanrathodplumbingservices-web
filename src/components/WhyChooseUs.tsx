import { motion } from "framer-motion";
import { UserCheck, Zap, IndianRupee, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: UserCheck, title: "Experienced Professionals", desc: "Skilled plumbers with years of hands-on experience." },
  { icon: Zap, title: "Quick Response", desc: "Fast arrival and efficient service, every time." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent and competitive rates with no hidden charges." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Your satisfaction is our top priority, guaranteed." },
];

const WhyChooseUs = () => (
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
          Why <span className="text-gradient-copper">Choose Us</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            className="text-center p-8 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <r.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
