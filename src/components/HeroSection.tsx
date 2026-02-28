import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-hero-overlay" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-10 text-center px-6 max-w-3xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm mb-8"
      >
        <Heart className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-body text-xl tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
      >
        Birlikte
      </motion.p>

      <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary-foreground leading-tight mb-6">
        6. Yılımızı
        <span className="block text-4xl md:text-5xl font-medium italic mt-2">
          Kutlarken
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="font-body text-xl md:text-2xl text-primary-foreground/90 max-w-lg mx-auto"
      >
        Her senemiz, ihtiyaç duyduğumu bilmediğim bir hediye oldu.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 font-body text-lg text-primary-foreground/60 tracking-widest"
      >
        ↓ Hikâyemizi keşfetmek için kaydır ↓
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
