import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Droplet, Leaf } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CTASection from '@/components/CTASection.jsx';
import ProductsList from '@/components/ProductsList.jsx';

const ProductsPage = () => {
  const highlights = [
    {
      icon: Shield,
      title: 'Proteção avançada',
      description: 'FPS 50+ para ajudar a proteger o couro cabeludo contra os raios UVA e UVB.',
    },
    {
      icon: Droplet,
      title: 'Resistente à água',
      description: 'Mantém a proteção mesmo durante atividades ao ar livre, suor e contato com água.',
    },
    {
      icon: Leaf,
      title: 'Cuidado inteligente',
      description: 'Fórmula desenvolvida para unir proteção, conforto e praticidade no uso diário.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Produtos BaldShield | Protetor Solar para Careca</title>
        <meta
          name="description"
          content="Conheça os produtos BaldShield desenvolvidos para proteger o couro cabeludo de homens carecas com FPS 50+, toque seco e resistência à água."
        />
        <link rel="canonical" href="https://www.baldshield.com/products" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Page Header */}
        <section className="py-20 bg-gradient-to-b from-black to-card border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-medium mb-6">
                Nossos produtos
              </p>

              <h1
                className="text-5xl md:text-6xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Protetor solar para careca
              </h1>

              <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                Descubra a linha BaldShield desenvolvida para proteger o couro
                cabeludo contra o sol com alta performance, conforto e segurança
                no dia a dia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProductsList />
          </div>
        </section>

        {/* Product Highlights */}
        <section className="py-20 bg-gradient-to-b from-black to-card border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                O padrão BaldShield
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Cada produto é pensado para oferecer proteção, conforto e
                confiança para o couro cabeludo exposto ao sol.
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
