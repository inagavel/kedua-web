import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Nossa Missão",
    description: "Democratizar o acesso à educação de qualidade, conectando estudantes às melhores instituições de ensino do Brasil."
  },
  {
    icon: Users,
    title: "Nossa Visão", 
    description: "Ser a principal plataforma de descoberta educacional, transformando a forma como pessoas encontram oportunidades de aprendizado."
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometimento com a qualidade e transparência na avaliação e apresentação das instituições parceiras."
  },
  {
    icon: Heart,
    title: "Impacto Social",
    description: "Acreditamos que a educação é um direito fundamental e trabalhamos para torná-la mais acessível a todos."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre a Kedua
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Somos uma plataforma dedicada a conectar estudantes com as melhores oportunidades educacionais do Brasil.
          </p>
        </div>
      </section>

      {/* Story Section with hero gradient background */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Kedua nasceu da necessidade de simplificar a busca por instituições educacionais no Brasil. 
                Percebemos que muitos estudantes enfrentavam dificuldades para encontrar informações confiáveis 
                e comparar diferentes opções de ensino. Assim, criamos uma plataforma que centraliza essas 
                informações de forma clara e acessível.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  O que nos move
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Acreditamos que a educação é o pilar fundamental para o desenvolvimento pessoal e social. 
                  Nossa missão é tornar mais fácil para cada pessoa encontrar a instituição que melhor 
                  se adapta aos seus objetivos, sonhos e necessidades.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Com uma equipe apaixonada por educação e tecnologia, trabalhamos constantemente para 
                  melhorar nossa plataforma e oferecer a melhor experiência possível aos nossos usuários.
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Instituições Parceiras</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">50k+</div>
                    <div className="text-sm text-gray-600">Estudantes Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">1000+</div>
                    <div className="text-sm text-gray-600">Cursos Disponíveis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nossa relação com estudantes e instituições.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
