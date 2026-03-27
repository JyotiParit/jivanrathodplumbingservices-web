import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rahul Deshmukh", area: "Warje", text: "Excellent plumbing work! Fixed our leaking pipes within an hour. Very professional." },
  { name: "Priya Kulkarni", area: "Kothrud", text: "Installed new bathroom fixtures perfectly. Clean work and fair pricing. Highly recommend!" },
  { name: "Amit Patil", area: "Bavdhan", text: "Called for emergency drain cleaning. Arrived fast and resolved the issue quickly. Great service!" },
];

const TestimonialsSection = () => (
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
          What Our <span className="text-gradient-copper">Clients Say</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="p-6 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-copper text-copper" />
              ))}
            </div>
            <p className="text-foreground mb-4 text-sm leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.area}, Pune</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
