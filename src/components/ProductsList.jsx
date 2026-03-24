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

      {/* PRODUTO PRINCIPAL */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">
            Em breve
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            BaldShield SPF 50+
          </h2>

          <p className="text-lg text-secondary mb-8">
            Proteção solar desenvolvida especialmente para o couro cabeludo de homens carecas, com toque seco, rápida absorção e resistência à água.
          </p>

          <div className="flex justify-center">
            <img
              src="/Logo%20transparente.png"
              alt="Produto BaldShield"
              className="w-40 md:w-56 object-contain opacity-90"
            />
          </div>
        </motion.div>
      </div>

      {/* LISTA DE ESPERA */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          Seja um dos primeiros a testar
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

          <Button className="bg-primary text-white">
            Quero acesso antecipado
          </Button>
        </form>
      </div>

      {/* REDES SOCIAIS */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Acompanhe o lançamento
        </h3>

        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
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
            Email
          </a>
        </div>
      </div>

      {/* POSICIONAMENTO */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-secondary">
          A BaldShield nasce como a primeira marca no Brasil focada exclusivamente na proteção e saúde do couro cabeludo de homens carecas.
        </p>
      </div>

    </div>
  );
};

export default ProductsList;
