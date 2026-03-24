import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Instagram, Users, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-mail',
      details: 'support@baldshield.com',
      link: 'mailto:support@baldshield.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@baldshield',
      link: 'https://instagram.com',
    },
    {
      icon: Users,
      title: 'Parcerias e comercial',
      details: 'Fale com a equipe BaldShield para oportunidades de parceria e lançamento.',
      link: 'mailto:support@baldshield.com',
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
          content="Entre em contato com a BaldShield para dúvidas, lançamento, lista de espera e oportunidades de parceria."
        />
        <link rel="canonical" href="https://www.baldshield.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
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

        {/* Contact Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
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

              {/* Contact Information */}
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
                    para entrar em contato com a BaldShield.
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

                {/* Additional Info */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-8">
                  <h3
                    className="text-xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Quer acompanhar o lançamento?
                  </h3>

                  <p className="text-muted-foreground">
                    Você também pode entrar para a lista de espera e acompanhar
                    as novidades da BaldShield pelo Instagram e pelos nossos
                    canais oficiais.
                  </p>
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
