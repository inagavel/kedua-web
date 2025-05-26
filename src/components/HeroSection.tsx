import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-education-light-blue via-white to-education-light-green" />
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-education-blue/10 via-transparent to-education-green/10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Sua jornada educacional
            <span className="block text-education-blue">começa aqui</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in font-medium">
            Encontre e se matricule nas melhores instituições de ensino do Brasil. 
            Conectamos estudantes a oportunidades educacionais excepcionais.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-8 max-w-2xl mx-auto animate-scale-in border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Buscar por instituição, curso ou área..." 
                  className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Localização" 
                  className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white md:w-48"
                />
              </div>
              <Button className="h-12 px-8 gradient-bg border-0 text-white hover:opacity-90">
                Buscar
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-education-blue mb-2">2,500+</div>
              <div className="text-gray-700 font-medium">Instituições Parceiras</div>
            </div>
            <div className="text-center animate-fade-in bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-education-green mb-2">150k+</div>
              <div className="text-gray-700 font-medium">Estudantes Ativos</div>
            </div>
            <div className="text-center animate-fade-in bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-education-blue mb-2">98%</div>
              <div className="text-gray-700 font-medium">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
