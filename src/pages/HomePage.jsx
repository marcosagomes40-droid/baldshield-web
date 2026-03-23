import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Droplet, Sparkles, Award, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';
import CTASection from '@/components/CTASection.jsx';
const HomePage = () => {
  const benefits = [
  {
    icon: Shield,
    title: 'Proteção UV',
    description: 'Fórmula FPS 50+ que protege o couro cabeludo contra os raios UVA e UVB, prevenindo queimaduras e danos.',
  },
  {
    icon: Droplet,
    title: 'Resistente à água',
    description: 'Mantém a proteção mesmo durante atividades ao ar livre, suor ou contato com água.',
  },
  {
    icon: Sparkles,
    title: 'Toque seco',
    description: 'Textura leve, de rápida absorção, sem deixar oleoso ou com brilho excessivo.',
  },
  {
    icon: Award,
    title: 'Testado dermatologicamente',
    description: 'Seguro para uso diário, inclusive em peles sensíveis.',
  },
];
  return <>
      <Helmet>
        <title>BaldShield - Proteção total para sua cabeça careca</title>
      <meta name="description" content="Proteção diária contra o sol, sem oleosidade e sem brilho. Desenvolvido para couro cabeludo exposto." />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1570175186172-df2efb259145" alt="Confident bald man outdoors" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
          </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground" style={{
                fontFamily: 'Playfair Display, serif'
              }}>
                  Proteção total para sua cabeça careca
                </h1>
                
                <p className="text-xl text-secondary leading-relaxed max-w-xl">
                  Proteção diária contra o sol, sem oleosidade e sem brilho. FPS 50+ com resistência à água.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-10 py-6 h-auto transition-all duration-200 active:scale-[0.98]">
                    <Link to="/products">
                      Descubra BaldShield
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  
                <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-10 py-6 h-auto transition-all duration-200 active:scale-[0.98]">
                    <Link to="/benefits">Conheça os benefícios</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Product Mockup */}
              <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://horizons-cdn.hostinger.com/0dff2f89-11ee-409c-8d36-778d795a7ee2/homem-demonstrando-baldshield-fundo-escuro-4wz3v.png" alt="BaldShield premium sun protection product" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
{/* Quem Somos Section */}
<section className="py-28 bg-gradient-to-b from-black to-card">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <p className="text-sm uppercase tracking-[0.4em] text-primary mb-6">
      BaldShield
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
            fontFamily: 'Playfair Display, serif'
          }}>
      Mais do que proteção. Uma nova forma de assumir a careca.
    </h2>

    <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto mb-6">
      A BaldShield nasceu para redefinir a proteção do couro cabeludo.
      Criamos soluções premium para homens que valorizam performance,
      estilo e cuidado no dia a dia.
    </p>

    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
      O couro cabeludo é uma das áreas mais expostas ao sol — e por muito tempo foi negligenciado.
      A BaldShield surge para mudar isso.
    </p>
  </div>
</section>
        {/* Benefits Preview Section */}
        <section className="py-24 bg-gradient-to-b from-black to-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
              fontFamily: 'Playfair Display, serif'
            }}>
                Por que escolher a BaldShield?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Desenvolvido especialmente para o couro cabeludo, com proteção avançada e uso diário confortável.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} index={index} />)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />

        <Footer />
      </div>
    </>;
};
export default HomePage;