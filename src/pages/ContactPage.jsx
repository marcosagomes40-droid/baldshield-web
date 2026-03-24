import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Instagram, Users, Clock, Facebook } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const { toast } = useToast();

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (waitlistEmail) {
      toast({
        title: 'Inscrição realizada',
        description: 'Você entrou na lista de espera da BaldShield.',
      });
      setWaitlistEmail('');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      details: 'mgomes@baldshield.com',
      link: 'mailto:mgomes@baldshield.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@baldshield.br',
      link: 'https://instagram.com/baldshield.br',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      details: '@baldshield',
      link: 'https://facebook.com/baldshield',
    },
    {
      icon: Users,
      title: 'TikTok',
      details: '@baldshield',
      link: 'https://tiktok.com/@baldshield',
    },
    {
      icon: Clock,
      title: 'Atendimento',
      details: 'Retorno em até 24 horas úteis',
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contato BaldShield | Fale com a Nossa Equipe</title>
        <meta
          name="description"
          content="Entre em contato com a BaldShield, acompanhe o lançamento, siga nossas redes sociais e entre na lista de espera."
        />
        <link rel="canonical" href="https://www.baldshield.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-black to-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-lg md:text-xl uppercase tracking-[0.6em] text-primary font-semibold mb-10">
                CONTATO
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Fale com a BaldShield
              </h1>

              <p className="text-xl text-secondary/90 max-w-xl mx-auto leading-8">
                Tem dúvidas sobre a BaldShield, quer acompanhar o lançamento ou
                falar sobre parcerias? Entre em contato com a nossa equipe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Formulário */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-3xl font-bold text-foreground mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Envie sua mensagem
                </h2>

                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e nossa equipe retornará o mais
                  breve possível.
                </p>

                <ContactForm />
              </motion.div>

              {/* Contatos + redes + lista */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2
                    className="text-3xl font-bold text-foreground mb-6"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Informações de contato
                  </h2>

                  <p className="text-muted-foreground mb-8">
                    Prefere falar diretamente? Aqui estão os principais canais
                    para entrar em contato e acompanhar a BaldShield.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4 p-6 bg-black border border-border rounded-xl transition-all duration-300 hover:border-primary/50"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>

                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noreferrer' : undefined}
                            className="text-secondary hover:text-primary transition-colors duration-200"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-secondary">{info.details}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Lista de espera */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                  <h3
                    className="text-2xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Entre na lista de espera
                  </h3>

                  <p className="text-muted-foreground mb-5">
                    Receba novidades sobre o lançamento da BaldShield e seja um
                    dos primeiros a acompanhar a marca.
                  </p>

                  <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      required
                      className="bg-black border-border text-foreground placeholder:text-muted-foreground"
                    />

                    <Button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white font-semibold"
                    >
                      Entrar na lista
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
