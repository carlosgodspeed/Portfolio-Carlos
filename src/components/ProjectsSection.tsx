import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import dashboardImage from "@/assets/project-dashboard.jpg";
import vogueImage from "@/assets/project-vogue.png";
import airlinesImage from "@/assets/project-airlines.png";
import museumImage from "@/assets/project-museum.png";
import foodAppImage from "@/assets/project-food-app.jpeg";
import rentalAppImage from "@/assets/project-rental-app.jpeg";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const projects = [
    {
      title: "NucleStockBR - Sistema de Estoque",
      description: "Sistema completo de controle de estoque com dashboard, filtros avançados, relatórios em PDF e integração ao Supabase para autenticação e banco de dados. Desenvolvido com foco em usabilidade, organização e visualização clara de métricas operacionais.",
      image: dashboardImage,
      tech: ["React.Js", "TypeScript", "TailwindCSS", "Supabase"],
      category: "Web",
      github: "https://github.com/carlosgodspeed/nuclestockbr",
      demo: "https://github.com/carlosgodspeed/nuclestockbr"
    },
    {
      title: "FlyNet",
      description: "Plataforma de turismo para busca de voos, hospedagens e pacotes, com interface responsiva, login, área do usuário e módulo de pesquisa dinâmica. Projeto focado em experiência do usuário e arquitetura React componentizada",
      image: airlinesImage,
      tech: ["React", "css"],
      category: "Web",
      github: "https://github.com/carlosgodspeed/FlyNet",
      demo: "https://github.com/carlosgodspeed/FlyNet"
    },
    {
      title: "Supreme Jurídica",
      description: "Landing page fictícia desenvolvida para prática de design e front-end, simulando o site institucional de um escritório de advocacia. O projeto apresenta identidade visual elegante, seções de serviços jurídicos, área institucional e chamada para contato, com foco em responsividade e experiência do usuário.",
      image: ecommerceImage,
      tech: ["React","CSS"],
      category: "Web",
      github: "https://github.com/carlosgodspeed/Lading-page-Advocacia",
      demo: "https://github.com/carlosgodspeed/Lading-page-Advocacia"
    },
  ];

  const categories = ["Web"];

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Meus Projetos</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, desde aplicações web até apps mobile
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12 animate-slide-up">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "ghost"}
                size="sm"
                className="rounded-md"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} variant="gradient" className="group overflow-hidden hover:scale-105 transition-all duration-300 animate-slide-up">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button 
                      variant="glass" 
                      size="sm"
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button 
                      variant="glass" 
                      size="sm"
                      asChild
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;