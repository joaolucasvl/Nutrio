import React from "react";
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: number | string;
    placeholder?: string;

}

export const Input: FC<InputProps> = ({ label, placeholder, ...props }) => {
    return (
        <div className="flex flex-col">
            {label && <label className="text-gray-700 mb-2">{label}</label>}
            <input
                {...props}
                placeholder={placeholder}
                className="w-full  bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />
        </div>
    );
}




