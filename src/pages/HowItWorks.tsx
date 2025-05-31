
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, UserCheck, GraduationCap, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Busque e Compare",
    description: "Explore milhares de instituições educacionais usando nossos filtros avançados. Compare preços, localização, modalidades de ensino e muito mais.",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: UserCheck,
    title: "Analise e Escolha",
    description: "Leia avaliações de outros estudantes, veja fotos das instalações e analise os detalhes dos cursos oferecidos por cada instituição.",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Candidate-se Diretamente",
    description: "Entre em contato direto com as instituições ou candidate-se através da nossa plataforma. Receba orientação durante todo o processo.",
    color: "from-blue-500 to-green-500"
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Comece seus Estudos",
    description: "Complete sua matrícula e comece sua jornada educacional. Nosso suporte continua disponível para ajudá-lo durante o curso.",
    color: "from-green-500 to-blue-500"
  }
];

const benefits = [
  "Acesso gratuito a milhares de instituições",
  "Comparação detalhada de cursos e preços",
  "Suporte especializado em educação",
  "Processo de candidatura simplificado",
  "Orientação vocacional personalizada",
  "Acompanhamento pós-matrícula"
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Como Funciona
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubra como é simples encontrar a instituição educacional perfeita para você em apenas alguns passos.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              4 Passos Simples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Siga nosso processo otimizado para encontrar e se matricular na instituição ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={step.id} className="relative text-center border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                      <span className="text-sm font-bold text-gray-600">{step.id}</span>
                    </div>
                  </div>
                  
                  <div className={`w-16 h-16 mx-auto mb-6 mt-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Por que Escolher a Kedua?
              </h2>
              <p className="text-xl text-gray-600">
                Oferecemos muito mais que uma simples busca por instituições
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de estudantes que já encontraram sua instituição ideal através da Kedua.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg">
              Buscar Instituições
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
