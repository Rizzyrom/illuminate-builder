import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Illuminate Avenue | Why We're Different</title>
        <meta name="description" content="We hate the agencies of the past. We've generated billions for businesses large and small. We care about each business like it's our own." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      
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