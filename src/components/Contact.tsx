'use client';

import React, { useState } from 'react';
import { trackFormSubmission, trackButtonClick } from '@/lib/analytics';

interface ContactProps {
  title: string;
  subtitle: string;
  form: {
    submitText: string;
    successMessage: string;
  };
}

export default function Contact({ title, subtitle, form }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track form submission
    trackFormSubmission('contact_form');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        website: '',
        budget: '',
        message: ''
      });
    }, 1000);
  };

  if (isSuccess) {
    return (
      <section className="contact py-[120px] bg-[#0A0A0F] text-white" id="contact">
        <div className="container mx-auto px-12 max-w-[1400px]">
          <div className="contact-content max-w-4xl mx-auto text-center">
            <h2 className="contact-title font-['Playfair_Display'] text-[clamp(48px,6vw,80px)] font-normal leading-[1.1] text-white mb-6">
              Thank You!
            </h2>
            <p className="text-xl text-[#AAAAB0] mb-8">
              {form.successMessage}
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="btn-primary py-[18px] px-12 bg-[#D4AF37] text-[#0A0A0F] font-['Space_Grotesk'] font-semibold text-base rounded-lg transition-all duration-300 hover:bg-[#B8941F] hover:-translate-y-0.5"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact py-[120px] bg-[#0A0A0F] text-white" id="contact">
      <div className="container mx-auto px-12 max-w-[1400px]">
        <div className="contact-content max-w-4xl mx-auto text-center">
          <h2 className="contact-title font-['Playfair_Display'] text-[clamp(48px,6vw,80px)] font-normal leading-[1.1] text-white mb-6">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h2>
          <p className="contact-subtitle text-xl text-[#AAAAB0] mb-12">
            {subtitle}
          </p>
          
          <form className="contact-form bg-[#1A1A1F] border border-[#2A2A2F] rounded-2xl p-12 text-left max-w-4xl mx-auto" onSubmit={handleSubmit}>
            <div className="form-row grid grid-cols-3 gap-6 mb-6">
              <div className="form-group flex flex-col">
                <label className="form-label font-['Space_Grotesk'] text-[13px] font-semibold text-[#D4AF37] mb-2 uppercase tracking-[0.05em]" htmlFor="name">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input p-4 bg-[#2A2A2F] border border-[#3A3A3F] rounded-lg text-white font-['Inter'] text-[15px] transition-all duration-300 w-full focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="form-label font-['Space_Grotesk'] text-[13px] font-semibold text-[#D4AF37] mb-2 uppercase tracking-[0.05em]" htmlFor="email">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input p-4 bg-[#2A2A2F] border border-[#3A3A3F] rounded-lg text-white font-['Inter'] text-[15px] transition-all duration-300 w-full focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]" 
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="form-label font-['Space_Grotesk'] text-[13px] font-semibold text-[#D4AF37] mb-2 uppercase tracking-[0.05em]" htmlFor="company">
                  Company
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="form-input p-4 bg-[#2A2A2F] border border-[#3A3A3F] rounded-lg text-white font-['Inter'] text-[15px] transition-all duration-300 w-full focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]" 
                  placeholder="Company name" 
                  value={formData.company}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row grid grid-cols-3 gap-6 mb-6">
              <div className="form-group flex flex-col">
                <label className="form-label font-['Space_Grotesk'] text-[13px] font-semibold text-[#D4AF37] mb-2 uppercase tracking-[0.05em]" htmlFor="phone">
                  Phone
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-input p-4 bg-[#2A2A2F] border border-[#3A3A3F] rounded-lg text-white font-['Inter'] text-[15px] transition-all duration-300 w-full focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]" 
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="form-label font-['Space_Grotesk'] text-[13px] font-semibold text-[#D4AF37] mb-2 uppercase tracking-[0.05em]" htmlFor="website">
                  Website
                </label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  className="form-input p-4 bg-[#2A2A2F] border border-[#3A3A3F] rounded-lg text-white font-['Inter'] text-[15px] transition-all duration-300 w-full focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]" 
                  placeholder="https://your-website.com"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group flex flex-col">
                <label className="form-label font-['Space_Grotesk'] text-[13px] font-semibold text-[#D4AF37] mb-2 uppercase tracking-[0.05em]" htmlFor="budget">
                  Budget Range
                </label>
                <select 
                  id="budget" 
                  name="budget" 
                  className="form-input p-4 bg-[#2A2A2F] border border-[#3A3A3F] rounded-lg text-white font-['Inter'] text-[15px] transition-all duration-300 w-full focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] cursor-pointer"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select budget</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k-500k">$250K - $500K</option>
                  <option value="500k+">$500K+</option>
                </select>
              </div>
            </div>
            
            <div className="form-row grid grid-cols-1 mb-6">
              <div className="form-group flex flex-col">
                <label className="form-label font-['Space_Grotesk'] text-[13px] font-semibold text-[#D4AF37] mb-2 uppercase tracking-[0.05em]" htmlFor="message">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-textarea p-4 bg-[#2A2A2F] border border-[#3A3A3F] rounded-lg text-white font-['Inter'] text-[15px] transition-all duration-300 w-full min-h-[120px] resize-y focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]" 
                  placeholder="Tell us about your project and how we can help illuminate your path to success" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="form-buttons flex items-center justify-center gap-8 mt-8">
              <button 
                type="submit" 
                className="form-submit py-[18px] px-12 bg-[#D4AF37] text-[#0A0A0F] border-none rounded-lg font-['Space_Grotesk'] text-base font-semibold tracking-[0.5px] cursor-pointer transition-all duration-300 hover:bg-[#B8941F] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : form.submitText}
              </button>
              <span className="form-note text-[#AAAAB0] text-sm italic">
                We'll respond within 24 hours
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}