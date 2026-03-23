import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'support@baldshield.com',
      link: 'mailto:support@baldshield.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Sun Protection Ave, Miami, FL 33101',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9am - 6pm EST',
      link: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - BaldShield Customer Support</title>
        <meta
          name="description"
          content="Get in touch with BaldShield. Contact our customer support team for questions about our premium scalp sun protection products."
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
                Get in Touch
              </h1>
              <p className="text-xl text-secondary max-w-2xl mx-auto">
                Have questions about BaldShield? We are here to help. Reach out to our team and we will get back to you shortly.
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
                <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Send us a message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will respond within 24 hours.
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
                  <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Prefer to reach out directly? Here are all the ways you can contact us.
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

                {/* Additional Support Info */}
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Need immediate assistance?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Check out our FAQ section or email us directly at support@baldshield.com for quick answers.
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