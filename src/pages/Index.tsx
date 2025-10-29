import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyContacts from "@/components/KeyContacts";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <KeyContacts />
      <Services />
      <WhyUs />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
