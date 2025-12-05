import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Carlos Henrique
            </span>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Desenvolvedor Front-End</h3>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Desenvolvedor Front-End de 24 anos, formado em Análise e Desenvolvimento de Sistemas. 
            Trabalho com React.js, JavaScript e TypeScript, criando interfaces modernas e integradas a APIs. 
            Tenho experiência com Firebase e Supabase, além de realizar deploys em GitHub Pages, Vercel e Netlify.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("projetos")}
            >
              Ver Projetos
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("contato")}
            >
              Fale Comigo
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-smooth"
              asChild
            >
              <a
                href="https://github.com/carlosgodspeed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-smooth"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/carlos-henrique-4805b31b1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-smooth"
              asChild
            >
              <a href="mailto:carlosminibics@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-smooth"
              asChild
            >
              <a
                href="https://www.instagram.com/carloss_hsn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right content */}
        <div className="relative animate-slide-up">
          <div className="relative">
            <img
              src={heroImage}
              alt="Developer workspace"
              className="rounded-2xl shadow-glow w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("sobre")}
          className="rounded-full"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
