import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';
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
    <div className="space-y-20">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-base md:text-lg uppercase tracking-[0.5em] text-primary font-semibold mb-6 text-center w-full">
            LANÇAMENTO EM BREVE
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            BaldShield SPF 50+
          </h2>

          <p
            className="text-2xl md:text-3xl text-foreground/90 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Proteção para couro cabeludo
          </p>

          <p className="text-lg text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Proteção solar desenvolvida especialmente para o couro cabeludo de
            homens carecas, com toque seco, rápida absorção e resistência à água.
          </p>

          <div className="flex justify-center">
            <img
              src="/Logo%20transparente.png"
              alt="Produto BaldShield"
              className="w-44 md:w-60 object-contain opacity-90"
            />
          </div>
        </motion.div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h3
          className="text-2xl font-semibold text-foreground mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Seja um dos primeiros a conhecer
        </h3>

        <p className="text-muted-foreground mb-6">
          Cadastre-se para receber acesso antecipado ao lançamento da BaldShield.
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

          <Button className="bg-primary text-white hover:bg-primary/90">
            Quero acesso antecipado
          </Button>
        </form>
      </div>

      <div className="text-center">
        <h3
          className="text-xl font-semibold text-foreground mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Acompanhe o lançamento
        </h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-primary"
          >
            <Instagram size={20} />
            Instagram
          </a>

          <a
            href="mailto:support@baldshield.com"
            className="flex items-center gap-2 text-secondary hover:text-primary"
          >
            <Mail size={20} />
            E-mail
          </a>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-secondary">
          A BaldShield nasce como uma marca criada para liderar uma nova categoria no Brasil: proteção e saúde do couro cabeludo para homens carecas.
        </p>
      </div>
    </div>
  );
};

export default ProductsList;
