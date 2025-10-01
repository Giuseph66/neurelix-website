import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, Target, Heart, ArrowRight, Github, Linkedin, Globe } from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Sobre - Neurelix',
  description: 'Conheça a Neurelix, nossa missão, valores e como transformamos ideias em soluções digitais.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Sobre a Neurelix</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Transformamos ideias em soluções digitais poderosas com tecnologia de ponta, 
            IA e automação, sempre com foco em resultados reais para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-400">Nosso Manifesto</h2>
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-3">
                  <Target className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold">Missão</h3>
                </div>
                <p className="text-[#E6EDF3]/80">
                  Democratizar o acesso a soluções de IA e automação de alta qualidade, 
                  oferecendo tecnologia avançada com custo acessível e sem burocracia.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Globe className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold">Visão</h3>
                </div>
                <p className="text-[#E6EDF3]/80">
                  Ser referência em soluções digitais personalizadas, ajudando empresas 
                  de todos os portes a inovar e crescer com tecnologia de ponta.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Heart className="h-6 w-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold">Valores</h3>
                </div>
                <ul className="text-[#E6EDF3]/80 space-y-2">
                  <li>• <span className="text-green-400">Inovação:</span> Busca constante por soluções criativas e eficientes</li>
                  <li>• <span className="text-green-400">Transparência:</span> Comunicação clara e honesta em todos os projetos</li>
                  <li>• <span className="text-green-400">Excelência:</span> Compromisso com qualidade e resultados superiores</li>
                  <li>• <span className="text-green-400">Colaboração:</span> Parceria real com nossos clientes para atingir objetivos</li>
                  <li>• <span className="text-green-400">Acessibilidade:</span> Tecnologia de ponta com custo justo para todos</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-green-400">Nossa Jornada</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-green-400 pl-4 py-1">
                <div className="text-green-400 font-semibold">2022</div>
                <h3 className="text-lg font-semibold">Fundação da Neurelix</h3>
                <p className="text-[#E6EDF3]/80">
                  Início da jornada com o objetivo de tornar soluções de IA e automação acessíveis a empresas de todos os portes.
                </p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-4 py-1">
                <div className="text-green-400 font-semibold">2023</div>
                <h3 className="text-lg font-semibold">Primeiros Projetos</h3>
                <p className="text-[#E6EDF3]/80">
                  Desenvolvimento dos primeiros assistentes de WhatsApp e sistemas personalizados com tecnologia de ponta.
                </p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-4 py-1">
                <div className="text-green-400 font-semibold">2024</div>
                <h3 className="text-lg font-semibold">Expansão e Inovação</h3>
                <p className="text-[#E6EDF3]/80">
                  Lançamento de soluções avançadas de IA e automação, atendendo clientes em diversos setores.
                </p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-4 py-1">
                <div className="text-green-400 font-semibold">Hoje</div>
                <h3 className="text-lg font-semibold">Líder em Soluções Personalizadas</h3>
                <p className="text-[#E6EDF3]/80">
                  Mais de 15 projetos entregues, com foco contínuo em tecnologia acessível e resultados reais.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-black to-neutral-900 rounded-xl p-8 border border-green-500/20 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Segurança e Privacidade</h2>
            <p className="text-[#E6EDF3]/80 mb-6">
              Levamos a sério o tratamento de dados e a segurança das informações dos nossos clientes. 
              Todos os nossos sistemas são desenvolvidos com as melhores práticas de segurança e 
              em conformidade com a LGPD e regulamentações aplicáveis.
            </p>
            <div className="inline-flex gap-4">
              <Link 
                href="/termos" 
                className="text-green-400 hover:underline"
              >
                Termos de Serviço
              </Link>
              <Link 
                href="/privacidade" 
                className="text-green-400 hover:underline"
              >
                Política de Privacidade
              </Link>
              <Link 
                href="/cookies" 
                className="text-green-400 hover:underline"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Conecte-se Conosco</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="https://github.com/Giuseph66" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#2A303D] rounded-md hover:bg-[#00E5FF]/10 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Link>
            <Link 
              href={process.env.LINKEDIN_URL || 'https://linkedin.com/in/giuseph-giangareli'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#2A303D] rounded-md hover:bg-[#00E5FF]/10 transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Link>
            <Link 
              href="https://app.neurelix.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-[#2A303D] rounded-md hover:bg-[#00E5FF]/10 transition-colors"
            >
              <Globe className="h-5 w-5 mr-2" />
              Console (TBD)
            </Link>
          </div>
        </div>
        
        <div className="text-center">
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