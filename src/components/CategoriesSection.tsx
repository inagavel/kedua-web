
import { GraduationCap, BookOpen, Building, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: BookOpen,
    title: "Ensino Fundamental",
    description: "Base sólida para o desenvolvimento educacional",
    institutions: "850+ instituições",
    color: "bg-blue-50 text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-100"
  },
  {
    icon: GraduationCap,
    title: "Ensino Médio",
    description: "Preparação para o ensino superior e mercado",
    institutions: "720+ instituições",
    color: "bg-green-50 text-green-600",
    gradient: "from-green-500 to-green-600",
    shadowColor: "shadow-green-100"
  },
  {
    icon: Building,
    title: "Ensino Superior",
    description: "Graduação e pós-graduação de qualidade",
    institutions: "650+ instituições",
    color: "bg-purple-50 text-purple-600",
    gradient: "from-purple-500 to-purple-600",
    shadowColor: "shadow-purple-100"
  },
  {
    icon: Wrench,
    title: "Ensino Técnico",
    description: "Formação profissional especializada",
    institutions: "450+ instituições",
    color: "bg-orange-50 text-orange-600",
    gradient: "from-orange-500 to-orange-600",
    shadowColor: "shadow-orange-100"
  }
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore por Categoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encontre a modalidade de ensino que melhor se adapta aos seus objetivos educacionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden hover:shadow-2xl ${category.shadowColor} transition-all duration-500 cursor-pointer border-0 hover:-translate-y-2 bg-white/80 backdrop-blur-sm`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <category.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-education-blue transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`} />
                  <p className="text-education-blue font-semibold text-sm tracking-wide">
                    {category.institutions}
                  </p>
                </div>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`h-1 w-full bg-gradient-to-r ${category.gradient} rounded-full`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Não encontrou o que procura?
          </p>
          <button className="px-8 py-4 gradient-bg text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            Ver Todas as Categorias
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
