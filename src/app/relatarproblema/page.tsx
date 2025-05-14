'use client'

import { useState, useRef } from 'react'

export default function RelatarProblemaPage() {
  const [formData, setFormData] = useState({
    linha: '',
    estacao: '',
    dataHora: '',
    localizacao: '',
    descricao: '',
    imagem: null as File | null
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Dados do formulário:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement
    if (name === 'imagem' && files && files[0]) {
      setFormData(prev => ({
        ...prev,
        imagem: files[0]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Relatar Problema
        </h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="linha" className="block text-sm font-medium text-gray-900 mb-1">
                  Linha
                </label>
                <input
                  type="text"
                  id="linha"
                  name="linha"
                  value={formData.linha}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-100 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="dataHora" className="block text-sm font-medium text-gray-900 mb-1">
                  Data e hora
                </label>
                <input
                  type="datetime-local"
                  id="dataHora"
                  name="dataHora"
                  value={formData.dataHora}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-100 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="estacao" className="block text-sm font-medium text-gray-900 mb-1">
                  Estação
                </label>
                <input
                  type="text"
                  id="estacao"
                  name="estacao"
                  value={formData.estacao}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-100 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Comprovação visual
                </label>
                <button
                  type="button"
                  onClick={handleImageClick}
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none"
                  aria-label="Adicionar foto"
                >
                  {/* Ícone de câmera SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75V8.25A2.25 2.25 0 014.5 6h2.379a1.5 1.5 0 001.06-.44l.621-.62A1.5 1.5 0 0110.56 4.5h2.88a1.5 1.5 0 011.06.44l.62.62a1.5 1.5 0 001.061.44H19.5a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 15.75z" />
                    <circle cx="12" cy="13" r="3.25" />
                  </svg>
                </button>
                <input
                  type="file"
                  accept="image/*"
                  name="imagem"
                  ref={fileInputRef}
                  onChange={handleChange}
                  className="hidden"
                />
                {formData.imagem && (
                  <span className="text-xs mt-1 text-gray-600 truncate">{formData.imagem.name}</span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="localizacao" className="block text-sm font-medium text-gray-900 mb-1">
                Como localizar
              </label>
              <textarea
                id="localizacao"
                name="localizacao"
                value={formData.localizacao}
                onChange={handleChange}
                rows={3}
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
                value={formData.descricao}
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