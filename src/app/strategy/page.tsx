import { client } from "../../../tina/__generated__/client";
import Navigation from '@/components/Navigation';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default async function StrategyPage() {
  const data = await client.queries.page({
    relativePath: "home.json",
  });

  const globalData = await client.queries.global({
    relativePath: "index.json",
  });

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
                Strategic <em className="illuminate">Excellence</em>
              </h1>
              <p className="text-xl text-[#6A6A6F] leading-[1.6]">
                Our proven methodology transforms businesses through strategic brilliance and tactical excellence.
              </p>
            </div>
          </div>
        </section>
        
        <Process
          title={data.data.page.process.title}
          subtitle={data.data.page.process.subtitle}
          steps={data.data.page.process.steps}
        />
        
        <section className="py-[120px] bg-[#F5F5F7]">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Playfair_Display'] text-[clamp(36px,5vw,56px)] font-normal leading-[1.2] text-[#0A0A0F] mb-8 text-center">
                Strategic <em className="illuminate">Capabilities</em>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-8 rounded-2xl border border-[#E5E5E8]">
                  <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#0A0A0F] mb-4">Market Analysis</h3>
                  <p className="text-[#6A6A6F] leading-[1.6]">Deep market research and competitive analysis to identify untapped opportunities and strategic positioning.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-[#E5E5E8]">
                  <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#0A0A0F] mb-4">Growth Planning</h3>
                  <p className="text-[#6A6A6F] leading-[1.6]">Comprehensive roadmaps that align marketing initiatives with business objectives for sustainable growth.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-[#E5E5E8]">
                  <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#0A0A0F] mb-4">Brand Strategy</h3>
                  <p className="text-[#6A6A6F] leading-[1.6]">Strategic brand positioning and messaging frameworks that resonate with your target audience.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-[#E5E5E8]">
                  <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#0A0A0F] mb-4">Digital Transformation</h3>
                  <p className="text-[#6A6A6F] leading-[1.6]">Technology-driven strategies that modernize customer experiences and operational efficiency.</p>
                </div>
              </div>
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