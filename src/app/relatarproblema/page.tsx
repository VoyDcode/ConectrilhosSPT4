import React from 'react';

export default function RelatarProblemaPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#ECECEC] py-10">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-8 text-center">Relatar Problema</h1>
        <form className="w-full flex flex-col gap-6" aria-label="Formulário para relatar problema">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="linha" className="font-semibold text-sm">Linha</label>
              <input id="linha" name="linha" type="text" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="datahora" className="font-semibold text-sm">Data e hora</label>
              <input id="datahora" name="datahora" type="datetime-local" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="estacao" className="font-semibold text-sm">Estação</label>
              <input id="estacao" name="estacao" type="text" className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="comprovacao" className="font-semibold text-sm">Comprovação visual</label>
              <button type="button" className="bg-[#E9E9E9] rounded flex items-center justify-center w-12 h-12">
                <span className="sr-only">Enviar imagem</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V7.125C3 6.504 3.504 6 4.125 6h15.75c.621 0 1.125.504 1.125 1.125v9.375M3 16.5A2.625 2.625 0 005.625 19.125h12.75A2.625 2.625 0 0021 16.5M3 16.5l4.72-4.72a2.25 2.25 0 013.18 0l2.13 2.13m0 0l.72-.72a2.25 2.25 0 013.18 0l3.22 3.22" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="comoLocalizar" className="font-semibold text-sm">Como localizar</label>
            <textarea id="comoLocalizar" name="comoLocalizar" rows={3} className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="descricao" className="font-semibold text-sm">Descrição do problema</label>
            <textarea id="descricao" name="descricao" rows={3} className="bg-[#E9E9E9] rounded px-3 py-2 focus:outline-none" />
          </div>
          <button
            type="submit"
            className="w-60 bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors self-center mt-4"
            aria-label="Enviar problema"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
} 