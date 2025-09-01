import { client } from "../../../tina/__generated__/client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function AboutPage() {
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
            <div className="max-w-4xl mx-auto">
              <h1 className="font-['Playfair_Display'] text-[clamp(48px,6vw,80px)] font-normal leading-[1.1] text-[#0A0A0F] mb-8 text-center">
                About <em className="illuminate">Illuminate</em> Avenue
              </h1>
              
              <div className="text-lg leading-[1.8] text-[#6A6A6F] space-y-6">
                <p>We've generated billions in revenue for businesses of every size. From scrappy startups to global enterprises. Not through buzzwords and empty promises, but through strategic excellence that actually works.</p>
                
                <p>We care about each business like it's our own. Your success is our success. Your challenges become our obsession. We don't rest until we've illuminated every opportunity and eliminated every obstacle.</p>
                
                <p>Our team combines 20+ years of experience with cutting-edge methodologies to deliver transformative results. We don't just consult—we <em className="illuminate">illuminate</em> the path to exponential growth.</p>
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