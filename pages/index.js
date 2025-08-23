import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Head>
        <title>About - Illuminate Avenue | Why We're Different</title>
        <meta name="description" content="We hate the agencies of the past. We've generated billions for businesses large and small. We care about each business like it's our own." />
      </Head>
      
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
        
        .nav-menu a:hover,
        .nav-menu a.active {
          color: var(--black);
        }
        
        .nav-menu a.active {
          font-weight: 600;
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
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 160px 0 80px;
          background: linear-gradient(135deg, var(--white) 0%, var(--gray-100) 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
          animation: rotate 30s linear infinite;
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
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
          margin: 0 auto 48px;
          line-height: 1.7;
        }
        
        /* Manifesto Section */
        .manifesto {
          padding: 120px 0;
          background: var(--black);
          color: var(--white);
        }
        
        .manifesto-content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .manifesto-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 48px;
          text-align: center;
        }
        
        .manifesto-text {
          font-size: 20px;
          line-height: 1.8;
          color: var(--gray-300);
          margin-bottom: 32px;
        }
        
        .manifesto-text strong {
          color: var(--gold);
          font-weight: 600;
        }
        
        /* Values Section */
        .values {
          padding: 120px 0;
          background: var(--white);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .section-badge {
          display: inline-block;
          padding: 8px 20px;
          background: var(--gold);
          color: var(--black);
          border-radius: 20px;
          font-family: var(--font-accent);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }
        
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: var(--black);
          margin-bottom: 24px;
        }
        
        .section-subtitle {
          font-size: 20px;
          color: var(--gray-600);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        
        .value-card {
          text-align: center;
          padding: 48px 32px;
          background: var(--gray-100);
          border-radius: 20px;
          transition: all 0.3s;
        }
        
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15);
        }
        
        .value-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .value-icon::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        .value-title {
          font-family: var(--font-accent);
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--black);
        }
        
        .value-description {
          color: var(--gray-600);
          line-height: 1.7;
        }
        
        /* Story Section */
        .story {
          padding: 120px 0;
          background: var(--gray-100);
        }
        
        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .story-text h2 {
          font-family: var(--font-display);
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 32px;
        }
        
        .story-text p {
          font-size: 18px;
          line-height: 1.7;
          color: var(--gray-600);
          margin-bottom: 24px;
        }
        
        .story-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 48px;
        }
        
        .stat {
          padding: 24px;
          background: var(--white);
          border-radius: 12px;
        }
        
        .stat-number {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 8px;
        }
        
        .stat-label {
          font-family: var(--font-accent);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--gray-600);
        }
        
        .story-visual {
          position: relative;
          height: 600px;
          background: linear-gradient(135deg, var(--black) 0%, var(--gray-900) 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .story-visual::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            var(--gold) 35px,
            var(--gold) 36px
          );
          opacity: 0.1;
        }
        
        .story-visual::after {
          content: '';
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--gold) 0%, transparent 70%);
          opacity: 0.2;
        }
        
        /* Philosophy Section */
        .philosophy {
          padding: 120px 0;
          background: var(--white);
        }
        
        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .philosophy-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 48px;
          align-items: center;
        }
        
        .philosophy-number {
          font-family: var(--font-display);
          font-size: 80px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }
        
        .philosophy-content h3 {
          font-family: var(--font-accent);
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .philosophy-content p {
          font-size: 18px;
          line-height: 1.7;
          color: var(--gray-600);
        }
        
        /* CTA Section */
        .cta-section {
          padding: 120px 0;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          text-align: center;
        }
        
        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          margin-bottom: 24px;
          color: var(--black);
        }
        
        .cta-subtitle {
          font-size: 20px;
          color: var(--black);
          margin-bottom: 48px;
          opacity: 0.8;
        }
        
        .btn-primary {
          padding: 18px 48px;
          background: var(--black);
          color: var(--white);
          text-decoration: none;
          font-family: var(--font-accent);
          font-weight: 600;
          font-size: 16px;
          border-radius: 8px;
          transition: all 0.3s;
          display: inline-block;
        }
        
        .btn-primary:hover {
          background: var(--white);
          color: var(--black);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .contact {
          padding: 120px 0;
          background: var(--white);
        }
        
        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .contact h2 {
          font-family: var(--font-display);
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 400;
          line-height: 1.1;
          color: var(--black);
          margin-bottom: 24px;
        }
        
        .contact p {
          font-size: 20px;
          color: var(--gray-600);
          margin-bottom: 48px;
        }
        
        .contact-form {
          background: var(--gray-100);
          border: 1px solid var(--gray-200);
          border-radius: 16px;
          padding: 48px;
          text-align: left;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-label {
          font-family: var(--font-accent);
          font-size: 13px;
          font-weight: 600;
          color: var(--gold-dark);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .form-input {
          padding: 16px 20px;
          background: var(--white);
          border: 1px solid var(--gray-300);
          border-radius: 8px;
          color: var(--black);
          font-family: var(--font-body);
          font-size: 15px;
          transition: all 0.3s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--gold);
        }
        
        .form-textarea {
          width: 100%;
          min-height: 120px;
          padding: 16px 20px;
          background: var(--white);
          border: 1px solid var(--gray-300);
          border-radius: 8px;
          color: var(--black);
          font-family: var(--font-body);
          font-size: 15px;
          transition: all 0.3s;
          resize: vertical;
        }
        
        .form-textarea:focus {
          outline: none;
          border-color: var(--gold);
        }
        
        .form-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
        }
        
        .form-button {
          padding: 18px 48px;
          background: var(--gold);
          color: var(--black);
          border: none;
          border-radius: 8px;
          font-family: var(--font-accent);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .form-button:hover {
          background: var(--gold-dark);
        }
        
        .form-note {
          color: var(--gray-500);
          font-size: 14px;
          font-style: italic;
        }
        
        /* Footer */
        .footer {
          padding: 80px 0 40px;
          background: var(--black);
          color: var(--white);
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        
        .footer h3 {
          font-family: var(--font-display);
          font-size: 32px;
          margin-bottom: 16px;
          font-style: italic;
          color: var(--gold);
        }
        
        .footer-description {
          color: var(--gray-400);
          line-height: 1.7;
          max-width: 300px;
        }
        
        .footer h4 {
          font-family: var(--font-accent);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          color: var(--gold);
        }
        
        .footer ul {
          list-style: none;
        }
        
        .footer ul li {
          margin-bottom: 12px;
        }
        
        .footer ul li a {
          color: var(--gray-400);
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer ul li a:hover {
          color: var(--gold);
        }
        
        .footer-email {
          color: var(--gold);
          text-decoration: none;
        }
        
        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid var(--gray-800);
          text-align: center;
          color: var(--gray-500);
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .container { padding: 0 32px; }
          .values-grid { grid-template-columns: 1fr; }
          .story-content { grid-template-columns: 1fr; gap: 48px; }
          .philosophy-item { grid-template-columns: 1fr; text-align: center; }
          .form-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 768px) {
          .container { padding: 0 24px; }
          .nav-menu { display: none; }
          .story-stats { grid-template-columns: 1fr; }
        }
      `}</style>
      
      <div>
        {/* Navigation */}
        <header>
          <nav>
            <div className="container">
              <div className="nav-container">
                <a href="#" className="logo-text">Illuminate Avenue</a>
                <ul className="nav-menu">
                  <li><a href="#">Strategy</a></li>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#" className="active">About</a></li>
                  <li><a href="#">Insights</a></li>
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
              <div className="hero-badge">Why We're Different</div>
              <h1 className="hero-title">
                We hate the agencies<br/>
                of the past. We <span className="illuminate">illuminate</span><br/>
                the future.
              </h1>
              <p className="hero-subtitle">
                We've generated billions for businesses large and small. We care about each 
                business like it's our own. This is how we're shining a light on them the Illuminate way.
              </p>
            </div>
          </div>
        </section>
        
        {/* Manifesto Section */}
        <section className="manifesto">
          <div className="container">
            <div className="manifesto-content">
              <h2 className="manifesto-title">Our Manifesto</h2>
              
              <p className="manifesto-text">
                <strong>We hate the agencies of the past.</strong> The ones that charge millions for PowerPoints. 
                The ones that disappear after the strategy deck. The ones that treat your business like a line item.
              </p>
              
              <p className="manifesto-text">
                <strong>We've generated billions in revenue</strong> for businesses of every size. From scrappy startups 
                to global enterprises. Not through buzzwords and empty promises, but through strategic excellence 
                that actually works.
              </p>
              
              <p className="manifesto-text">
                <strong>We care about each business like it's our own.</strong> Your success is our success. 
                Your challenges become our obsession. We don't rest until we've illuminated every opportunity 
                and eliminated every obstacle.
              </p>
              
              <p className="manifesto-text">
                <strong>This is the Illuminate way.</strong> We don't just consult—we transform. We don't just 
                advise—we execute. We don't just promise—we deliver. We're shining a light on what marketing 
                can be when it's done right.
              </p>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="values">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Our Values</div>
              <h2 className="section-title">What drives us forward</h2>
              <p className="section-subtitle">
                These aren't just words on a wall. They're the principles that guide every decision we make.
              </p>
            </div>
            
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon"></div>
                <h3 className="value-title">Radical Transparency</h3>
                <p className="value-description">
                  No hidden fees. No surprise costs. No black box strategies. 
                  You see everything we do and why we do it.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon"></div>
                <h3 className="value-title">Obsessive Excellence</h3>
                <p className="value-description">
                  Good enough isn't good enough. We obsess over every detail 
                  until your marketing is nothing short of exceptional.
                </p>
              </div>
              
              <div className="value-card">
                <div className="value-icon"></div>
                <h3 className="value-title">Results Over Rhetoric</h3>
                <p className="value-description">
                  We measure success in revenue, not reports. In growth, not 
                  graphs. In real business impact, not vanity metrics.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="story">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>A different kind of consultancy</h2>
                <p>
                  We started Illuminate Avenue because we were tired of watching brilliant businesses 
                  fail due to mediocre marketing. Tired of seeing agencies charge premium prices for 
                  commodity thinking.
                </p>
                <p>
                  So we built something different. A consultancy that combines the strategic rigor of 
                  top-tier firms with the agility of a startup and the accountability of a true partner.
                </p>
                <p>
                  Today, we work with businesses that refuse to accept the status quo. Leaders who 
                  understand that in a world of infinite noise, the only way to win is to be genuinely, 
                  remarkably different.
                </p>
                
                <div className="story-stats">
                  <div className="stat">
                    <div className="stat-number">$3B+</div>
                    <div className="stat-label">Revenue Generated</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">200+</div>
                    <div className="stat-label">Transformations</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">97%</div>
                    <div className="stat-label">Client Retention</div>
                  </div>
                </div>
              </div>
              
              <div className="story-visual"></div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="philosophy">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Our Philosophy</div>
              <h2 className="section-title">How we think differently</h2>
            </div>
            
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-number">01</div>
                <div className="philosophy-content">
                  <h3>Strategy Without Execution Is Hallucination</h3>
                  <p>
                    We don't just deliver decks. We roll up our sleeves and make transformation happen. 
                    Every strategy comes with a clear execution roadmap and our commitment to see it through.
                  </p>
                </div>
              </div>
              
              <div className="philosophy-item">
                <div className="philosophy-number">02</div>
                <div className="philosophy-content">
                  <h3>Your Success Is Our Only Metric</h3>
                  <p>
                    We don't celebrate campaigns or creative awards. We celebrate when your revenue grows, 
                    your market share expands, and your business transforms. Everything else is noise.
                  </p>
                </div>
              </div>
              
              <div className="philosophy-item">
                <div className="philosophy-number">03</div>
                <div className="philosophy-content">
                  <h3>Speed Is A Competitive Advantage</h3>
                  <p>
                    While others take months to deliver insights, we move at the speed of business. 
                    Rapid strategic deployment. Quick wins while building for the long term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Ready to join the businesses<br/>we've illuminated?</h2>
            <p className="cta-subtitle">
              Let's talk about how we can transform your marketing and accelerate your growth.
            </p>
            <a href="#contact" className="btn-primary">Start Your Transformation</a>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="contact-content">
              <h2>Let's illuminate your path</h2>
              <p>Share your challenges. We'll show you the opportunities.</p>
              
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message. We\'ll be in touch soon.'); }}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-input" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input type="text" name="company" className="form-input" placeholder="Company name" required />
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="tel" name="phone" className="form-input" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Website</label>
                    <input type="url" name="website" className="form-input" placeholder="https://your-website.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Budget Range</label>
                    <select name="budget" className="form-input">
                      <option value="">Select budget</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k+">$500K+</option>
                    </select>
                  </div>
                </div>
                
                <div style={{ marginBottom: '32px' }}>
                  <label className="form-label" style={{ display: 'block' }}>Message</label>
                  <textarea name="message" className="form-textarea" placeholder="Tell us about your business and how we can help illuminate your path" required></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="form-button">Send Message</button>
                  <span className="form-note">We'll respond within 24 hours</span>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3>Illuminate Avenue</h3>
                <p className="footer-description">Strategic marketing excellence that transforms businesses and creates lasting competitive advantages.</p>
              </div>
              <div>
                <h4>Navigate</h4>
                <ul>
                  <li><a href="#">Strategy</a></li>
                  <li><a href="#">Work</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Insights</a></li>
                </ul>
              </div>
              <div>
                <h4>Connect</h4>
                <ul>
                  <li style={{ color: 'var(--gray-400)' }}>Email:</li>
                  <li><a href="mailto:info@illuminateavenue.com" className="footer-email">info@illuminateavenue.com</a></li>
                </ul>
              </div>
              <div>
                <h4>Follow</h4>
                <p style={{ color: 'var(--gray-400)' }}>Strategic insights and industry intelligence delivered weekly.</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2024 Illuminate Avenue. All rights reserved. | Strategic Marketing Excellence</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}