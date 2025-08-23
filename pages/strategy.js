import Head from 'next/head'
import { BuilderComponent, builder } from '@builder.io/react'

export default function Strategy({ builderJson }) {
  return (
    <>
      <Head>
        <title>Strategy - Illuminate Avenue</title>
        <meta name="description" content="Our strategic marketing methodology, frameworks, and approach to driving transformative business results through marketing excellence." />
      </Head>

      {builderJson ? (
        <BuilderComponent model="page" content={builderJson} />
      ) : (
        <main className="strategy-page">
          {/* Navigation */}
          <header className="navbar-wrapper">
            <nav className="navbar-container">
              <div className="container-navigation">
                <div className="nav-content-wrapper">
                  <a href="/" className="nav-brand-link">
                    <div className="brand-text">Illuminate Avenue</div>
                  </a>
                  <div className="nav-menu-wrapper">
                    <a href="/strategy" className="nav-link-item active">Strategy</a>
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
          <section className="page-hero-section">
            <div className="container-hero">
              <div className="hero-content-wrapper">
                <h1 className="page-main-heading">Strategic Marketing Excellence</h1>
                <div className="page-subtitle-text">Our methodology for transforming marketing into a competitive advantage</div>
              </div>
            </div>
          </section>

          {/* Strategy Philosophy */}
          <section className="philosophy-section">
            <div className="container-philosophy">
              <div className="philosophy-content">
                <h2 className="philosophy-heading">Our Strategic Philosophy</h2>
                <div className="philosophy-text">
                  Marketing isn't just about generating leads or building brand awareness. It's about creating sustainable competitive advantage 
                  that drives long-term business value. Our strategic approach transforms marketing from a cost center into a profit driver.
                </div>
                <div className="philosophy-principles">
                  <div className="principle-item">
                    <h3 className="principle-title">Strategy-First Thinking</h3>
                    <div className="principle-description">Every tactic serves a larger strategic purpose</div>
                  </div>
                  <div className="principle-item">
                    <h3 className="principle-title">Data-Driven Decisions</h3>
                    <div className="principle-description">Insights inform strategy, not opinions</div>
                  </div>
                  <div className="principle-item">
                    <h3 className="principle-title">Sustainable Growth</h3>
                    <div className="principle-description">Building systems for long-term competitive advantage</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Framework */}
          <section className="framework-section">
            <div className="container-framework">
              <h2 className="framework-heading">The Illuminate Framework</h2>
              <div className="framework-subtitle">Our proprietary methodology for marketing transformation</div>
              
              <div className="framework-phases">
                
                <div className="phase-item">
                  <div className="phase-number">01</div>
                  <div className="phase-content">
                    <h3 className="phase-title">Strategic Discovery</h3>
                    <div className="phase-description">
                      Comprehensive analysis of your business, market position, competitive landscape, 
                      and growth opportunities to establish strategic foundation.
                    </div>
                    <div className="phase-components">
                      <div className="component-item">Business Model Analysis</div>
                      <div className="component-item">Market Intelligence</div>
                      <div className="component-item">Competitive Assessment</div>
                      <div className="component-item">Customer Journey Mapping</div>
                      <div className="component-item">Growth Opportunity Identification</div>
                    </div>
                  </div>
                </div>

                <div className="phase-item">
                  <div className="phase-number">02</div>
                  <div className="phase-content">
                    <h3 className="phase-title">Strategic Architecture</h3>
                    <div className="phase-description">
                      Development of comprehensive marketing strategy aligned with business objectives, 
                      including positioning, messaging, and channel strategy.
                    </div>
                    <div className="phase-components">
                      <div className="component-item">Strategic Positioning</div>
                      <div className="component-item">Value Proposition Design</div>
                      <div className="component-item">Messaging Architecture</div>
                      <div className="component-item">Channel Strategy</div>
                      <div className="component-item">Success Metrics Definition</div>
                    </div>
                  </div>
                </div>

                <div className="phase-item">
                  <div className="phase-number">03</div>
                  <div className="phase-content">
                    <h3 className="phase-title">Experience Design</h3>
                    <div className="phase-description">
                      Creation of integrated customer experiences that convert at every touchpoint 
                      and support strategic objectives.
                    </div>
                    <div className="phase-components">
                      <div className="component-item">Customer Experience Architecture</div>
                      <div className="component-item">Brand Identity Systems</div>
                      <div className="component-item">Digital Platform Design</div>
                      <div className="component-item">Content Strategy Framework</div>
                      <div className="component-item">Conversion Optimization</div>
                    </div>
                  </div>
                </div>

                <div className="phase-item">
                  <div className="phase-number">04</div>
                  <div className="phase-content">
                    <h3 className="phase-title">Growth Engine Implementation</h3>
                    <div className="phase-description">
                      Deployment of integrated marketing systems, technology, and processes 
                      that generate predictable, scalable growth.
                    </div>
                    <div className="phase-components">
                      <div className="component-item">MarTech Stack Integration</div>
                      <div className="component-item">Automation Workflows</div>
                      <div className="component-item">Performance Tracking Systems</div>
                      <div className="component-item">Team Training & Enablement</div>
                      <div className="component-item">Launch & Optimization</div>
                    </div>
                  </div>
                </div>

                <div className="phase-item">
                  <div className="phase-number">05</div>
                  <div className="phase-content">
                    <h3 className="phase-title">Continuous Optimization</h3>
                    <div className="phase-description">
                      Ongoing performance analysis, strategic refinement, and optimization 
                      to maximize ROI and competitive advantage.
                    </div>
                    <div className="phase-components">
                      <div className="component-item">Performance Analytics</div>
                      <div className="component-item">A/B Testing & Optimization</div>
                      <div className="component-item">Strategic Refinement</div>
                      <div className="component-item">Market Adaptation</div>
                      <div className="component-item">Growth Acceleration</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Strategic Capabilities */}
          <section className="capabilities-section">
            <div className="container-capabilities">
              <h2 className="capabilities-heading">Strategic Capabilities</h2>
              <div className="capabilities-grid">
                
                <div className="capability-item">
                  <div className="capability-icon">🎯</div>
                  <h3 className="capability-title">Market Intelligence</h3>
                  <div className="capability-description">
                    Deep market analysis, competitive intelligence, and customer insights 
                    that inform strategic decision-making.
                  </div>
                </div>

                <div className="capability-item">
                  <div className="capability-icon">🏗️</div>
                  <h3 className="capability-title">Strategic Architecture</h3>
                  <div className="capability-description">
                    Comprehensive marketing strategy design that aligns with business objectives 
                    and drives sustainable competitive advantage.
                  </div>
                </div>

                <div className="capability-item">
                  <div className="capability-icon">⚡</div>
                  <h3 className="capability-title">Growth Engineering</h3>
                  <div className="capability-description">
                    Systematic approach to building predictable, scalable growth engines 
                    through optimized processes and technology.
                  </div>
                </div>

                <div className="capability-item">
                  <div className="capability-icon">🔬</div>
                  <h3 className="capability-title">Performance Science</h3>
                  <div className="capability-description">
                    Advanced analytics, testing methodologies, and optimization frameworks 
                    that maximize marketing ROI and effectiveness.
                  </div>
                </div>

                <div className="capability-item">
                  <div className="capability-icon">🤖</div>
                  <h3 className="capability-title">AI Integration</h3>
                  <div className="capability-description">
                    Implementation of artificial intelligence and machine learning 
                    to automate, optimize, and scale marketing operations.
                  </div>
                </div>

                <div className="capability-item">
                  <div className="capability-icon">🌐</div>
                  <h3 className="capability-title">Experience Orchestration</h3>
                  <div className="capability-description">
                    Design and management of integrated customer experiences 
                    across all touchpoints and channels.
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Strategic Differentiators */}
          <section className="differentiators-section">
            <div className="container-differentiators">
              <h2 className="differentiators-heading">What Makes Our Strategy Different</h2>
              <div className="differentiators-grid">
                
                <div className="differentiator-item">
                  <h3 className="differentiator-title">Executive-Level Thinking</h3>
                  <div className="differentiator-description">
                    We operate at the C-suite level, ensuring marketing strategy aligns with broader business objectives and drives enterprise value.
                  </div>
                </div>

                <div className="differentiator-item">
                  <h3 className="differentiator-title">Proprietary Frameworks</h3>
                  <div className="differentiator-description">
                    Our methodologies are battle-tested across hundreds of engagements, refined through 20+ years of strategic marketing excellence.
                  </div>
                </div>

                <div className="differentiator-item">
                  <h3 className="differentiator-title">Technology Integration</h3>
                  <div className="differentiator-description">
                    We seamlessly integrate cutting-edge marketing technology, AI, and automation to create competitive advantages.
                  </div>
                </div>

                <div className="differentiator-item">
                  <h3 className="differentiator-title">Measurable Outcomes</h3>
                  <div className="differentiator-description">
                    Every strategic initiative is designed with clear success metrics and ROI targets, ensuring accountability and results.
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Strategic Insights */}
          <section className="insights-preview-section">
            <div className="container-insights">
              <h2 className="insights-preview-heading">Strategic Insights</h2>
              <div className="insights-preview-grid">
                
                <div className="insight-preview-item">
                  <div className="insight-category">Market Intelligence</div>
                  <h3 className="insight-title">The Future of B2B Marketing: AI-Driven Personalization</h3>
                  <div className="insight-description">
                    How artificial intelligence is transforming B2B customer experiences and creating new competitive advantages.
                  </div>
                  <a href="/insights" className="insight-link">Read More →</a>
                </div>

                <div className="insight-preview-item">
                  <div className="insight-category">Strategic Framework</div>
                  <h3 className="insight-title">Building Marketing Systems That Scale</h3>
                  <div className="insight-description">
                    The architectural approach to creating marketing engines that grow with your business and adapt to market changes.
                  </div>
                  <a href="/insights" className="insight-link">Read More →</a>
                </div>

                <div className="insight-preview-item">
                  <div className="insight-category">Performance Optimization</div>
                  <h3 className="insight-title">ROI Maximization Through Strategic Attribution</h3>
                  <div className="insight-description">
                    Advanced attribution modeling strategies that provide clear visibility into marketing performance and optimization opportunities.
                  </div>
                  <a href="/insights" className="insight-link">Read More →</a>
                </div>

              </div>
              <div className="insights-cta">
                <a href="/insights" className="insights-cta-button">
                  <div className="button-text">View All Insights</div>
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container-cta">
              <div className="cta-content-wrapper">
                <h2 className="cta-heading">Ready to develop your strategic advantage?</h2>
                <div className="cta-text">Let's discuss how our strategic approach can transform your marketing results.</div>
                <a href="/contact" className="cta-button">
                  <div className="button-text">Schedule Strategic Session</div>
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
      url: '/strategy',
    })
    .promise()

  return {
    props: {
      builderJson: builderJson || null,
    },
    revalidate: 10,
  }
}