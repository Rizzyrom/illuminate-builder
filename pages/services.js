import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Illuminate Avenue | Strategic Marketing Excellence</title>
        <meta name="description" content="Comprehensive strategic marketing services that transform businesses. From strategy to execution, we illuminate your path to market leadership." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Strategic Marketing Excellence</div>
            <h1 className="hero-title">
              We don't just deliver services.<br/>
              We <span className="illuminate">illuminate</span> possibilities.
            </h1>
            <p className="hero-subtitle">
              From strategy to execution, we architect comprehensive marketing ecosystems 
              that transform businesses and create lasting competitive advantages.
            </p>
            <div className="hero-features">
              <div className="hero-feature">Strategy & Consulting</div>
              <div className="hero-feature">Brand Evolution</div>
              <div className="hero-feature">Digital Transformation</div>
              <div className="hero-feature">Growth Acceleration</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="services-overview section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Core Services</div>
            <h2 className="section-title">Strategic capabilities that<br/>drive exponential growth</h2>
            <p className="section-subtitle">
              Every service is designed to work in harmony, creating a multiplier effect 
              that accelerates your journey to market leadership.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Strategic Advisory</h3>
              <p className="service-tagline">Executive-level guidance</p>
              <p className="service-description">
                Transform your marketing from cost center to growth engine with C-suite 
                strategic advisory that aligns marketing with business objectives.
              </p>
              <ul className="service-features">
                <li>Market opportunity analysis</li>
                <li>Competitive positioning</li>
                <li>Growth roadmap development</li>
                <li>Executive team alignment</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Brand Renaissance</h3>
              <p className="service-tagline">Complete brand evolution</p>
              <p className="service-description">
                Evolve your brand from forgettable to unforgettable. We create brand 
                ecosystems that resonate deeply and drive premium positioning.
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
                Create seamless digital experiences that convert at every touchpoint. 
                From web to mobile to emerging platforms.
              </p>
              <ul className="service-features">
                <li>Digital experience design</li>
                <li>Conversion optimization</li>
                <li>Marketing automation</li>
                <li>Performance marketing</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Content Strategy</h3>
              <p className="service-tagline">Narrative that converts</p>
              <p className="service-description">
                Craft compelling narratives that educate, engage, and convert. 
                Content that positions you as the undisputed thought leader.
              </p>
              <ul className="service-features">
                <li>Content strategy development</li>
                <li>Thought leadership programs</li>
                <li>SEO & content optimization</li>
                <li>Multi-channel distribution</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Growth Engineering</h3>
              <p className="service-tagline">Revenue acceleration</p>
              <p className="service-description">
                Design and optimize your entire revenue engine. From lead generation 
                to customer retention, we maximize every opportunity.
              </p>
              <ul className="service-features">
                <li>Revenue operations design</li>
                <li>Sales enablement</li>
                <li>Pipeline optimization</li>
                <li>Customer lifecycle management</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Intelligence & Analytics</h3>
              <p className="service-tagline">Data-driven dominance</p>
              <p className="service-description">
                Transform data into competitive advantage. Advanced analytics and 
                AI-powered insights that keep you ahead of the market.
              </p>
              <ul className="service-features">
                <li>Advanced analytics setup</li>
                <li>Predictive modeling</li>
                <li>Real-time dashboards</li>
                <li>AI-powered optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Process</div>
            <h2 className="section-title">From insight to impact<br/>in record time</h2>
            <p className="section-subtitle">
              Our proven methodology compresses years of transformation into months of focused execution.
            </p>
          </div>
          
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3 className="process-title">Illuminate</h3>
              <p className="process-description">
                Deep discovery to understand your business, market, and untapped opportunities.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">02</div>
              <h3 className="process-title">Architect</h3>
              <p className="process-description">
                Design comprehensive strategies that align with your business objectives.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">03</div>
              <h3 className="process-title">Execute</h3>
              <p className="process-description">
                Rapid deployment with continuous optimization and refinement.
              </p>
            </div>
            
            <div className="process-step">
              <div className="process-number">04</div>
              <h3 className="process-title">Accelerate</h3>
              <p className="process-description">
                Scale what works, eliminate what doesn't, and continuously evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section className="capabilities">
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{background: 'rgba(212, 175, 55, 0.2)', color: 'var(--gold)', border: '1px solid var(--gold)'}}>Deep Capabilities</div>
            <h2 className="section-title">Industry expertise meets<br/>cutting-edge innovation</h2>
            <p className="section-subtitle">
              We bring together diverse expertise to solve complex marketing challenges.
            </p>
          </div>
          
          <div className="capabilities-grid">
            <div className="capability-block">
              <h3 className="capability-title">Strategic Expertise</h3>
              <ul className="capability-list">
                <li>Market Entry & Expansion Strategy</li>
                <li>Competitive Intelligence & Positioning</li>
                <li>M&A Marketing Integration</li>
                <li>Crisis Management & Communications</li>
                <li>Board-Level Strategic Advisory</li>
                <li>Transformation Roadmapping</li>
              </ul>
            </div>
            
            <div className="capability-block">
              <h3 className="capability-title">Technical Excellence</h3>
              <ul className="capability-list">
                <li>MarTech Stack Architecture</li>
                <li>AI & Machine Learning Integration</li>
                <li>Marketing Automation Workflows</li>
                <li>API Integration & Custom Development</li>
                <li>Data Pipeline Engineering</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            
            <div className="capability-block">
              <h3 className="capability-title">Creative Innovation</h3>
              <ul className="capability-list">
                <li>Brand Identity & Design Systems</li>
                <li>Campaign Creative Development</li>
                <li>Video & Motion Graphics</li>
                <li>Interactive Experiences</li>
                <li>Content Production</li>
                <li>Experiential Marketing</li>
              </ul>
            </div>
            
            <div className="capability-block">
              <h3 className="capability-title">Performance Optimization</h3>
              <ul className="capability-list">
                <li>Conversion Rate Optimization</li>
                <li>SEO & Organic Growth</li>
                <li>Paid Media Management</li>
                <li>Attribution Modeling</li>
                <li>A/B Testing & Experimentation</li>
                <li>ROI Maximization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to illuminate<br/>your full potential?</h2>
          <p className="cta-subtitle">
            Let's discuss how our services can transform your business.
          </p>
          <a href="/contact" className="btn-primary">Start Your Transformation</a>
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