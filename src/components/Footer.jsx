import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/escudo.png"
                alt="Logo da BaldShield"
                className="w-14 h-14 object-contain"
              />
              <h3
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                BaldShield
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Proteção solar premium desenvolvida especialmente para cabeças carecas.
              Proteja seu couro cabeludo com estilo, segurança e confiança.
            </p>
          </div>

          <div>
            <h4
              className="mb-4 text-lg font-semibold text-foreground"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Links rápidos
            </h4>

            <div className="flex flex-col gap-2 text-sm text-secondary">
              <Link to="/" className="hover:text-primary transition-colors duration-200">
                Início
              </Link>
              <Link to="/products" className="hover:text-primary transition-colors duration-200">
                Produtos
              </Link>
              <Link to="/benefits" className="hover:text-primary transition-colors duration-200">
                Benefícios
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors duration-200">
                Contato
              </Link>
            </div>
          </div>

          <div>
            <h4
              className="mb-4 text-lg font-semibold text-foreground"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Canais oficiais
            </h4>

            <div className="space-y-3">
              <a
                href="mailto:mgomes@baldshield.com"
                className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-200"
              >
                <Mail size={16} />
                mgomes@baldshield.com
              </a>

              <div className="flex gap-4 pt-2 text-secondary">
                <a
                  href="https://instagram.com/baldshield.br"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors duration-200"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://facebook.com/baldshield"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors duration-200"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://tiktok.com/@baldshield"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="hover:text-primary transition-colors duration-200 text-sm font-bold"
                >
                  ♪
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BaldShield. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
