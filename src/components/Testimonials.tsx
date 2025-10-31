import { Card, CardContent } from "./ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Juan Pérez",
    role: "Empresario",
    content: "Excelente servicio. Resolvieron mi caso mercantil de manera eficiente y profesional. Su experiencia es invaluable.",
    rating: 5
  },
  {
    name: "María López",
    role: "Directora de RRHH",
    content: "El mejor despacho de abogados laborales. Nos han asesorado durante años con resultados excepcionales.",
    rating: 5
  },
  {
    name: "Roberto García",
    role: "Propietario",
    content: "Gestionaron la compra de mi propiedad con absoluta profesionalidad. Muy recomendables.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Testimonios
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-px bg-accent mx-auto mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            La confianza de nuestros clientes es nuestro mayor logro. 
            Lea sus experiencias trabajando con nosotros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-border/50 hover:border-accent/50 transition-all duration-700 hover:shadow-elegant relative bg-white animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-10">
                <Quote className="h-12 w-12 text-accent/15 mb-8" strokeWidth={1} />
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-10 font-light italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{testimonial.content}"
                </p>
                <div className="pt-8 border-t border-border/30">
                  <p className="font-light text-foreground text-lg mb-1" style={{ fontFamily: 'Times New Roman, serif' }}>{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
