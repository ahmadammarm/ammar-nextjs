import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
        <Navbar />
        <HomeSection />
        <AboutSection />
    </>
  );
}
