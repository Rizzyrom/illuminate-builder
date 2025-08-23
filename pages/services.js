import Head from 'next/head'
import { BuilderComponent, builder } from '@builder.io/react'

export default function Services({ builderJson }) {
  return (
    <>
      <Head>
        <title>Services - Illuminate Avenue</title>
        <meta name="description" content="Strategic marketing services including brand transformation, digital experience architecture, and growth optimization for enterprise clients." />
      </Head>

      {builderJson ? (
        <BuilderComponent model="page" content={builderJson} />
      ) : (
        <main className="services-page">
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
                    <a href="/services" className="nav-link-item active">Services</a>
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
                <h1 className="page-main-heading">Strategic Marketing Services</h1>
                <div className="page-subtitle-text">Comprehensive marketing transformation for enterprise growth</div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="services-overview-section">
            <div className="container-services">
              <div className="overview-content">
                <h2 className="overview-heading">Beyond campaigns. We architect empires.</h2>
                <div className="overview-text">
                  Our strategic marketing services are designed for businesses ready to transform their market position. 
                  We don't just execute tactics—we build comprehensive marketing ecosystems that drive sustainable competitive advantage.
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Services */}
          <section className="detailed-services-section">
            <div className="container-services">
              <div className="services-detailed-grid">
                
                <div className="service-detailed-card">
                  <div className="service-icon">🎯</div>
                  <h3 className="service-detailed-heading">Executive Strategy Advisory</h3>
                  <div className="service-detailed-subtitle">C-Suite Marketing Transformation</div>
                  <div className="service-detailed-description">
                    Transform your marketing strategy from the executive level down. We work directly with leadership teams 
                    to align marketing initiatives with ambitious business objectives and competitive positioning.
                  </div>
                  <div className="service-features-detailed">
                    <div className="feature-category">Strategic Planning</div>
                    <ul className="feature-detailed-list">
                      <li>Executive strategy workshops</li>
                      <li>Market opportunity assessment</li>
                      <li>Competitive intelligence analysis</li>
                      <li>Growth roadmap development</li>
                      <li>Resource allocation optimization</li>
                    </ul>
                    <div className="feature-category">Implementation</div>
                    <ul className="feature-detailed-list">
                      <li>Strategic execution oversight</li>
                      <li>Performance measurement frameworks</li>
                      <li>Team alignment and training</li>
                      <li>Quarterly business reviews</li>
                    </ul>
                  </div>
                </div>

                <div className="service-detailed-card">
                  <div className="service-icon">✨</div>
                  <h3 className="service-detailed-heading">Brand Renaissance</h3>
                  <div className="service-detailed-subtitle">Complete Brand Evolution</div>
                  <div className="service-detailed-description">
                    Architect your brand's next chapter through comprehensive strategy, identity design, and market positioning 
                    that establishes category leadership and sustainable differentiation.
                  </div>
                  <div className="service-features-detailed">
                    <div className="feature-category">Brand Strategy</div>
                    <ul className="feature-detailed-list">
                      <li>Brand positioning and architecture</li>
                      <li>Value proposition development</li>
                      <li>Brand personality and voice</li>
                      <li>Messaging framework creation</li>
                      <li>Brand guidelines and standards</li>
                    </ul>
                    <div className="feature-category">Visual Identity</div>
                    <ul className="feature-detailed-list">
                      <li>Logo and visual system design</li>
                      <li>Brand collateral development</li>
                      <li>Digital asset creation</li>
                      <li>Brand implementation guidelines</li>
                    </ul>
                  </div>
                </div>

                <div className="service-detailed-card">
                  <div className="service-icon">🔗</div>
                  <h3 className="service-detailed-heading">Experience Architecture</h3>
                  <div className="service-detailed-subtitle">Digital Transformation</div>
                  <div className="service-detailed-description">
                    Design and implement integrated digital experiences that convert at every touchpoint, 
                    transforming customer journeys into competitive moats.
                  </div>
                  <div className="service-features-detailed">
                    <div className="feature-category">Customer Experience</div>
                    <ul className="feature-detailed-list">
                      <li>Customer journey mapping</li>
                      <li>Touchpoint optimization</li>
                      <li>Experience personalization</li>
                      <li>Conversion rate optimization</li>
                      <li>User experience design</li>
                    </ul>
                    <div className="feature-category">Technology Integration</div>
                    <ul className="feature-detailed-list">
                      <li>MarTech stack optimization</li>
                      <li>Omnichannel orchestration</li>
                      <li>Data integration and analytics</li>
                      <li>Automation workflow design</li>
                    </ul>
                  </div>
                </div>

                <div className="service-detailed-card">
                  <div className="service-icon">📈</div>
                  <h3 className="service-detailed-heading">Growth Engine Optimization</h3>
                  <div className="service-detailed-subtitle">Revenue System Design</div>
                  <div className="service-detailed-description">
                    Engineer the entire revenue machine from first touch through retention, 
                    turning marketing into a predictable growth engine with measurable ROI.
                  </div>
                  <div className="service-features-detailed">
                    <div className="feature-category">Revenue Operations</div>
                    <ul className="feature-detailed-list">
                      <li>Revenue model optimization</li>
                      <li>Sales and marketing alignment</li>
                      <li>Lead generation systems</li>
                      <li>Pipeline optimization</li>
                      <li>Customer retention programs</li>
                    </ul>
                    <div className="feature-category">Performance Optimization</div>
                    <ul className="feature-detailed-list">
                      <li>Conversion funnel analysis</li>
                      <li>Customer lifetime value optimization</li>
                      <li>Attribution modeling</li>
                      <li>Performance dashboard creation</li>
                    </ul>
                  </div>
                </div>

                <div className="service-detailed-card">
                  <div className="service-icon">🔬</div>
                  <h3 className="service-detailed-heading">Intelligence-Led Growth</h3>
                  <div className="service-detailed-subtitle">Advanced Analytics</div>
                  <div className="service-detailed-description">
                    Transform data into competitive intelligence with advanced analytics and predictive modeling 
                    that illuminates future opportunities before competitors see them.
                  </div>
                  <div className="service-features-detailed">
                    <div className="feature-category">Analytics Implementation</div>
                    <ul className="feature-detailed-list">
                      <li>Advanced analytics setup</li>
                      <li>Custom dashboard creation</li>
                      <li>Performance tracking systems</li>
                      <li>Real-time reporting</li>
                      <li>Data visualization</li>
                    </ul>
                    <div className="feature-category">Predictive Modeling</div>
                    <ul className="feature-detailed-list">
                      <li>Customer behavior prediction</li>
                      <li>Market trend analysis</li>
                      <li>ROI optimization models</li>
                      <li>Risk assessment frameworks</li>
                    </ul>
                  </div>
                </div>

                <div className="service-detailed-card">
                  <div className="service-icon">🤖</div>
                  <h3 className="service-detailed-heading">AI & Automation Integration</h3>
                  <div className="service-detailed-subtitle">Future-Forward Systems</div>
                  <div className="service-detailed-description">
                    Implement cutting-edge AI and automation solutions that scale your marketing operations 
                    while maintaining personalized customer experiences.
                  </div>
                  <div className="service-features-detailed">
                    <div className="feature-category">AI Implementation</div>
                    <ul className="feature-detailed-list">
                      <li>AI-powered personalization</li>
                      <li>Intelligent content optimization</li>
                      <li>Predictive customer analytics</li>
                      <li>Automated A/B testing</li>
                      <li>Smart campaign optimization</li>
                    </ul>
                    <div className="feature-category">Automation Systems</div>
                    <ul className="feature-detailed-list">
                      <li>Marketing automation workflows</li>
                      <li>Lead nurturing systems</li>
                      <li>Customer service automation</li>
                      <li>Performance monitoring alerts</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="process-section">
            <div className="container-process">
              <h2 className="process-main-heading">Our Process</h2>
              <div className="process-subtitle-text">A proven methodology for marketing transformation</div>
              
              <div className="process-steps-detailed">
                <div className="process-step-detailed">
                  <div className="step-number-large">01</div>
                  <h3 className="step-title-large">Discovery & Assessment</h3>
                  <div className="step-description-large">
                    Comprehensive analysis of your current marketing ecosystem, competitive landscape, 
                    and growth opportunities to establish strategic foundation.
                  </div>
                </div>
                
                <div className="process-step-detailed">
                  <div className="step-number-large">02</div>
                  <h3 className="step-title-large">Strategic Planning</h3>
                  <div className="step-description-large">
                    Development of comprehensive marketing strategy aligned with business objectives, 
                    resource allocation, and success metrics.
                  </div>
                </div>
                
                <div className="process-step-detailed">
                  <div className="step-number-large">03</div>
                  <h3 className="step-title-large">Implementation</h3>
                  <div className="step-description-large">
                    Systematic execution of strategic initiatives with continuous optimization 
                    and performance monitoring.
                  </div>
                </div>

                <div className="process-step-detailed">
                  <div className="step-number-large">04</div>
                  <h3 className="step-title-large">Optimization</h3>
                  <div className="step-description-large">
                    Ongoing performance analysis and strategic refinement to maximize ROI 
                    and competitive advantage.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container-cta">
              <div className="cta-content-wrapper">
                <h2 className="cta-heading">Ready to transform your marketing?</h2>
                <div className="cta-text">Let's discuss which services align with your strategic objectives.</div>
                <a href="/contact" className="cta-button">
                  <div className="button-text">Schedule Consultation</div>
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
      url: '/services',
    })
    .promise()

  return {
    props: {
      builderJson: builderJson || null,
    },
    revalidate: 10,
  }
}