import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#00386B] text-white py-6 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="font-bold text-lg md:text-xl mb-1">Conectrilhos</h3>
          <p className="text-sm text-gray-200">App para reportar problemas e otimizar eficiência e limpeza do metrô.</p>
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-end ml-auto">
          <h3 className="font-bold text-lg md:text-xl mb-1 text-center w-full">Contato</h3>
          <ul className="text-sm text-gray-200 text-center w-full">
            <li>E-mail: contato@contato.com</li>
            <li>Telefone: (11)4002-8922</li>
            <li>Endereço: São Paul, SP</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <p className="text-xs text-gray-200">© 2025 Conectrilhos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
} 