import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClubsSection from "@/components/ClubsSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5EAD8] text-[#20232C] font-body-sans overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ClubsSection />
      <RecruitmentSection />
      <Footer />
    </main>
  );
}
