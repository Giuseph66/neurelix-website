'use client';

import { BarChart, Users, DollarSign, TrendingUp, Activity, Bell, Search } from 'lucide-react';

export default function DashboardDemo() {
    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h1 className="text-xl font-bold text-indigo-600">AdminPanel</h1>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
                        <Activity className="h-5 w-5" /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                        <Users className="h-5 w-5" /> Clientes
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                        <DollarSign className="h-5 w-5" /> Vendas
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                        <BarChart className="h-5 w-5" /> Relatórios
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold">
                            JD
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 text-sm font-medium">Receita Total</h3>
                                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                    <DollarSign className="h-5 w-5" />
                                </div>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-2xl font-bold text-gray-900">R$ 45.231</span>
                                <span className="text-green-500 text-sm font-medium flex items-center mb-1">
                                    <TrendingUp className="h-3 w-3 mr-1" /> +12%
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 text-sm font-medium">Novos Clientes</h3>
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <Users className="h-5 w-5" />
                                </div>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-2xl font-bold text-gray-900">1,203</span>
                                <span className="text-green-500 text-sm font-medium flex items-center mb-1">
                                    <TrendingUp className="h-3 w-3 mr-1" /> +8%
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-500 text-sm font-medium">Taxa de Conversão</h3>
                                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                    <Activity className="h-5 w-5" />
                                </div>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-2xl font-bold text-gray-900">3.2%</span>
                                <span className="text-red-500 text-sm font-medium flex items-center mb-1">
                                    <TrendingUp className="h-3 w-3 mr-1 rotate-180" /> -1%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="font-bold text-gray-900">Últimas Transações</h3>
                        </div>
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Empresa Exemplo {i}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Aprovado</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 1.200,00</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hoje</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
