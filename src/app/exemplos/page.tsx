import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Database, Zap, Smartphone, Cpu, Globe, Users, FileText, Briefcase, Clock, DollarSign, ArrowRight } from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Exemplos - Neurelix',
  description: 'Veja demonstrações interativas de nossas soluções em funcionamento.',
};

const examples = [
  {
    id: 1,
    title: "Demo: Agendamento via WhatsApp",
    description: "Simulação de chat para marcação de horários com fluxo completo",
    icon: MessageCircle,
    route: "/exemplos/agendamento",
    technologies: ["WhatsApp API", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Demo: Painel CRUD/Relatórios",
    description: "Interface para gerenciamento de dados com filtros e exportação",
    icon: Database,
    route: "/exemplos/painel",
    technologies: ["React", "Next.js", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Demo: Integração API",
    description: "Formulário que se comunica com APIs externas em tempo real",
    icon: Zap,
    route: "/exemplos/integracao",
    technologies: ["Express", "REST API", "TypeScript"]
  },
  {
    id: 4,
    title: "Demo: Assistente de IA",
    description: "Interface de chat com inteligência artificial para atendimento",
    icon: Cpu,
    route: "/exemplos/ia",
    technologies: ["OpenAI", "Python", "React"]
  }
];

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Exemplos ao Vivo</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Veja demonstrações interativas de nossas soluções em funcionamento. 
            Estas são simulações que demonstram como nossas soluções podem resolver problemas reais do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {examples.map((example) => {
            const IconComponent = example.icon;
            return (
              <div 
                key={example.id} 
                className="bg-neutral-900/50 rounded-lg border border-green-500/20 p-6 hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2">{example.title}</h2>
                    <p className="text-[#E6EDF3]/80 mb-4">{example.description}</p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-green-400 text-sm mb-1">Tecnologias utilizadas:</h3>
                      <div className="flex flex-wrap gap-2">
                        {example.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-neutral-800 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link 
                      href={example.route} 
                      className="inline-flex items-center text-green-400 font-medium hover:underline"
                    >
                      Acessar demonstração <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-8 border border-green-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Importante sobre as demonstrações</h2>
            <p className="text-[#E6EDF3]/80 mb-6">
              Estas demonstrações são simulações que ilustram como nossas soluções funcionam. 
              Elas não envolvem dados reais nem expõem chaves ou informações sensíveis. 
              São apenas exemplos do tipo de funcionalidade que podemos implementar para o seu negócio.
            </p>
            <div className="inline-flex gap-4">
              <Link 
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-semibold hover:from-green-600 hover:to-blue-600 transition-colors inline-flex items-center"
              >
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contato" 
                className="px-6 py-3 bg-neutral-800 text-white rounded-md font-semibold hover:bg-neutral-700 transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}