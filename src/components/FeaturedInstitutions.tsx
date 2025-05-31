
import { Star, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const institutions = [
  {
    name: "Universidade Federal de São Paulo",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    rating: 4.8,
    location: "São Paulo, SP",
    students: "45.000",
    courses: "120 cursos",
    categories: ["Universidade Pública"],
    description: "Excelência em ensino superior e pesquisa científica",
    highlight: "Destaque"
  },
  {
    name: "Instituto Tecnológico de Aeronáutica",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop",
    rating: 4.9,
    location: "São José dos Campos, SP",
    students: "5.000",
    courses: "25 cursos",
    categories: ["Instituto Federal"],
    description: "Formação de engenheiros de excelência",
    highlight: "Destaque"
  },
  {
    name: "Colégio Objetivo",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    rating: 4.7,
    location: "Rio de Janeiro, RJ",
    students: "12.000",
    courses: "8 cursos",
    categories: ["Ensino Médio"],
    description: "Preparação para vestibulares e ENEM",
    highlight: "Destaque"
  },
  {
    name: "SENAI - Escola Técnica",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    rating: 4.6,
    location: "Belo Horizonte, MG",
    students: "8.000",
    courses: "35 cursos",
    categories: ["Ensino Técnico"],
    description: "Formação técnica de ponta para o mercado",
    highlight: "Destaque"
  }
];

const FeaturedInstitutions = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
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
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={institution.image} 
                  alt={institution.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
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

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50">
            Ver Todas as Instituições
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstitutions;
