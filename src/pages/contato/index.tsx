import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { Input } from "../../components/input/Input";

function Contato() {
    function handleSubmit(){
        const [nome, setNome] = useState("")
        const [email, setEmail] = useState("")
        const [area, setArea] = useState("")
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center mt-10 mb-4">Solicite uma Consultoria Especializada</h1>
                    <p className="text-center text-gray-600 mb-8">
                        Está buscando orientação profissional ou apoio em um projeto específico? Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
                    </p>

                    <form className="space-y-6 mb-40" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nome
                            </label>
                            <Input placeholder="Digite seu nome" name="nome"/>
                            
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <Input placeholder="Digite seu e-mail" name="email"/>
                            
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Área de Interesse
                            </label>
                            <Input placeholder="Nutrição, Treinamento..." name="area"/>      
                        </div>
                        <button type="submit" className="w-full rounded-md bg-green-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-slate-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
                            Solicitar
                        </button>
                        
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contato;
