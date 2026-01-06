'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react';
import NeurelixLogo from './NeurelixLogo';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }
  const footerLinks = [
    {
      title: 'Soluções', links: [
        { name: 'Assistentes de WhatsApp', href: '/solucoes#whatsapp' },
        { name: 'Sistemas Web & APIs', href: '/solucoes#web' },
        { name: 'Automação com IA', href: '/solucoes#ia' },
        { name: 'Sites que convertem', href: '/solucoes#sites' }
      ]
    },
    {
      title: 'Links Rápidos', links: [
        { name: 'Home', href: '/' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Cases', href: '/cases' },
        { name: 'Tecnologias', href: '/tecnologias' }
      ]
    },
    {
      title: 'Legal', links: [
        { name: 'Termos de Serviço', href: '/termos' },
        { name: 'Política de Privacidade', href: '/privacidade' },
        { name: 'Política de Cookies', href: '/cookies' }
      ]
    },
    {
      title: 'Contato', links: [
        { name: 'Fale Conosco', href: '#contato' },
        { name: 'Enviar mensagem', href: '#contato' },
        { name: 'WhatsApp', href: `https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999999999'}` }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-green-500/20 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <NeurelixLogo size={32} colorClassName="text-green-400" />
              <span className="text-xl font-bold text-[#E6EDF3]">Neurelix</span>
            </div>
            <p className="text-[#E6EDF3]/80 mb-4">
              Soluções Full-Stack com IA e Automação, acessíveis e sob medida para o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Giuseph66"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6EDF3]/60 hover:text-green-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={process.env.LINKEDIN_URL || 'https://linkedin.com/in/giuseph-giangareli'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6EDF3]/60 hover:text-green-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://app.neurelix.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E6EDF3]/60 hover:text-green-400 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-[#E6EDF3] font-semibold mb-4 text-gradient">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#E6EDF3]/60 hover:text-green-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#2A303D] text-center">
          <p className="text-[#E6EDF3]/60 text-sm">
            © <Link href="/admin/login" className="hover:text-green-400 transition-colors cursor-default">{new Date().getFullYear()}</Link> Neurelix. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;