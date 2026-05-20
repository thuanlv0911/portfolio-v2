import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
    </main>
  );
}