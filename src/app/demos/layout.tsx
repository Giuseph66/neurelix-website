import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Demo Header */}
            <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Link
                        href="/exemplos"
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                        title="Voltar para Exemplos"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Ambiente de Demonstração</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/contato"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                        Quero algo assim
                    </Link>
                </div>
            </header>

            <main>
                {children}
            </main>

            {/* Demo Footer */}
            <footer className="bg-gray-100 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
                <p>Este é um ambiente de demonstração. Nenhum dado real é salvo.</p>
            </footer>
        </div>
    );
}
