'use client';

import React from 'react';
import Link from 'next/link';

interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
  cta: {
    text: string;
    href: string;
  };
}

export default function Hero({ badge, title, subtitle, stats, cta }: HeroProps) {
  return (
    <section className="hero min-h-[90vh] flex items-center py-[120px_0_60px] bg-gradient-to-br from-white to-[#F5F5F7]">
      <div className="container mx-auto px-12 max-w-[1400px]">
        <div className="hero-content text-center max-w-4xl mx-auto">
          <div className="hero-badge inline-flex items-center gap-2 py-2 px-5 bg-[#D4AF37] text-[#0A0A0F] rounded-[20px] font-['Space_Grotesk'] text-[13px] font-semibold uppercase tracking-[0.1em] mb-8">
            {badge}
          </div>
          
          <h1 className="hero-title font-['Playfair_Display'] text-[clamp(48px,7vw,96px)] font-normal leading-[1.05] tracking-[-0.03em] mb-8">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h1>
          
          <p className="hero-subtitle text-xl font-normal text-[#6A6A6F] max-w-[700px] mx-auto mb-8 leading-[1.7]">
            {subtitle}
          </p>
          
          <div className="hero-stats grid grid-cols-3 gap-8 py-6 mb-8 border-t border-[#E5E5E8]">
            {stats.map((stat, index) => (
              <div key={index} className="stat text-center">
                <div className="stat-number font-['Playfair_Display'] text-[32px] font-bold leading-none mb-1.5 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="stat-label font-['Space_Grotesk'] text-sm text-[#6A6A6F] uppercase tracking-[0.05em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="hero-cta-group flex flex-col items-center gap-4">
            <Link 
              href={cta.href}
              className="btn-primary py-[18px] px-12 bg-[#0A0A0F] text-white no-underline font-['Space_Grotesk'] font-semibold text-base rounded-lg transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0F] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
            >
              {cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}