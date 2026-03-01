import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import * as React from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Resolve public images using Vite's BASE_URL so production uses the correct base path
function resolveSrcPublic(fileName: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}images/${fileName}`;
}

const milestones = [
  { year: "1. Yıl", title: "Başlangıç", description: "İki kalbin birbirini bulduğu ve her şeyin sonsuza dek değiştiği zaman.", images: [
      "1a.jpeg",
      "1b.jpeg",
      "1c.jpeg",
      "1d.jpeg",
      "1e.jpeg",
      "1f.jpeg",
    ] },
  { year: "2. Yıl", title: "Birlikte Büyümek", description: "Birbirimizin tanıyıp öğrenip kendi küçük dünyamızı kurmak.", images: [
      "2a.jpeg",
      "2b.jpeg",
      "2c.jpeg",
      "2d.jpeg",
      "2e.jpeg",
      "2f.jpeg",
    ] },
  { year: "3. Yıl", title: "Maceralar", description: "Hayatı yan yana keşfetmek, bir ömür sürecek anılar biriktirmek.", images: [
      "3a.jpeg",
      "3b.jpeg",
      "3c.jpeg",
      "3d.jpeg",
      "3e.jpeg",
      "3f.jpeg",
    ] },
  { year: "4. Yıl", title: "Daha Derinlere", description: "Güven, kahkaha ve sarsılmaz destek üzerine.", images: [
      "4a.jpeg",
      "4b.jpeg",
      "4c.jpeg",
      "4d.jpeg",
      "4e.jpeg",
      "4f.jpeg",
    ] },
  { year: "5. Yıl", title: "Her Şeye Rağmen", description: "Her fırtınada dimdik durmak, her zorlukta daha çok sevmek.", images: [
      "5a.jpeg",
      "5b.jpeg",
      "5c.jpeg",
      "5d.jpeg",
      "5e.jpeg",
      "5f.jpeg",
    ] },
  { year: "6. Yıl", title: "Hâlâ Çok Seviyorum", description: "Altı yıl sonra, birlikte büyümeye devam ederken, seni daha daçok seviyorum.", images: [
      "6a.jpeg",
      "6b.jpeg",
      "6c.jpeg",
      "6d.jpeg",
      "6e.jpeg",
      "6f.jpeg",
    ] },
];

const circleImages = [
      { images: [
      "7a.jpeg",
      "7b.jpeg",
      "7c.jpeg",
      "7d.jpeg",
      "7e.jpeg",
      "7f.jpeg",
      "8a.jpeg",
      "8b.jpeg",
      "8c.jpeg",
      "8d.jpeg",
      "8e.jpeg",
      "8f.jpeg",
      "9a.jpeg",
      "9b.jpeg",
      "9c.jpeg",
      "9d.jpeg",
      "9e.jpeg",
      "9f.jpeg",
    ] }];

const TimelineSection = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  // flatten milestone and circle image filenames into one list for navigation
  const allImages: string[] = React.useMemo(() => {
    const list: string[] = [];
    milestones.forEach(m => list.push(...m.images));
    circleImages[0].images.forEach(i => list.push(i));
    return list;
  }, []);

  function openImage(fileName: string) {
    console.log("openImage called", fileName);
    const idx = allImages.indexOf(fileName);
    setCurrentIndex(idx === -1 ? 0 : idx);
    setSelected(fileName);
    setOpen(true);
  }

  // lock body scroll while modal open and compensate for scrollbar width to avoid layout shift
  React.useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const original = document.body.style.overflow;
      const originalPadding = document.body.style.paddingRight;
      
      document.body.style.overflow = "hidden";
      if (scrollbarWidth) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      
      return () => {
        document.body.style.overflow = original;
        document.body.style.paddingRight = originalPadding;
      };
    }
  }, [open]);

  function showNext() {
    setCurrentIndex(i => {
      const next = (i + 1) % allImages.length;
      setSelected(allImages[next]);
      return next;
    });
  }

  function showPrev() {
    setCurrentIndex(i => {
      const prev = (i - 1 + allImages.length) % allImages.length;
      setSelected(allImages[prev]);
      return prev;
    });
  }

  console.log("TimelineSection render", { open, selected, currentIndex });
  return (
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
                    <button
                      key={idx}
                      onClick={() => openImage(src)}
                      className="rounded-full overflow-hidden w-12 h-12 p-0 border-0 bg-transparent"
                    >
                      <img
                        src={resolveSrcPublic(src)}
                        alt={`milestone-${idx}`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </button>
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl w-full">
          <DialogTitle className="sr-only">Image preview</DialogTitle>
          <DialogDescription>
            {selected && (
              <img src={resolveSrcPublic(selected)} alt="selected" className="w-full h-auto object-contain" />
            )}
          </DialogDescription>

          {/* navigation arrows */}
          <button
            onClick={showPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 focus:outline-none"
            aria-label="Previous image"
          >
            ❮
          </button>
          <button
            onClick={showNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 focus:outline-none"
            aria-label="Next image"
          >
            ❯
          </button>
        </DialogContent>
      </Dialog>
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
              <button
                key={idx}
                onClick={() => openImage(src)}
                className="absolute p-0 border-0 bg-transparent"
                style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}
              >
                <img
                  src={resolveSrcPublic(src)}
                  alt={`circle-${idx}`}
                  style={{ width: 44, height: 44, borderRadius: "9999px", objectFit: "cover" }}
                />
              </button>
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
}

export default TimelineSection;
