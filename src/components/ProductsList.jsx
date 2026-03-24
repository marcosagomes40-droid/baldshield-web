import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ProductsList = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Você entrou na lista de espera!');
      setEmail('');
    }
  };

  return (
    <div className="space-y-24">
      {/* Produto principal */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-base md:text-lg uppercase tracking-[0.5em] text-primary font-semibold mb-6 text-center w-full">
            EM BREVE
          </p>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            BaldShield SPF 50+
          </h2>

          <p
            className="text-2xl md:text-3xl text-foreground/90 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Proteção solar para couro cabeludo
          </p>

          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Desenvolvido especialmente para homens carecas que querem evitar
            queimaduras, desconforto e os danos causados pela exposição solar no
            couro cabeludo.
          </p>

          <div className="flex justify-center">
            <img
              src="/Logo%20transparente.png"
              alt="Produto BaldShield"
              className="w-44 md:w-60 object-contain opacity-95"
            />
          </div>

          <div className="flex justify-center mb-10">
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>✔ FPS 50+</li>
              <li>✔ Toque seco</li>
              <li>✔ Resistente à água</li>
              <li>✔ Foco em couro cabeludo exposto</li>
            </ul>
          </div>
          
        </motion.div>
      </div>

      {/* Lista de espera */}
      <div className="text-center max-w-2xl mx-auto">
        <h3
          className="text-3xl font-semibold text-foreground mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Entre na lista de espera
        </h3>

        <p className="text-muted-foreground mb-6">
          Receba novidades, acompanhe o lançamento e seja um dos primeiros a
          conhecer a BaldShield.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-card border-border text-foreground"
          />

          <Button className="bg-primary text-white hover:bg-primary/90 font-semibold">
            Quero ser avisado
          </Button>
        </form>
      </div>

      {/* Redes */}
      <div className="text-center">
        <h3
          className="text-2xl font-semibold text-foreground mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Acompanhe a BaldShield
        </h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://instagram.com/baldshield.br"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <Instagram size={18} />
            Instagram
          </a>

          <a
            href="https://facebook.com/baldshield"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <Facebook size={18} />
            Facebook
          </a>

          <a
            href="https://tiktok.com/@baldshield"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <span className="text-sm font-bold">♪</span>
            TikTok
          </a>

          <a
            href="mailto:mgomes@baldshield.com"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <Mail size={18} />
            E-mail
          </a>
        </div>
      </div>

      {/* Posicionamento */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-secondary leading-relaxed">
          A BaldShield nasce como a primeira marca brasileira focada na saúde do
          couro cabeludo de homens carecas — unindo proteção, performance e
          cuidado especializado.
        </p>
      </div>
    </div>
  );
};

export default ProductsList;
