import { Card, CardContent } from "./ui/card";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Socio Director",
    specialization: "Derecho Mercantil y Civil",
    experience: "30 años de experiencia",
    description: "Especialista en derecho mercantil con amplia trayectoria en operaciones corporativas."
  },
  {
    name: "Dra. María González",
    role: "Socia",
    specialization: "Derecho Laboral y Penal",
    experience: "25 años de experiencia",
    description: "Experta en litigios laborales y defensa penal con reconocimiento nacional."
  },
  {
    name: "Lic. Roberto Sánchez",
    role: "Abogado Senior",
    specialization: "Derecho Fiscal e Inmobiliario",
    experience: "20 años de experiencia",
    description: "Especializado en planificación fiscal y transacciones inmobiliarias complejas."
  },
  {
    name: "Dra. Ana Martínez",
    role: "Abogada Senior",
    specialization: "Derecho de Familia y Civil",
    experience: "18 años de experiencia",
    description: "Dedicada a casos de familia y sucesiones con enfoque humano y profesional."
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales altamente cualificados con décadas de experiencia 
            comprometidos con la excelencia legal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl overflow-hidden group"
            >
              <div className="h-64 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <div className="text-6xl font-bold text-accent/20">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.specialization}</p>
                <p className="text-xs text-muted-foreground font-medium mb-3">{member.experience}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="flex gap-3">
                  <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </button>
                  <button className="p-2 hover:bg-accent/10 rounded-lg transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
