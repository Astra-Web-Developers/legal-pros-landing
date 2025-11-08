import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="The Law Offices of George W. Rodriguez" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-light text-foreground hover:text-accent transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection("proyectos")}
              className="text-sm font-light text-foreground hover:text-accent transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-light text-foreground hover:text-accent transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Equipo
            </button>
            <button 
              onClick={() => scrollToSection("testimonios")}
              className="text-sm font-light text-foreground hover:text-accent transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Testimonios
            </button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection("contacto")}
              className="bg-accent hover:bg-accent/90 text-black font-light"
            >
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
