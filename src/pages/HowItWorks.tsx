import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserPlus, Search, GraduationCap, BarChart3, TrendingUp, CheckCircle, Shield, Users, FileText, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Crie sua conta",
    description: "Registre-se gratuitamente em nossa plataforma para ter acesso a todas as funcionalidades.",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: Search,
    title: "Explore instituições",
    description: "Pesquise e compare milhares de instituições de ensino em todo o Brasil.",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    icon: GraduationCap,
    title: "Descubra cursos",
    description: "Filtre e compare cursos de acordo com suas preferências e objetivos.",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 4,
    icon: FileText,
    title: "Compare detalhes",
    description: "Analise grade curricular, corpo docente, valores e avaliações de outros alunos.",
    color: "from-green-500 to-green-600"
  },
  {
    id: 5,
    icon: TrendingUp,
    title: "Faça sua escolha",
    description: "Decida com base em dados concretos e informações detalhadas.",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "Matricule-se",
    description: "Realize sua matrícula diretamente pela nossa plataforma de forma simples e segura.",
    color: "from-green-500 to-green-600"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Dados Verificados",
    description: "Todas as informações sobre instituições e cursos são verificadas regularmente para garantir precisão.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Avaliações Reais",
    description: "Avaliações de alunos e ex-alunos são verificadas para garantir autenticidade e evitar fraudes.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: BarChart3,
    title: "Comparação Detalhada",
    description: "Ferramentas avançadas para comparar instituições e cursos lado a lado, facilitando sua decisão.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: BookOpen,
    title: "Conteúdo Exclusivo",
    description: "Artigos, guias e materiais exclusivos para ajudar na sua jornada educacional.",
    color: "from-green-500 to-green-600"
  }
];

const faqs = [
  {
    question: "O serviço da Kedua é gratuito?",
    answer: "Sim, o uso básico da plataforma é completamente gratuito para estudantes. Oferecemos também alguns serviços premium com recursos adicionais por uma pequena taxa mensal."
  },
  {
    question: "Como são verificadas as informações das instituições?",
    answer: "Nossa equipe trabalha diretamente com as instituições para garantir que todas as informações estejam atualizadas. Além disso, realizamos verificações periódicas e utilizamos feedback dos usuários para manter a precisão."
  },
  {
    question: "Posso fazer minha matrícula direto pela plataforma?",
    answer: "Sim! Para a maioria das instituições parceiras, oferecemos o processo completo de matrícula diretamente pela nossa plataforma, de forma segura e prática."
  },
  {
    question: "Existe alguma garantia ou política de reembolso?",
    answer: "Respeitamos as políticas de cada instituição, mas trabalhamos como mediadores para garantir que seus direitos sejam respeitados em caso de desistência ou problemas com o curso."
  },
  {
    question: "Como faço para entrar em contato com o suporte?",
    answer: "Você pode acessar nosso suporte através da página de Suporte, por e-mail em suporte@kedua.com.br ou pelo telefone 0800-123-4567, disponível de segunda a sexta, das 8h às 20h."
  }
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
            Do cadastro à matrícula, a Kedua torna todo o processo simples e transparente, economizando seu tempo e garantindo a melhor escolha.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">Processo Simples em </span>
              <span className="text-green-600">6 Passos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Do cadastro à matrícula, a Kedua torna todo o processo simples e transparente, economizando seu tempo e garantindo a melhor escolha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={step.id} className="group relative text-left border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Passo {step.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Iniciar Minha Busca
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">Por Que Escolher a </span>
              <span className="text-green-600">Kedua</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma foi desenvolvida pensando em oferecer a melhor experiência possível para estudantes em busca de formação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border-0 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden">
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">Perguntas </span>
              <span className="text-green-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o funcionamento da Kedua.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-blue-600 font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de estudantes que já encontraram sua instituição ideal através da Kedua.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
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
