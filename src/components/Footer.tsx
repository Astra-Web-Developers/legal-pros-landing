import { Scale, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-lg font-bold">Despacho Legal</h3>
                <p className="text-xs text-primary-foreground/70">Abogados & Asociados</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Defendiendo sus derechos con profesionalidad y excelencia desde 1998.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Derecho Mercantil</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Derecho Civil</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Derecho Laboral</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Derecho Penal</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Sobre Nosotros</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Nuestro Equipo</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Casos de Éxito</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Blog Legal</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-accent/20 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-accent/20 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-accent/20 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-accent/20 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>© 2025 Despacho Legal. Todos los derechos reservados. | Política de Privacidad | Términos y Condiciones</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
