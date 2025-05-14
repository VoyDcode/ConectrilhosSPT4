import React from 'react';

export default function PerfilPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#ECECEC] py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-8 text-center">Perfil do Usuário</h1>
        <form className="w-full flex flex-col gap-6" aria-label="Formulário de edição de perfil">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="font-semibold text-sm">Nome completo</label>
              <input id="nome" name="nome" type="text" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-sm">E-mail</label>
              <input id="email" name="email" type="email" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="cidade" className="font-semibold text-sm">Cidade</label>
              <input id="cidade" name="cidade" type="text" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="telefone" className="font-semibold text-sm">Telefone</label>
              <input id="telefone" name="telefone" type="text" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="endereco" className="font-semibold text-sm">Endereço</label>
              <input id="endereco" name="endereco" type="text" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="senha" className="font-semibold text-sm">Nova senha</label>
              <input id="senha" name="senha" type="password" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="confirmarSenha" className="font-semibold text-sm">Confirmar nova senha</label>
              <input id="confirmarSenha" name="confirmarSenha" type="password" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
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
      </div>
    </section>
  );
} 