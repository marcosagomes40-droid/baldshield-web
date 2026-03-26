import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwrA99Uyr3o6lC-mbMTqL1jxZk0BEzNUKkqqyo1Muhx2Tn0UQHZT_jmkhPfBh4GADTPLw/exec';

const ProductsList = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          nome: '',
          email: email,
          assunto: 'Lista de espera',
          mensagem: '',
          origem: 'waitlist-products',
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Você entrou na lista de espera!');
        setEmail('');
      } else {
        throw new Error(result.error || 'Erro no envio');
      }
    } catch (error) {
      alert('Não foi possível enviar. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-24">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
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

          <div className="flex justify-center mb-10">
            <ul className="text-base text-muted-foreground space-y-3 text-left">
              <li>✔ FPS 50+</li>
              <li>✔ Toque seco</li>
              <li>✔ Resistente à água</li>
              <li>✔ Foco em couro cabeludo exposto</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <motion.img
              src="/produto1.png"
              alt="Produto BaldShield"
              className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
            />
        </div>
        </motion.div>
      </div>

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

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white hover:bg-primary/90 font-semibold"
          >
            {isSubmitting ? 'Enviando...' : 'Quero ser avisado'}
          </Button>
        </form>
      </div>

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
