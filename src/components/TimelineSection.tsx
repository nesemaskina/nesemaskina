import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const milestones = [
  { year: "1. Yıl", title: "Başlangıç", description: "İki kalbin birbirini bulduğu ve her şeyin sonsuza dek değiştiği zaman.", images: [
      "public/images/1a.jpeg",
      "public/images/1b.jpeg",
      "public/images/1c.jpeg",
      "public/images/1d.jpeg",
      "public/images/1e.jpeg",
      "public/images/1f.jpeg",
    ] },
  { year: "2. Yıl", title: "Birlikte Büyümek", description: "Birbirimizin tanıyıp öğrenip kendi küçük dünyamızı kurmak.", images: [
      "public/images/2a.jpeg",
      "public/images/2b.jpeg",
      "public/images/2c.jpeg",
      "public/images/2d.jpeg",
      "public/images/2e.jpeg",
      "public/images/2f.jpeg",
    ] },
  { year: "3. Yıl", title: "Maceralar", description: "Hayatı yan yana keşfetmek, bir ömür sürecek anılar biriktirmek.", images: [
      "public/images/3a.jpeg",
      "public/images/3b.jpeg",
      "public/images/3c.jpeg",
      "public/images/3d.jpeg",
      "public/images/3e.jpeg",
      "public/images/3f.jpeg",
    ] },
  { year: "4. Yıl", title: "Daha Derinlere", description: "Güven, kahkaha ve sarsılmaz destek üzerine.", images: [
      "public/images/4a.jpeg",
      "public/images/4b.jpeg",
      "public/images/4c.jpeg",
      "public/images/4d.jpeg",
      "public/images/4e.jpeg",
      "public/images/4f.jpeg",
    ] },
  { year: "5. Yıl", title: "Her Şeye Rağmen", description: "Her fırtınada dimdik durmak, her zorlukta daha çok sevmek.", images: [
      "public/images/5a.jpeg",
      "public/images/5b.jpeg",
      "public/images/5c.jpeg",
      "public/images/5d.jpeg",
      "public/images/5e.jpeg",
      "public/images/5f.jpeg",
    ] },
  { year: "6. Yıl", title: "Hâlâ Çok Seviyorum", description: "Altı yıl sonra, birlikte büyümeye devam ederken, seni daha daçok seviyorum.", images: [
      "public/images/6a.jpeg",
      "public/images/6b.jpeg",
      "public/images/6c.jpeg",
      "public/images/6d.jpeg",
      "public/images/6e.jpeg",
      "public/images/6f.jpeg",
    ] },
];

const circleImages = [
      { images: [
      "public/images/7a.jpeg",
      "public/images/7b.jpeg",
      "public/images/7c.jpeg",
      "public/images/7d.jpeg",
      "public/images/7e.jpeg",
      "public/images/7f.jpeg",
      "public/images/8a.jpeg",
      "public/images/8b.jpeg",
      "public/images/8c.jpeg",
      "public/images/8d.jpeg",
      "public/images/8e.jpeg",
      "public/images/8f.jpeg",
      "public/images/9a.jpeg",
      "public/images/9b.jpeg",
      "public/images/9c.jpeg",
      "public/images/9d.jpeg",
      "public/images/9e.jpeg",
      "public/images/9f.jpeg",
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
