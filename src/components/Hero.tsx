import { Button } from "./ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(19, 38, 68, 0.95) 0%, rgba(19, 38, 68, 0.85) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Más de 25 años de experiencia
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Defensa Legal de 
            <span className="text-accent"> Excelencia</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Protegemos sus derechos con dedicación, experiencia y resultados comprobados. 
            Su confianza es nuestro mayor compromiso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="gold"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
            >
              Nuestros Servicios
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2500+</div>
              <div className="text-white/80">Casos Ganados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-white/80">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-white/80">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
