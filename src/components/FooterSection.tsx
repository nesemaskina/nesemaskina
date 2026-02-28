import { Heart } from "lucide-react";

const FooterSection = () => (
  <footer className="py-16 px-6 text-center">
    <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-lg">
      <span>Kalp</span>
      <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
      <span>Kalp</span>
    </div>
    <p className="font-serif text-2xl text-gradient-gold mt-4">
      Nice 6'lı senelere =)
    </p>
  </footer>
);

export default FooterSection;
