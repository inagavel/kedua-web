
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Estudante de Medicina",
    institution: "Universidade do Porto",
    content: "A Kedua foi fundamental para encontrar a minha universidade de sonho. O processo foi muito simples e transparente.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "João Santos",
    role: "Técnico em Informática",
    institution: "Instituto Politécnico de Lisboa",
    content: "Consegui inscrever-me no curso técnico perfeito para a minha carreira. A plataforma é intuitiva e fiável.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    role: "Ensino Secundário",
    institution: "Colégio São Vicente",
    content: "Os meus pais ficaram muito satisfeitos com a facilidade do processo de inscrição através da Kedua.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que os nossos estudantes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de estudantes que encontraram a sua instituição ideal através da Kedua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-education-blue opacity-30" />
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-education-blue">{testimonial.institution}</p>
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

export default TestimonialsSection;
