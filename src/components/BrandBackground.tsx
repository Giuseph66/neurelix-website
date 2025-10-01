'use client'

import Image from 'next/image'
import React from 'react'

type BrandBackgroundProps = {
  className?: string
  opacity?: number
}

export default function BrandBackground({ className = '', opacity = 0.15 }: BrandBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Image
        src="/neurelix-fundo.png"
        alt="Neurelix background"
        fill
        priority
        className="object-contain floating"
        style={{ opacity }}
      />
    </div>
  )
}


