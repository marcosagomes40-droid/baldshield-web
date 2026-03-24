import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon: Icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(255,115,0,0.15)] hover:-translate-y-1 hover:border-primary/40"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl" />

      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h3
          className="text-2xl font-semibold text-foreground mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
