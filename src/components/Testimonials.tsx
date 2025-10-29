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
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. 
            Lea sus experiencias trabajando con nosotros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl relative"
            >
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-accent/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
