import { Search, MapPin, Users, Calendar, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const institutions = [
  {
    id: 1,
    name: "Universidade Federal do Rio de Janeiro",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
    rating: 4.8,
    location: "Rio de Janeiro, RJ",
    students: "30,000",
    foundedYear: "1920",
    courses: ["Engenharia", "Medicina", "Direito"],
    type: "federal",
    moreCoursesCount: 1
  },
  {
    id: 2,
    name: "Universidade de São Paulo",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
    rating: 4.9,
    location: "São Paulo, SP",
    students: "45,000",
    foundedYear: "1934",
    courses: ["Medicina", "Engenharia", "Economia"],
    type: "estadual",
    moreCoursesCount: 1
  },
  {
    id: 3,
    name: "Universidade Estadual de Campinas",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop",
    rating: 4.7,
    location: "Campinas, SP",
    students: "25,000",
    foundedYear: "1966",
    courses: ["Ciências", "Tecnologia", "Medicina"],
    type: "estadual",
    moreCoursesCount: 1
  },
  {
    id: 4,
    name: "Pontifícia Universidade Católica",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=300&fit=crop",
    rating: 4.6,
    location: "São Paulo, SP",
    students: "20,000",
    foundedYear: "1946",
    courses: ["Administração", "Psicologia", "Engenharia"],
    type: "privada",
    moreCoursesCount: 1
  },
  {
    id: 5,
    name: "Universidade Federal de Minas Gerais",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    rating: 4.9,
    location: "Belo Horizonte, MG",
    students: "35,000",
    foundedYear: "1927",
    courses: ["Medicina", "Direito", "Engenharia"],
    type: "federal",
    moreCoursesCount: 1
  },
  {
    id: 6,
    name: "Instituto Tecnológico de Aeronáutica",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    rating: 5.0,
    location: "São José dos Campos, SP",
    students: "5,000",
    foundedYear: "1950",
    courses: ["Engenharia", "Tecnologia", "Ciências"],
    type: "federal",
    moreCoursesCount: 1
  }
];

const filterTabs = [
  { id: "all", label: "Todas" },
  { id: "federal", label: "Federais" },
  { id: "estadual", label: "Estaduais" },
  { id: "privada", label: "Privadas" }
];

const InstitutionsMenu = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInstitutions = institutions.filter(institution => {
    const matchesFilter = activeFilter === "all" || institution.type === activeFilter;
    const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         institution.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="min-h-screen">
      <div className="w-full">
        {/* Hero Section */}
        <div className="gradient-bg text-white py-20 px-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Encontre as Melhores Instituições de Ensino
            </h1>
            <p className="text-xl mb-8 opacity-90 text-center">
              Compare, analise e escolha entre milhares de instituições em todo o Brasil.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex">
              <div className="relative flex-1">
                <Input
                  type="text"
                  placeholder="Buscar por nome, cidade ou curso..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-14 pl-6 pr-4 text-lg border-0 rounded-l-xl bg-white text-gray-800"
                />
              </div>
              <Button className="h-14 px-8 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 border-0 rounded-r-xl">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start items-center">
            <span className="text-gray-600 font-medium mr-2">Filtrar por:</span>
            <ToggleGroup 
              type="single" 
              value={activeFilter} 
              onValueChange={(value) => value && setActiveFilter(value)}
              className="gap-2"
            >
              {filterTabs.map((tab) => (
                <ToggleGroupItem
                  key={tab.id}
                  value={tab.id}
                  className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 data-[state=on]:border-blue-300 hover:bg-gray-50"
                >
                  {tab.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            
            {/* Additional Options */}
            <div className="flex gap-3 ml-auto">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 hover:from-orange-600 hover:to-red-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                Localização
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 hover:from-yellow-600 hover:to-orange-600 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Star className="w-5 h-5" />
                Avaliação
              </Button>
            </div>
          </div>

          {/* Institutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstitutions.map((institution) => (
              <Card key={institution.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/95 backdrop-blur-sm border-0">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={institution.image} 
                    alt={institution.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      {institution.rating}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 text-white px-2 py-1 rounded text-sm">
                    <MapPin className="w-3 h-3" />
                    {institution.location}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-3 hover:text-blue-700 cursor-pointer">
                    {institution.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{institution.students} alunos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Desde {institution.foundedYear}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {institution.courses.map((course, index) => (
                      <Badge key={index} variant="secondary" className="text-blue-600 bg-blue-50">
                        {course}
                      </Badge>
                    ))}
                    {institution.moreCoursesCount > 0 && (
                      <Badge variant="secondary" className="text-gray-600 bg-gray-100">
                        +{institution.moreCoursesCount}
                      </Badge>
                    )}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 border-0 text-white hover:from-blue-600 hover:to-green-600">
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInstitutions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhuma instituição encontrada com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsMenu;
