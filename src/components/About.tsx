'use client';

import React from 'react';

interface AboutProps {
  title: string;
  content: string;
}

export default function About({ title, content }: AboutProps) {
  return (
    <section className="about py-[120px] bg-white relative overflow-hidden">
      <div className="container mx-auto px-12 max-w-[1400px]">
        <div className="about-content max-w-4xl mx-auto text-center relative z-10">
          <h2 className="about-title font-['Playfair_Display'] text-[clamp(36px,5vw,56px)] font-normal leading-[1.2] text-[#0A0A0F] mb-8">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h2>
          
          <div className="about-text text-lg leading-[1.8] text-[#6A6A6F] space-y-6">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
      
      {/* Decorative background pattern */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-15">
        <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] border-2 border-[#D4AF37] transform rotate-45 animate-[rotateShape_20s_linear_infinite]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[100px] h-[100px] border-2 border-[#D4AF37] transform rotate-45 animate-[rotateShape_20s_linear_infinite_reverse]"></div>
      </div>
    </section>
  );
}