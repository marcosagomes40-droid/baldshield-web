import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <section className="relative py-24 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <p className="text-orange-500 uppercase tracking-[0.25em] text-sm mb-6">
              Por que a BaldShield existe
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
              Proteção solar feita para quem é careca.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/75 max-w-3xl leading-relaxed">
              A BaldShield nasceu para colocar luz sobre um problema real e pouco falado:
              a exposição diária do couro cabeludo ao sol, ao calor e ao envelhecimento precoce.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
                O problema
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ninguém fala sobre isso. Mas todo careca sente.
              </h2>
            </div>

            <div>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                O rosto recebe atenção. O corpo recebe proteção. Mas o couro cabeludo,
                que fica completamente exposto, quase sempre é esquecido.
              </p>

              <p className="text-white/75 text-lg leading-relaxed">
                Queimaduras, manchas, sensibilidade e desconforto fazem parte da rotina de
                muitos homens carecas no Brasil. E mesmo assim, quase não existem soluções
                pensadas especificamente para isso.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 bg-white/[0.03]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-orange-500 uppercase tracking-[0.2em] text-sm mb-4">
                Nossa visão
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Não é sobre estética. É sobre saúde, proteção e cuidado.
              </h2>
            </div>

            <div>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                A BaldShield não quer ser apenas mais um produto. Queremos construir
                uma marca que represente cuidado real com a pele, com a confiança e com
                a rotina de quem vive essa realidade todos os dias.
              </p>

              <p className="text-white/75 text-lg leading-relaxed">
                Nossa missão é criar soluções específicas para a saúde do couro cabeludo,
                com performance, praticidade e identidade para o homem careca moderno.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Missão</h3>
                <p className="text-white/75 leading-relaxed">
                  Desenvolver proteção solar pensada para a realidade de quem é careca,
                  trazendo mais cuidado, conforto e consciência.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Visão</h3>
                <p className="text-white/75 leading-relaxed">
                  Ser a marca referência em saúde do couro cabeludo para homens carecas no Brasil.
                </p>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
                <h3 className="text-xl font-semibold mb-4 text-orange-500">Valores</h3>
                <p className="text-white/75 leading-relaxed">
                  Cuidado real, inovação, autenticidade, simplicidade e foco em um público
                  que sempre foi pouco atendido.
                </p>
              </div>
            </div>
          </div>
        </section>

     <section className="py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary uppercase tracking-[0.3em] text-lg md:text-xl font-semibold mb-6">
          BALDSHIELD
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Mais do que proteção solar. Uma nova categoria de cuidado para homens carecas.
        </h2>

        <p className="text-white/75 text-lg leading-relaxed mb-10">
        Criamos a BaldShield para transformar uma necessidade ignorada em proteção, confiança e cuidado real.
        </p>

        <Link
          to="/products"
          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
        >
          Quero ser avisado
      </Link>
    </div>
  </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
