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
    <section id="nosotros" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Nuestra Propuesta
          </p>
          <h2 className="text-4xl md:text-6xl font-light mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
            ¿Por Qué Elegirnos?
          </h2>
          <div className="w-20 h-px bg-accent mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Combinamos experiencia, dedicación y un historial probado de éxito 
            para ofrecer el mejor servicio legal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8 inline-flex p-6 border border-white/10 group-hover:border-accent transition-all duration-500">
                <feature.icon className="h-10 w-10 text-accent" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-light mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
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
