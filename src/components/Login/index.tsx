"use client";
import React from 'react';
import { useEffect} from 'react';
import { useState } from "react";
import { ContaType } from '@/types/ContaType';
import { useRouter } from "next/navigation";
import { listaDeContas } from '@/data/listaDeContas';

export default function index() {

  const navigate = useRouter();

  const [ListaDecontas, setListaDeContas] = useState<ContaType[]>([])
  
  useEffect(() => {

    const user = localStorage.getItem("usuarioLogado");
    if (user) {
      navigate.push("/");
    }

    if(!localStorage.getItem("ListaContas")){
      localStorage.setItem("ListaContas", JSON.stringify(listaDeContas));
    }
    setListaDeContas(JSON.parse(localStorage.getItem("ListaContas") || "[]"))
  }, []);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangeSenha = (e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ContaValida = ListaDecontas?.find(
      (u) => u.email === email && u.senha === senha
    );
  
    localStorage.setItem("usuarioLogado", JSON.stringify(ContaValida));

    if (ContaValida) {
      alert("login realizado com sucesso");
      window.location.reload();
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };



  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-[#ECECEC]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-center tracking-wide" style={{fontFamily: 'inherit', letterSpacing: 1}}>LOGIN</h1>
        <p className="text-xs text-black font-semibold mb-6 text-center">
          Entre em sua conta para utilização
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-black mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              onChange={handleChangeEmail}
              name="email"
              className="w-full bg-[#F3F3F3] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-black mb-1">Senha:</label>
            <input
              onChange={handleChangeSenha}
              type="password"
              id="password"
              name="password"
              className="w-full bg-[#F3F3F3] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors mt-2"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-xs text-center flex flex-row items-center justify-center gap-1">
          <span className="text-gray-600">Caso não tenha cadastro</span>
          <a href="#" className="text-black font-semibold hover:underline text-xs">Criar conta</a>
        </div>
      </div>
    </section>
  )
}
