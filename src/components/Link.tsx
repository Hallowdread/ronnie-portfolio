import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, children, scrolled }) => {
  return (
    <a 
      href={href} 
      className={`${
        scrolled ? 'text-gray-800' : 'text-white'
      } hover:text-orange-500 transition-colors`}
    >
      {children}
    </a>
  );
};