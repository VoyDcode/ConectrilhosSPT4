'use client'

import { useState } from 'react'

export default function RelatarProblemaPage() {
  const [formData, setFormData] = useState({
    tipo: '',
    descricao: '',
    local: '',
    data: '',
    hora: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados
    console.log('Dados do formulário:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Relatar Problema
        </h1>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo do Problema
              </label>
              <select
                id="tipo"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Selecione o tipo do problema</option>
                <option value="acessibilidade">Problema de Acessibilidade</option>
                <option value="limpeza">Problema de Limpeza</option>
                <option value="seguranca">Problema de Segurança</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição do Problema
              </label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Descreva o problema em detalhes..."
              />
            </div>

            <div>
              <label htmlFor="local" className="block text-sm font-medium text-gray-700 mb-1">
                Local do Problema
              </label>
              <input
                type="text"
                id="local"
                name="local"
                value={formData.local}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Ex: Estação Sé, Linha 3-Vermelha"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
                  Data
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-1">
                  Hora
                </label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
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