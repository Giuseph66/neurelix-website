'use client';

import Link from 'next/link';
import NeurelixLogo from '@/components/NeurelixLogo';
import { ArrowRight, MessageCircle, Code, Zap, Smartphone, Cpu, Globe, Users, FileText, Briefcase, Clock, DollarSign, SmartphoneIcon, GlobeIcon, MessageCircleIcon, Database, Bot, ZapIcon, LayoutDashboard } from 'lucide-react';
// import { motion } from 'framer-motion';

export default function HomePage() {
  // Hero section with headline and badges
  const heroBadges = [
    "+15 projetos (TBD)",
    "Entrega ágil",
    "Integração com WhatsApp"
  ];

  // Features for the "Destaques" section
  const features = [
    {
      icon: MessageCircle,
      title: "Assistentes de WhatsApp",
      description: "Agendamento, suporte e atendimento automático 24/7"
    },
    {
      icon: LayoutDashboard,
      title: "Sistemas Web e APIs",
      description: "Painéis, integrações e automações personalizadas"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile/IoT",
      description: "Soluções para dispositivos móveis e IoT (TBD)"
    }
  ];

  // Solutions grid
  const solutions = [
    {
      title: "Assistente de Agendamento via WhatsApp",
      description: "Sistema de marcação automática de horários",
      icon: MessageCircle
    },
    {
      title: "Chatbots/Agentes para Atendimento",
      description: "Assistentes virtuais para suporte ao cliente",
      icon: Bot
    },
    {
      title: "Portais/CRMs sob medida",
      description: "Sistemas personalizados para gestão de clientes",
      icon: Users
    },
    {
      title: "Integrações (APIs, ERPs, Pagamentos)",
      description: "Conectamos seus sistemas de forma eficiente",
      icon: Zap
    },
    {
      title: "Sites de Conversão/Institucionais",
      description: "Landing pages e sites institucionais otimizados",
      icon: Globe
    },
    {
      title: "Automação de Relatórios/IA",
      description: "Relatórios inteligentes com insights automatizados",
      icon: FileText
    }
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
                href="/solucoes" 
                className="px-6 py-3 bg-[#00E5FF] text-[#0B0F14] rounded-md font-semibold hover:bg-[#00E5FF]/90 transition-colors flex items-center"
              >
                Ver Soluções <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/exemplos" 
                className="px-6 py-3 bg-[#FF8A00] text-[#0B0F14] rounded-md font-semibold hover:bg-[#FF8A00]/90 transition-colors flex items-center"
              >
                Exemplos ao vivo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#00E5FF] text-[#00E5FF] rounded-md font-semibold hover:bg-[#00E5FF]/10 transition-colors flex items-center"
              >
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
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
            ].map((item, index) => (
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
          
          {/* Cost Callout */}
          <div className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20 text-center">
            <h3 className="text-2xl font-bold mb-2">Custo Acessível</h3>
            <p className="text-lg text-[#E6EDF3]/80 mb-4">Planos flexíveis e transparência total no preço</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div>
                <div className="text-3xl font-bold text-green-400">Planos</div>
                <div className="text-[#E6EDF3]/80">Flexíveis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">Pague</div>
                <div className="text-[#E6EDF3]/80">Pelo que usa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">Desenvolvemos soluções completas para otimizar seu negócio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-neutral-900/50 rounded-lg border border-green-500/20 p-6 hover:border-green-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-[#E6EDF3]/70 mb-4">{solution.description}</p>
                <Link 
                  href="/solucoes" 
                  className="text-green-400 font-medium hover:underline flex items-center"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques/Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Destaques</h2>
            <p className="text-lg text-[#E6EDF3]/80 max-w-2xl mx-auto">Soluções que fazem a diferença no seu negócio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-neutral-900/50 rounded-lg border border-green-500/20"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#E6EDF3]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-black to-neutral-900 rounded-xl p-12 border border-green-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para tirar sua ideia do papel?</h2>
          <p className="text-lg text-[#E6EDF3]/80 mb-8">Vamos transformar sua visão em realidade com soluções de IA e automação</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="https://wa.me/5566XXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-semibold hover:from-green-600 hover:to-blue-600 transition-colors flex items-center"
            >
              WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/contato" 
              className="px-6 py-3 bg-neutral-800 text-white rounded-md font-semibold hover:bg-neutral-700 transition-colors flex items-center"
            >
              Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/contato" 
              className="px-6 py-3 border border-green-400 text-green-400 rounded-md font-semibold hover:bg-green-500/10 transition-colors"
            >
              Agendar reunião
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}