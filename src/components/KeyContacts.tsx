import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const KeyContacts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Lawyers in Mexico City */}
          <div>
            <h2 className="text-3xl font-display font-bold text-primary mb-8">
              Lawyers in Mexico City
            </h2>
            <div className="space-y-6" style={{ fontFamily: 'Times New Roman, serif' }}>
              <p className="text-lg leading-relaxed text-primary">
                Situated in the heart of Mexico City near the hotel district in Polanco, the Curtis Mexico City law office is not only the base of the firm's Mexico practice, but also an integral part of the firm's broader Latin American practice.
              </p>
              <p className="text-lg leading-relaxed text-primary">
                The firm offers one of the most robust Latin America practices of any international law firm, having counseled clients in the area for well over a century. To underscore our long-standing commitment to Latin America, in 1991, Curtis became one of the first international law firms to establish a branch office in Mexico City.
              </p>
            </div>
          </div>

          {/* Contactos Clave y Áreas de enfoque en una columna */}
          <div className="space-y-12">
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
      </div>
    </section>
  );
};

export default KeyContacts;
