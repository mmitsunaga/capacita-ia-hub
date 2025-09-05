import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Capacita IA
              </span>
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Democratizando o acesso à educação em Inteligência Artificial. 
              Transforme sua carreira com nossos cursos especializados.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Rápidos</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-foreground/70 hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/cursos" className="block text-sm text-foreground/70 hover:text-primary transition-colors">
                Cursos
              </Link>
              <Link to="/aluno" className="block text-sm text-foreground/70 hover:text-primary transition-colors">
                Área do Aluno
              </Link>
              <Link to="/materiais" className="block text-sm text-foreground/70 hover:text-primary transition-colors">
                Materiais
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categorias</h3>
            <div className="space-y-2">
              <div className="text-sm text-foreground/70">Machine Learning</div>
              <div className="text-sm text-foreground/70">Deep Learning</div>
              <div className="text-sm text-foreground/70">Computer Vision</div>
              <div className="text-sm text-foreground/70">NLP</div>
              <div className="text-sm text-foreground/70">Ética em IA</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <Mail className="h-4 w-4" />
                <span>contato@capacitaia.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <Phone className="h-4 w-4" />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-foreground/60">
            © 2024 Capacita IA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;