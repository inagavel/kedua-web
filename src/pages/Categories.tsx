
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, BookOpen, Users, Building, Laptop, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Universidades",
    description: "Ensino superior e pós-graduação",
    icon: GraduationCap,
    count: "150+ instituições",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Escolas Técnicas",
    description: "Formação técnica e profissionalizante",
    icon: Laptop,
    count: "80+ instituições",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    name: "Ensino Médio",
    description: "Educação básica e preparatório",
    icon: BookOpen,
    count: "200+ instituições",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    name: "Cursos Livres",
    description: "Capacitação e desenvolvimento",
    icon: Users,
    count: "120+ instituições",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 5,
    name: "Instituições Privadas",
    description: "Ensino particular de qualidade",
    icon: Building,
    count: "300+ instituições",
    color: "from-red-500 to-red-600"
  },
  {
    id: 6,
    name: "Programas Sociais",
    description: "Educação inclusiva e social",
    icon: HeartHandshake,
    count: "50+ programas",
    color: "from-teal-500 to-teal-600"
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Categorias de Ensino
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore diferentes tipos de instituições educacionais e encontre a categoria perfeita para seus objetivos.
          </p>
        </div>
      </section>

      {/* Categories Grid with hero gradient background */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <p className="text-sm font-medium text-blue-600 mb-6">
                    {category.count}
                  </p>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white border-0">
                    Explorar Categoria
                  </Button>
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

export default Categories;
