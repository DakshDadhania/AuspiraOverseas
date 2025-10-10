import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
} 