import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TBM from "./pages/tbm";
import IMC from "./pages/imc";
import Contato from "./pages/contato";



const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tbm" element={<TBM />} />
                <Route path="/imc" element={<IMC />} />
                <Route path="/contato" element={<Contato />} />
                
            </Routes>
        </Router>
    );
}

export default Rotas;