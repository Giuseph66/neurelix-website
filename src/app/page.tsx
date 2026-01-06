'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Zap, Users, Clock, ZapIcon, Code, Rocket } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  // Hero section with headline and badges
  const heroBadges = [
    "+15 projetos entregues",
    "Entrega ágil",
    "Integração com WhatsApp"
  ];

  return (
    <main className="min-h-screen bg-transparent text-[#E6EDF3] neural-grid">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 pointer-events-none holographic" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight flex items-center justify-center gap-3"
            >
              <div>
                <span className="block">IA, Automação e Software</span>
                <span className="block text-gradient mt-2">sob medida — acessível e sem burocracia.</span>
              </div>
            </h1>
            
            <p 
              className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-[#E6EDF3]/90"
            >
              Sites, apps e integrações inteligentes com preço justo e entrega rápida.
            </p>
            
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link 
                href="/exemplos" 
                className="px-6 py-3 bg-[#00E5FF] text-[#0B0F14] rounded-md font-semibold hover:bg-[#00E5FF]/90 transition-colors flex items-center"
              >
                Ver Exemplos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="#contato" 
                className="px-6 py-3 bg-[#FF8A00] text-[#0B0F14] rounded-md font-semibold hover:bg-[#FF8A00]/90 transition-colors flex items-center"
              >
                Fazer Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#00E5FF] text-[#00E5FF] rounded-md font-semibold hover:bg-[#00E5FF]/10 transition-colors flex items-center"
              >
                WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div 
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {heroBadges.map((badge, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#2A303D] rounded-full text-sm font-medium text-[#E6EDF3]/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          
          {/* Hero Image/Art */}
          <div className="mt-12 rounded-xl overflow-hidden neon-border">
            <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl h-64 md:h-96 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-blue-900/10" />
              <div className="text-center p-8">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-1 rounded-full inline-block mb-6">
                  <div className="bg-black rounded-full p-6">
                    <ZapIcon className="h-16 w-16 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Tecnologia Avançada</h3>
                <p className="text-[#E6EDF3]/80 max-w-md mx-auto">Soluções de IA e automação sob medida para o seu negócio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funcionamos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funcionamos</h2>
            <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">Nosso processo de desenvolvimento focado em resultados e eficiência</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Descoberta", description: "Entendemos seu problema e necessidades", icon: Users },
              { step: 2, title: "Protótipo Rápido", description: "Criamos um MVP funcional em dias", icon: Zap },
              { step: 3, title: "Entrega Iterativa", description: "Entregas contínuas com feedback", icon: Clock },
              { step: 4, title: "Suporte", description: "Assistência contínua após lançamento", icon: MessageCircle }
            ].map((item) => (
              <div 
                key={item.step}
                className="text-center p-6 bg-neutral-900/50 rounded-lg border border-green-500/20"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[#E6EDF3]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser Preços */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/10 to-blue-900/10 rounded-2xl p-8 md:p-12 border border-green-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Quanto custa tirar sua ideia do papel?</h2>
              <p className="text-xl text-[#E6EDF3]/80 mb-6">
                Não cobramos fortunas. Nossos preços começam em <span className="text-green-400 font-bold">R$ 100</span> e vão até onde sua imaginação (e necessidade) alcançar.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 text-sm text-[#E6EDF3]/60">
                    <Code size={16} /> Sites
                 </div>
                 <div className="flex items-center gap-2 text-sm text-[#E6EDF3]/60">
                    <MessageCircle size={16} /> Bots
                 </div>
                 <div className="flex items-center gap-2 text-sm text-[#E6EDF3]/60">
                    <Rocket size={16} /> IA
                 </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link 
                href="/precos" 
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center"
              >
                Ver Tabela Flexível <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Sobre */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Quem somos nós?</h2>
            <p className="text-lg text-[#E6EDF3]/70 max-w-2xl mx-auto mb-8">
                Neurelix não é apenas uma agência de software. Somos parceiros de tecnologia focados em desburocratizar a inovação.
            </p>
            <Link 
                href="/sobre" 
                className="text-green-400 font-semibold hover:text-green-300 transition-colors inline-flex items-center"
            >
                Conheça nossa história <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
