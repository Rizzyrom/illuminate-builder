import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Strategy() {
  return (
    <>
      <Head>
        <title>Strategy - Illuminate Avenue | Strategic Marketing Excellence</title>
        <meta name="description" content="Transform your business with strategic marketing excellence. Data-driven strategies, competitive positioning, and growth acceleration for enterprise companies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      
      {/* Hero Section */}
      <section className="hero" style={{minHeight: '85vh', background: 'linear-gradient(135deg, var(--black) 0%, var(--gray-900) 100%)', color: 'var(--white)', position: 'relative', overflow: 'hidden'}}>
        <div className="hero-bg-animation" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 40%),
                           radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.1) 0%, transparent 40%),
                           linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.05) 100%)`,
          animation: 'pulseGlow 20s ease-in-out infinite'
        }}></div>
        <div className="hero-pattern" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: `repeating-conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(212, 175, 55, 0.03) 10deg,
            transparent 20deg
          )`,
          animation: 'rotatePattern 60s linear infinite'
        }}></div>
        <div className="container">
          <div className="hero-content" style={{position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '1000px', margin: '0 auto'}}>
            <div className="hero-badge" style={{background: 'rgba(212, 175, 55, 0.2)', color: 'var(--gold)', border: '1px solid var(--gold)'}}>
              Strategic Excellence Redefined
            </div>
            <h1 className="hero-title">
              Strategy that <span className="illuminate">illuminates</span><br/>
              your path to dominance
            </h1>
            <p className="hero-subtitle" style={{color: 'var(--gray-300)'}}>
              We've generated billions in revenue growth through strategic marketing transformation. 
              Not just another agency—we're the strategic partner that changes everything.
            </p>
            <div className="hero-features" style={{display: 'flex', gap: '48px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '48px'}}>
              <div className="hero-feature" style={{display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--gray-300)', fontFamily: 'var(--font-accent)', fontSize: '15px'}}>
                <span style={{width: '20px', height: '20px', background: 'var(--gold)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                Fortune 500 Strategies
              </div>
              <div className="hero-feature" style={{display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--gray-300)', fontFamily: 'var(--font-accent)', fontSize: '15px'}}>
                <span style={{width: '20px', height: '20px', background: 'var(--gold)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                $3B+ Revenue Generated
              </div>
              <div className="hero-feature" style={{display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--gray-300)', fontFamily: 'var(--font-accent)', fontSize: '15px'}}>
                <span style={{width: '20px', height: '20px', background: 'var(--gold)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></span>
                Rapid Transformation
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Framework Section */}
      <section className="services" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">The Illuminate Method</div>
            <h2 className="section-title">Strategic frameworks that<br/>deliver compound growth</h2>
            <p className="section-subtitle">
              Our proprietary methodologies have been refined through hundreds of transformations.
              This isn't theory—it's battle-tested strategy that drives measurable results.
            </p>
          </div>
          <div className="services-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px', marginBottom: '80px'}}>
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Market Domination Analysis</h3>
              <p className="service-description">
                Our proprietary APEX framework identifies untapped market opportunities while your competitors are still doing basic SWOT analyses.
              </p>
              <ul className="service-features">
                <li>Competitive intelligence mapping</li>
                <li>Blue ocean opportunity identification</li>
                <li>Market share capture strategies</li>
                <li>Disruption vulnerability assessment</li>
                <li>Strategic moat construction</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">Revenue Acceleration Engine</h3>
              <p className="service-description">
                Transform your entire go-to-market with our VELOCITY framework—proven to accelerate revenue growth by 3-5x within 18 months.
              </p>
              <ul className="service-features">
                <li>Pipeline velocity optimization (40% faster)</li>
                <li>Revenue operations architecture</li>
                <li>Predictive growth modeling</li>
                <li>Unit economics optimization</li>
                <li>Compound growth strategies</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">AI-Powered Transformation</h3>
              <p className="service-description">
                Deploy our NEURAL framework to create self-optimizing marketing systems that outperform human decision-making by 10x.
              </p>
              <ul className="service-features">
                <li>Predictive customer intelligence</li>
                <li>Autonomous campaign optimization</li>
                <li>Real-time personalization at scale</li>
                <li>Behavioral prediction models</li>
                <li>ROI optimization algorithms</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon"></div>
              <h3 className="service-name">C-Suite Strategic Advisory</h3>
              <p className="service-description">
                Your executive team gets direct access to strategists who've driven billions in enterprise value creation.
              </p>
              <ul className="service-features">
                <li>Board-level strategic presentations</li>
                <li>M&A marketing due diligence</li>
                <li>IPO readiness optimization</li>
                <li>Crisis management protocols</li>
                <li>Succession planning strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="philosophy-section" style={{padding: '100px 0', background: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Philosophy</div>
            <h2 className="section-title">We don't just consult.<br/>We <span className="illuminate">illuminate</span>.</h2>
          </div>
          <div className="philosophy-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px', marginTop: '60px'}}>
            <div className="philosophy-item" style={{textAlign: 'center'}}>
              <div className="philosophy-number" style={{fontFamily: 'var(--font-display)', fontSize: '64px', color: 'var(--gold)', marginBottom: '24px'}}>01</div>
              <h3 style={{fontFamily: 'var(--font-accent)', fontSize: '24px', marginBottom: '16px'}}>Think Different</h3>
              <p style={{color: 'var(--gray-600)', lineHeight: '1.7'}}>We challenge conventional wisdom. While others follow best practices, we create them. Your breakthrough won't come from doing what everyone else does.</p>
            </div>
            <div className="philosophy-item" style={{textAlign: 'center'}}>
              <div className="philosophy-number" style={{fontFamily: 'var(--font-display)', fontSize: '64px', color: 'var(--gold)', marginBottom: '24px'}}>02</div>
              <h3 style={{fontFamily: 'var(--font-accent)', fontSize: '24px', marginBottom: '16px'}}>Execute Relentlessly</h3>
              <p style={{color: 'var(--gray-600)', lineHeight: '1.7'}}>Strategy without execution is hallucination. We don't just deliver PowerPoints—we roll up our sleeves and make transformation happen.</p>
            </div>
            <div className="philosophy-item" style={{textAlign: 'center'}}>
              <div className="philosophy-number" style={{fontFamily: 'var(--font-display)', fontSize: '64px', color: 'var(--gold)', marginBottom: '24px'}}>03</div>
              <h3 style={{fontFamily: 'var(--font-accent)', fontSize: '24px', marginBottom: '16px'}}>Measure Everything</h3>
              <p style={{color: 'var(--gray-600)', lineHeight: '1.7'}}>If you can't measure it, you can't improve it. Every strategy comes with clear KPIs, tracking systems, and accountability frameworks.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Approach Section */}
      <section className="approach-section" style={{padding: '100px 0', background: 'var(--white)'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Strategic Approach</div>
            <h2 className="section-title">From insight to impact<br/>in record time</h2>
          </div>
          <div style={{maxWidth: '800px', margin: '60px auto 0', textAlign: 'center'}}>
            <p style={{fontSize: '20px', lineHeight: '1.8', color: 'var(--gray-600)', marginBottom: '32px'}}>
              Most consultancies take months to deliver insights. We move at the speed of business. 
              Our rapid strategic deployment methodology compresses what typically takes 6 months into 6 weeks.
            </p>
            <p style={{fontSize: '20px', lineHeight: '1.8', color: 'var(--gray-600)', marginBottom: '32px'}}>
              We don't believe in analysis paralysis. We believe in intelligent action. 
              Every week, you'll see tangible progress. Every month, measurable results.
            </p>
            <p style={{fontSize: '20px', lineHeight: '1.8', color: 'var(--gray-600)'}}>
              This isn't about following a playbook—it's about writing a new one for your specific situation. 
              Your market, your challenges, your opportunities. Custom strategies that actually work.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section" style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, var(--black) 0%, var(--gray-900) 100%)',
        color: 'var(--white)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="cta-bg" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 40%),
                           radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 40%)`
        }}></div>
        <div className="container">
          <div className="cta-content" style={{position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto'}}>
            <div className="cta-badge" style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(212, 175, 55, 0.2)',
              color: 'var(--gold)',
              border: '1px solid var(--gold)',
              borderRadius: '20px',
              fontFamily: 'var(--font-accent)',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '24px'
            }}>Limited Availability</div>
            <h2 className="cta-title">Ready to transform<br/>your strategic position?</h2>
            <p className="cta-subtitle" style={{color: 'var(--gray-400)', marginBottom: '48px'}}>
              We're selective about our partnerships. Let's see if we're the right fit
              to illuminate your path to market leadership.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary" style={{background: 'var(--gold)', color: 'var(--black)', padding: '18px 48px', fontSize: '16px'}}>Start Your Transformation</a>
            </div>
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
          
          // Animations
          const pulseGlowStyle = document.createElement('style');
          pulseGlowStyle.textContent = \`
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.8; }
              50% { opacity: 1; }
            }
            @keyframes rotatePattern {
              0% { transform: translate(-50%, -50%) rotate(0deg); }
              100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
          \`;
          document.head.appendChild(pulseGlowStyle);
        `
      }} />
    </>
  )
}