'use client';

import React from 'react';

interface FooterProps {
  content: string;
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0F] text-white py-16">
      <div className="container mx-auto px-12 max-w-[1400px]">
        <div className="footer-content text-center">
          <div className="mb-8">
            <div className="logo-text font-['Playfair_Display'] text-3xl font-normal italic bg-gradient-to-br from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
              Illuminate Avenue
            </div>
          </div>
          
          <div className="footer-text text-[#AAAAB0] leading-relaxed max-w-2xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#2A2A2F]">
            <p className="text-[#6A6A6F] text-sm">
              © {new Date().getFullYear()} Illuminate Avenue. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}