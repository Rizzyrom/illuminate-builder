'use client';

import React from 'react';
import Link from 'next/link';

interface NavigationProps {
  logoText: string;
  navigationLinks: Array<{
    label: string;
    href: string;
  }>;
}

export default function Navigation({ logoText, navigationLinks }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-[20px] transition-all duration-300">
      <nav className="py-6">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="nav-container flex justify-between items-center">
            <Link 
              href="/" 
              className="logo-text font-['Playfair_Display'] text-[28px] font-normal italic bg-gradient-to-br from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent no-underline inline-block"
            >
              {logoText}
            </Link>
            
            <ul className="nav-menu flex gap-12 list-none">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-[#6A6A6F] no-underline text-[15px] font-medium font-['Space_Grotesk'] transition-colors duration-200 hover:text-[#0A0A0F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Link 
              href="/contact" 
              className="nav-cta py-3 px-6 bg-[#0A0A0F] text-white no-underline text-sm font-semibold rounded-md transition-all duration-300 font-['Space_Grotesk'] hover:bg-[#D4AF37] hover:text-[#0A0A0F]"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}