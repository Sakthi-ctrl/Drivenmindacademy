import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'compact',
  size = 'md',
  className = '',
  showTagline = false,
}) => {
  // Height map for responsive rendering
  const heightMap = {
    sm: 'h-8 md:h-9',
    md: 'h-10 md:h-12',
    lg: 'h-16 md:h-20',
    xl: 'h-24 md:h-32',
  };

  const currentHeight = heightMap[size] || 'h-10 md:h-12';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Driven Mind Academy"
        className={`${currentHeight} w-auto object-contain drop-shadow-xs hover:scale-[1.02] transition-transform duration-300`}
      />
    </div>
  );
};
