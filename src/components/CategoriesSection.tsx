
import { GraduationCap, BookOpen, Building, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: BookOpen,
    title: "Ensino Fundamental",
    description: "Base sólida para o desenvolvimento educacional",
    institutions: "850+ instituições",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: GraduationCap,
    title: "Ensino Médio",
    description: "Preparação para o ensino superior e mercado",
    institutions: "720+ instituições",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Building,
    title: "Ensino Superior",
    description: "Graduação e pós-graduação de qualidade",
    institutions: "650+ instituições",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Wrench,
    title: "Ensino Técnico",
    description: "Formação profissional especializada",
    institutions: "450+ instituições",
    color: "bg-orange-50 text-orange-600"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore por Categoria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre a modalidade de ensino que melhor se adapta aos seus objetivos educacionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {category.description}
                </p>
                <p className="text-education-blue font-medium text-sm">
                  {category.institutions}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
