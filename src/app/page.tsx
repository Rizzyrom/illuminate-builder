import { readFileSync } from 'fs';
import { join } from 'path';
import { useEffect } from 'react';

async function getPageData() {
  const filePath = join(process.cwd(), 'content', 'pages', 'home.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

async function getGlobalData() {
  const filePath = join(process.cwd(), 'content', 'global', 'index.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function Home() {
  const page = await getPageData();
  const globalData = await getGlobalData();
  const site = globalData.site;

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          --gold: #D4AF37;
          --gold-light: #F5E6A8;
          --gold-dark: #B8941F;
          --black: #0A0A0F;
          --gray-900: #1A1A1F;
          --gray-800: #2A2A2F;
          --gray-700: #3A3A3F;
          --gray-600: #6A6A6F;
          --gray-500: #8A8A8F;
          --gray-400: #AAAAB0;
          --gray-300: #CACACE;
          --gray-200: #E5E5E8;
          --gray-100: #F5F5F7;
          --white: #FFFFFF;
          
          --font-display: 'Playfair Display', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
          --font-accent: 'Space Grotesk', sans-serif;
        }
        
        body {
          font-family: var(--font-body);
          color: var(--black);
          background: var(--white);
          line-height: 1.6;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 48px;
        }
        
        /* Navigation */
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          transition: all 0.3s;
        }
        
        nav {
          padding: 24px 0;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo-text {
          font-family: var(--font-display);
          font-size: 28px;
          font-weight: 400;
          font-style: italic;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          display: inline-block;
        }
        
        .nav-menu {
          display: flex;
          gap: 48px;
          list-style: none;
        }
        
        .nav-menu a {
          color: var(--gray-600);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          font-family: var(--font-accent);
          transition: color 0.2s;
        }
        
        .nav-menu a:hover {
          color: var(--black);
        }
        
        .nav-cta {
          padding: 12px 24px;
          background: var(--black);
          color: var(--white);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          border-radius: 6px;
          transition: all 0.3s;
          font-family: var(--font-accent);
        }
        
        .nav-cta:hover {
          background: var(--gold);
          color: var(--black);
        }
        
        /* Hero Section */
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          padding: 120px 0 60px;
          background: linear-gradient(135deg, var(--white) 0%, var(--gray-100) 100%);
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: var(--gold);
          color: var(--black);
          border-radius: 20px;
          font-family: var(--font-accent);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 32px;
        }
        
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 32px;
        }
        
        .hero-title .illuminate {
          font-style: italic;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        
        .hero-subtitle {
          font-size: 20px;
          font-weight: 400;
          color: var(--gray-600);
          max-width: 700px;
          margin-bottom: 32px;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          padding: 24px 0;
          margin-bottom: 32px;
          border-top: 1px solid var(--gray-200);
        }
        
        .stat-number {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 6px;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .stat-label {
          font-family: var(--font-accent);
          font-size: 14px;
          color: var(--gray-600);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .hero-cta-group {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        
        /* Fixed Button Styles */
        .btn-primary {
          padding: 16px 32px;
          background: var(--black);
          color: var(--white);
          text-decoration: none;
          font-family: var(--font-accent);
          font-weight: 600;
          font-size: 15px;
          border-radius: 6px;
          transition: all 0.3s;
          display: inline-block;
        }
        
        .btn-primary:hover {
          background: var(--gold);
          color: var(--black);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
        }
        
        .btn-text {
          color: var(--black);
          text-decoration: none;
          font-family: var(--font-accent);
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-bottom: 2px solid transparent;
          transition: all 0.3s;
        }
        
        .btn-text:hover {
          border-bottom-color: var(--gold);
          gap: 12px;
        }
        
        .btn-text::after {
          content: '→';
          transition: transform 0.3s;
        }
        
        .btn-text:hover::after {
          transform: translateX(4px);
        }
        
        /* Contact Section */
        .contact {
          padding: 120px 0;
          background: var(--black);
          color: var(--white);
          text-align: center;
        }
        
        .contact h2 {
          font-family: var(--font-display);
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 400;
          margin-bottom: 24px;
        }
        
        .contact p {
          font-size: 20px;
          color: var(--gray-400);
          margin-bottom: 48px;
        }
        
        /* Footer */
        footer {
          padding: 60px 0;
          background: var(--black);
          border-top: 1px solid var(--gray-800);
          text-align: center;
          color: var(--gray-500);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .container { padding: 0 24px; }
          .nav-menu { display: none; }
          .hero-cta-group { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
      
      <div>
        {/* Navigation */}
        <header>
          <nav>
            <div className="container">
              <div className="nav-container">
                <a href="/" className="logo-text">{site.logoText}</a>
                <ul className="nav-menu">
                  {site.navigation.links.map((link: any, index: number) => (
                    <li key={index}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
                <a href="#contact" className="nav-cta">Connect With Us</a>
              </div>
            </div>
          </nav>
        </header>
        
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">{page.hero.badge}</div>
              <h1 className="hero-title">
                We <span className="illuminate">illuminate</span><br/>
                the path to<br/>
                exponential growth
              </h1>
              <p className="hero-subtitle">
                {page.hero.subtitle}
              </p>
              <div className="hero-stats">
                {page.hero.stats.map((stat: any, index: number) => (
                  <div key={index} className="stat">
                    <div className="stat-number">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="hero-cta-group">
                <a href={page.hero.cta.href} className="btn-primary">{page.hero.cta.text}</a>
                <a href="/insights" className="btn-text">View Case Studies</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <h2>Ready to illuminate<br/>your potential?</h2>
            <p>Let&apos;s discuss your transformation. Share your challenges and goals.</p>
            <a href="mailto:hello@illuminateavenue.com" className="btn-primary">Get In Touch</a>
          </div>
        </section>
        
        {/* Footer */}
        <footer>
          <div className="container">
            <p>© 2024 Illuminate Avenue. Strategic Marketing Excellence.</p>
          </div>
        </footer>
      </div>
    </>
  );
}