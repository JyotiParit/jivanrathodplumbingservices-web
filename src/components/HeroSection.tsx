import { Phone, Calendar, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-copper/5 blur-3xl" />
        <Droplets className="absolute top-32 right-[20%] w-8 h-8 text-primary/20 animate-float" />
        <Droplets className="absolute bottom-40 left-[15%] w-6 h-6 text-copper/20 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-copper/30 text-copper text-sm font-medium mb-6">
              Trusted Plumbing Experts in Pune
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Reliable{" "}
            <span className="text-gradient-blue">Plumbing Services</span>
            <br />in Pune
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Expert solutions for all your plumbing needs – from small repairs to major installations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <a
              href="tel:+918830861783"
              className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 rounded-xl text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-blue"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a
              href="https://wa.me/918830861783?text=Hi%2C%20I%20need%20plumbing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary px-8 py-4 rounded-xl text-secondary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-copper"
            >
              <Calendar className="w-5 h-5" /> Book Service
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
