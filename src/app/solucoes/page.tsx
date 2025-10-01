import type { Metadata } from 'next';
import { ArrowRight, MessageCircle, Code, Zap, Smartphone, Cpu, Globe, Users, FileText, Briefcase, Clock, DollarSign, Wifi, Monitor } from 'lucide-react';
import Link from 'next/link';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Soluções - Neurelix',
  description: 'Explore nossas soluções de IA, automação e desenvolvimento sob medida.',
};

const solutions = [
  {
    id: 1,
    title: "Assistente de Agendamento via WhatsApp",
    problem: "Clientes perdendo agendamentos ou dificuldade em marcar horários.",
    solution: "Sistema de agendamento automático via WhatsApp com confirmação e lembretes.",
    benefits: [
      "Redução de faltas em até 40%",
      "Automação do processo de marcação",
      "Integração com Google Calendar"
    ],
    technologies: ["Node.js", "Express", "WhatsApp API", "MongoDB"],
    timeline: "20-30 dias",
    cost: "R$ 2.500 - R$ 5.000",
    examples: ["/exemplos/agendamento"],
    icon: MessageCircle
  },
  {
    id: 2,
    title: "Chatbots/Agentes para Atendimento",
    problem: "Demora no atendimento e baixa satisfação do cliente.",
    solution: "Agentes conversacionais inteligentes para respostas automatizadas.",
    benefits: [
      "Atendimento 24/7",
      "Redução de 60% no tempo de resposta",
      "Encaminhamento inteligente para humanos"
    ],
    technologies: ["Python", "FastAPI", "OpenAI", "React"],
    timeline: "25-40 dias",
    cost: "R$ 3.000 - R$ 7.000",
    examples: ["/exemplos/chatbot"],
    icon: Cpu
  },
  {
    id: 3,
    title: "Portais/CRMs sob medida",
    problem: "Gestão de clientes e processos manual e desorganizada.",
    solution: "Sistemas personalizados para gerenciamento de clientes e processos.",
    benefits: [
      "Centralização de informações",
      "Automação de tarefas repetitivas",
      "Relatórios personalizados"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    timeline: "40-60 dias",
    cost: "R$ 5.000 - R$ 12.000",
    examples: ["/exemplos/crm"],
    icon: Users
  },
  {
    id: 4,
    title: "Integrações (APIs, ERPs, Pagamentos)",
    problem: "Sistemas isolados e processos manuais entre diferentes softwares.",
    solution: "Conexões automatizadas entre diferentes sistemas e serviços.",
    benefits: [
      "Eliminação de processos manuais",
      "Redução de erros de digitação",
      "Melhoria na eficiência operacional"
    ],
    technologies: ["Node.js", "Express", "Python", "REST APIs"],
    timeline: "25-45 dias",
    cost: "R$ 4.000 - R$ 8.000",
    examples: ["/exemplos/integracao"],
    icon: Zap
  },
  {
    id: 5,
    title: "Sites de Conversão/Institucionais",
    problem: "Presença online desatualizada ou ineficaz para gerar leads.",
    solution: "Sites otimizados para conversão e com design moderno.",
    benefits: [
      "Aumento de 30% na taxa de conversão",
      "Otimizado para motores de busca",
      "Design responsivo"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    timeline: "15-30 dias",
    cost: "R$ 2.000 - R$ 6.000",
    examples: ["/exemplos/site"],
    icon: Globe
  },
  {
    id: 6,
    title: "Automação de Relatórios/IA",
    problem: "Geração manual de relatórios consumindo tempo valioso.",
    solution: "Sistemas inteligentes para geração automática de relatórios.",
    benefits: [
      "Economia de 10+ horas semanais",
      "Insights baseados em IA",
      "Relatórios personalizados"
    ],
    technologies: ["Python", "Pandas", "OpenAI", "React"],
    timeline: "10-25 dias",
    cost: "R$ 3.500 - R$ 9.000",
    examples: ["/exemplos/automacao"],
    icon: FileText
  },
  {
    id: 7,
    title: "Soluções Mobile + IoT Integradas",
    problem: "Necessidade de conectar dispositivos IoT com aplicativos móveis para controle e monitoramento remoto.",
    solution: "Desenvolvimento completo de aplicativos mobile integrados com dispositivos IoT, incluindo hardware especializado e software de controle.",
    benefits: [
      "Controle remoto de dispositivos",
      "Monitoramento em tempo real",
      "Integração completa entre mobile e IoT",
      "Notificações push personalizadas"
    ],
    technologies: ["Flutter", "React Native", "Arduino", "ESP32", "Node.js", "MQTT"],
    timeline: "60-120 dias",
    cost: "R$ 8.000 - R$ 20.000",
    examples: ["/exemplos/mobile-iot"],
    icon: Monitor
  },
  {
    id: 8,
    title: "Aplicativos Mobile",
    problem: "Falta de aplicativos móveis para Android e iOS que atendam às necessidades específicas do negócio.",
    solution: "Desenvolvimento de aplicativos nativos e híbridos para Android e iOS com funcionalidades personalizadas.",
    benefits: [
      "Presença nas principais lojas de apps",
      "Experiência otimizada para mobile",
      "Notificações push e offline",
      "Integração com recursos nativos do dispositivo"
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    timeline: "30-90 dias",
    cost: "R$ 4.000 - R$ 12.000",
    examples: ["/exemplos/mobile"],
    icon: Smartphone
  },
  {
    id: 9,
    title: "Soluções IoT e Hardware",
    problem: "Necessidade de dispositivos conectados e sensores para automação e coleta de dados.",
    solution: "Desenvolvimento de hardware especializado com microcontroladores, sensores e conectividade para Internet das Coisas.",
    benefits: [
      "Automação de processos físicos",
      "Coleta de dados em tempo real",
      "Redução de custos operacionais",
      "Monitoramento remoto de equipamentos"
    ],
    technologies: ["Arduino", "ESP32", "Raspberry Pi", "C/C++", "Python", "MQTT"],
    timeline: "30-90 dias",
    cost: "R$ 3.000 - R$ 15.000",
    examples: ["/exemplos/iot"],
    icon: Wifi
  },
  {
    id: 10,
    title: "IA Aplicada e Agentes",
    problem: "Processos manuais que poderiam ser automatizados com inteligência artificial.",
    solution: "Implementação de soluções de IA para automação de tarefas cognitivas.",
    benefits: [
      "Automação de tarefas cognitivas",
      "Redução de custos operacionais",
      "Tomada de decisão baseada em dados"
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain"],
    timeline: "35-60 dias",
    cost: "R$ 6.000 - R$ 15.000",
    examples: ["/exemplos/ia"],
    icon: Cpu
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Nossas Soluções</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Desenvolvemos soluções completas para resolver os desafios do seu negócio com tecnologia de ponta e custo acessível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={solution.id} 
                className="bg-neutral-900/50 rounded-lg border border-green-500/20 p-6 hover:border-green-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-green-400" />
                </div>
                <h2 className="text-xl font-bold mb-3">{solution.title}</h2>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-green-400">Problema:</h3>
                    <p className="text-[#E6EDF3]/80">{solution.problem}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-green-400">Solução:</h3>
                    <p className="text-[#E6EDF3]/80">{solution.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-green-400">Benefícios:</h3>
                    <ul className="list-disc list-inside text-[#E6EDF3]/80 space-y-1">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-green-400">Tecnologias:</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {solution.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 bg-neutral-800 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <h3 className="font-semibold text-green-400 text-sm">Prazo:</h3>
                      <p className="text-[#E6EDF3]/80 text-sm">{solution.timeline}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-400 text-sm">Custo Estimado:</h3>
                      <p className="text-[#E6EDF3]/80 text-sm">{solution.cost}</p>
                    </div>
                  </div>
                </div>
                
                {solution.examples.length > 0 ? (
                  <div className="mt-4">
                    <Link 
                      href={solution.examples[0]} 
                      className="text-green-400 font-medium hover:underline flex items-center text-sm"
                    >
                      Ver exemplos <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="mt-4">
                    <p className="text-[#E6EDF3]/60 text-sm">(Exemplo em breve)</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-neutral-900/30 rounded-lg border border-green-500/20 p-6">
          <h3 className="text-xl font-bold text-green-400 mb-4">Sobre os Prazos de Desenvolvimento</h3>
          <div className="space-y-3 text-[#E6EDF3]/80">
            <p>
              <strong className="text-green-400">Soluções Integradas (Mobile + IoT):</strong> O prazo de 60-120 dias inclui o desenvolvimento separado de cada plataforma (mobile e IoT) mais o tempo necessário para integração completa entre ambos os sistemas, garantindo comunicação eficiente e funcionalidades sincronizadas.
            </p>
            <p>
              <strong className="text-green-400">Desenvolvimento Separado:</strong> Aplicativos mobile (30-90 dias) e soluções IoT (30-90 dias) podem ser desenvolvidos independentemente, sendo ideais quando você precisa de apenas uma das tecnologias ou quer implementar em fases.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#E6EDF3]/80 mb-6">
            Não encontrou a solução ideal para o seu caso? Nossa equipe está pronta para desenvolver soluções personalizadas para atender às suas necessidades específicas.
          </p>
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