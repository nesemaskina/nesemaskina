import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const LoveLetterSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-2xl p-10 md:p-16 shadow-romantic border border-primary/10"
      >
        <Heart className="w-8 h-8 text-primary fill-primary mx-auto mb-6 opacity-60" />

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
          Açkm İçin
        </h2>

        <div className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground space-y-6 italic">
          <p>
            İyi ki de beni büyütüp, benimle büyümeyi seçtin.
          </p>
          <p>
            En iyi arkadaşım, en büyük maceramsın, tatillere ve yarınlara seninle anılar yaratmak için meraklanıyorum.
          </p>
          <p>
            Altı yılın kahkahasına, gözyaşına, büyümeye ve çocuk kalmaya.
          </p>
        </div>

        <div className="mt-10 font-serif text-2xl text-gradient-gold">
          Sevgiyle ♥
        </div>
      </motion.div>
    </div>
  </section>
);

export default LoveLetterSection;
