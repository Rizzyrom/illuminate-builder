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
              <a href="/work" className="btn-text">View Case Studies</a>
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
            
            <form className="contact-form">
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
          
          // Form handling
          document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will be in touch soon.');
          });
        `
      }} />
    </>
  )
}