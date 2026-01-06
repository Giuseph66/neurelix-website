'use client'

import React, { useEffect, useState } from 'react'
import HolographicLogo from './HolographicLogo'

type BrandBackgroundProps = {
  className?: string
  opacity?: number
}

export default function BrandBackground({ className = '', opacity = 0.15 }: BrandBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden bg-[#0B0F14] z-0 ${className}`}>
      {/* Camada 1: Grid Cibernético Base - Reage levemente ao scroll */}
      <div 
        className="absolute inset-0 opacity-20 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          transform: `translateY(${scrollY * -0.05}px)`
        }}
      />

      {/* Camada 2: Grid Menor (Detalhe) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          transform: `translateY(${scrollY * -0.1}px)`
        }}
      />

      {/* Camada 3: Efeito Holográfico (Flicker) */}
      <div className="absolute inset-0 holographic z-[5]" />

      {/* Camada 5: Logo Holográfica (O Coração) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <HolographicLogo />
      </div>

      {/* Camada 6: Vinheta e Profundidade */}
      <div 
        className="absolute inset-0 z-20" 
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(11, 15, 20, 0.3) 70%, rgba(11, 15, 20, 0.6) 100%)'
        }}
      />

      {/* Camada 7: Glow de Cor Brand - Expande com o scroll */}
      <div 
        className="absolute top-[-10%] left-[-15%] w-[50%] h-[50%] bg-[#00E5FF]/10 blur-[140px] rounded-full animate-pulse" 
        style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-15%] w-[50%] h-[50%] bg-[#FF8A00]/10 blur-[140px] rounded-full animate-pulse" 
        style={{ animationDelay: '1.5s', transform: `scale(${1 + scrollY * 0.0005})` }}
      />
      
      {/* Beams Laterais - Ficam mais intensos no scroll */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#00E5FF]/30 to-transparent" style={{ opacity: 0.2 + (scrollY * 0.001) }} />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#FF8A00]/30 to-transparent" style={{ opacity: 0.2 + (scrollY * 0.001) }} />
    </div>
  )
}


