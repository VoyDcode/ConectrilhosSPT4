'use client'
 
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
 
interface Cupom {
  id: string
  data: string
  descricao: string
  codigo: string
}
 
interface AccordionItemProps {
  item: Cupom
  isOpen: boolean
  onToggle: () => void
  index: number
}
 
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
        <span className="font-medium">{item.codigo}</span>
        <span className="text-white" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
 
      {isOpen && (
        <div
          id={`accordion-content-${index}`}
          className="bg-[#E9E9E9] rounded-b px-4 py-3 text-black"
          role="region"
          aria-label={`Conteúdo do cupom com validade ${item.data}`}
        >
          <p className="text-sm mb-2"><strong>Código:</strong> {item.codigo}</p>
          <p className="text-sm">{item.descricao}</p>
        </div>
      )}
    </div>
  )
}
 
export default function CuponsPage() {
  const navigate = useRouter()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [cupons, setCupons] = useState<Cupom[]>([])
 
  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogado")
    if (!usuario) {
      navigate.push("/")
      return
    }
 
    const parsedUsuario = JSON.parse(usuario)
 
    async function fetchCupons() {
      try {
        const res = await fetch(`https://sprint4ddd-production.up.railway.app/cupons/${parsedUsuario.id}`)
        const data = await res.json()
        setCupons(data)
        console.log('Cupons recebidos:', data)
      } catch (error) {
        console.error("Erro ao buscar cupons:", error)
      }
    }
 
    fetchCupons()
  }, [])
 
  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index)
  }
 
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#ECECEC] py-10" aria-labelledby="titulo-cupons">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 id="titulo-cupons" className="text-2xl font-bold mb-6 text-center">
          Meus Cupons
        </h1>
 
        <div className="w-full mb-6">
          <h2 className="text-base font-semibold mb-4">Cupons Disponíveis</h2>
          <div className="space-y-2" role="list" aria-label="Lista de cupons">
            {cupons.map((item, index) => (
              <AccordionItem
                key={`${item.id}-${index}`} // força uma key única
                item={item}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
 