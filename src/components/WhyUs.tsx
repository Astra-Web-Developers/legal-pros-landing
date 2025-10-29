import { Award, Clock, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experiencia Probada",
    description: "Más de 25 años defendiendo los intereses de nuestros clientes con resultados excepcionales."
  },
  {
    icon: Shield,
    title: "Compromiso Total",
    description: "Dedicación absoluta a cada caso, tratando sus asuntos legales como si fueran propios."
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Atención personalizada cuando nos necesite, porque entendemos la urgencia de sus necesidades."
  },
  {
    icon: TrendingUp,
    title: "Resultados Garantizados",
    description: "98% de tasa de éxito respaldada por miles de casos resueltos satisfactoriamente."
  }
];

const WhyUs = () => {
  return (
    <section id="nosotros" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Combinamos experiencia, dedicación y un historial probado de éxito 
            para ofrecer el mejor servicio legal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-6 inline-flex p-6 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                <feature.icon className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
