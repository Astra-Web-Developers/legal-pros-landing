import { Button } from "./ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border shadow-sm" style={{ backgroundColor: '#10273D' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Despacho Legal</h1>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-white hover:text-accent transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-white hover:text-accent transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection("equipo")}
              className="text-sm font-medium text-white hover:text-accent transition-colors"
            >
              Equipo
            </button>
            <button 
              onClick={() => scrollToSection("testimonios")}
              className="text-sm font-medium text-white hover:text-accent transition-colors"
            >
              Testimonios
            </button>
            <Button 
              variant="gold" 
              size="sm"
              onClick={() => scrollToSection("contacto")}
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
