import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Award, Quote } from "lucide-react";

const Showcase = () => {
  const slides = [
    {
      type: "quote",
      content: "Curtis ha sido un socio estratégico invaluable en nuestras operaciones más complejas en América Latina.",
      author: "Director General, Fortune 500 Company",
    },
    {
      type: "award",
      title: "Latin America Law Firm of the Year",
      year: "2023",
      organization: "Chambers Latin America",
    },
    {
      type: "quote",
      content: "Su experiencia en el mercado mexicano y su enfoque en resultados los distingue de otras firmas internacionales.",
      author: "CEO, Energy Sector",
    },
    {
      type: "award",
      title: "Best International Law Firm in Mexico",
      year: "2024",
      organization: "Legal 500",
    },
    {
      type: "quote",
      content: "Un equipo excepcional que combina conocimiento local con perspectiva global.",
      author: "CFO, Infrastructure Development",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                    <CardContent className="flex flex-col items-center justify-center p-8 min-h-[280px]">
                      {slide.type === "quote" ? (
                        <>
                          <Quote className="w-12 h-12 text-accent mb-4" />
                          <p
                            className="text-white text-center mb-4 italic text-lg leading-relaxed"
                            style={{ fontFamily: "Times New Roman, serif" }}
                          >
                            "{slide.content}"
                          </p>
                          <p className="text-white/70 text-sm text-center">
                            — {slide.author}
                          </p>
                        </>
                      ) : (
                        <>
                          <Award className="w-16 h-16 text-accent mb-6" />
                          <h3
                            className="text-white text-xl font-light text-center mb-2"
                            style={{ fontFamily: "Times New Roman, serif" }}
                          >
                            {slide.title}
                          </h3>
                          <p className="text-accent text-lg font-semibold mb-2">
                            {slide.year}
                          </p>
                          <p className="text-white/70 text-sm text-center">
                            {slide.organization}
                          </p>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default Showcase;
