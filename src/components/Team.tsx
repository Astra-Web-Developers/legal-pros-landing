import { Card, CardContent } from "./ui/card";

const education = [
  {
    institution: "Loyola Law School",
    subtitle: "Loyola Marymount University",
    location: "Los Angeles",
    degree: "Juris Doctor 1994",
    honors: "Magna Cum Laude"
  },
  {
    institution: "United States Naval Academy",
    subtitle: "Annapolis",
    location: "",
    degree: "Bachelor of Science 1988",
    honors: "Systems Operations"
  }
];

const experience = [
  {
    title: "Asst. United States Attorney",
    organization: "Department of Justice",
    location: "Southern District of California"
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-32 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24 animate-fade-in-up">
          <p className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Credenciales
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
            Curriculum Vitae
          </h2>
          <div className="w-20 h-px bg-accent mx-auto"></div>
        </div>
        
        {/* Education Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="border border-border/50 hover:border-accent/50 transition-all duration-700 hover:shadow-elegant bg-white animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-12">
                  <div className="h-48 bg-white mb-8 flex items-center justify-center border-b border-border/30">
                    <div className="text-center">
                      <h3 className="text-2xl font-light text-foreground mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                        {edu.institution}
                      </h3>
                      {edu.subtitle && (
                        <p className="text-base text-muted-foreground font-light mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {edu.subtitle}
                        </p>
                      )}
                      {edu.location && (
                        <p className="text-sm text-muted-foreground/70 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {edu.location}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-xl font-light text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {edu.degree}
                    </p>
                    <p className="text-lg font-light text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {edu.honors}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {experience.map((exp, index) => (
            <Card 
              key={index}
              className="border border-border/50 hover:border-accent/50 transition-all duration-700 hover:shadow-elegant bg-white"
            >
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-light text-foreground mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
                  {exp.title}
                </h3>
                <div className="w-20 h-px bg-accent mx-auto mb-6"></div>
                <p className="text-2xl font-light text-foreground mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {exp.organization}
                </p>
                <p className="text-lg font-light text-muted-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {exp.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
