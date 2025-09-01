'use client';

import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export default function Process({ title, subtitle, steps }: ProcessProps) {
  return (
    <section className="process py-[120px] bg-[#F5F5F7]">
      <div className="container mx-auto px-12 max-w-[1400px]">
        <div className="section-header text-center mb-20">
          <h2 className="section-title font-['Playfair_Display'] text-[clamp(36px,5vw,64px)] font-normal tracking-[-0.02em] leading-[1.2] text-[#0A0A0F] mb-6">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h2>
          <p className="section-subtitle text-xl text-[#6A6A6F] max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="process-grid grid grid-cols-3 gap-12 mt-20">
          {steps.map((step, index) => (
            <div key={index} className="process-step text-center relative">
              {index < steps.length - 1 && (
                <div className="absolute top-10 -right-6 text-2xl text-[#D4AF37] hidden lg:block">
                  →
                </div>
              )}
              
              <div className="process-number font-['Playfair_Display'] text-5xl font-bold bg-gradient-to-br from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent mb-4 leading-none">
                {step.number}
              </div>
              
              <h3 className="process-title font-['Space_Grotesk'] text-xl font-semibold mb-3 text-[#0A0A0F]">
                {step.title}
              </h3>
              
              <p className="process-description text-[#6A6A6F] text-sm leading-[1.6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}