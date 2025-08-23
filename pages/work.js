import Head from 'next/head'
import { BuilderComponent, builder } from '@builder.io/react'

export default function Work({ builderJson }) {
  return (
    <>
      <Head>
        <title>Our Work - Illuminate Avenue</title>
        <meta name="description" content="Case studies and results from our strategic marketing transformations. See how we've driven measurable growth for our clients." />
      </Head>

      {builderJson ? (
        <BuilderComponent model="page" content={builderJson} />
      ) : (
        <main className="work-page">
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
                    <a href="/work" className="nav-link-item active">Work</a>
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
          <section className="page-hero-section">
            <div className="container-hero">
              <div className="hero-content-wrapper">
                <h1 className="page-main-heading">Strategic Results</h1>
                <div className="page-subtitle-text">Case studies in marketing transformation and measurable growth</div>
              </div>
            </div>
          </section>

          {/* Results Overview */}
          <section className="results-overview-section">
            <div className="container-results">
              <div className="results-stats-grid">
                <div className="result-stat-item">
                  <div className="result-stat-number">847%</div>
                  <div className="result-stat-label">Average ROI Increase</div>
                  <div className="result-stat-description">Across all client engagements</div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-number">$1.2B</div>
                  <div className="result-stat-label">Revenue Generated</div>
                  <div className="result-stat-description">For our strategic partners</div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-number">18 months</div>
                  <div className="result-stat-label">Average Transformation Time</div>
                  <div className="result-stat-description">From strategy to measurable results</div>
                </div>
                <div className="result-stat-item">
                  <div className="result-stat-number">98%</div>
                  <div className="result-stat-label">Client Retention</div>
                  <div className="result-stat-description">Long-term strategic partnerships</div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="case-studies-section">
            <div className="container-case-studies">
              <h2 className="case-studies-heading">Case Studies</h2>
              
              <div className="case-studies-grid">
                
                <div className="case-study-card">
                  <div className="case-study-image">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Technology company transformation" className="case-study-img" />
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-category">Technology • B2B SaaS</div>
                    <h3 className="case-study-title">Global SaaS Platform Transformation</h3>
                    <div className="case-study-description">
                      Complete marketing ecosystem redesign for a $50M ARR SaaS platform, 
                      resulting in 340% increase in qualified leads and 67% reduction in customer acquisition cost.
                    </div>
                    <div className="case-study-results">
                      <div className="case-study-result-item">
                        <div className="result-number">340%</div>
                        <div className="result-metric">Qualified Lead Increase</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">67%</div>
                        <div className="result-metric">CAC Reduction</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">$15M</div>
                        <div className="result-metric">Additional ARR</div>
                      </div>
                    </div>
                    <div className="case-study-services">
                      <span className="service-tag">Strategy</span>
                      <span className="service-tag">Brand Architecture</span>
                      <span className="service-tag">Experience Design</span>
                      <span className="service-tag">Growth Optimization</span>
                    </div>
                  </div>
                </div>

                <div className="case-study-card">
                  <div className="case-study-image">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Healthcare company transformation" className="case-study-img" />
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-category">Healthcare • Enterprise</div>
                    <h3 className="case-study-title">Healthcare Innovation Leader</h3>
                    <div className="case-study-description">
                      Strategic repositioning and digital transformation for a healthcare technology leader, 
                      driving market expansion and establishing category leadership in telehealth.
                    </div>
                    <div className="case-study-results">
                      <div className="case-study-result-item">
                        <div className="result-number">520%</div>
                        <div className="result-metric">Market Share Growth</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">89%</div>
                        <div className="result-metric">Brand Recognition Lift</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">$28M</div>
                        <div className="result-metric">New Market Revenue</div>
                      </div>
                    </div>
                    <div className="case-study-services">
                      <span className="service-tag">Brand Renaissance</span>
                      <span className="service-tag">Market Positioning</span>
                      <span className="service-tag">Digital Experience</span>
                      <span className="service-tag">AI Integration</span>
                    </div>
                  </div>
                </div>

                <div className="case-study-card">
                  <div className="case-study-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Financial services transformation" className="case-study-img" />
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-category">Financial Services • Fintech</div>
                    <h3 className="case-study-title">Fintech Market Disruption</h3>
                    <div className="case-study-description">
                      Go-to-market strategy and brand development for a Series B fintech startup, 
                      achieving market leadership position and successful $150M Series C funding.
                    </div>
                    <div className="case-study-results">
                      <div className="case-study-result-item">
                        <div className="result-number">1200%</div>
                        <div className="result-metric">Customer Growth</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">$150M</div>
                        <div className="result-metric">Series C Funding</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">#1</div>
                        <div className="result-metric">Market Position</div>
                      </div>
                    </div>
                    <div className="case-study-services">
                      <span className="service-tag">Go-to-Market</span>
                      <span className="service-tag">Brand Development</span>
                      <span className="service-tag">Growth Engine</span>
                      <span className="service-tag">Intelligence Analytics</span>
                    </div>
                  </div>
                </div>

                <div className="case-study-card">
                  <div className="case-study-image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Manufacturing company transformation" className="case-study-img" />
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-category">Manufacturing • Industrial</div>
                    <h3 className="case-study-title">Industrial Manufacturing Renaissance</h3>
                    <div className="case-study-description">
                      Complete digital transformation for a century-old manufacturing company, 
                      modernizing brand perception and establishing digital-first market presence.
                    </div>
                    <div className="case-study-results">
                      <div className="case-study-result-item">
                        <div className="result-number">450%</div>
                        <div className="result-metric">Online Lead Generation</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">78%</div>
                        <div className="result-metric">Sales Cycle Reduction</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">$42M</div>
                        <div className="result-metric">New Revenue Streams</div>
                      </div>
                    </div>
                    <div className="case-study-services">
                      <span className="service-tag">Digital Transformation</span>
                      <span className="service-tag">Brand Modernization</span>
                      <span className="service-tag">Experience Architecture</span>
                      <span className="service-tag">Automation Integration</span>
                    </div>
                  </div>
                </div>

                <div className="case-study-card">
                  <div className="case-study-image">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Professional services transformation" className="case-study-img" />
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-category">Professional Services • Consulting</div>
                    <h3 className="case-study-title">Global Consulting Firm Growth</h3>
                    <div className="case-study-description">
                      Strategic repositioning and thought leadership development for a mid-size consulting firm, 
                      achieving recognition as industry leader and 300% revenue growth.
                    </div>
                    <div className="case-study-results">
                      <div className="case-study-result-item">
                        <div className="result-number">300%</div>
                        <div className="result-metric">Revenue Growth</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">95%</div>
                        <div className="result-metric">Client Retention</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">12x</div>
                        <div className="result-metric">Thought Leadership Reach</div>
                      </div>
                    </div>
                    <div className="case-study-services">
                      <span className="service-tag">Strategic Positioning</span>
                      <span className="service-tag">Thought Leadership</span>
                      <span className="service-tag">Content Strategy</span>
                      <span className="service-tag">Growth Optimization</span>
                    </div>
                  </div>
                </div>

                <div className="case-study-card">
                  <div className="case-study-image">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Ecommerce transformation" className="case-study-img" />
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-category">E-commerce • Retail</div>
                    <h3 className="case-study-title">E-commerce Platform Revolution</h3>
                    <div className="case-study-description">
                      Omnichannel experience design and AI-powered personalization for a luxury e-commerce platform, 
                      achieving record-breaking conversion rates and customer lifetime value.
                    </div>
                    <div className="case-study-results">
                      <div className="case-study-result-item">
                        <div className="result-number">180%</div>
                        <div className="result-metric">Conversion Rate Lift</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">220%</div>
                        <div className="result-metric">Customer LTV Increase</div>
                      </div>
                      <div className="case-study-result-item">
                        <div className="result-number">$68M</div>
                        <div className="result-metric">Additional Revenue</div>
                      </div>
                    </div>
                    <div className="case-study-services">
                      <span className="service-tag">Experience Design</span>
                      <span className="service-tag">AI Personalization</span>
                      <span className="service-tag">Omnichannel Strategy</span>
                      <span className="service-tag">Conversion Optimization</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="testimonials-section">
            <div className="container-testimonials">
              <h2 className="testimonials-heading">Client Testimonials</h2>
              <div className="testimonials-grid">
                
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "Illuminate Avenue didn't just optimize our marketing—they fundamentally transformed our entire go-to-market strategy. 
                      The strategic depth and execution excellence exceeded every expectation."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-name">Sarah Chen</div>
                      <div className="author-title">Chief Marketing Officer</div>
                      <div className="author-company">Global Technology Leader</div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "Working with Illuminate Avenue was transformative. They brought enterprise-level strategic thinking to every aspect of our marketing, 
                      resulting in measurable growth and market leadership."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-name">Michael Rodriguez</div>
                      <div className="author-title">CEO & Founder</div>
                      <div className="author-company">Healthcare Innovation Company</div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-text">
                      "The team at Illuminate Avenue combines strategic brilliance with execution excellence. 
                      They're true partners in driving sustainable competitive advantage."
                    </div>
                    <div className="testimonial-author">
                      <div className="author-name">Jennifer Walsh</div>
                      <div className="author-title">Head of Marketing</div>
                      <div className="author-company">Fintech Unicorn</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container-cta">
              <div className="cta-content-wrapper">
                <h2 className="cta-heading">Ready for your transformation?</h2>
                <div className="cta-text">Let's discuss how we can deliver similar results for your business.</div>
                <a href="/contact" className="cta-button">
                  <div className="button-text">Start Your Project</div>
                </a>
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
      url: '/work',
    })
    .promise()

  return {
    props: {
      builderJson: builderJson || null,
    },
    revalidate: 10,
  }
}