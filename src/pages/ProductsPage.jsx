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
    { icon: Shield, title: 'Maximum Protection', description: 'SPF 50+ shields against UVA/UVB rays' },
    { icon: Droplet, title: 'Water Resistant', description: 'Stays effective during water activities' },
    { icon: Leaf, title: 'Reef Safe', description: 'Environmentally conscious formula' },
  ];

  return (
    <>
      <Helmet>
        <title>BaldShield Products - Premium Scalp Sun Protection</title>
        <meta
          name="description"
          content="Shop BaldShield's premium SPF 50+ sun protection formula. Water-resistant, reef-safe, and dermatologist tested."
        />
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
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Our Collection
              </h1>
              <p className="text-xl text-secondary max-w-2xl mx-auto">
                Premium scalp protection designed for the modern bald man. Discover our range of dermatologist-tested formulas.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                The BaldShield Standard
              </h2>
              <p className="text-secondary">Every product meets our rigorous quality requirements.</p>
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
                  <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
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