import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Code, Zap, Smartphone, Cpu, Globe, Users, FileText, Briefcase, Clock, DollarSign } from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Cases - Neurelix',
  description: 'Estudos de caso reais de nossos projetos e soluções implementadas.',
};

const cases = [
  {
    id: 1,
    title: "Assistente de Agendamento via WhatsApp",
    status: "MVP",
    repo: "https://github.com/Giuseph66/whatsapp-booking",
    problem: "Cliente perdendo leads por agendamentos manuais e falhas de comunicação.",
    solution: "Agente conversacional que marca horários e responde dúvidas automaticamente.",
    outcomes: [
      "Redução de 40% em faltas a compromissos",
      "Aumento de 60% na taxa de conversão de leads",
      "Economia de 15h/semana em atendimento manual"
    ],
    metrics: [
      "1.200 agendamentos automáticos/mês",
      "Tempo médio de agendamento reduzido de 10min para 2min",
      "95% dos usuários preferem o agendamento via WhatsApp"
    ],
    stack: ["Node.js", "Express", "MongoDB", "WhatsApp API", "TypeScript"],
    images: [
      "https://opengraph.githubassets.com/seed/Giuseph66/whatsapp-booking",
      "https://source.unsplash.com/800x600/?whatsapp,chatbot"
    ],
    icon: MessageCircle
  },
  {
    id: 2,
    title: "Sistema de Gerenciamento de Clientes",
    status: "Concluído",
    repo: "https://github.com/Giuseph66/crm-system",
    problem: "Dificuldade em gerenciar informações de clientes de forma centralizada.",
    solution: "CRM personalizado com painéis de controle, automação e relatórios.",
    outcomes: [
      "Centralização de 100% das informações dos clientes",
      "Automatização de 70% das tarefas administrativas",
      "Redução de 50% no tempo de resposta ao cliente"
    ],
    metrics: [
      "300 clientes gerenciados no sistema",
      "500+ interações registradas por dia",
      "90% dos dados acessíveis em tempo real"
    ],
    stack: ["Next.js", "React", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    images: [
      "https://opengraph.githubassets.com/seed/Giuseph66/crm-system",
      "https://source.unsplash.com/800x600/?dashboard,analytics"
    ],
    icon: Users
  },
  {
    id: 3,
    title: "Integração de Pagamentos Automatizados",
    status: "Em Produção",
    repo: "https://github.com/Giuseph66/payment-integration",
    problem: "Processo manual de cobrança e falhas na sincronização de pagamentos.",
    solution: "Sistema de cobrança recorrente com integração a múltiplos gateways.",
    outcomes: [
      "Automação de 100% das cobranças recorrentes",
      "Redução de 80% nos erros de processamento",
      "Aumento de 25% na retenção de clientes"
    ],
    metrics: [
      "R$ 150.000+ em cobranças processadas mensalmente",
      "99.8% de taxa de sucesso nas transações",
      "Integração com 3 gateways de pagamento"
    ],
    stack: ["Python", "FastAPI", "Stripe", "PostgreSQL", "Redis"],
    images: [
      "https://opengraph.githubassets.com/seed/Giuseph66/payment-integration",
      "https://source.unsplash.com/800x600/?payment,automation"
    ],
    icon: DollarSign
  }
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Estudos de Caso</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Veja exemplos reais de como nossas soluções resolveram problemas e geraram valor para nossos clientes.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((caso) => {
            const IconComponent = caso.icon;
            return (
              <div 
                key={caso.id} 
                className="bg-neutral-900/50 rounded-lg border border-green-500/20 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-green-400" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{caso.title}</h2>
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
                        Status: {caso.status}
                      </span>
                      <p className="text-[#E6EDF3]/80 mb-4">{caso.problem}</p>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold text-green-400 mb-2">Stack utilizada:</h3>
                        <div className="flex flex-wrap gap-2">
                          {caso.stack.map((tech, idx) => (
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
                        href={caso.repo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 font-medium hover:underline flex items-center"
                      >
                        Ver repositório no GitHub <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-green-400">Solução</h3>
                        <p className="text-[#E6EDF3]/80">{caso.solution}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-green-400">Resultados</h3>
                          <ul className="list-disc list-inside text-[#E6EDF3]/80 space-y-2">
                            {caso.outcomes.map((outcome, idx) => (
                              <li key={idx}>{outcome}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-green-400">Métricas</h3>
                          <ul className="list-disc list-inside text-[#E6EDF3]/80 space-y-2">
                            {caso.metrics.map((metric, idx) => (
                              <li key={idx}>{metric}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-green-500/20 p-6 bg-black/30">
                  <h3 className="font-semibold mb-4 text-green-400">Imagens do projeto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caso.images.map((image, idx) => (
                      <div key={idx} className="rounded overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Imagem do caso ${caso.title} - ${idx+1}`} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/contato" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-semibold hover:from-green-600 hover:to-blue-600 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
}