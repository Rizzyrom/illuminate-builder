import Head from 'next/head'
import { BuilderComponent, builder } from '@builder.io/react'

export default function Contact({ builderJson }) {
  return (
    <>
      <Head>
        <title>Contact - Illuminate Avenue</title>
        <meta name="description" content="Start your marketing transformation. Contact our strategic team to discuss your business objectives and growth opportunities." />
      </Head>

      {builderJson ? (
        <BuilderComponent model="page" content={builderJson} />
      ) : (
        <main className="contact-page">
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
                  <a href="/contact" className="nav-cta-button active">
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
                <h1 className="page-main-heading">Ready to illuminate your potential?</h1>
                <div className="page-subtitle-text">Let's discuss your marketing transformation and strategic objectives</div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="contact-form-section">
            <div className="container-contact">
              <div className="contact-form-content">
                <div className="form-intro">
                  <h2 className="form-intro-heading">Start the Conversation</h2>
                  <div className="form-intro-text">
                    Share your challenges and goals. We'll respond with strategic insights 
                    and discuss how we can accelerate your marketing transformation.
                  </div>
                </div>

                <div className="contact-form-wrapper">
                  <form className="contact-form-element" method="POST" action="/api/contact">
                    <div className="form-section">
                      <h3 className="form-section-title">Contact Information</h3>
                      <div className="form-row-two-columns">
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Name *</label>
                          <input type="text" name="name" className="form-input-field" placeholder="Your full name" required />
                        </div>
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Email *</label>
                          <input type="email" name="email" className="form-input-field" placeholder="your@email.com" required />
                        </div>
                      </div>
                      
                      <div className="form-row-two-columns">
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Phone</label>
                          <input type="tel" name="phone" className="form-input-field" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Company *</label>
                          <input type="text" name="company" className="form-input-field" placeholder="Company name" required />
                        </div>
                      </div>

                      <div className="form-field-wrapper">
                        <label className="form-field-label">Website</label>
                        <input type="url" name="website" className="form-input-field" placeholder="https://your-website.com" />
                      </div>
                    </div>

                    <div className="form-section">
                      <h3 className="form-section-title">Project Details</h3>
                      <div className="form-row-two-columns">
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Services Interested In</label>
                          <select name="services" className="form-select-field">
                            <option value="">Select primary interest</option>
                            <option value="strategy">Executive Strategy Advisory</option>
                            <option value="brand">Brand Renaissance</option>
                            <option value="experience">Experience Architecture</option>
                            <option value="growth">Growth Engine Optimization</option>
                            <option value="intelligence">Intelligence-Led Growth</option>
                            <option value="ai">AI & Automation Integration</option>
                            <option value="multiple">Multiple Services</option>
                            <option value="unsure">Not Sure Yet</option>
                          </select>
                        </div>
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Project Budget</label>
                          <select name="budget" className="form-select-field">
                            <option value="">Select budget range</option>
                            <option value="50k-100k">$50K - $100K</option>
                            <option value="100k-250k">$100K - $250K</option>
                            <option value="250k-500k">$250K - $500K</option>
                            <option value="500k-1m">$500K - $1M</option>
                            <option value="1m+">$1M+</option>
                            <option value="discuss">Prefer to Discuss</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row-two-columns">
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Timeline</label>
                          <select name="timeline" className="form-select-field">
                            <option value="">Project timeline</option>
                            <option value="immediate">Immediate (within 30 days)</option>
                            <option value="quarter">This Quarter</option>
                            <option value="6months">Next 6 Months</option>
                            <option value="planning">Planning Phase</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                        <div className="form-field-wrapper">
                          <label className="form-field-label">Company Size</label>
                          <select name="company_size" className="form-select-field">
                            <option value="">Select company size</option>
                            <option value="startup">Startup (1-50 employees)</option>
                            <option value="growth">Growth Stage (51-200 employees)</option>
                            <option value="enterprise">Enterprise (201-1000 employees)</option>
                            <option value="large">Large Enterprise (1000+ employees)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-section">
                      <h3 className="form-section-title">Project Details</h3>
                      <div className="form-field-wrapper">
                        <label className="form-field-label">Current Challenges</label>
                        <textarea name="challenges" className="form-textarea-field" placeholder="What are your biggest marketing challenges right now?"></textarea>
                      </div>

                      <div className="form-field-wrapper">
                        <label className="form-field-label">Project Description *</label>
                        <textarea name="message" className="form-textarea-field" placeholder="Tell us about your project goals, what success looks like, and how we can help illuminate your path to growth." required></textarea>
                      </div>

                      <div className="form-field-wrapper">
                        <label className="form-field-label">Success Metrics</label>
                        <textarea name="success_metrics" className="form-textarea-field" placeholder="How do you measure success? What metrics matter most to your business?"></textarea>
                      </div>
                    </div>

                    <div className="form-submit-wrapper">
                      <button type="submit" className="form-submit-button">
                        <div className="button-text">Send Message</div>
                      </button>
                      <div className="form-note-text">We'll respond within 24 hours with strategic insights and next steps.</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="contact-info-section">
            <div className="container-contact">
              <div className="contact-info-grid">
                <div className="contact-info-item">
                  <h3 className="contact-info-title">Strategic Consultation</h3>
                  <div className="contact-info-text">
                    Every conversation begins with strategic thinking. We'll discuss your objectives, 
                    challenges, and opportunities before exploring how we can work together.
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <h3 className="contact-info-title">Response Time</h3>
                  <div className="contact-info-text">
                    Our strategic team reviews every inquiry personally. Expect a thoughtful response 
                    within 24 hours, including initial insights and next steps.
                  </div>
                </div>

                <div className="contact-info-item">
                  <h3 className="contact-info-title">Partnership Approach</h3>
                  <div className="contact-info-text">
                    We're selective about our partnerships to ensure mutual success. 
                    This conversation helps us determine if we're the right fit for your objectives.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="faq-section">
            <div className="container-faq">
              <h2 className="faq-heading">Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className="faq-item">
                  <h3 className="faq-question">What makes Illuminate Avenue different?</h3>
                  <div className="faq-answer">
                    We combine strategic depth with execution excellence. The same senior strategists who develop your vision oversee implementation, ensuring consistency and results.
                  </div>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What type of clients do you work with?</h3>
                  <div className="faq-answer">
                    We partner with growth-stage companies and enterprises ready for marketing transformation. Our clients typically have marketing budgets of $100K+ annually.
                  </div>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">How long do projects typically take?</h3>
                  <div className="faq-answer">
                    Strategic initiatives range from 3-18 months depending on scope. We start with quick wins while building long-term strategic capabilities.
                  </div>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">Do you work with specific industries?</h3>
                  <div className="faq-answer">
                    Our strategic frameworks work across industries. We've delivered results for technology, professional services, healthcare, financial services, and manufacturing companies.
                  </div>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">What's included in the initial consultation?</h3>
                  <div className="faq-answer">
                    We provide strategic insights specific to your situation, competitive analysis, and initial recommendations—even if we don't end up working together.
                  </div>
                </div>

                <div className="faq-item">
                  <h3 className="faq-question">How do you measure success?</h3>
                  <div className="faq-answer">
                    Success metrics are defined collaboratively and typically include revenue growth, market share expansion, customer acquisition cost reduction, and lifetime value optimization.
                  </div>
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
      url: '/contact',
    })
    .promise()

  return {
    props: {
      builderJson: builderJson || null,
    },
    revalidate: 10,
  }
}