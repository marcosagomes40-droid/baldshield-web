
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ image, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        <Button
          className="bg-primary hover:bg-primary/90 text-white font-semibold transition-all duration-200 active:scale-[0.98] group/btn"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
