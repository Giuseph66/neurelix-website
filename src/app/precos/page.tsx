import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X, ArrowRight } from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Preços - Neurelix',
  description: 'Planos e preços acessíveis para nossas soluções de IA e automação.',
};

const pricingPlans = [
  {
    name: "Start",
    price: "(TBD)",
    description: "Soluções básicas para pequenos projetos e startups",
    features: [
      { name: "Landing page + integrações simples", included: true },
      { name: "Suporte por e-mail", included: true },
      { name: "Integração com WhatsApp (básica)", included: true },
      { name: "Até 3 funcionalidades personalizadas", included: true },
      { name: "Integração com APIs externas", included: false },
      { name: "Acesso a painel administrativo", included: false },
      { name: "Suporte prioritário", included: false },
      { name: "SLA de 99%", included: false },
      { name: "Assistente de IA personalizado", included: false }
    ],
    cta: "Comece com Start",
    popular: false
  },
  {
    name: "Pro",
    price: "(TBD)",
    description: "Soluções completas para empresas em crescimento",
    features: [
      { name: "Site completo + API + automações", included: true },
      { name: "Integração com ERPs/pagamentos", included: true },
      { name: "Até 10 funcionalidades personalizadas", included: true },
      { name: "Integração com APIs externas", included: true },
      { name: "Acesso a painel administrativo", included: true },
      { name: "Suporte por e-mail e WhatsApp", included: true },
      { name: "Suporte prioritário", included: false },
      { name: "SLA de 99%", included: false },
      { name: "Assistente de IA personalizado", included: false }
    ],
    cta: "Ir para Pro",
    popular: true
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Soluções sob medida para grandes empresas",
    features: [
      { name: "Solução totalmente personalizada", included: true },
      { name: "Integração com sistemas existentes", included: true },
      { name: "Funcionalidades ilimitadas", included: true },
      { name: "Integração com APIs externas", included: true },
      { name: "Acesso a painel administrativo", included: true },
      { name: "Suporte por e-mail, WhatsApp e Slack", included: true },
      { name: "Suporte prioritário 24/7", included: true },
      { name: "SLA de 99%", included: true },
      { name: "Assistente de IA personalizado", included: true }
    ],
    cta: "Falar com especialista",
    popular: false
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Planos e Preços</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu projeto. Sem surpresas, sem custos ocultos. 
            Nossos preços são transparentes e adaptados às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg border p-6 ${
                plan.popular 
                  ? 'border-green-400 bg-gradient-to-b from-neutral-900 to-black relative' 
                  : 'border-green-500/20 bg-neutral-900/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-blue-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Mais popular
                </div>
              )}
              
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-[#E6EDF3]/80">/projeto</span>}
              </div>
              <p className="text-[#E6EDF3]/80 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-[#E6EDF3]/40 mr-2 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-[#E6EDF3]" : "text-[#E6EDF3]/40"}>{feature.name}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={plan.name === "Scale" ? "/contato" : "/contato"} 
                className={`w-full py-3 rounded-md font-semibold text-center block ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-black hover:from-green-600 hover:to-blue-600' 
                    : 'border border-green-400 text-green-400 hover:bg-green-500/10'
                } transition-colors`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-8 border border-green-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Precisa de um orçamento personalizado?</h2>
            <p className="text-[#E6EDF3]/80 mb-6">
              Nossos planos são apenas um ponto de partida. Podemos adaptar qualquer solução 
              às necessidades específicas do seu negócio. Fale com nossos especialistas para 
              um orçamento preciso baseado no escopo do seu projeto.
            </p>
            <Link 
              href="/contato" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-semibold hover:from-green-600 hover:to-blue-600 transition-colors"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Dúvidas sobre os planos?</h3>
          <p className="text-[#E6EDF3]/80 mb-6">
            Nossa equipe está pronta para ajudar você a escolher o plano ideal para o seu projeto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-800 text-white rounded-md font-semibold hover:bg-neutral-700 transition-colors flex items-center"
            >
              Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/contato" 
              className="px-6 py-3 border border-green-400 text-green-400 rounded-md font-semibold hover:bg-green-500/10 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}