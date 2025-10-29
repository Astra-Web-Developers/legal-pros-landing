import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const KeyContacts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contactos Clave */}
          <div>
            <h2 className="text-3xl font-display font-bold text-primary mb-8">
              Contactos clave
            </h2>
            <div className="space-y-4">
              <div className="border-b border-border pb-4">
                <h3 className="text-xl font-semibold text-primary">
                  Bárbara de Parres Eloy
                </h3>
                <p className="text-muted-foreground">Eloy</p>
              </div>
              <div className="border-b border-border pb-4">
                <h3 className="text-xl font-semibold text-primary">
                  Bárbara de Parres
                </h3>
                <p className="text-muted-foreground">Pareja</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="mt-8 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Ver equipo completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Áreas de enfoque */}
          <div>
            <h2 className="text-3xl font-display font-bold text-primary mb-8">
              Áreas de enfoque
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-primary">Corporativo</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-primary">Energía (petróleo y gas)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-primary">Electricidad</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-primary">Finanzas</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-primary">Desarrollo de infraestructura</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-primary">Arbitraje internacional</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-primary">Fusiones y adquisiciones</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyContacts;
