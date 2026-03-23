
import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Orange accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-xl" />
      
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
