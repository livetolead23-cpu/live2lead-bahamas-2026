import Navbar       from "@/components/layout/Navbar";
import Footer       from "@/components/layout/Footer";
import Hero         from "@/components/sections/Hero";
import About        from "@/components/sections/About";
import Speakers       from "@/components/sections/Speakers";
import PhotoCarousel  from "@/components/sections/PhotoCarousel";
import WhyAttend      from "@/components/sections/WhyAttend";
import Testimonials from "@/components/sections/Testimonials";
import RegisterCTA     from "@/components/sections/RegisterCTA";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <PhotoCarousel />
        <WhyAttend />
        <Testimonials />
        <RegisterCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
