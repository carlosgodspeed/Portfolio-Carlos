import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Desenvolvedor Front-End <br/>
              </span>
              Carlos Henrique
            </h3>
            
            {/* Redes sociais */}
            <div className="flex gap-3">
              <a
                href="https://github.com/carlosgodspeed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/carlos-henrique-4805b31b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/carloss_hsn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>

              <a href="mailto:carlosminibics@gmail.com">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Links Rápidos</span></h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4"><span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Contato</span></h4>
            <div className="space-y-2 text-muted-foreground">
              <p>carlosminibics@gmail.com</p>
              <p>São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm flex items-center">
            © {currentYear} Desenvolvedor Carlos Henrique.
          </p>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0"
          >
            Voltar ao Topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
