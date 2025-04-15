import React, { useState } from "react"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { Input } from "../../components/input/Input"
import { Button } from "../../components/button/button"

export function calcularIMC(peso: number, altura: number): number {
    const resultado = peso / ((altura / 100) * (altura / 100));
    return resultado;
}


function getClassificacao(imc: number): string {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade grau I";
    if (imc >= 35 && imc < 39.9) return "Obesidade grau II";
    return "Obesidade grau III (mórbida)";
}

function IMC() {
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [resultado, setResultado] = useState<number | null>(null);

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);
  if (!isNaN(pesoNum) && !isNaN(alturaNum)) {
      const imc = calcularIMC(pesoNum, alturaNum);
      setResultado(imc);
  }
}

    return (
      <div className="flex flex-col min-h-screen">
        <Header />
          <section className="px-4 py-10 max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Índice de Massa Corporal (IMC)</h1>

            <p className="text-base mb-4">
              O <strong>IMC</strong> é uma medida utilizada para avaliar se uma pessoa está com o peso adequado em relação à sua altura.
              É uma ferramenta simples e prática para identificar o nível de magreza, peso ideal, sobrepeso ou obesidade.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">📐 Como calcular o IMC?</h2>
            <p className="text-base mb-4">
              A fórmula do IMC é:
            </p>

            <div className="bg-gray-100 p-4 rounded shadow text-sm mb-6">
              <p><strong>IMC = peso (kg) ÷ (altura × altura)</strong> (em metros)</p>
            </div>

            <h2 className="text-xl font-semibold mb-2">📊 Classificações segundo a OMS:</h2>
            <ul className="text-sm text-left list-disc list-inside mb-6">
              <li>Menor que 18,5 → Abaixo do peso</li>
              <li>18,5 a 24,9 → Peso normal</li>
              <li>25 a 29,9 → Sobrepeso</li>
              <li>30 a 34,9 → Obesidade grau I</li>
              <li>35 a 39,9 → Obesidade grau II</li>
              <li>40 ou mais → Obesidade grau III (mórbida)</li>
            </ul>

            <p className="text-base">
              Use a calculadora a baixo para saber seu IMC e entender melhor sua situação corporal.
            </p>
        </section>
          <div className="flex-grow flex justify-center
           items-center">
            <main className="p-8 max-w-md mx-auto mb-50">
              <div className="w-100 mx-auto">
                  <h2 className="text-3xl font-bold mb-4 text-center">Cálculo do IMC</h2>
                  <form className="space-y-4 flex-col" onSubmit={handleSubmit}>
                      <Input name="peso" type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} />
                      <Input name="altura" type="number" placeholder="Altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)} />
                      <Button type="submit">Calcular</Button>
                  </form>
                  {resultado !== null && (
                    <div className="mt-6 bg-gray-100 p-4 rounded shadow">
                      <p className="text-lg font-semibold">Seu IMC: {resultado.toFixed(2)}</p>
                      <p className="text-sm text-gray-700 mt-1">
                        Classificação: <strong>{getClassificacao(resultado)}</strong>
                      </p>
                    </div>
                  )}
              </div>
            </main>
              
          </div>
        <Footer />
      </div>
    )
  }

export default IMC
  

