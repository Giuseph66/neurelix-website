import type { Metadata } from 'next';
import Link from 'next/link';
import NeurelixLogo from '@/components/NeurelixLogo';
import { 
  Database, 
  Server, 
  Code, 
  Smartphone, 
  Cpu, 
  Globe, 
  MessageCircle, 
  Shield, 
  Container, 
  Cloud, 
  GitBranch,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tecnologias - Neurelix',
  description: 'Tecnologias que utilizamos para desenvolver soluções completas e eficientes.',
};

const technologyCategories = [
  {
    title: "Back-end",
    icon: Server,
    description: "Tecnologias para desenvolvimento do lado do servidor",
    technologies: [
      {
        name: "Node.js",
        description: "Ambiente de execução JavaScript no servidor",
        link: "https://nodejs.org/",
        projects: ["WhatsApp Booking", "Payment Integration"]
      },
      {
        name: "Express",
        description: "Framework web para Node.js",
        link: "https://expressjs.com/",
        projects: ["WhatsApp Booking", "API Gateway"]
      },
      {
        name: "Python",
        description: "Linguagem de programação versátil e poderosa",
        link: "https://www.python.org/",
        projects: ["AI Solutions", "Data Processing"]
      },
      {
        name: "FastAPI",
        description: "Framework web moderno para APIs em Python",
        link: "https://fastapi.tiangolo.com/",
        projects: ["AI Solutions", "Data Processing"]
      },
      {
        name: "MongoDB",
        description: "Banco de dados NoSQL orientado a documentos",
        link: "https://www.mongodb.com/",
        projects: ["WhatsApp Booking", "CRM System"]
      },
      {
        name: "PostgreSQL",
        description: "Banco de dados relacional poderoso e confiável",
        link: "https://www.postgresql.org/",
        projects: ["CRM System", "Payment Integration"]
      }
    ]
  },
  {
    title: "Front-end",
    icon: Globe,
    description: "Tecnologias para desenvolvimento da interface do usuário",
    technologies: [
      {
        name: "React",
        description: "Biblioteca JavaScript para construção de interfaces",
        link: "https://reactjs.org/",
        projects: ["CRM System", "Dashboard"]
      },
      {
        name: "Next.js",
        description: "Framework React para aplicações modernas",
        link: "https://nextjs.org/",
        projects: ["CRM System", "Website"]
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS utilitário para desenvolvimento rápido",
        link: "https://tailwindcss.com/",
        projects: ["CRM System", "Website"]
      },
      {
        name: "TypeScript",
        description: "Superset do JavaScript com tipagem estática",
        link: "https://www.typescriptlang.org/",
        projects: ["All Projects"]
      }
    ]
  },
  {
    title: "IA & Automação",
    icon: Cpu,
    description: "Tecnologias para inteligência artificial e automação",
    technologies: [
      {
        name: "OpenAI API",
        description: "API para modelos avançados de linguagem",
        link: "https://platform.openai.com/",
        projects: ["AI Assistant", "Chatbot Solutions"]
      },
      {
        name: "WhatsApp Business API",
        description: "API oficial do WhatsApp para negócios",
        link: "https://developers.facebook.com/docs/whatsapp/",
        projects: ["WhatsApp Booking", "Customer Support Bot"]
      },
      {
        name: "Evolution API",
        description: "Plataforma para integração com WhatsApp",
        link: "https://evolutionapi.com/",
        projects: ["WhatsApp Booking", "Customer Support Bot"]
      }
    ]
  },
  {
    title: "DevOps & Infra",
    icon: Cloud,
    description: "Tecnologias para deploy e infraestrutura",
    technologies: [
      {
        name: "Docker",
        description: "Plataforma para contêinerização de aplicações",
        link: "https://www.docker.com/",
        projects: ["All Projects"]
      },
      {
        name: "Vercel",
        description: "Plataforma para deploy de aplicações Next.js",
        link: "https://vercel.com/",
        projects: ["Website", "CRM System"]
      },
      {
        name: "Git",
        description: "Sistema de controle de versão distribuído",
        link: "https://git-scm.com/",
        projects: ["All Projects"]
      }
    ]
  }
];

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Tecnologias</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Utilizamos as tecnologias mais modernas e eficientes para desenvolver soluções completas e escaláveis.
          </p>
        </div>

        <div className="space-y-12">
          {technologyCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-neutral-900/50 rounded-lg border border-green-500/20 p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-[#E6EDF3]/80">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, idx) => (
                    <div 
                      key={idx} 
                      className="bg-black/50 rounded-lg border border-green-500/20 p-4 hover:border-green-500/50 transition-colors"
                    >
                      <h3 className="font-bold text-lg mb-2 text-green-400">{tech.name}</h3>
                      <p className="text-[#E6EDF3]/80 mb-3">{tech.description}</p>
                      
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-[#E6EDF3]/60 mb-1">Projetos utilizados:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tech.projects.map((project, pIdx) => (
                            <span 
                              key={pIdx} 
                              className="px-2 py-1 bg-neutral-800 rounded text-xs"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        href={tech.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-400 font-medium hover:underline text-sm inline-flex items-center"
                      >
                        Documentação oficial <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-gradient-to-br from-black to-neutral-900 rounded-xl p-8 border border-green-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Tecnologia certa para cada projeto</h2>
            <p className="text-[#E6EDF3]/80 mb-6">
              Escolhemos as tecnologias mais adequadas para cada projeto, considerando 
              requisitos de desempenho, escalabilidade, segurança e manutenibilidade. 
              Estamos sempre atualizados com as melhores práticas do mercado.
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
    </div>
  );
}