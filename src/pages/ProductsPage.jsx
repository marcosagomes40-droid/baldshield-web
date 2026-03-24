import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Droplet, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CTASection from '@/components/CTASection.jsx';
import ProductsList from '@/components/ProductsList.jsx';

const ProductsPage = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Proteção FPS 50+',
      description:
        'Proteção desenvolvida para ajudar a defender o couro cabeludo contra os efeitos da exposição solar.',
    },
    {
      icon: Droplet,
      title: 'Resistente à água',
      description:
        'Ideal para rotina ao ar livre, calor, suor e momentos de maior exposição ao sol.',
    },
    {
      icon: Sparkles,
      title: 'Toque seco',
      description:
        'Fórmula com sensação leve, confortável e sem brilho excessivo no couro cabeludo.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Produtos BaldShield | Lista de Espera</title>
        <meta
          name="description"
          content="Conheça o lançamento da BaldShield e entre na lista de espera do primeiro protetor solar para carecas no Brasil."
        />
        <link rel="canonical" href="https://www.baldshield.com/products" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-black to-card border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-base md:text-lg uppercase tracking-[0.5em] text-primary font-semibold mb-8 text-center w-full">
                LANÇAMENTO
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                O primeiro protetor solar para carecas no Brasil
              </h1>

              <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
                Conheça a BaldShield e entre na lista de espera para acompanhar
                em primeira mão o lançamento da marca focada na saúde do couro
                cabeludo de homens carecas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product / Waitlist */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductsList />
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 bg-gradient-to-b from-black to-card border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Por que acompanhar esse lançamento?
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                BaldShield nasce para atender uma necessidade real: proteger o
                couro cabeludo com foco, performance e cuidado diário.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3
                    className="text-xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {highlight.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {highlight.description}
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

export default ProductsPage;
