import { Heart } from "lucide-react";

const hearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: 12 + Math.random() * 20,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
  opacity: 0.15 + Math.random() * 0.25,
}));

const FloatingHearts = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    {hearts.map((h) => (
      <Heart
        key={h.id}
        className="absolute text-primary fill-primary"
        style={{
          left: h.left,
          bottom: "-40px",
          width: h.size,
          height: h.size,
          opacity: h.opacity,
          animation: `float-heart ${h.duration}s ease-in ${h.delay}s infinite`,
        }}
      />
    ))}
  </div>
);

export default FloatingHearts;
