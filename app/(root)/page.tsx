import HomeSection from "../components/Sections/HomeSection";
import AboutSection from "../components/Sections/AboutSection";
import PortfolioSection from "../components/Sections/PortfolioSection";
import ContactSection from "../components/Sections/ContactSection";
import SkillsSection from "../components/Sections/SkillsSection";

export default function Home() {
  return (
    <>
        <HomeSection />
        <AboutSection />
        {/* <EducationSection /> */}
        <SkillsSection />
        {/* <ExperiencesSection /> */}
        <PortfolioSection />
        <ContactSection />
    </>
  );
}
