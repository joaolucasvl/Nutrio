import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";

function Contato() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
                <div className="flex-grow">
                    <h1>Teste</h1>
                </div>
            <Footer/>
        </div>
    );
}

export default Contato;