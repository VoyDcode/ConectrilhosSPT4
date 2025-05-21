'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


// Cores utilizadas no layout
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
  data: string
  descricao: string
}

interface AccordionItemProps {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
  index: number
}
/* Componente de um único item do acordeão */
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
        <span className="font-medium">{item.data}</span>
        <span className="text-white" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div 
          id={`accordion-content-${index}`}
          className="bg-[#E9E9E9] rounded-b px-4 py-3 text-black"
          role="region"
          aria-label={`Conteúdo do problema em ${item.data}`}
        >
          <p className="text-sm">{item.descricao}</p>
        </div>
      )}
    </div>
  )
}

/* Componente principal da página */
export default function ProblemasRelatadospage() {
  const navigate = useRouter()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([])

  /* Busca os problemas na API ao carregar a página */
  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogado")
      if (!usuario) {
    navigate.push("/")
    return;
  }
    const parsedusuario = JSON.parse(usuario);
    async function fetchProblemas() {
      try {
        const res = await fetch(`http://localhost:8080/problema/${parsedusuario.id}`) // substitua pela sua URL real
        const data = await res.json()
        setAccordionItems(data)
        console.log('Dados do fetch:', data);
      } catch (error) {
        console.error("Erro ao buscar problemas:", error)
      }
    }

    fetchProblemas()
  }, [])

  /* Alterna o acordeão aberto */
  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index)
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
          Operações Solicitadas
        </h1>
        
        {/* Lista de Acordeões */}
        <div className="w-full mb-6">
          <h2 className="text-base font-semibold mb-4">Problemas Relatados</h2>
          <div 
            className="space-y-2"
            role="list"
            aria-label="Lista de problemas"
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

        {/* Botão para relatar novo problema */}
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
