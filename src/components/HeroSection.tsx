
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Modern gradient background similar to MatriculaHub */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Sua{" "}
            <span className="bg-gradient-to-r from-education-blue to-education-green bg-clip-text text-transparent">
              Educação
            </span>{" "}
            Começa Aqui
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in font-medium">
            Encontre e se matricule nas melhores instituições de ensino do Brasil. 
            Mais de 500 escolas parceiras esperando por você.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-8 max-w-2xl mx-auto animate-scale-in border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Buscar por curso ou instituição..." 
                  className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Cidade ou estado..." 
                  className="pl-10 h-12 border-0 bg-gray-50 focus:bg-white md:w-48"
                />
              </div>
              <Button className="h-12 px-8 gradient-bg border-0 text-white hover:opacity-90">
                Buscar
              </Button>
            </div>
          </div>

          {/* Quick Stats with modern design */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <div className="text-3xl font-bold text-education-blue mb-2">500+</div>
              <div className="text-gray-700 font-medium text-sm">Instituições Parceiras</div>
            </div>
            <div className="text-center animate-fade-in bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <div className="text-3xl font-bold text-education-green mb-2">50.000+</div>
              <div className="text-gray-700 font-medium text-sm">Alunos Matriculados</div>
            </div>
            <div className="text-center animate-fade-in bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <div className="text-3xl font-bold text-education-blue mb-2">1.200+</div>
              <div className="text-gray-700 font-medium text-sm">Cursos Disponíveis</div>
            </div>
            <div className="text-center animate-fade-in bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
              <div className="text-3xl font-bold text-education-green mb-2">98%</div>
              <div className="text-gray-700 font-medium text-sm">Taxa de Satisfação</div>
            </div>
          </div>

          {/* Additional badges */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-education-blue"></div>
              <span>Processo 100% Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-education-green"></div>
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
