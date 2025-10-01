import React from 'react';
import Image from 'next/image';

interface NeurelixLogoProps {
  size?: number;
  className?: string;
  colorClassName?: string; // permite ajustar a cor via classe Tailwind
}

const NeurelixLogo: React.FC<NeurelixLogoProps> = ({ 
  size = 32, 
  className = '',
  colorClassName = 'text-green-400'
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/neurelix-logo.svg"
        alt="Neurelix Logo"
        width={size}
        height={size}
        style={{
          background: 'rgba(34, 197, 94, 0.81)',
        }}
        className={colorClassName}
      />
    </div>
  );
};

export default NeurelixLogo;