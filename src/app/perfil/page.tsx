'use client'
import { ContaType } from '@/types/ContaType';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function PerfilPage() {

    const navigate = useRouter();

    const [conta, setConta] = useState<ContaType>({
    id: 0 ,
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    telefone: "",
    nascimento: "" ,
    genero: "",
  });

  const [Logado, setLogado] = useState<ContaType | null>(null);
  
   useEffect(() => {
  const usuario = localStorage.getItem("usuarioLogado");
  if (usuario) {
    const parsedUsuario = JSON.parse(usuario);
    setLogado(parsedUsuario);
    console.log("parsedUsuario:", parsedUsuario);
    setConta({
      id: parsedUsuario.id ,
      nome: parsedUsuario.nome,
      cpf: parsedUsuario.cpf,
      email: parsedUsuario.email,
      senha: parsedUsuario.senha,
      telefone: parsedUsuario.telefone,
      nascimento: parsedUsuario.nascimento,
      genero: parsedUsuario.genero,
    });
  } else{
    navigate.push("/login");
  }
}, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConta({ ...conta, [name]: value });
  };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
      const response = await fetch(`https://sprint4ddd-production.up.railway.app/passageiro/atualizar/${conta.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(conta)
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar conta.");
      }

      alert("Conta atualizada com sucesso!");
      localStorage.setItem("usuarioLogado", JSON.stringify(conta));
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      alert("Erro ao atualizar conta.");
    }
  };

  const handleDelete = async () => {
    const confirmacao = confirm("Tem certeza que deseja deletar sua conta?");
    if (!confirmacao || !conta.id) return;

    try {
      const response = await fetch(`http://localhost:8080/passageiro/deletar/${conta.id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar conta.");
      }

      localStorage.removeItem("usuarioLogado");
      alert("Conta deletada com sucesso.");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar conta:", error);
      alert("Erro ao deletar conta.");
    }
  };

  return (
   <section className="min-h-screen flex flex-col items-center justify-center bg-[#ECECEC] py-10" >
  <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
    <h1 className="text-2xl font-bold mb-8 text-center">Perfil do Usuário</h1>
    <form className="w-full flex flex-col gap-6" aria-label="Formulário de edição de perfil" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-semibold text-sm">Nome completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={conta.nome}
            onChange={handleChange}
            className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-sm">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={conta.email}
            onChange={handleChange}
            className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefone" className="font-semibold text-sm">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="text"
            value={conta.telefone}
            onChange={handleChange}
            className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="senha" className="font-semibold text-sm">Nova senha</label>
          <input
            id="senha"
            name="senha"
            type="password"
            value={conta.senha}
            onChange={handleChange}
            className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none"
          />
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
      <button
        type="submit"
        className="w-60 bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors self-center mt-4"
        aria-label="Salvar alterações" 
      >
        Salvar alterações
      </button>
    </form>
    <button
  type="button"
  onClick={handleDelete}
  className="w-60 bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition-colors self-center mt-2"
  aria-label="Deletar conta"
>
  Deletar conta
</button>
  </div>
</section>

  );
} 