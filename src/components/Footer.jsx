import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Inscrição realizada',
        description: 'Obrigado por se inscrever em nossa newsletter.',
      });
      setEmail('');
    }
  };

  const quickLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/products' },
    { name: 'Contato', path: '/contact' },
    { name: 'Política de Privacidade', path: '/privacy' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
            <img
              src="/Logo%20solo.png"
              alt="Logo da BaldShield"
            className="w-16 h-16 object-contain flex-shrink-0"
            />
            <span
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              BaldShield
            </span>
          </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proteção solar premium desenvolvida especialmente para cabeças carecas. Proteja seu couro cabeludo com estilo, segurança e confiança.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:support@baldshield.com"
                className="flex items-center text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                support@baldshield.com
              </a>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-secondary hover:text-primary transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Novidades
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades sobre novos produtos e ofertas exclusivas.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 active:scale-[0.98]"
              >
                <Send className="w-4 h-4 mr-2" />
                Receber novidades
              </Button>
            </form>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BaldShield. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
