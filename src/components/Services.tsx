'use client';

import React from 'react';

interface ServiceCard {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
}

interface ServicesProps {
  badge: string;
  title: string;
  subtitle: string;
  serviceCards: ServiceCard[];
}

export default function Services({ badge, title, subtitle, serviceCards }: ServicesProps) {
  return (
    <section className="services py-[120px] bg-[#0A0A0F]" id="services">
      <div className="container mx-auto px-12 max-w-[1400px]">
        <div className="section-header text-center mb-20">
          <div className="section-badge inline-block py-2 px-5 bg-[#D4AF37] text-[#0A0A0F] rounded-[20px] font-['Space_Grotesk'] text-[13px] font-semibold uppercase tracking-[0.1em] mb-6">
            {badge}
          </div>
          <h2 className="section-title font-['Playfair_Display'] text-[clamp(36px,5vw,64px)] font-normal tracking-[-0.02em] leading-[1.2] text-white mb-6">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h2>
          <p className="section-subtitle text-xl text-[#AAAAB0] max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="services-grid grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 mt-20">
          {serviceCards.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-[#1A1A1F] border border-[#2A2A2F] rounded-2xl p-10 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
            >
              <h3 className="service-name font-['Space_Grotesk'] text-2xl font-semibold text-white mb-3">
                {service.name}
              </h3>
              <p className="service-subtitle font-['Playfair_Display'] text-base text-[#D4AF37] mb-5 italic">
                {service.subtitle}
              </p>
              <p className="service-description text-[#AAAAB0] leading-[1.6] mb-6">
                {service.description}
              </p>
              <ul className="service-features list-none">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="py-2 text-[#CACACE] text-sm flex items-center gap-3"
                  >
                    <span className="text-[#D4AF37] font-bold">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}