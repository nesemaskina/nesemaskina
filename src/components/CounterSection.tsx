import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const calculateTime = () => {
  const start = new Date("2020-02-27"); // Adjust this date!
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const heartbeats = Math.floor(diff / 800); // ~75 bpm
  return { days, hours, heartbeats };
};

const CounterSection = () => {
  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(calculateTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Birlikte Geçen Günümüz", value: time.days.toLocaleString() },
    { label: "Saat", value: time.hours.toLocaleString() },
    { label: "Kalp Atışı", value: time.heartbeats.toLocaleString() },
  ];

  return (
    <section className="py-20 px-6 bg-section-rose">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-center mb-12 text-foreground"
        >
          Açkm Çok Olmuşuz =D
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center bg-card rounded-xl p-8 shadow-romantic border border-primary/10"
            >
              <div className="font-serif text-4xl md:text-5xl text-gradient-gold mb-2">
                {s.value}
              </div>
              <div className="font-body text-lg text-muted-foreground tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
