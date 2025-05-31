
import { Search, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Kedua</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Início</a>
            <a href="/instituicoes" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Instituições</a>
            <a href="#categorias" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Categorias</a>
            <a href="#sobre" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Sobre</a>
            <a href="#contato" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Contato</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Login Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex font-medium">
                  Entrar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl">Entrar na sua conta</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">Senha</label>
                    <Input id="password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full gradient-bg border-0 text-white hover:opacity-90">
                    Entrar
                  </Button>
                  <div className="text-center">
                    <a href="#" className="text-sm text-education-blue hover:underline">
                      Esqueceu sua senha?
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Signup Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="gradient-bg border-0 text-white hover:opacity-90 font-medium">
                  Cadastrar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl">Criar sua conta</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nome completo</label>
                    <Input id="name" type="text" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="signup-email" className="text-sm font-medium">E-mail</label>
                    <Input id="signup-email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="signup-password" className="text-sm font-medium">Senha</label>
                    <Input id="signup-password" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="confirm-password" className="text-sm font-medium">Confirmar senha</label>
                    <Input id="confirm-password" type="password" placeholder="••••••••" />
                  </div>
                  <Button className="w-full gradient-bg border-0 text-white hover:opacity-90">
                    Criar conta
                  </Button>
                  <div className="text-center text-sm text-gray-600">
                    Já tem uma conta?{" "}
                    <a href="#" className="text-education-blue hover:underline">
                      Faça login
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Início</a>
              <a href="/instituicoes" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Instituições</a>
              <a href="#categorias" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Categorias</a>
              <a href="#sobre" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Sobre</a>
              <a href="#contato" className="text-gray-600 hover:text-education-blue transition-colors font-medium">Contato</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="justify-start">
                      Entrar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-xl">Entrar na sua conta</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label htmlFor="mobile-email" className="text-sm font-medium">E-mail</label>
                        <Input id="mobile-email" type="email" placeholder="seu@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="mobile-password" className="text-sm font-medium">Senha</label>
                        <Input id="mobile-password" type="password" placeholder="••••••••" />
                      </div>
                      <Button className="w-full gradient-bg border-0 text-white hover:opacity-90">
                        Entrar
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="sm" className="gradient-bg border-0 text-white hover:opacity-90 justify-start">
                  Cadastrar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
