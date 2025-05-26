
import { Star, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const institutions = [
  {
    name: "Universidade Federal de São Paulo",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    rating: 4.9,
    location: "São Paulo, SP",
    students: "45.000",
    categories: ["Superior", "Pós-graduação"],
    description: "Excelência em ensino superior e pesquisa científica"
  },
  {
    name: "Colégio São Bento",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    rating: 4.8,
    location: "Rio de Janeiro, RJ",
    students: "2.800",
    categories: ["Fundamental", "Médio"],
    description: "Tradição em educação básica de qualidade"
  },
  {
    name: "SENAI - Centro Tecnológico",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop",
    rating: 4.7,
    location: "Brasília, DF",
    students: "8.500",
    categories: ["Técnico", "Profissionalizante"],
    description: "Formação técnica de ponta para o mercado"
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
            Conheça algumas das melhores instituições de ensino disponíveis em nossa plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((institution, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={institution.image} 
                  alt={institution.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
                    {institution.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-yellow-700">{institution.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {institution.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {institution.categories.map((category, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{institution.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{institution.students} alunos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstitutions;
