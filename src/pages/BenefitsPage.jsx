import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Droplet, Sparkles, Award, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import CTASection from '@/components/CTASection.jsx';

const BenefitsPage = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Superior UV Protection',
      description: 'Our advanced SPF 50+ formula provides broad-spectrum protection against both UVA and UVB rays. Shields your scalp from sunburn, premature aging, and reduces the risk of skin damage from prolonged sun exposure.',
    },
    {
      icon: Droplet,
      title: 'Long-Lasting Water Resistance',
      description: 'Engineered to stay effective for up to 80 minutes in water. Perfect for swimming, surfing, or any water-based activities. Maintains protection even when you sweat during intense outdoor workouts.',
    },
    {
      icon: Sparkles,
      title: 'Premium Non-Greasy Formula',
      description: 'Lightweight texture that absorbs quickly without leaving any sticky or oily residue. Comfortable to wear all day long, whether you are at work, exercising, or enjoying outdoor activities.',
    },
    {
      icon: Award,
      title: 'Dermatologist Tested & Approved',
      description: 'Clinically tested and recommended by dermatologists worldwide. Hypoallergenic formula suitable for sensitive skin. Free from harsh chemicals, parabens, and artificial fragrances.',
    },
    {
      icon: Heart,
      title: 'Scalp Health & Nourishment',
      description: 'Enriched with vitamins and antioxidants that nourish your scalp while protecting it. Helps maintain healthy skin barrier function and prevents dryness. Gentle enough for daily use.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Benefits - Why Choose BaldShield Sun Protection</title>
        <meta
          name="description"
          content="Discover the benefits of BaldShield's premium scalp protection. SPF 50+, water-resistant, dermatologist tested, and designed for bald heads."
        />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-black to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                The BaldShield Advantage
              </h1>
              <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
                Discover why thousands of people trust BaldShield for premium scalp protection. Our formula combines cutting-edge science with premium ingredients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
            
            {/* Full-width benefit card */}
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

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-card to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { value: '50+', label: 'SPF Protection' },
                { value: '80min', label: 'Water Resistant' },
                { value: '4,827', label: 'Happy Customers' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3" style={{ fontFamily: 'Playfair Display, serif', fontVariantNumeric: 'tabular-nums' }}>
                    {stat.value}
                  </div>
                  <p className="text-lg text-secondary font-medium">{stat.label}</p>
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