
import { Star, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const institutions = [
  {
    name: "Universidade do Porto",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    rating: 4.8,
    location: "Porto",
    students: "32.000",
    courses: "120 cursos",
    categories: ["Universidade Pública"],
    description: "Excelência em ensino superior e investigação científica",
    highlight: "Destaque"
  },
  {
    name: "Instituto Superior Técnico",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop",
    rating: 4.9,
    location: "Lisboa",
    students: "12.000",
    courses: "25 cursos",
    categories: ["Instituto Superior"],
    description: "Formação de engenheiros de excelência",
    highlight: "Destaque"
  },
  {
    name: "Colégio São João de Brito",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    rating: 4.7,
    location: "Lisboa",
    students: "1.500",
    courses: "8 cursos",
    categories: ["Ensino Secundário"],
    description: "Preparação para o ensino superior",
    highlight: "Destaque"
  },
  {
    name: "Instituto Politécnico do Porto",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    rating: 4.6,
    location: "Porto",
    students: "18.000",
    courses: "35 cursos",
    categories: ["Ensino Politécnico"],
    description: "Formação técnica de excelência para o mercado",
    highlight: "Destaque"
  }
];

const FeaturedInstitutions = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Apply hero gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Instituições em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra algumas das melhores instituições de ensino parceiras da nossa plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {institutions.map((institution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden hover:-translate-y-2 bg-white/95 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={institution.image} 
                  alt={institution.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs px-2 py-1 border-0">
                    {institution.highlight}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium text-gray-700">{institution.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs mb-2">
                    {institution.categories[0]}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {institution.name}
                </h3>
                
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>{institution.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{institution.students}+</span>
                  </div>
                  <div>{institution.courses}</div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-sm border-0">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 hover:from-green-600 hover:to-blue-600">
            Ver Todas as Instituições
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstitutions;
