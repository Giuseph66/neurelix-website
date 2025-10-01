import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, Github, Linkedin, MapPin, Send, ArrowRight } from 'lucide-react';
import NeurelixLogo from '@/components/NeurelixLogo';

export const metadata: Metadata = {
  title: 'Contato - Neurelix',
  description: 'Entre em contato com a Neurelix para discutir seu projeto de IA e automação.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black neural-grid text-[#E6EDF3] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <NeurelixLogo size={40} colorClassName="text-green-400" />
            <span>Entre em Contato</span>
          </h1>
          <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Nossa equipe está pronta para discutir 
            como podemos ajudar seu negócio com soluções de IA e automação sob medida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#00E5FF]">Fale Conosco</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-neutral-900 border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-neutral-900 border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefone (opcional)</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-neutral-900 border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900 border border-green-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-semibold hover:from-green-600 hover:to-blue-600 transition-colors flex items-center justify-center"
              >
                Enviar mensagem <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 text-green-400">Outras formas de contato</h2>
            
            <div className="space-y-6">
              <Link 
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-neutral-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors"
              >
                <MessageCircle className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-[#E6EDF3]/80">Converse diretamente conosco via WhatsApp</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto text-[#E6EDF3]/60" />
              </Link>
              
              <a 
                href={`mailto:${process.env.EMAIL_PROFISSIONAL || 'contato@neurelix.com.br'}`} 
                className="flex items-center p-4 bg-neutral-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors"
              >
                <Mail className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-[#E6EDF3]/80">{process.env.EMAIL_PROFISSIONAL || 'contato@neurelix.com.br'}</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto text-[#E6EDF3]/60" />
              </a>
              
              <a 
                href="https://github.com/Giuseph66" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-neutral-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors"
              >
                <Github className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-[#E6EDF3]/80">Veja nossos projetos e contribuições</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto text-[#E6EDF3]/60" />
              </a>
              
              <a 
                href={process.env.LINKEDIN_URL || 'https://linkedin.com/in/giuseph-giangareli'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-neutral-900/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors"
              >
                <Linkedin className="h-8 w-8 text-green-400 mr-4" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-[#E6EDF3]/80">Conecte-se conosco profissionalmente</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto text-[#E6EDF3]/60" />
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4 text-green-400">Área de atendimento</h3>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 mr-2" />
                <p className="text-[#E6EDF3]/80">
                  Atendemos clientes em todo o Brasil e internacionalmente. 
                  Nossa equipe é especializada em soluções remotas e colaboração online eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-br from-black to-neutral-900 rounded-xl p-8 border border-green-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-[#E6EDF3]/80 mb-6">
              Não importa o tamanho do seu projeto ou o estágio em que ele está, 
              estamos prontos para ajudar. Fale com nossos especialistas e descubra 
              como podemos transformar sua ideia em uma solução digital poderosa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-semibold hover:from-green-600 hover:to-blue-600 transition-colors flex items-center"
              >
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/solucoes" 
                className="px-6 py-3 border border-green-400 text-green-400 rounded-md font-semibold hover:bg-green-500/10 transition-colors"
              >
                Ver soluções
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}