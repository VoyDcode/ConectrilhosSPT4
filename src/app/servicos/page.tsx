import Link from 'next/link'

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Serviços
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Saúde */}
          <div className="group">
            <div className="bg-rose-50 rounded-t-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Serviços de Saúde e Reabilitação
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Informações sobre centros de saúde, reabilitação e tratamentos para PCDs.
              </p>
              <Link
                href="/cupons"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
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
                Atualize suas informações pessoais e preferências no sistema.
              </p>
              <Link
                href="/perfil"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Benefícios */}
          <div className="group">
            <div className="bg-blue-50 rounded-t-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Benefícios e Direitos
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Guia sobre benefícios governamentais e direitos legais para PCDs.
              </p>
              <Link
                href="/relatarProblema"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Página 1 */}
          <div className="group">
            <div className="bg-gray-100 rounded-t-lg p-6 flex flex-col items-center justify-center h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Página 1</h2>
              <p className="text-sm text-gray-600 mb-4 text-center">Conteúdo do dia a dia do metrô em breve.</p>
            </div>
          </div>

          {/* Página 2 */}
          <div className="group">
            <div className="bg-gray-100 rounded-t-lg p-6 flex flex-col items-center justify-center h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Página 2</h2>
              <p className="text-sm text-gray-600 mb-4 text-center">Conteúdo do dia a dia do metrô em breve.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 