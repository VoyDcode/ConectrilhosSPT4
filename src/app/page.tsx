import Link from 'next/link'
import Image from 'next/image'
import Boasvindas from '@/components/Boasvindas/boasvindas'

/**
 * Página Inicial do Portal PCD
 * Contém as seguintes seções:
 * - Hero section com mensagem de boas-vindas
 * - Serviços em destaque
 * - Informações sobre acessibilidade e direitos
 */
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <div className="flex-1">
        {/* Seção de boas-vindas */}
        <section className="w-full bg-[#ECECEC] py-16">
          <div className="max-w-5xl mx-auto px-8 flex flex-col gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Boas-vindas ao Conectrilhos!</h2>
              <p className="text-sm md:text-base mb-6">Aqui você pode relatar problemas e contribuir para um metrô mais limpo, eficiente e organizado.</p>
              <Link href="#servicos" className="inline-block bg-[#00386B] text-white px-6 py-2 rounded font-medium hover:bg-blue-900 transition-colors">Nossos serviços</Link>
            </div>
          </div>
        </section>

        {/* Serviços em Destaque */}
        <section id="servicos" className="py-10">
          <div className="max-w-6xl mx-auto px-8">
            <h3 className="text-base md:text-lg font-bold text-[#00386B] mb-6">Serviços em Destaque</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/relatarProblema" className="bg-[#D9D9D9] rounded-md h-36 flex flex-col items-center justify-center text-center text-black text-lg font-normal hover:bg-[#c0c0c0] transition-colors">
                <span className="font-bold mb-2">Relatar Problema</span>
                <span className="text-sm font-normal">Informe problemas e contribua para um metrô melhor.</span>
              </Link>
              <Link href="/cupons" className="bg-[#D9D9D9] rounded-md h-36 flex flex-col items-center justify-center text-center text-black text-lg font-normal hover:bg-[#c0c0c0] transition-colors">
                <span className="font-bold mb-2">Cupons</span>
                <span className="text-sm font-normal">Acompanhe seus cupons e operações solicitadas.</span>
              </Link>
              <Link href="/perfil" className="bg-[#D9D9D9] rounded-md h-36 flex flex-col items-center justify-center text-center text-black text-lg font-normal hover:bg-[#c0c0c0] transition-colors">
                <span className="font-bold mb-2">Perfil do Usuário</span>
                <span className="text-sm font-normal">Altere seus dados cadastrais com facilidade.</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}