
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold">Kedua</span>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando estudantes às melhores oportunidades educacionais de Portugal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-education-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-education-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-education-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-education-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instituições</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categorias</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ajuda</a></li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Para Estudantes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Procurar Instituições</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Processo de Inscrição</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bolsas e Financiamentos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Orientação Vocacional</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-education-blue" />
                <span className="text-gray-400">contacto@kedua.pt</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-education-blue" />
                <span className="text-gray-400">(+351) 21 000 0000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kedua. Todos os direitos reservados. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacidade</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Termos</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
