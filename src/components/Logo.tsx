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
  // Height map for responsive rendering with increased visibility
  const heightMap = {
    sm: 'h-10 md:h-12',
    md: 'h-14 md:h-16',
    lg: 'h-18 md:h-22',
    xl: 'h-28 md:h-36',
  };

  const currentHeight = heightMap[size] || 'h-14 md:h-16';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Driven Mind Academy"
        className={`${currentHeight} w-auto object-contain drop-shadow-sm hover:scale-[1.03] transition-all duration-300`}
      />
    </div>
  );
};

