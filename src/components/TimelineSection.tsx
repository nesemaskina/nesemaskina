import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const milestones = [
  { year: "1. Yıl", title: "Başlangıç", description: "İki kalbin birbirini bulduğu ve her şeyin sonsuza dek değiştiği zaman.", images: [
      "src/images/1a.jpeg",
      "src/images/1b.jpeg",
      "src/images/1c.jpeg",
      "src/images/1d.jpeg",
      "src/images/1e.jpeg",
      "src/images/1f.jpeg",
    ] },
  { year: "2. Yıl", title: "Birlikte Büyümek", description: "Birbirimizin tanıyıp öğrenip kendi küçük dünyamızı kurmak.", images: [
      "src/images/2a.jpeg",
      "src/images/2b.jpeg",
      "src/images/2c.jpeg",
      "src/images/2d.jpeg",
      "src/images/2e.jpeg",
      "src/images/2f.jpeg",
    ] },
  { year: "3. Yıl", title: "Maceralar", description: "Hayatı yan yana keşfetmek, bir ömür sürecek anılar biriktirmek.", images: [
      "src/images/3a.jpeg",
      "src/images/3b.jpeg",
      "src/images/3c.jpeg",
      "src/images/3d.jpeg",
      "src/images/3e.jpeg",
      "src/images/3f.jpeg",
    ] },
  { year: "4. Yıl", title: "Daha Derinlere", description: "Güven, kahkaha ve sarsılmaz destek üzerine.", images: [
      "src/images/4a.jpeg",
      "src/images/4b.jpeg",
      "src/images/4c.jpeg",
      "src/images/4d.jpeg",
      "src/images/4e.jpeg",
      "src/images/4f.jpeg",
    ] },
  { year: "5. Yıl", title: "Her Şeye Rağmen", description: "Her fırtınada dimdik durmak, her zorlukta daha çok sevmek.", images: [
      "src/images/5a.jpeg",
      "src/images/5b.jpeg",
      "src/images/5c.jpeg",
      "src/images/5d.jpeg",
      "src/images/5e.jpeg",
      "src/images/5f.jpeg",
    ] },
  { year: "6. Yıl", title: "Hâlâ Çok Seviyorum", description: "Altı yıl sonra, birlikte büyümeye devam ederken, seni daha daçok seviyorum.", images: [
      "src/images/6a.jpeg",
      "src/images/6b.jpeg",
      "src/images/6c.jpeg",
      "src/images/6d.jpeg",
      "src/images/6e.jpeg",
      "src/images/6f.jpeg",
    ] },
];

const circleImages = [
      { images: [
      "src/images/7a.jpeg",
      "src/images/7b.jpeg",
      "src/images/7c.jpeg",
      "src/images/7d.jpeg",
      "src/images/7e.jpeg",
      "src/images/7f.jpeg",
      "src/images/8a.jpeg",
      "src/images/8b.jpeg",
      "src/images/8c.jpeg",
      "src/images/8d.jpeg",
      "src/images/8e.jpeg",
      "src/images/8f.jpeg",
      "src/images/9a.jpeg",
      "src/images/9b.jpeg",
      "src/images/9c.jpeg",
      "src/images/9d.jpeg",
      "src/images/9e.jpeg",
      "src/images/9f.jpeg",
    ] }];

const TimelineSection = () => (
  <section className="py-24 px-6 bg-section-rose">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl text-center mb-4 text-foreground"
      >
        Yolculuğumuz
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-body text-xl text-muted-foreground text-center mb-16"
      >
        Aşk hikayemizin altı güzel bölümü
      </motion.p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
              <span className="font-body text-sm tracking-[0.2em] uppercase text-gold font-semibold">
                {m.year}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1 mb-2">{m.title}</h3>
              <p className="font-body text-lg text-muted-foreground">{m.description}</p>
              {m.images && m.images.length > 0 && (
                <div className={`mt-4 flex gap-2 justify-center md:justify-${i % 2 === 0 ? 'end' : 'start'}`}>
                  {m.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt="milestone"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Center dot */}
            <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-card shadow-romantic border-2 border-primary/30 z-10 shrink-0">
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </div>

            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
      {/* Circular collage formed by small images */}
      <div className="mt-16 flex justify-center">
        <div
          className="relative"
          style={{ width: 320, height: 320 }}
        >
          {circleImages[0].images.map((src, idx) => {
            const n = circleImages[0].images.length;
            const angle = (idx / n) * Math.PI * 2;
            const radius = 120; // px from center
            const cx = 160 + Math.cos(angle) * radius; // center x
            const cy = 160 + Math.sin(angle) * radius; // center y
            return (
              <img
                key={idx}
                src={src}
                alt={`circle-${idx}`}
                style={{
                  position: "absolute",
                  left: cx,
                  top: cy,
                  width: 44,
                  height: 44,
                  borderRadius: "9999px",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })}
          {/* Center heart */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: 145,
              top: 150,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
