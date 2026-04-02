import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const PreLaunchPage = () => {
  return (
    <>
      <Helmet>
        <title>BaldShield | Pré-lançamento</title>
        <meta
          name="description"
          content="Entre para a lista da BaldShield e seja um dos primeiros a conhecer o lançamento."
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-b from-black to-card px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Pré-lançamento BaldShield
              </p>

              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                O problema não é ser careca.
                <span className="block text-primary">É o brilho.</span>
              </h1>

              <p className="mb-8 max-w-xl text-lg text-gray-300 md:text-xl">
                Estamos preparando uma nova solução da BaldShield para quem quer
                mais controle, praticidade e confiança no dia a dia.
              </p>

              <div className="mb-10 flex flex-wrap gap-4">
                <a
                  href="#lista"
                  className="rounded-2xl bg-primary px-8 py-4 font-semibold text-black transition hover:scale-105"
                >
                  Quero ser avisado
                </a>

                <a
                  href="#problema"
                  className="rounded-2xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-primary hover:text-primary"
                >
                  Entender mais
                </a>
              </div>

              <div className="grid max-w-xl gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Feito para</p>
                  <p className="mt-1 font-semibold">couro cabeludo</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Uso</p>
                  <p className="mt-1 font-semibold">rápido e prático</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Acesso</p>
                  <p className="mt-1 font-semibold">antes do lançamento</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src="/BaldWipespre32.png"
                  alt="Pré-lançamento BaldShield"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="problema" className="bg-black px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Se você é careca, você sabe
              </p>
              <h2 className="mb-10 text-4xl font-bold md:text-5xl">
                Existem situações que ninguém fala sobre isso.
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                'Sol forte e reflexo excessivo',
                'Flash em fotos e vídeos',
                'Calor e suor ao longo do dia',
                'Luz de escritório e reuniões',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-lg font-medium text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-black to-card px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Em breve
            </p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Uma solução simples para um problema ignorado.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Estamos finalizando os testes e preparando o lançamento.
              Entre para a lista e seja um dos primeiros a saber.
            </p>
          </div>
        </section>

        <section id="lista" className="bg-black px-6 py-20 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-primary/20 bg-card p-8 shadow-2xl md:p-12">
            <div className="mb-8 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Lista de espera
              </p>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Quero ser um dos primeiros
              </h2>
              <p className="text-gray-300">
                Preencha abaixo para receber novidades, prioridade e acesso ao lançamento.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        <Footer />
