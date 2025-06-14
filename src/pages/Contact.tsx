
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    description: "Envie a sua mensagem para",
    contact: "contacto@kedua.pt",
    action: "mailto:contacto@kedua.pt"
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "Ligue para o nosso atendimento",
    contact: "(+351) 21 000 0000",
    action: "tel:+351210000000"
  },
  {
    icon: MapPin,
    title: "Morada",
    description: "Visite o nosso escritório",
    contact: "Lisboa, Portugal",
    action: "#"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Converse connosco no",
    contact: "(+351) 91 000 0000",
    action: "https://wa.me/351910000000"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contacto
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Estamos aqui para o ajudar a encontrar a melhor instituição educacional. 
            Entre em contacto connosco!
          </p>
        </div>
      </section>

      {/* Contact Info and Form with hero gradient background */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {info.description}
                  </p>
                  <a 
                    href={info.action}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    {info.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Envie a Sua Mensagem
                  </h2>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e entraremos em contacto em breve.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="O seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(+351) 91 000 0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Assunto da mensagem" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Escreva a sua mensagem aqui..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-0 py-3">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
