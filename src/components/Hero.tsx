import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import buildingBg from "@/assets/building-background.png";

interface HeroProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Hero = ({ activeTab, setActiveTab }: HeroProps) => {
  return (
    <section className="relative h-screen flex flex-col justify-between pt-20 pb-12">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${buildingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
      />
      
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center items-center">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-10 leading-tight animate-fade-in-up" style={{ fontFamily: 'Times New Roman, serif', animationDelay: '0.2s' }}>
            Servicios legales y Soluciones Jurídicas
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-light max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.4s' }}>
            Especialista en diversas áreas del derecho: Civil, Mercantil, Familiar, Administrativo, Inmigración y Derecho Federal.
          </p>
          
          <div className="text-white/80 font-light space-y-3 mb-12 animate-fade-in-up" style={{ fontFamily: 'Inter, sans-serif', animationDelay: '0.6s' }}>
            <p className="text-base md:text-lg">Rubén Darío 281, Piso 9</p>
            <p className="text-base md:text-lg">Bosque de Chapultepec, Ciudad de México, 11580</p>
            <p className="text-sm md:text-base mt-4">Tel: +52 55 5282 1100 | +52 55 5282 0061</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="max-w-5xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/30 backdrop-blur-md border border-white/10">
              <TabsTrigger 
                value="descripcion" 
                className="data-[state=active]:bg-accent data-[state=active]:text-black text-white/80 transition-all duration-300 font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Descripción General
              </TabsTrigger>
              <TabsTrigger 
                value="equipo"
                className="data-[state=active]:bg-accent data-[state=active]:text-black text-white/80 transition-all duration-300 font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Equipo
              </TabsTrigger>
              <TabsTrigger 
                value="noticias"
                className="data-[state=active]:bg-accent data-[state=active]:text-black text-white/80 transition-all duration-300 font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Noticias y Eventos
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Hero;
