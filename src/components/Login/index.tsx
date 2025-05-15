"use client";
import React from 'react';
import { useEffect} from 'react';
import { useState } from "react";
import { ContaType } from '@/types/ContaType';
import { useRouter } from "next/navigation";

export default function index() {

  const navigate = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/passageiro/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginData.email,
        senha: loginData.senha
      })
    });

    if (!response.ok) {
      console.log(loginData)
      throw new Error("Login inválido");
      
    }

    const usuarioLogado = await response.json();
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    alert("Login realizado com sucesso!");
    navigate.push("/")
  } catch (error) {
    alert("Usuário ou senha inválidos.");
    console.error("Erro no login:", error);
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
              onChange={handleChange}
              name="email"
              className="w-full bg-[#F3F3F3] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-black mb-1">Senha:</label>
            <input
              onChange={handleChange}
              type="password"
              id="senha"
              name="senha"
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
          <a href="/cadastro" className="text-black font-semibold hover:underline text-xs">Criar conta</a>
        </div>
      </div>
    </section>
  )
}
