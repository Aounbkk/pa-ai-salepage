import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import TransformSection from "@/components/TransformSection";
import CurriculumSection from "@/components/CurriculumSection";
import BenefitsSection from "@/components/BenefitsSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointSection />
        <TransformSection />
        <CurriculumSection />
        <BenefitsSection />
        <InstructorSection />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
