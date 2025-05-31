
import { GraduationCap, BookOpen, Building, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: BookOpen,
    title: "Ensino Fundamental",
    description: "Base sólida para o futuro acadêmico",
    institutions: "1.200+ escolas",
    color: "bg-blue-500",
    iconBg: "bg-blue-100 text-blue-600"
  },
  {
    icon: GraduationCap,
    title: "Ensino Médio",
    description: "Preparação para o ensino superior",
    institutions: "800+ escolas",
    color: "bg-green-500",
    iconBg: "bg-green-100 text-green-600"
  },
  {
    icon: Building,
    title: "Ensino Superior",
    description: "Graduação e pós-graduação",
    institutions: "350+ universidades",
    color: "bg-blue-600",
    iconBg: "bg-blue-100 text-blue-600"
  },
  {
    icon: Wrench,
    title: "Ensino Técnico",
    description: "Formação profissional especializada",
    institutions: "450+ institutos",
    color: "bg-teal-500",
    iconBg: "bg-teal-100 text-teal-600"
  }
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Categorias de Ensino
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Encontre a modalidade de ensino ideal para seu perfil e objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border-0 hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 ${category.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <category.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-education-blue transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-base leading-relaxed">
                  {category.description}
                </p>
                
                <div className="text-education-blue font-semibold text-sm tracking-wide">
                  {category.institutions}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
