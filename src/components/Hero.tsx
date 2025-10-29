import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import buildingBg from "@/assets/building-background.png";

interface HeroProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Hero = ({ activeTab, setActiveTab }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${buildingBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-12" style={{ fontFamily: 'Times New Roman, serif' }}>
            Ubicaciones
          </h1>
          
          <div className="text-white font-light space-y-6 mb-12" style={{ fontFamily: 'Times New Roman, serif' }}>
            <h2 className="text-3xl md:text-4xl mb-8">Ciudad de México</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              Rubén Darío 281, Piso 9<br />
              Col. Bosque de Chapultepec I Sección<br />
              Ciudad de México, 11580
            </p>
            <div className="space-y-2 text-lg md:text-xl mt-8">
              <p>Teléfono +52 55 5282 1100</p>
              <p>Teléfono +52 55 5282 0061</p>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm">
              <TabsTrigger 
                value="descripcion" 
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                Descripción General
              </TabsTrigger>
              <TabsTrigger 
                value="equipo"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
              >
                Equipo
              </TabsTrigger>
              <TabsTrigger 
                value="noticias"
                className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
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
