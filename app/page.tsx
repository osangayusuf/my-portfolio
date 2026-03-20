import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import ProjectsList from "../components/ProjectsList";
import ExperienceSection from "../components/ExperienceSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pt-20 overflow-hidden">
        {/* Decoration: Logic Rail */}
        <div className="fixed left-[10%] top-0 w-px h-full logic-rail -z-10 opacity-50 hidden lg:block"></div>
        <Hero />
        <TechMarquee />
        <ProjectsList />
        <ExperienceSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
