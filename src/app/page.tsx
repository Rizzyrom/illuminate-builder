import { client } from "../../tina/__generated__/client";
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home() {
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
        <Hero
          badge={data.data.page.hero.badge}
          title={data.data.page.hero.title}
          subtitle={data.data.page.hero.subtitle}
          stats={data.data.page.hero.stats}
          cta={data.data.page.hero.cta}
        />
        
        <Services
          badge={data.data.page.services.badge}
          title={data.data.page.services.title}
          subtitle={data.data.page.services.subtitle}
          serviceCards={data.data.page.services.serviceCards}
        />
        
        <Process
          title={data.data.page.process.title}
          subtitle={data.data.page.process.subtitle}
          steps={data.data.page.process.steps}
        />
        
        <About
          title={data.data.page.about.title}
          content={data.data.page.about.content}
        />
        
        <Contact
          title={data.data.page.contact.title}
          subtitle={data.data.page.contact.subtitle}
          form={data.data.page.contact.form}
        />
      </main>
      
      <Footer 
        content={globalData.data.global.site.footer.content}
      />
    </>
  );
}
