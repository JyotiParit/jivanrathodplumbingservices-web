import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`);
    window.open(`https://wa.me/918830861783?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground">Have a plumbing issue? Contact us today.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="tel:+918830861783" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground">+91 8830861783</p>
              </div>
            </a>

            <a href="https://instagram.com/jivan_rathod_plumbing_services" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-copper/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-copper/10 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-copper" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Instagram</p>
                <p className="font-semibold text-foreground">@jivan_rathod_plumbing_services</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Service Areas</p>
                <p className="font-semibold text-foreground text-sm">Warje, Kothrud, Karvenagar, Bavdhan, Pune</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-2xl bg-card border border-border"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <p className="text-xl font-display font-bold text-gradient-copper mb-2">Thank You!</p>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Describe your plumbing issue..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 rounded-xl text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" /> Send via WhatsApp
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
