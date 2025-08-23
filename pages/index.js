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
        <title>Illuminate Avenue - Strategic Marketing Excellence</title>
        <meta name="description" content="20+ years orchestrating transformative marketing strategies for global brands. No cookie-cutter solutions. No empty promises. Just strategic brilliance that delivers measurable impact." />
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
        
        /* Services Section */
        .services {
          padding: 120px 0;
          background: var(--black);
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
          color: var(--white);
          margin-bottom: 24px;
        }
        
        .section-subtitle {
          font-size: 20px;
          color: var(--gray-400);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 80px;
        }
        
        .service-card {
          background: var(--gray-900);
          border: 1px solid var(--gray-800);
          border-radius: 16px;
          padding: 40px;
          transition: all 0.3s;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: var(--gold);
          box-shadow: 0 20px 40px rgba(212,175,55,0.2);
        }
        
        .service-name {
          font-family: var(--font-accent);
          font-size: 24px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 12px;
        }
        
        .service-subtitle {
          font-family: var(--font-display);
          font-size: 16px;
          color: var(--gold);
          margin-bottom: 20px;
          font-style: italic;
        }
        
        .service-description {
          color: var(--gray-400);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        
        .service-features {
          list-style: none;
        }
        
        .service-features li {
          padding: 8px 0;
          color: var(--gray-300);
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .service-features li::before {
          content: '';
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          display: inline-block;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          flex-shrink: 0;
        }
        
        /* How It Works Section - Fixed */
        .how-it-works {
          padding: 120px 0;
          background: var(--white);
        }
        
        .how-it-works-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 32px;
          text-align: center;
        }
        
        .how-it-works-subtitle {
          font-size: 20px;
          color: var(--gray-600);
          margin-bottom: 80px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }
        
        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        
        .process-step {
          text-align: center;
          padding: 48px 32px;
          background: var(--gray-100);
          border-radius: 16px;
          transition: all 0.3s;
        }
        
        .process-step:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .process-number {
          font-family: var(--font-display);
          font-size: 64px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--gold), var(--gold-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 24px;
          line-height: 1;
        }
        
        .process-title {
          font-family: var(--font-accent);
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--black);
        }
        
        .process-description {
          color: var(--gray-600);
          line-height: 1.6;
        }
        
        /* About Section */
        .about {
          padding: 120px 0;
          background: var(--white);
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .about-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 32px;
        }
        
        .about-description {
          font-size: 18px;
          line-height: 1.7;
          color: var(--gray-600);
          margin-bottom: 32px;
        }
        
        .about-image {
          position: relative;
          height: 500px;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--black) 0%, var(--gray-900) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Sophisticated geometric pattern overlay */
        .about-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              var(--gold) 35px,
              var(--gold) 36px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 35px,
              var(--gold) 35px,
              var(--gold) 36px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(212, 175, 55, 0.03) 40px,
              rgba(212, 175, 55, 0.03) 80px
            );
          opacity: 0.08;
          animation: patternShift 30s linear infinite;
        }
        
        @keyframes patternShift {
          0% { transform: translateX(0); }
          100% { transform: translateX(40px); }
        }
        
        /* Premium hexagon grid pattern */
        .about-pattern {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          opacity: 0.15;
        }
        
        .about-pattern::before,
        .about-pattern::after {
          content: '';
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid var(--gold);
          transform: rotate(45deg);
        }
        
        .about-pattern::before {
          top: 20%;
          left: 20%;
          animation: rotateShape 20s linear infinite;
        }
        
        .about-pattern::after {
          bottom: 20%;
          right: 20%;
          animation: rotateShape 20s linear infinite reverse;
        }
        
        @keyframes rotateShape {
          0% { transform: rotate(45deg) scale(1); }
          50% { transform: rotate(225deg) scale(1.1); }
          100% { transform: rotate(405deg) scale(1); }
        }
        
        /* Circular gradient accent */
        .about-image::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(
            circle,
            var(--gold) 0%,
            transparent 30%,
            transparent 60%,
            var(--gold) 60%,
            transparent 62%
          );
          opacity: 0.1;
          animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.1;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0.05;
          }
        }
        
        /* Contact Section - Fixed */
        .contact {
          padding: 120px 0;
          background: var(--black);
          color: var(--white);
        }
        
        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 400;
          line-height: 1.1;
          color: var(--white);
          margin-bottom: 24px;
        }
        
        .contact-subtitle {
          font-size: 20px;
          color: var(--gray-400);
          margin-bottom: 48px;
        }
        
        /* Fixed Contact Form */
        .contact-form {
          background: var(--gray-900);
          border: 1px solid var(--gray-800);
          border-radius: 16px;
          padding: 48px;
          text-align: left;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .form-row.full-width {
          grid-template-columns: 1fr;
        }
        
        .form-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          margin-top: 32px;
        }
        
        .form-note {
          color: var(--gray-400);
          font-size: 14px;
          font-style: italic;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-label {
          font-family: var(--font-accent);
          font-size: 13px;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .form-input, .form-textarea, select.form-input {
          padding: 16px 20px;
          background: var(--gray-800);
          border: 1px solid var(--gray-700);
          border-radius: 8px;
          color: var(--white);
          font-family: var(--font-body);
          font-size: 15px;
          transition: all 0.3s;
          width: 100%;
          appearance: none;
        }
        
        select.form-input {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D4AF37' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 20px center;
          padding-right: 48px;
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
        }
        
        .form-input::placeholder, .form-textarea::placeholder {
          color: var(--gray-500);
        }
        
        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .form-submit {
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
        
        .form-submit:hover {
          background: var(--gold-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
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
        @media (max-width: 1024px) {
          .container { padding: 0 32px; }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .about-content { grid-template-columns: 1fr; gap: 48px; }
          .process-grid { grid-template-columns: 1fr; gap: 32px; }
          .form-row { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 768px) {
          .container { padding: 0 24px; }
          .nav-menu { display: none; }
          .services-grid { grid-template-columns: 1fr; }
          .hero-cta-group { flex-direction: column; align-items: flex-start; }
          .process-step { min-height: auto; }
          .service-card { min-height: auto; }
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
                  <li><a href="#">About</a></li>
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
              <div className="hero-badge">
                Shining a Light on Businesses
              </div>
              <h1 className="hero-title">
                We <span className="illuminate">illuminate</span><br/>
                the path to<br/>
                exponential growth
              </h1>
              <p className="hero-subtitle">
                20+ years orchestrating transformative marketing strategies for global brands.
                No cookie-cutter solutions. No empty promises. Just strategic brilliance that
                delivers measurable impact.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">$1B+</div>
                  <div className="stat-label">Revenue Generated</div>
                </div>
                <div className="stat">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">Elite</div>
                  <div className="stat-label">Industry Experts</div>
                </div>
              </div>
              <div className="hero-cta-group">
                <a href="#contact" className="btn-primary">Start Your Transformation</a>
                <a href="#" className="btn-text">View Case Studies</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">Strategic Capabilities</div>
              <h2 className="section-title">Beyond campaigns.<br/>We architect empires.</h2>
              <p className="section-subtitle">
                We don't just run ads. We architect comprehensive marketing ecosystems
                that drive sustainable growth at enterprise scale.
              </p>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <h3 className="service-name">Strategy</h3>
                <p className="service-subtitle">Executive Team Advisory</p>
                <p className="service-description">
                  Executive advisory for marketing transformation. We align your entire marketing 
                  ecosystem with business objectives.
                </p>
                <ul className="service-features">
                  <li>Executive strategy sessions</li>
                  <li>Market opportunity analysis</li>
                  <li>Competitive positioning</li>
                  <li>Growth roadmap development</li>
                </ul>
              </div>
              
              <div className="service-card">
                <h3 className="service-name">Brand Renaissance</h3>
                <p className="service-subtitle">Complete Brand Evolution</p>
                <p className="service-description">
                  Complete brand evolution from strategy to execution. Position your brand
                  for market leadership.
                </p>
                <ul className="service-features">
                  <li>Brand strategy & architecture</li>
                  <li>Visual identity systems</li>
                  <li>Voice & messaging frameworks</li>
                  <li>Market positioning</li>
                </ul>
              </div>
              
              <div className="service-card">
                <h3 className="service-name">Experience Architecture</h3>
                <p className="service-subtitle">Digital Transformation Projects</p>
                <p className="service-description">
                  Architect integrated digital experiences that convert at every touchpoint
                  across the customer journey.
                </p>
                <ul className="service-features">
                  <li>Customer journey mapping</li>
                  <li>MarTech stack optimization</li>
                  <li>Omnichannel orchestration</li>
                  <li>Experience optimization</li>
                </ul>
              </div>
              
              <div className="service-card">
                <h3 className="service-name">Growth Engine Optimization</h3>
                <p className="service-subtitle">Revenue System Redesign</p>
                <p className="service-description">
                  Design and optimize the entire revenue engine from lead generation
                  through customer retention.
                </p>
                <ul className="service-features">
                  <li>Revenue model optimization</li>
                  <li>Sales & marketing alignment</li>
                  <li>Conversion rate optimization</li>
                  <li>Customer lifetime value</li>
                </ul>
              </div>
              
              <div className="service-card">
                <h3 className="service-name">Intelligence-Led Growth</h3>
                <p className="service-subtitle">Analytics & Optimization Programs</p>
                <p className="service-description">
                  Transform data into competitive advantage with advanced analytics
                  and predictive modeling.
                </p>
                <ul className="service-features">
                  <li>Advanced analytics setup</li>
                  <li>Predictive modeling</li>
                  <li>Performance dashboards</li>
                  <li>ROI optimization</li>
                </ul>
              </div>
              
              <div className="service-card">
                <h3 className="service-name">AI & Automation Integration</h3>
                <p className="service-subtitle">Future-Forward Marketing Systems</p>
                <p className="service-description">
                  Implement cutting-edge AI and automation solutions to scale your marketing
                  operations while maintaining personalized customer experiences.
                </p>
                <ul className="service-features">
                  <li>AI-powered personalization</li>
                  <li>Marketing automation workflows</li>
                  <li>Predictive customer analytics</li>
                  <li>Intelligent content optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="how-it-works-title">Partnership. Not just another project.</h2>
            <p className="how-it-works-subtitle">
              We're selective about who we work with. This ensures we're both the right partners,
              it's the right project, and there's a strong opportunity for effectiveness.
            </p>
            
            <div className="process-grid">
              <div className="process-step">
                <div className="process-number">01</div>
                <h3 className="process-title">Assessment</h3>
                <p className="process-description">
                  We evaluate your business challenges and growth potential to ensure 
                  we're the right fit for your transformation goals.
                </p>
              </div>
              
              <div className="process-step">
                <div className="process-number">02</div>
                <h3 className="process-title">Planning</h3>
                <p className="process-description">
                  We align on vision, resources, and success metrics to create 
                  a clear roadmap for your marketing transformation.
                </p>
              </div>
              
              <div className="process-step">
                <div className="process-number">03</div>
                <h3 className="process-title">Execution</h3>
                <p className="process-description">
                  We execute the strategy with precision, deploying our capabilities 
                  to deliver measurable results and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="about" id="about">
          <div className="container">
            <div className="about-content">
              <div className="about-image">
                <div className="about-pattern"></div>
              </div>
              <div className="about-text">
                <h2 className="about-title">No BS. No bait & switch.<br/>Just strategic excellence.</h2>
                <p className="about-description">
                  We're not your typical consultancy. The same senior strategists who develop
                  your vision are the ones who oversee execution. We don't upsell services
                  you don't need. And we're radically transparent about everything we do.
                </p>
                <p className="about-description">
                  With 20+ years leading transformative projects for industry leaders,
                  we bring enterprise-level thinking to every engagement. Your business
                  isn't generic—your marketing strategy shouldn't be either.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="contact-content">
              <h2 className="contact-title">Ready to illuminate<br/>your potential?</h2>
              <p className="contact-subtitle">
                Let's discuss your transformation. Share your challenges and goals.
              </p>
              
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message. We\'ll be in touch soon.'); }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" className="form-input" placeholder="Company name" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="website">Website</label>
                    <input type="url" id="website" name="website" className="form-input" placeholder="https://your-website.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget" className="form-input">
                      <option value="">Select budget</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k+">$500K+</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row full-width">
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your project and how we can help illuminate your path to success" required></textarea>
                  </div>
                </div>
                
                <div className="form-buttons">
                  <button type="submit" className="form-submit">Send Message</button>
                  <span className="form-note">We'll respond within 24 hours</span>
                </div>
              </form>
            </div>
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
  )
}