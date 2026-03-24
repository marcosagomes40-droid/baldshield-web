import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Send } from 'lucide-react';
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
        description: 'Obrigado por entrar na lista de espera da BaldShield.',
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-black border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + descrição */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src="/Logo%20solo.png" className="w-14" />
              <h3 className="text-xl font-bold">BaldShield</h3>
            </div>

            <p className="text-sm text-gray-400">
              Proteção solar premium desenvolvida especialmente para cabeças carecas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">Links</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link to="/">Início</Link>
              <Link to="/products">Produtos</Link>
              <Link to="/benefits">Benefícios</Link>
              <Link to="/contact">Contato</Link>
            </div>
          </div>

          {/* Contato + redes */}
          <div>
            <h4 className="mb-4 font-semibold">Contato</h4>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <Mail size={16} />
              mgomes@baldshield.com
            </div>

            <div className="flex gap-4 mt-4 text-gray-400">
              <a href="https://instagram.com/baldshield.br" target="_blank">
                <Instagram size={18} />
              </a>

              <a href="https://facebook.com/baldshield" target="_blank">
                <Facebook size={18} />
              </a>

              <a href="https://tiktok.com/@baldshield" target="_blank">
                ♪
              </a>
            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-10 border-t border-gray-800 pt-8 max-w-md">
          <h4 className="mb-2 font-semibold">Lista de espera</h4>

          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <Input
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type="submit">
              <Send size={16} />
            </Button>
          </form>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          © 2026 BaldShield
        </div>
      </div>
    </footer>
  );
};

export default Footer;
