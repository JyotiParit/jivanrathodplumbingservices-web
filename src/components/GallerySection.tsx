import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpeg";
import work2 from "@/assets/work-2.jpeg";
import work3 from "@/assets/work-3.jpeg";
import work4 from "@/assets/work-4.jpeg";
import work5 from "@/assets/work-5.jpeg";

const images = [
  { src: work1, alt: "Plumbing pipe connection work" },
  { src: work2, alt: "CPVC pipe installation" },
  { src: work3, alt: "Electrical and plumbing junction box" },
  { src: work4, alt: "Bathroom basin installation" },
  { src: work5, alt: "Modern toilet installation" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Our <span className="text-gradient-blue">Work</span>
        </h2>
        <p className="text-muted-foreground">A glimpse of our recent plumbing projects.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="aspect-[3/4] rounded-2xl overflow-hidden border border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
