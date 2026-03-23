import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingBag, Shield, Award, Sparkles } from 'lucide-react';

const CTASection = () => {
  const trustBadges = [
    { icon: Shield, text: 'Dermatologist Tested' },
    { icon: Award, text: 'SPF 50+ Protection' },
    { icon: Sparkles, text: 'Premium Formula' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to protect your head?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust BaldShield for premium sun protection.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-12 py-6 h-auto transition-all duration-200 active:scale-[0.98] mb-12"
          >
            <Link to="/products">
              <ShoppingBag className="w-5 h-5 mr-3" />
              Shop Now
            </Link>
          </Button>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-3"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <badge.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-secondary">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;