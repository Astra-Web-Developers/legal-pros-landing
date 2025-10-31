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
    <section id="nosotros" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
            ¿Por Qué Elegirnos?
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-base text-primary-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Combinamos experiencia, dedicación y un historial probado de éxito 
            para ofrecer el mejor servicio legal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="mb-6 inline-flex p-5 bg-white/5 group-hover:bg-white/10 transition-all duration-500">
                <feature.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-light mb-3" style={{ fontFamily: 'Times New Roman, serif' }}>
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed font-light">
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
