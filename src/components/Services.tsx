import { Building2, Briefcase, Users, Home, FileText, Gavel } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Building2,
    title: "Derecho Mercantil",
    description: "Asesoría integral en operaciones comerciales, contratos empresariales y constitución de sociedades."
  },
  {
    icon: Briefcase,
    title: "Derecho Civil",
    description: "Resolución de conflictos patrimoniales, contratos civiles, reclamaciones y herencias."
  },
  {
    icon: Users,
    title: "Derecho Laboral",
    description: "Defensa de derechos laborales, despidos improcedentes y negociación colectiva."
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    description: "Compraventa, arrendamientos, desahucios y toda gestión relacionada con inmuebles."
  },
  {
    icon: FileText,
    title: "Derecho Fiscal",
    description: "Asesoramiento tributario, planificación fiscal y defensa ante la administración."
  },
  {
    icon: Gavel,
    title: "Derecho Penal",
    description: "Defensa penal especializada en todas las fases del proceso judicial."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Áreas de Práctica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos asesoramiento legal especializado en múltiples áreas del derecho 
            con un enfoque personalizado para cada cliente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl group"
            >
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-accent/10 rounded-lg inline-block group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
