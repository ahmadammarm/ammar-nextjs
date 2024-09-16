import HomeSection from "../components/Sections/HomeSection";
import AboutSection from "../components/Sections/AboutSection";
import EducationSection from "../components/Sections/EducationSection";
import PortfolioSection from "../components/Sections/PortfolioSection";
import ContactSection from "../components/Sections/ContactSection";

export default function Home() {
  return (
    <>
        <HomeSection />
        <AboutSection />
        {/* <EducationSection /> */}
        {/* <SkillSection /> */}
        {/* <ExperiencesSection /> */}
        <PortfolioSection />
        <ContactSection />
    </>
  );
}
