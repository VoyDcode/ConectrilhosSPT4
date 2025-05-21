'use client'

import Link from 'next/link'

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Serviços
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card cupons */}
          <div className="group">
            <div className="bg-rose-50 rounded-t-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Cupons
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Veja status das solicitações dos cupons, validade e cupons disponiveis.
              </p>
              <Link 
                href="/cupons" 
                className="text-primary text-sm hover:underline"
              >
                Visualizar
              </Link>
            </div>
          </div>

          {/* Card Alteração de Dados */}
          <div className="group">
            <div className="bg-rose-50 rounded-t-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Alteração de Dados Cadastrais
              </h2>
              <p className="text-sm text-gray-600 mb-4"> 
              Atualize suas informações pessoais e deixe com suas preferências em nosso sistema.
              </p>
              <Link 
                href="/perfil"
                className="text-primary text-sm hover:underline"
              >
                Clique para alterações cadastrais
              </Link>
            </div>
          </div>

          {/* Card relatar problema */}
          <div className="group">
            <div className="bg-blue-50 rounded-t-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Relatar
              </h2>
              <p className="text-sm text-gray-600 mb-4">
              Nós auxilie relatando um acontecimento para a melhorarmos nossa eficiencia em organização, manutenção e limpeza dos trens, metros e estações!
              tornando os ambientes cada vez mais agradaveis.
              </p>
              <Link 
                href="/relatarproblema"
                className="text-primary text-sm hover:underline"
              >
                Abrir solicitação
              </Link>
            </div>
          </div>

          {/* Card problemas relatados */}
          <div className="group">
            <div className="bg-gray-100 rounded-t-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Problemas Relatados</h2>
              <p className="text-sm text-gray-600 mb-4">Aqui você pode ver os problemas que relatou
Acompanhe todos os relatos feitos por você e fique por dentro do andamento de cada um.</p>
  <Link 
                href="/problemasrelatados"
                className="text-primary text-sm hover:underline"
              >
                Clique para alterações cadastrais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 