import { client } from "../../../tina/__generated__/client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function WorkPage() {
  const globalData = await client.queries.global({
    relativePath: "index.json",
  });

  const caseStudies = [
    {
      title: "Global SaaS Platform",
      subtitle: "400% Revenue Growth",
      description: "Complete marketing transformation for a B2B SaaS company, resulting in exponential growth and market leadership.",
      metrics: [
        { label: "Revenue Growth", value: "400%" },
        { label: "Lead Quality", value: "300%" },
        { label: "Conversion Rate", value: "250%" }
      ]
    },
    {
      title: "Healthcare Startup",
      subtitle: "Market Entry Strategy",
      description: "Strategic brand development and go-to-market execution for a revolutionary healthcare technology platform.",
      metrics: [
        { label: "Market Penetration", value: "85%" },
        { label: "Brand Recognition", value: "200%" },
        { label: "Customer Acquisition", value: "350%" }
      ]
    },
    {
      title: "E-commerce Enterprise",
      subtitle: "Digital Transformation",
      description: "Comprehensive digital experience redesign and optimization program for a Fortune 500 retailer.",
      metrics: [
        { label: "Online Sales", value: "180%" },
        { label: "Customer LTV", value: "220%" },
        { label: "Operational Efficiency", value: "160%" }
      ]
    }
  ];

  return (
    <>
      <Navigation 
        logoText={globalData.data.global.site.logoText}
        navigationLinks={globalData.data.global.site.navigation.links}
      />
      
      <main>
        <section className="py-[120px] bg-white">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="font-['Playfair_Display'] text-[clamp(48px,6vw,80px)] font-normal leading-[1.1] text-[#0A0A0F] mb-8">
                Our <em className="illuminate">Work</em>
              </h1>
              <p className="text-xl text-[#6A6A6F] leading-[1.6]">
                Real results for real businesses. See how we've transformed organizations across industries.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-[80px] bg-[#F5F5F7]">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl p-12 border border-[#E5E5E8]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-2">
                      <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,48px)] font-normal leading-[1.2] text-[#0A0A0F] mb-4">
                        {study.title}
                      </h2>
                      <p className="font-['Space_Grotesk'] text-[#D4AF37] font-semibold text-lg mb-6">
                        {study.subtitle}
                      </p>
                      <p className="text-lg text-[#6A6A6F] leading-[1.6]">
                        {study.description}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="font-['Playfair_Display'] text-3xl font-normal text-[#D4AF37] mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Space_Grotesk'] text-sm font-medium text-[#6A6A6F] uppercase tracking-wide">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-[120px] bg-white">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Playfair_Display'] text-[clamp(36px,5vw,56px)] font-normal leading-[1.2] text-[#0A0A0F] mb-8">
                Ready to <em className="illuminate">illuminate</em><br/>your success story?
              </h2>
              <p className="text-xl text-[#6A6A6F] mb-12 leading-[1.6]">
                Let's discuss how we can transform your business with proven strategies and measurable results.
              </p>
              <a 
                href="/#contact" 
                className="inline-block py-[18px] px-12 bg-[#D4AF37] text-[#0A0A0F] font-['Space_Grotesk'] font-semibold text-base rounded-lg transition-all duration-300 hover:bg-[#B8941F] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer 
        content={globalData.data.global.site.footer.content}
      />
    </>
  );
}