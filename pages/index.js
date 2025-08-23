import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Illuminate Avenue - Strategic Marketing Excellence</title>
        <meta name="description" content="20+ years orchestrating transformative marketing strategies for global brands. No cookie-cutter solutions. No empty promises. Just strategic brilliance that delivers measurable impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Strategic Marketing Excellence</div>
            <h1 className="hero-title">
              We <span className="illuminate">illuminate</span> the path to exponential growth
            </h1>
            <p className="hero-subtitle">
              20+ years orchestrating transformative marketing strategies for global brands. 
              No cookie-cutter solutions. No empty promises. Just strategic brilliance that delivers measurable impact.
            </p>
            <div className="hero-features">
              <div className="hero-feature">$1B+ Revenue Generated</div>
              <div className="hero-feature">20+ Years Experience</div>
              <div className="hero-feature">Elite Industry Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Strategic Capabilities</div>
            <h2 className="section-title">Beyond campaigns. We architect empires.</h2>
            <p className="section-subtitle">
              We don't just run ads. We architect comprehensive marketing ecosystems that drive sustainable growth at enterprise scale.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Strategic Advisory</h3>
              <p className="service-tagline">Executive-level guidance</p>
              <p className="service-description">
                Executive advisory for marketing transformation. We align your entire marketing ecosystem with business objectives.
              </p>
              <ul className="service-features">
                <li>Executive strategy sessions</li>
                <li>Market opportunity analysis</li>
                <li>Competitive positioning</li>
                <li>Growth roadmap development</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Brand Renaissance</h3>
              <p className="service-tagline">Complete brand evolution</p>
              <p className="service-description">
                Transform your brand from strategy to execution. Position your brand for market leadership.
              </p>
              <ul className="service-features">
                <li>Brand strategy & architecture</li>
                <li>Visual identity systems</li>
                <li>Voice & messaging frameworks</li>
                <li>Brand activation campaigns</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Digital Excellence</h3>
              <p className="service-tagline">Omnichannel orchestration</p>
              <p className="service-description">
                Create seamless digital experiences that convert at every touchpoint. From web to mobile to emerging platforms.
              </p>
              <ul className="service-features">
                <li>Digital experience design</li>
                <li>Conversion optimization</li>
                <li>Marketing automation</li>
                <li>Performance marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="text-center">
            <h2 className="hero-title" style={{color: 'var(--black)', marginBottom: '24px'}}>
              Ready to <span className="illuminate">illuminate</span><br />your full potential?
            </h2>
            <p className="hero-subtitle" style={{color: 'var(--black)', opacity: '0.8', marginBottom: '48px'}}>
              Let's discuss how we can transform your marketing into a competitive advantage.
            </p>
            <a href="/contact" className="btn btn-primary btn-lg">
              Start Your Transformation
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <script dangerouslySetInnerHTML={{
        __html: `
          // Header scroll effect
          window.addEventListener('scroll', () => {
            const header = document.querySelector('.site-header');
            if (window.scrollY > 50) {
              header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            } else {
              header.style.boxShadow = 'none';
            }
          });
        `
      }} />
    </>
  )
}