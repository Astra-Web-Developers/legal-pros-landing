import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface KeyContactsProps {
  activeTab: string;
}

const KeyContacts = ({ activeTab }: KeyContactsProps) => {
  // Contenido para Descripción General
  const renderDescripcion = () => (
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Lawyers in Mexico City */}
      <div>
        <h2 className="text-3xl font-display font-bold text-primary mb-8">
          Lawyers in Mexico City
        </h2>
        <div className="space-y-6" style={{ fontFamily: 'Times New Roman, serif' }}>
          <p className="text-lg leading-relaxed text-primary font-sans">
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
  );

  // Contenido para Equipo
  const renderEquipo = () => {
    const teamMembers = [
      { name: "Dr. Roberto Martínez", position: "Socio Senior", area: "Derecho Corporativo" },
      { name: "Lic. María Fernández", position: "Socia", area: "Litigios" },
      { name: "Dr. Carlos Ramírez", position: "Socio", area: "Derecho Fiscal" },
      { name: "Lic. Ana Gutiérrez", position: "Asociada Senior", area: "Derecho Laboral" },
      { name: "Dr. Jorge López", position: "Socio", area: "Propiedad Intelectual" },
      { name: "Lic. Patricia Sánchez", position: "Asociada", area: "Derecho Mercantil" },
      { name: "Dr. Luis Torres", position: "Asociado Senior", area: "Derecho Penal" },
      { name: "Lic. Carmen Díaz", position: "Asociada", area: "Derecho Civil" },
      { name: "Dr. Miguel Ángel Ruiz", position: "Socio", area: "Derecho Internacional" },
    ];

    return (
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ')[1][0]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-center mb-1">{member.position}</p>
                <p className="text-sm text-accent text-center">{member.area}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  // Contenido para Noticias y Eventos
  const renderNoticias = () => (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">
        Noticias y Eventos
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="text-sm text-accent mb-2">15 de Enero, 2024</div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Nueva Legislación en Materia Corporativa
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro equipo de expertos analiza las implicaciones de las recientes reformas 
              a la Ley General de Sociedades Mercantiles y su impacto en el sector empresarial.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="text-sm text-accent mb-2">10 de Enero, 2024</div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Seminario: Tendencias en Arbitraje Internacional
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Participamos como ponentes en el seminario sobre las últimas tendencias en 
              arbitraje internacional, organizado por la Cámara de Comercio Internacional.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="text-sm text-accent mb-2">5 de Enero, 2024</div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Reconocimiento en Rankings Internacionales
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro despacho ha sido reconocido nuevamente en los rankings de Chambers and Partners 
              como líder en derecho corporativo y financiero en México.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-8">
            <div className="text-sm text-accent mb-2">28 de Diciembre, 2023</div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Expansión de Servicios en Energías Renovables
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Anunciamos la expansión de nuestro departamento de energía con enfoque en proyectos 
              de energías renovables y sostenibilidad ambiental.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {activeTab === "descripcion" && renderDescripcion()}
        {activeTab === "equipo" && renderEquipo()}
        {activeTab === "noticias" && renderNoticias()}
      </div>
    </section>
  );
};

export default KeyContacts;
