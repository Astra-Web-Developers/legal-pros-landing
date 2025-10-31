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
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
            Proyectos Destacados
          </h2>
          <div className="w-16 h-px bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border border-border hover:border-accent transition-all duration-500 group bg-card shadow-sm hover:shadow-elegant"
            >
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs tracking-widest text-muted-foreground uppercase">
                    {project.area}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-light mb-4 text-foreground group-hover:text-accent transition-colors duration-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
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