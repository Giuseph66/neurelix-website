'use client'

import Image from 'next/image'
import React from 'react'

type BrandLogoProps = {
  size?: number
  className?: string
}

export default function BrandLogo({ size = 44, className = '' }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full neon-border ${className}`} style={{ width: size + 8, height: size + 8 }}>
      <Image src="/neurelix-logo.svg" alt="Neurelix" width={size} height={size} className="drop-shadow-lg" />
    </span>
  )
}


