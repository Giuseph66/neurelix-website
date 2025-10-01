'use client'

import React from 'react'
import BrandLogo from './BrandLogo'

type SectionHeaderProps = {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
        <BrandLogo size={40} />
        <span>{title}</span>
      </h1>
      {subtitle && (
        <p className="text-lg text-[#E6EDF3]/80 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}


