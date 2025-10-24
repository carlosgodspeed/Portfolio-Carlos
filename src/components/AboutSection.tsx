import { Card, CardContent } from "@/components/ui/card";
import { Code2, Zap, Users, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desenvolvimento",
      description: "Especialista em React.js, React Native para aplicações modernas"
    },
    {
      icon: Zap,
      title: "Aprendizado Contínuo",
      description: "Bootcamps, cursos práticos e projetos pessoais para evolução constante"
    },
    {
      icon: Users,
      title: "Trabalho Colaborativo",
      description: "Boa comunicação, proatividade e facilidade em atuar em equipe"
    },
    {
      icon: Rocket,
      title: "Do Código ao Deploy",
      description: "Experiência com Firebase, Vercel e Netlify, entregando projetos completos"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Sobre Mim</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Desenvolvedor FullStack Especialista em React.js
              </h3>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou desenvolvedor FullStack formado em Análise e Desenvolvimento de Sistemas, 
                com foco em criar aplicações web e mobile utilizando JavaScript, TypeScript, 
                React.js e React Native.
              </p>
              <p>
                Encaro cada projeto como um produto, pensando não apenas na parte técnica, 
                mas também no valor que ele entrega ao usuário e ao negócio.
              </p>
              
              <p>
                Estou sempre aprendendo novas ferramentas e acompanhando as tendências do mercado, 
                buscando transformar ideias em soluções digitais modernas e funcionais.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projetos Práticos</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Anos de Estudos</div>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} variant="gradient" className="p-6 hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
