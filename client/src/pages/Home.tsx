import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection"; 
import NewsSection from "@/components/home/NewsSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
    </>
  );
};

export default Home;