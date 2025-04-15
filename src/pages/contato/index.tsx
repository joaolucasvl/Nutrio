import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

function Contato() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
                <div className="max-w-3xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center mt-10 mb-4">Solicite uma Consultoria Especializada</h1>
                    <p className="text-center text-gray-600 mb-8">
                        Está buscando orientação profissional ou apoio em um projeto específico? Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Nome
                            </label>
                            <input
                                type="text"
                                placeholder="Seu nome completo"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="seuemail@exemplo.com"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Área de Interesse
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: Nutrição, Treinamento"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Mensagem
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Nos conte mais sobre o que você precisa..."
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition"
                        >
                            Solicitar Consultoria
                        </button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contato;
