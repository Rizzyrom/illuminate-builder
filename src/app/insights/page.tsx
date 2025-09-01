import { client } from "../../../tina/__generated__/client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function InsightsPage() {
  const globalData = await client.queries.global({
    relativePath: "index.json",
  });

  const insights = [
    {
      title: "The Future of Marketing: AI-Driven Personalization",
      excerpt: "How artificial intelligence is revolutionizing customer experiences and driving unprecedented engagement rates.",
      date: "2024-01-15",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Strategic Brand Positioning in Saturated Markets",
      excerpt: "Proven methodologies for differentiating your brand and capturing market share in competitive landscapes.",
      date: "2024-01-10",
      category: "Strategy",
      readTime: "7 min read"
    },
    {
      title: "Data-Driven Growth: Beyond Vanity Metrics",
      excerpt: "Focus on metrics that matter and build sustainable growth through intelligent data analysis and optimization.",
      date: "2024-01-05",
      category: "Analytics",
      readTime: "6 min read"
    },
    {
      title: "Customer Journey Optimization for B2B SaaS",
      excerpt: "Comprehensive guide to mapping and optimizing every touchpoint in the B2B customer acquisition funnel.",
      date: "2023-12-28",
      category: "Growth",
      readTime: "8 min read"
    },
    {
      title: "The ROI of Strategic Marketing Investment",
      excerpt: "How strategic marketing initiatives deliver measurable returns and drive long-term business value.",
      date: "2023-12-20",
      category: "ROI",
      readTime: "4 min read"
    },
    {
      title: "Building High-Converting Landing Pages",
      excerpt: "Design principles and conversion optimization tactics that turn visitors into customers.",
      date: "2023-12-15",
      category: "Conversion",
      readTime: "6 min read"
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
                Strategic <em className="illuminate">Insights</em>
              </h1>
              <p className="text-xl text-[#6A6A6F] leading-[1.6]">
                Expert perspectives on marketing strategy, growth optimization, and business transformation.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-[80px] bg-[#F5F5F7]">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <article key={index} className="bg-white rounded-2xl p-8 border border-[#E5E5E8] hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37] bg-opacity-10 text-[#D4AF37] font-['Space_Grotesk'] text-sm font-semibold rounded-full">
                      {insight.category}
                    </span>
                  </div>
                  
                  <h2 className="font-['Playfair_Display'] text-xl font-normal leading-[1.3] text-[#0A0A0F] mb-4 hover:text-[#D4AF37] transition-colors duration-300">
                    {insight.title}
                  </h2>
                  
                  <p className="text-[#6A6A6F] leading-[1.6] mb-6">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-[#AAAAB0]">
                    <time className="font-['Space_Grotesk']">
                      {new Date(insight.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span className="font-['Space_Grotesk']">{insight.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-[120px] bg-white">
          <div className="container mx-auto px-12 max-w-[1400px]">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Playfair_Display'] text-[clamp(36px,5vw,56px)] font-normal leading-[1.2] text-[#0A0A0F] mb-8">
                Want exclusive <em className="illuminate">insights</em>?
              </h2>
              <p className="text-xl text-[#6A6A6F] mb-12 leading-[1.6]">
                Subscribe to our newsletter for the latest strategic insights, industry trends, and growth tactics.
              </p>
              
              <form className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 p-4 border border-[#E5E5E8] rounded-lg font-['Inter'] text-[15px] focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
                />
                <button 
                  type="submit"
                  className="py-4 px-8 bg-[#D4AF37] text-[#0A0A0F] font-['Space_Grotesk'] font-semibold rounded-lg transition-all duration-300 hover:bg-[#B8941F] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
                >
                  Subscribe
                </button>
              </form>
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