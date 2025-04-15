import React from "react"
import { useState } from "react"
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"
import { Input } from "../../components/input/Input"
import { Button } from "../../components/button/button"

export function calcularTMB(peso: number, altura: number, idade: number, sexo: string): number {
    if (sexo === "masculino") {
        return 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
        return 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }
}



function TBM() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('masculino');
    const [resultado, setResultado] = useState<number | null>(null);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        const idadeNum = parseInt(idade);
        if (!isNaN(pesoNum) && !isNaN(alturaNum) && !isNaN(idadeNum)) {
            const tmb = calcularTMB(pesoNum, alturaNum, idadeNum, sexo);
            setResultado(tmb);
        }
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
                <section className="px-4 py-10 max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">Taxa Metabólica Basal (TMB)</h1>

                    <p className="text-base mb-4">
                        A <strong>Taxa Metabólica Basal</strong> representa a quantidade de calorias que seu corpo precisa para manter
                        as funções vitais em repouso, como respiração, circulação sanguínea, funcionamento do cérebro e temperatura corporal.
                    </p>

                    <p className="text-base mb-4">
                        Saber sua TMB é essencial para quem quer controlar o peso, ganhar massa muscular ou manter hábitos alimentares saudáveis,
                        pois ela ajuda a entender quanto seu corpo consome naturalmente de energia por dia.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">📊 Fórmula de Harris-Benedict:</h2>
                    <p className="text-sm mb-4">
                        Essa é uma das fórmulas mais utilizadas para calcular a TMB:
                    </p>

                    <div className="bg-gray-100 p-4 rounded shadow text-sm mb-6">
                        <p><strong>Homens:</strong> TMB = 66 + (13,7 × peso em kg) + (5 × altura em cm) - (6,8 × idade)</p>
                        <p><strong>Mulheres:</strong> TMB = 655 + (9,6 × peso em kg) + (1,8 × altura em cm) - (4,7 × idade)</p>
                    </div>

                    <p className="text-base mb-8">
                        Preencha os campos a baixo para calcular sua TMB com base nos seus dados pessoais.
                    </p>
                </section>
                <div className="flex-grow items-center justify-center">
                    <main className="p-8 max-w-md mx-auto mb-50">
                        <h2 className="text-3xl font-bold mb-4">Taxa Metabólica Basal</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <Input name="peso" type="number" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)}/> 
                            <Input name="altura" type="number" placeholder="Altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)} />
                            <Input name="idade" type="number" placeholder="Idade (anos)" value={idade} onChange={(e) => setIdade(e.target.value)} />
                            <select name="sexo" className="input w-full" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            </select>
                            <Button type="submit">Calcular</Button>
                        </form>

                        {resultado !== null && (
                            <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                                <h3 className="text-xl font-semibold">Resultado:</h3>
                                <p className="text-lg">{`Sua TMB é aproximadamente ${resultado.toFixed(2)} calorias por dia.`}</p>
                            </div>
                        )}
                    </main>
                    
                </div>
            <Footer />
      </div>
    )
  }
  
  export default TBM
  