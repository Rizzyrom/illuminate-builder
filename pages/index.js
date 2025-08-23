import Head from 'next/head'
import { BuilderComponent, builder } from '@builder.io/react'

// Initialize Builder.io
builder.init(process.env.BUILDER_PUBLIC_KEY || 'your-builder-public-key-here')

export default function Home({ builderJson }) {
  return (
    <>
      <Head>
        <title>Illuminate Avenue - Strategic Marketing Excellence</title>
        <meta name="description" content="20+ years orchestrating transformative marketing strategies for global brands. Strategic brilliance that delivers measurable impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {builderJson ? (
        <BuilderComponent model="page" content={builderJson} />
      ) : (
        <main className="illuminate-home">
          {/* Navigation */}
          <header className="navbar-wrapper">
            <nav className="navbar-container">
              <div className="container-navigation">
                <div className="nav-content-wrapper">
                  <a href="/" className="nav-brand-link">
                    <div className="brand-text">Illuminate Avenue</div>
                  </a>
                  <div className="nav-menu-wrapper">
                    <a href="/strategy" className="nav-link-item">Strategy</a>
                    <a href="/work" className="nav-link-item">Work</a>
                    <a href="/services" className="nav-link-item">Services</a>
                    <a href="/about" className="nav-link-item">About</a>
                    <a href="/insights" className="nav-link-item">Insights</a>
                  </div>
                  <a href="/contact" className="nav-cta-button">
                    <div className="button-text">Connect With Us</div>
                  </a>
                </div>
              </div>
            </nav>
          </header>
          
          {/* Hero Section */}
          <section className="hero-section">
            <div className="container-hero">
              <div className="hero-content-wrapper">
                <div className="hero-badge-wrapper">
                  <div className="badge-text">Shining a Light on Businesses</div>
                </div>
                <h1 className="hero-main-heading">We illuminate the path to exponential growth</h1>
                <div className="hero-subtitle-text">20+ years orchestrating transformative marketing strategies for global brands. No cookie-cutter solutions. No empty promises. Just strategic brilliance that delivers measurable impact.</div>
                
                <div className="hero-stats-grid">
                  <div className="stat-item-wrapper">
                    <div className="stat-number-text">$1B+</div>
                    <div className="stat-label-text">Revenue Generated</div>
                  </div>
                  <div className="stat-item-wrapper">
                    <div className="stat-number-text">20+</div>
                    <div className="stat-label-text">Years Experience</div>
                  </div>
                  <div className="stat-item-wrapper">
                    <div className="stat-number-text">Elite</div>
                    <div className="stat-label-text">Industry Experts</div>
                  </div>
                </div>
                
                <div className="hero-buttons-wrapper">
                  <a href="/contact" className="button-primary-hero">
                    <div className="button-text">Start Your Transformation</div>
                  </a>
                  <a href="/work" className="button-text-link">
                    <div className="button-text">View Case Studies</div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Services Section */}
          <section className="services-section">
            <div className="container-services">
              <div className="section-header-wrapper">
                <div className="section-badge-text">Strategic Capabilities</div>
                <h2 className="section-main-heading">Beyond campaigns. We architect empires.</h2>
                <div className="section-subtitle-text">We don't just run ads. We architect comprehensive marketing ecosystems that drive sustainable growth at enterprise scale.</div>
              </div>
              
              <div className="services-grid-wrapper">
                <div className="service-card-item">
                  <h3 className="service-card-heading">Strategy</h3>
                  <div className="service-card-subtitle">Executive Team Advisory</div>
                  <div className="service-card-description">Executive advisory for marketing transformation. We align your entire marketing ecosystem with business objectives.</div>
                  <div className="service-features-list">
                    <div className="feature-list-item">Executive strategy sessions</div>
                    <div className="feature-list-item">Market opportunity analysis</div>
                    <div className="feature-list-item">Competitive positioning</div>
                    <div className="feature-list-item">Growth roadmap development</div>
                  </div>
                </div>
                
                <div className="service-card-item">
                  <h3 className="service-card-heading">Brand Renaissance</h3>
                  <div className="service-card-subtitle">Complete Brand Evolution</div>
                  <div className="service-card-description">Complete brand evolution from strategy to execution. Position your brand for market leadership.</div>
                  <div className="service-features-list">
                    <div className="feature-list-item">Brand strategy & architecture</div>
                    <div className="feature-list-item">Visual identity systems</div>
                    <div className="feature-list-item">Voice & messaging frameworks</div>
                    <div className="feature-list-item">Market positioning</div>
                  </div>
                </div>
                
                <div className="service-card-item">
                  <h3 className="service-card-heading">Experience Architecture</h3>
                  <div className="service-card-subtitle">Digital Transformation Projects</div>
                  <div className="service-card-description">Architect integrated digital experiences that convert at every touchpoint across the customer journey.</div>
                  <div className="service-features-list">
                    <div className="feature-list-item">Customer journey mapping</div>
                    <div className="feature-list-item">MarTech stack optimization</div>
                    <div className="feature-list-item">Omnichannel orchestration</div>
                    <div className="feature-list-item">Experience optimization</div>
                  </div>
                </div>
                
                <div className="service-card-item">
                  <h3 className="service-card-heading">Growth Engine Optimization</h3>
                  <div className="service-card-subtitle">Revenue System Redesign</div>
                  <div className="service-card-description">Design and optimize the entire revenue engine from lead generation through customer retention.</div>
                  <div className="service-features-list">
                    <div className="feature-list-item">Revenue model optimization</div>
                    <div className="feature-list-item">Sales & marketing alignment</div>
                    <div className="feature-list-item">Conversion rate optimization</div>
                    <div className="feature-list-item">Customer lifetime value</div>
                  </div>
                </div>
                
                <div className="service-card-item">
                  <h3 className="service-card-heading">Intelligence-Led Growth</h3>
                  <div className="service-card-subtitle">Analytics & Optimization Programs</div>
                  <div className="service-card-description">Transform data into competitive advantage with advanced analytics and predictive modeling.</div>
                  <div className="service-features-list">
                    <div className="feature-list-item">Advanced analytics setup</div>
                    <div className="feature-list-item">Predictive modeling</div>
                    <div className="feature-list-item">Performance dashboards</div>
                    <div className="feature-list-item">ROI optimization</div>
                  </div>
                </div>
                
                <div className="service-card-item">
                  <h3 className="service-card-heading">AI & Automation Integration</h3>
                  <div className="service-card-subtitle">Future-Forward Marketing Systems</div>
                  <div className="service-card-description">Implement cutting-edge AI and automation solutions to scale your marketing operations while maintaining personalized customer experiences.</div>
                  <div className="service-features-list">
                    <div className="feature-list-item">AI-powered personalization</div>
                    <div className="feature-list-item">Marketing automation workflows</div>
                    <div className="feature-list-item">Predictive customer analytics</div>
                    <div className="feature-list-item">Intelligent content optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Process Section */}
          <section className="process-section">
            <div className="container-process">
              <h2 className="process-main-heading">Partnership. Not just another project.</h2>
              <div className="process-subtitle-text">We're selective about who we work with. This ensures we're both the right partners, it's the right project, and there's a strong opportunity for effectiveness.</div>
              
              <div className="process-steps-grid">
                <div className="process-step-item">
                  <div className="step-number-display">01</div>
                  <h3 className="step-heading-text">Assessment</h3>
                  <div className="step-description-text">We evaluate your business challenges and growth potential to ensure we're the right fit for your transformation goals.</div>
                </div>
                
                <div className="process-step-item">
                  <div className="step-number-display">02</div>
                  <h3 className="step-heading-text">Planning</h3>
                  <div className="step-description-text">We align on vision, resources, and success metrics to create a clear roadmap for your marketing transformation.</div>
                </div>
                
                <div className="process-step-item">
                  <div className="step-number-display">03</div>
                  <h3 className="step-heading-text">Execution</h3>
                  <div className="step-description-text">We execute the strategy with precision, deploying our capabilities to deliver measurable results and competitive advantage.</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* About Section */}
          <section className="about-section">
            <div className="container-about">
              <div className="about-content-grid">
                <div className="about-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" alt="Strategic Marketing Excellence" className="about-main-image" />
                </div>
                <div className="about-text-wrapper">
                  <h2 className="about-main-heading">No BS. No bait & switch. Just strategic excellence.</h2>
                  <div className="about-description-text">We're not your typical consultancy. The same senior strategists who develop your vision are the ones who oversee execution. We don't upsell services you don't need. And we're radically transparent about everything we do.</div>
                  <div className="about-description-text">With 20+ years leading transformative projects for industry leaders, we bring enterprise-level thinking to every engagement. Your business isn't generic—your marketing strategy shouldn't be either.</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="contact-section">
            <div className="container-contact">
              <div className="contact-content-wrapper">
                <h2 className="contact-main-heading">Ready to illuminate your potential?</h2>
                <div className="contact-subtitle-text">Let's discuss your transformation. Share your challenges and goals.</div>
                
                <div className="contact-form-wrapper">
                  <form className="contact-form-element">
                    <div className="form-row-three-columns">
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Name</label>
                        <input type="text" name="name" className="form-input-field" placeholder="Your name" required />
                      </div>
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Email</label>
                        <input type="email" name="email" className="form-input-field" placeholder="your@email.com" required />
                      </div>
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Company</label>
                        <input type="text" name="company" className="form-input-field" placeholder="Company name" required />
                      </div>
                    </div>
                    
                    <div className="form-row-three-columns">
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Phone</label>
                        <input type="tel" name="phone" className="form-input-field" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Website</label>
                        <input type="url" name="website" className="form-input-field" placeholder="https://your-website.com" />
                      </div>
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Budget Range</label>
                        <select name="budget" className="form-select-field">
                          <option value="">Select budget</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-250k">$100K - $250K</option>
                          <option value="250k-500k">$250K - $500K</option>
                          <option value="500k+">$500K+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-row-full-width">
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Message</label>
                        <textarea name="message" className="form-textarea-field" placeholder="Tell us about your project and how we can help illuminate your path to success" required></textarea>
                      </div>
                    </div>
                    
                    <div className="form-submit-wrapper">
                      <button type="submit" className="form-submit-button">
                        <div className="button-text">Send Message</div>
                      </button>
                      <div className="form-note-text">We'll respond within 24 hours</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="footer-section">
            <div className="container-footer">
              <div className="footer-content-wrapper">
                <div className="footer-copyright-text">© 2024 Illuminate Avenue. Strategic Marketing Excellence.</div>
              </div>
            </div>
          </footer>
        </main>
      )}
    </>
  )
}

export async function getStaticProps() {
  const builderJson = await builder
    .get('page', {
      url: '/',
    })
    .promise()

  return {
    props: {
      builderJson: builderJson || null,
    },
    revalidate: 10,
  }
}