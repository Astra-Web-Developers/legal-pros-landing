import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyContacts from "@/components/KeyContacts";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("descripcion");

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <KeyContacts activeTab={activeTab} />
      <Showcase />
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
