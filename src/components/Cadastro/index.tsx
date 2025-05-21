"use client";
import { ContaType } from "@/types/ContaType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cadastro() {
  const navigate = useRouter();
  useEffect(() => {
      const user = localStorage.getItem("usuarioLogado");
      if (user) {
        navigate.push("/");
      }});
  const [conta, setConta] = useState<Omit<ContaType,"id">>({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    telefone: "",
    nascimento: "",
    genero: "",
  });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConta({ ...conta, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();


  try {
    const response = await fetch("https://sprint4ddd-production.up.railway.app/passageiro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(conta)
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar conta.");
    }

    alert("Conta cadastrada com sucesso!");
    navigate.push("/");
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    alert("Erro ao cadastrar conta.");
  }
};

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-[#ECECEC]">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-center tracking-wide">Cadastro</h1>
        <p className="text-xs text-black font-semibold mb-6 text-center">
          Crie sua conta para acessar
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-black mb-1">Nome completo</label>
              <input type="text" id="nome" name="nome" value={conta.nome} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="cpf" className="block text-sm font-bold text-black mb-1">CPF</label>
              <input type="text" id="cpf" name="cpf" value={conta.cpf} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black mb-1">E-mail</label>
              <input type="email" id="email" name="email" value={conta.email} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-bold text-black mb-1">Telefone</label>
              <input type="text" id="telefone" name="telefone" value={conta.telefone} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="nascimento" className="block text-sm font-bold text-black mb-1">Data de Nascimento</label>
              <input type="date" id="nascimento" name="nascimento" onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm font-bold text-black mb-1">Senha</label>
              <input type="password" id="senha" name="senha" value={conta.senha} onChange={handleChange} minLength={6} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">Gênero</label>
              {["Masculino", "Feminino", "não binário", "Outro"].map((g) => (
                <label key={g} className="block text-sm text-black">
                  <input type="radio" name="genero" value={g} checked={conta.genero === g}
                    onChange={handleChange}className="mr-1"/>
                  {g}
                </label>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-2">
            <button type="submit" className="w-60 bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
