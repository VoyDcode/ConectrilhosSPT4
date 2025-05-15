'use client'

import { ContaType } from '@/types/ContaType';
import { useState, useRef, useEffect } from 'react'
import { useRouter } from "next/navigation";

export default function RelatarProblemaPage() {

  const [problema, setProblema] = useState({
    data: '',
    descricao: '',
    id_passageiro: ''
  })

  const navigate = useRouter();
  const [Logado, setLogado] = useState<ContaType | null>(null);


  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
      const parsedUsuario = JSON.parse(usuario);
      setProblema((prev) => ({
        ...prev,
        id_passageiro: String(parsedUsuario?.id)
      }));
    } else {
    navigate.push("/");
  }
  }, [Logado]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProblema({ ...problema, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();


  try {
    const response = await fetch("http://localhost:8080/problema", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(problema)
    });

    if (!response.ok) {
      throw new Error("Erro ao relatar problema.");
    }

    alert("Problema relatado com sucesso!");
  } catch (error) {
    console.error("Erro ao relatar:", error);
    alert("Erro ao relatar problema.");
  }
};
  

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Relatar Problema
        </h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
              <div>
                <label htmlFor="data" className="block text-sm font-medium text-gray-900 mb-1">
                  Data
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={problema.data}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-100 rounded-md"
                  required
                />
              </div>
              

            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-900 mb-1">
                Descrição do problema
              </label>
              <textarea
                id="descricao"
                name="descricao"
                value={problema.descricao}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 bg-gray-100 rounded-md"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Enviar Relatório
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
} 