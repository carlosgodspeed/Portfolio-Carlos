import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "carlosminibics@gmail.com",
      link: "mailto:contato@seudominio.com"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Vamos Conversar</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos discutir como posso ajudar a transformar sua ideia em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            {contactInfo.map((info, index) => (
              <Card key={index} variant="gradient" className="p-6 hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="mt-8 p-6 bg-gradient-card rounded-lg">
              <h4 className="font-semibold mb-4 text-foreground">Disponibilidade</h4>
              <p className="text-muted-foreground mb-2">Atualmente disponível para novos projetos</p>
              <p className="text-sm text-muted-foreground">Tempo de resposta médio: 24 horas</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up">
            <Card variant="gradient" className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <form
                  action="https://formsubmit.co/carlosminibics@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Assunto da mensagem"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="Conte-me sobre seu projeto..."
                      required
                    />
                  </div>

                  {/* Redirecionamento após envio */}
                  <input type="hidden" name="_next" value="http://localhost:8080/" />
                  <input type="hidden" name="_captcha" value="false" />

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
