'use client'

import { useState } from 'react'
import Link from 'next/link'

// Constantes
const COLORS = {
  primary: '#00386B',
  background: '#ECECEC',
  text: {
    primary: '#000000',
    secondary: '#666666',
    white: '#FFFFFF'
  }
}

// Interfaces
interface AccordionItem {
  id: string
  title: string
  content: string
  status?: string
}

interface AccordionItemProps {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
  index: number
}

// Componente AccordionItem
const AccordionItem = ({ item, isOpen, onToggle, index }: AccordionItemProps) => {
  return (
    <div className="w-full">
      <button
        onClick={onToggle}
        className="w-full bg-[#00386B] text-white px-4 py-2 rounded-t flex justify-between items-center hover:bg-blue-800 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        role="button"
      >
        <span className="font-medium">{item.title}</span>
        <span className="text-white" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div 
          id={`accordion-content-${index}`}
          className="bg-[#E9E9E9] rounded-b px-4 py-3 text-black"
          role="region"
          aria-label={`Conteúdo do ${item.title}`}
        >
          {item.status && (
            <div className="font-semibold mb-2">Status: {item.status}</div>
          )}
          <p className="text-sm">{item.content}</p>
        </div>
      )}
    </div>
  )
}

// Componente Principal
export default function CuponsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const accordionItems: AccordionItem[] = [
    {
      id: '1',
      title: "Cupom: Reparo - Banco na estação Pinheiros",
      content: "Detalhes do reparo solicitado para o banco na estação Pinheiros.",
      status: "Resgatado"
    }
  ]

  const toggleAccordion = (index: number): void => {
    try {
      setOpenIndex(openIndex === index ? null : index)
    } catch (error) {
      console.error('Erro ao alternar acordeão:', error)
      // Aqui você pode adicionar um tratamento de erro mais específico
      // como mostrar uma mensagem para o usuário
    }
  }

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-[#ECECEC] py-10"
      aria-labelledby="titulo-cupons"
    >
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 
          id="titulo-cupons" 
          className="text-2xl font-bold mb-6 text-center"
        >
          Cupons
        </h1>
        
        {/* Acordeão de Cupons */}
        <div className="w-full mb-6">
          <h2 className="text-base font-semibold mb-4">Operações solicitadas</h2>
          <div 
            className="space-y-2"
            role="list"
            aria-label="Lista de cupons disponíveis"
          >
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Botão Relatar Problema */}
        <Link
          href="/relatarProblema"
          className="w-60 bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors mt-4 text-center"
          aria-label="Ir para página de relatar problema"
          role="button"
        >
          Relatar problema
        </Link>
      </div>
    </section>
  )
} 