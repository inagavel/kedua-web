
import { GraduationCap, BookOpen, Building, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: BookOpen,
    title: "Ensino Fundamental",
    description: "Base sólida para o futuro acadêmico",
    institutions: "1.200+ escolas",
    color: "bg-blue-500",
    iconBg: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500/10 to-blue-600/5"
  },
  {
    icon: GraduationCap,
    title: "Ensino Médio",
    description: "Preparação para o ensino superior",
    institutions: "800+ escolas",
    color: "bg-green-500",
    iconBg: "bg-green-100 text-green-600",
    gradient: "from-green-500/10 to-green-600/5"
  },
  {
    icon: Building,
    title: "Ensino Superior",
    description: "Graduação e pós-graduação",
    institutions: "350+ universidades",
    color: "bg-blue-600",
    iconBg: "bg-blue-100 text-blue-600",
    gradient: "from-blue-600/10 to-blue-700/5"
  },
  {
    icon: Wrench,
    title: "Ensino Técnico",
    description: "Formação profissional especializada",
    institutions: "450+ institutos",
    color: "bg-teal-500",
    iconBg: "bg-teal-100 text-teal-600",
    gradient: "from-teal-500/10 to-teal-600/5"
  }
];

const CategoriesSection = () => {
  return (
    <section id="categorias" className="py-20 relative overflow-hidden">
      {/* Apply hero gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
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
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 hover:-translate-y-3 bg-white/95 backdrop-blur-sm"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 ${category.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <category.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {category.description}
                </p>
                
                <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 group-hover:bg-blue-50 rounded-full text-blue-600 font-semibold text-sm tracking-wide transition-all duration-300 group-hover:scale-105">
                  {category.institutions}
                </div>
              </CardContent>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
