import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <div className="flex-grow">
        <section className="text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Nutri.io 🥦</h1>
      <p className="text-lg mb-6">Sua saúde em primeiro lugar!</p>

      <p className="max-w-xl mx-auto text-base mb-4">
        Aqui no <strong>Nutri.io</strong>, você encontra ferramentas simples e práticas para cuidar melhor do seu corpo.
        Calcule sua <strong>Taxa Metabólica Basal (TMB)</strong> e o <strong>Índice de Massa Corporal (IMC)</strong> com rapidez e precisão.
      </p>

      <p className="max-w-xl mx-auto text-base mb-6">
        Esses dados ajudam você a entender melhor seu metabolismo, suas necessidades calóricas e a manter o equilíbrio ideal entre peso e saúde.
      </p>

      <h3 className="text-xl font-semibold mb-2">💡 Por que usar o Nutri.io?</h3>
      <ul className="text-base mb-8 space-y-1">
        <li>✔️ Simples e direto</li>
        <li>✔️ Resultados rápidos</li>
        <li>✔️ Interface intuitiva</li>
        <li>✔️ 100% gratuito</li>
      </ul>

      <div className="flex justify-center space-x-4">
        <a
          href="/tbm"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-300"
        >
          🔵 Calcular TMB
        </a>
        <a
          href="/imc"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition duration-300"
        >
          🟢 Calcular IMC
        </a>
      </div>
    </section>
        </div>
      <Footer />
    </div>
  );
}

export default Home;