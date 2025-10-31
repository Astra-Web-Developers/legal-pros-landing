import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Fusión Empresarial Internacional",
    client: "Grupo Corporativo",
    area: "Corporativo",
    year: "2024",
    description: "Asesoría integral en fusión transfronteriza entre empresas mexicanas y estadounidenses por $500M USD."
  },
  {
    title: "Arbitraje Internacional de Energía",
    client: "Empresa de Energía",
    area: "Arbitraje",
    year: "2023",
    description: "Representación exitosa en arbitraje internacional bajo reglas ICC en disputa de inversión energética."
  },
  {
    title: "Proyecto de Infraestructura",
    client: "Consorcio de Construcción",
    area: "Infraestructura",
    year: "2024",
    description: "Estructuración legal de proyecto de infraestructura pública por $1.2B USD con participación privada."
  },
  {
    title: "Financiamiento Estructurado",
    client: "Institución Financiera",
    area: "Finanzas",
    year: "2023",
    description: "Asesoría en emisión de bonos estructurados y financiamiento sindicado para desarrollo inmobiliario."
  },
  {
    title: "Adquisición en Sector Energético",
    client: "Fondo de Inversión",
    area: "Energía",
    year: "2024",
    description: "Debido diligencia y negociación en adquisición de activos de generación eléctrica."
  },
  {
    title: "Reestructura Corporativa",
    client: "Grupo Industrial",
    area: "Corporativo",
    year: "2023",
    description: "Asesoría en reestructura societaria y optimización fiscal de grupo con presencia en 5 países."
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Casos de Éxito
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
            Proyectos Destacados
          </h2>
          <div className="w-20 h-px bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border border-border/50 hover:border-accent/50 transition-all duration-700 group bg-card hover:shadow-elegant animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs tracking-[0.2em] text-accent uppercase font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.area}
                  </span>
                  <span className="text-xs text-muted-foreground font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-light mb-6 text-foreground group-hover:text-accent transition-colors duration-500 leading-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-border/30">
                  <p className="text-xs text-muted-foreground font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.client}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;