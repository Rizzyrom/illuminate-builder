import { client } from "../../../tina/__generated__/client";
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default async function ServicesPage() {
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
                Our <em className="illuminate">Services</em>
              </h1>
              <p className="text-xl text-[#6A6A6F] leading-[1.6]">
                We architect comprehensive marketing ecosystems that drive sustainable growth at enterprise scale.
              </p>
            </div>
          </div>
        </section>
        
        <Services
          badge={data.data.page.services.badge}
          title={data.data.page.services.title}
          subtitle={data.data.page.services.subtitle}
          serviceCards={data.data.page.services.serviceCards}
        />
      </main>
      
      <Footer 
        content={globalData.data.global.site.footer.content}
      />
    </>
  );
}