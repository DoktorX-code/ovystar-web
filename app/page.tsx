import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollAnimation from "@/components/ScrollAnimation";
import Disciplines from "@/components/Disciplines";
import AgeGroups from "@/components/AgeGroups";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollAnimation />
        <Disciplines />
        <AgeGroups />
        <Schedule />
        <Pricing />
        <Gallery />
        <Registration />
        <Contact />
        <About />
      </main>
      <Footer />
    </>
  );
}
