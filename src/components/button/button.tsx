import React from "react";
import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({ type, ...props }) => {
  return (
    <button
      {...props}
      className="w-full rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-slate-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
    >
      {type === "submit" ? "Calcular" : "Enviar" }
    </button>
  );
};