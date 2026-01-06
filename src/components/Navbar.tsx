'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import NeurelixLogo from '@/components/NeurelixLogo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Soluções', href: '/solucoes' },
    { name: 'Exemplos', href: '/exemplos' },
    { name: 'Preços', href: '/precos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-green-500/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <NeurelixLogo size={32} />
            <span className="text-xl font-bold text-[#E6EDF3] hidden sm:block">Neurelix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === item.href
                  ? 'bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-400'
                  : 'text-[#E6EDF3] hover:text-green-400 hover:bg-black/40'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>


          {/* WhatsApp CTA */}
          <Link
            href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999086599'}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md text-sm font-semibold hover:from-green-600 hover:to-blue-600 transition-colors"
          >
            Falar no WhatsApp
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#E6EDF3] p-2 rounded-md hover:bg-black/40"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === item.href
                    ? 'bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-400'
                    : 'text-[#E6EDF3] hover:text-green-400 hover:bg-black/40'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}


              <Link
                href={`https://wa.me/${process.env.WHATSAPP_NUMBER || '5566999086599'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full text-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md text-sm font-semibold hover:from-green-600 hover:to-blue-600 transition-colors"
              >
                Falar no WhatsApp
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;