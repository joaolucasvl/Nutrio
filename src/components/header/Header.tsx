import React from "react";

export function Header() {
    return (
        <header className="bg-blue-600 p-4 text-white shadow-xl">
            <div className="flex items-center justify-between">
                <a href="/" className="text-4xl font-bold">Nutri.io</a>
                <nav className="nav">
                    <ul className="flex  space-x-4">
                        <li>
                            <a href="/tbm">Taxa Metabólica</a>
                        </li>
                        <li>
                            <a href="/imc">IMC</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
