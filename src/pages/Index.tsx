import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import CounterSection from "@/components/CounterSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <FloatingHearts />
    <main className="relative z-10">
      <HeroSection />
      <TimelineSection />
      <CounterSection />
      <LoveLetterSection />
      <FooterSection />
    </main>
  </div>
);

export default Index;
