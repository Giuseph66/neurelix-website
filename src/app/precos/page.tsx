import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Zap, Code, Rocket } from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Preços - Neurelix',
  description: 'Planos flexíveis e preços acessíveis para suas soluções de IA e automação.',
};

const pricingModels = [
  {
    name: "Micro Soluções",
    price: "A partir de R$ 100",
    description: "Para pequenas automações, correções ou scripts simples.",
    icon: Zap,
    features: [
      "Scripts de automação simples",
      "Correções de bugs",
      "Configurações rápidas",
      "Entrega em até 24h"
    ],
    cta: "Solicitar agora",
    highlight: false
  },
  {
    name: "Projetos Sob Medida",
    price: "Orçamento Flexível",
    description: "Desenvolvimento completo de sites, apps e sistemas.",
    icon: Code,
    features: [
      "Sites e Landing Pages",
      "Sistemas Web Completos",
      "Aplicativos Mobile",
      "Integrações Complexas"
    ],
    cta: "Falar com especialista",
    highlight: true
  },
  {
    name: "Consultoria & IA",
    price: "Por Hora ou Projeto",
    description: "Análise técnica e implementação de inteligência artificial.",
    icon: Rocket,
    features: [
      "Consultoria de Arquitetura",
      "Implementação de IA/LLMs",
      "Otimização de Processos",
      "Mentoria Técnica"
    ],
    cta: "Agendar conversa",
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Investimento Flexível</span>
          </h1>
          <p className="text-xl text-[#E6EDF3]/80 max-w-3xl mx-auto leading-relaxed">
            Não acreditamos em preços engessados. Aqui, o valor se adapta à sua necessidade.
            <br />
            <span className="text-green-400 font-semibold">De R$ 100 ao infinito</span>, nós fazemos acontecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingModels.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className={`rounded-xl border p-8 transition-all duration-300 hover:transform hover:-translate-y-1 ${model.highlight
                    ? 'border-green-400 bg-gradient-to-b from-neutral-900 to-black shadow-[0_0_30px_rgba(74,222,128,0.1)]'
                    : 'border-green-500/20 bg-neutral-900/50 hover:border-green-500/40'
                  }`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-green-400" />
                </div>

                <h2 className="text-2xl font-bold mb-2">{model.name}</h2>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {model.price}
                  </span>
                </div>
                <p className="text-[#E6EDF3]/80 mb-8 min-h-[3rem]">{model.description}</p>

                <ul className="space-y-4 mb-8">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#E6EDF3]/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contato"
                  className={`w-full py-4 rounded-lg font-bold text-center block transition-all ${model.highlight
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-black hover:from-green-600 hover:to-blue-600 shadow-lg shadow-green-500/20'
                      : 'border border-green-500/50 text-green-400 hover:bg-green-500/10'
                    }`}
                >
                  {model.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-neutral-900 to-black rounded-2xl p-8 md:p-12 border border-green-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Como definimos o preço?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">1. Complexidade</h3>
                <p className="text-[#E6EDF3]/70">
                  Quanto mais complexa a lógica e as integrações, maior o esforço de desenvolvimento.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">2. Prazo</h3>
                <p className="text-[#E6EDF3]/70">
                  Projetos urgentes requerem alocação prioritária de recursos e equipe.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">3. Escopo</h3>
                <p className="text-[#E6EDF3]/70">
                  O tamanho do projeto e a quantidade de funcionalidades impactam diretamente no valor.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="#contato"
                className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
              >
                Faça um orçamento sem compromisso <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
