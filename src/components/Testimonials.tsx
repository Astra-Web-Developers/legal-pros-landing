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
    <section id="testimonios" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            La confianza de nuestros clientes es nuestro mayor logro. 
            Lea sus experiencias trabajando con nosotros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border border-border hover:border-accent transition-all duration-500 hover:shadow-elegant relative bg-card"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent/10 mb-6" strokeWidth={1.5} />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" strokeWidth={1} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-light">
                  "{testimonial.content}"
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="font-light text-foreground" style={{ fontFamily: 'Times New Roman, serif' }}>{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
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
