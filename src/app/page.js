import HeroSection from "@/components/HeroSec/HeroSection";
import MainSection from "@/components/MainSec/MainSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-4">
      <HeroSection />
      <MainSection />
    </div>
  );
}