import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Smartphone, 
  GitBranch, 
  Globe, 
  Terminal,
  Palette,
  Cloud,
  Layers,
  Server,
  Box
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
        { name: "Tailwind CSS" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "PHP" },
        { name: "APIs REST" },
        { name: "SQL" },
        { name: "Firebase" }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git/GitHub" },
        { name: "VS Code" },
        { name: "Figma" },
      ]
    }
  ];

  const technologies = [
    { name: "JavaScript", icon: Terminal },
    { name: "TypeScript", icon: Code },
    { name: "React.js", icon: Code },
    { name: "React Native", icon: Smartphone },
    { name: "Redux", icon: Layers },
    { name: "Context API", icon: Box },
    { name: "Styled-components", icon: Palette },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Bootstrap", icon: Globe },
    { name: "PHP", icon: Server },
    { name: "C#", icon: Code },
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Palette },
    { name: "MySQL", icon: Database },
    { name: "Firebase", icon: Cloud },
    { name: "Axios", icon: Terminal },
    { name: "Fetch", icon: Terminal },
    { name: "RESTful APIs", icon: Code },
    { name: "Firebase API", icon: Cloud },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: GitBranch },
    { name: "npm", icon: Layers },
    { name: "Vercel", icon: Cloud },
    { name: "Netlify", icon: Cloud },
    { name: "Firebase Hosting", icon: Cloud },
    { name: "Figma", icon: Palette }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Tecnologias & Ferramentas</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trabalho com as tecnologias mais modernas do mercado para criar soluções eficientes e escaláveis
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} variant="gradient" className="animate-slide-up h-full">
              <CardHeader>
                <CardTitle className="text-center text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="px-3 py-2 bg-muted rounded-md text-center font-medium text-foreground"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Tecnologias que Domino</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-card rounded-full text-foreground shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <IconComponent size={18} className="text-primary" />
                  <span className="font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
