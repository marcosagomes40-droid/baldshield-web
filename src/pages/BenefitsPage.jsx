import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Droplet, Sparkles, Award, Heart } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import BenefitCard from '../components/BenefitCard.jsx';
import CTASection from '../components/CTASection.jsx';

const BenefitsPage = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Proteção UV avançada',
      description:
        'Fórmula FPS 50+ desenvolvida para proteger o couro cabeludo contra os raios UVA e UVB, ajudando a prevenir queimaduras, envelhecimento precoce e danos causados pela exposição solar.',
    },
    {
      icon: Droplet,
      title: 'Resistente à água',
      description:
        'Mantém a proteção mesmo durante atividades ao ar livre, suor intenso ou contato com água. Ideal para esportes, praia e uso no dia a dia.',
    },
    {
      icon: Sparkles,
      title: 'Toque seco e confortável',
      description:
        'Textura leve, rápida absorção e sem oleosidade. Desenvolvido para uso diário sem desconforto ou brilho excessivo no couro cabeludo.',
    },
    {
      icon: Award,
      title: 'Testado dermatologicamente',
      description:
        'Fórmula segura e adequada para o couro cabeludo, inclusive em peles sensíveis. Desenvolvido com foco em proteção e segurança.',
    },
    {
      icon: Heart,
      title: 'Cuidado com o couro cabeludo',
      description:
        'Além de proteger, ajuda a manter a saúde da pele, prevenindo ressecamento e desconforto causados pela exposição ao sol.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Benefícios BaldShield | Proteção para Couro Cabeludo</title>
        <meta
          name="description"
          content="Conheça os benefícios do BaldShield: proteção FPS 50+, toque seco, resistência à água e cuidado com o couro cabeludo de homens carecas."
        />
        <link rel="canonical" href="https://www.baldshield.com/benefits" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

        <section className="py-20 bg-gradient-to-b from-black to-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-lg md:text-xl uppercase tracking-[0.6em] text-primary font-semibold mb-12">
                BENEFÍCIOS
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Por que usar BaldShield
              </h1>

              <p className="text-xl text-secondary/90 max-w-xl mx-auto leading-8">
                Desenvolvido especialmente para o couro cabeludo de homens
                carecas, combinando proteção, conforto e desempenho real para o
                dia a dia.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mb-8">
              {benefits.slice(0, 4).map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <BenefitCard
                icon={benefits[4].icon}
                title={benefits[4].title}
                description={benefits[4].description}
                index={4}
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-card to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { value: '50+', label: 'FPS de proteção' },
                { value: '80min', label: 'Resistente à água' },
                { value: '100%', label: 'Especializado em couro cabeludo' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-5xl md:text-6xl font-bold text-primary mb-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-lg text-secondary font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </>
  );
};

export default BenefitsPage;
