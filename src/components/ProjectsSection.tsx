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
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque.",
      image: ecommerceImage,
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      category: "Web",
      github: "https://github.com/seuusuario/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "NucleStockBR - Sistema de Estoque",
      description: "Aplicação web para controle de estoque com dashboard dinâmico, monitoramento de produtos e geração de relatórios.",
      image: dashboardImage,
      tech: ["React.Js", "TypeScript", "TailwindCSS", "Firebase"],
      category: "Web",
      github: "https://github.com/seuusuario/analytics-dashboard",
      demo: "https://dashboard-analytics.vercel.app"
    },
    {
      title: "Vogue Vault",
      description: "E-commerce de moda premium com catálogo interativo, sistema de coleções e experiência de compra sofisticada.",
      image: vogueImage,
      tech: ["React", "TypeScript", "Styled Components", "Strapi"],
      category: "Web",
      github: "https://github.com/seuusuario/vogue-vault",
      demo: "https://vogue-vault.vercel.app"
    },
    {
      title: "Airline Booking",
      description: "Sistema completo de reservas aéreas com busca de voos, gerenciamento de passageiros e pagamentos online.",
      image: airlinesImage,
      tech: ["React", "Node.js", "PostgreSQL", "Payment Gateway"],
      category: "Web",
      github: "https://github.com/seuusuario/airline-booking",
      demo: "https://airline-booking.vercel.app"
    },
    {
      title: "Museu Nacional",
      description: "Website institucional com galeria virtual, sistema de agendamentos e tours interativos 360°.",
      image: museumImage,
      tech: ["React", "Three.js", "CMS", "Virtual Tours API"],
      category: "Web",
      github: "https://github.com/seuusuario/museu-nacional",
      demo: "https://museu-nacional.vercel.app"
    },
    {
      title: "Food Delivery",
      description: "App de delivery de comida com geolocalização, rastreamento em tempo real e sistema de avaliações.",
      image: foodAppImage,
      tech: ["React Native", "Firebase", "Maps API", "Push Notifications"],
      category: "Mobile",
      github: "https://github.com/seuusuario/food-delivery",
      demo: "https://play.google.com/store/apps/details?id=com.fooddelivery"
    },
    {
      title: "Rental Houses",
      description: "Aplicativo para aluguel de casas de temporada com busca avançada, reservas e sistema de pagamento.",
      image: rentalAppImage,
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      category: "Mobile",
      github: "https://github.com/seuusuario/rental-houses",
      demo: "https://apps.apple.com/app/rental-houses/id123456789"
    }
  ];

  const categories = ["Todos", "Web", "Mobile"];

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