import Head from 'next/head'
import { BuilderComponent, builder } from '@builder.io/react'

export default function About({ builderJson }) {
  return (
    <>
      <Head>
        <title>About - Illuminate Avenue</title>
        <meta name="description" content="Learn about our strategic marketing expertise and 20+ years of experience delivering transformative results for global brands." />
      </Head>

      {builderJson ? (
        <BuilderComponent model="page" content={builderJson} />
      ) : (
        <main className="about-page">
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
                    <a href="/about" className="nav-link-item active">About</a>
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
                <h1 className="page-main-heading">About Illuminate Avenue</h1>
                <div className="page-subtitle-text">Strategic marketing excellence built on 20+ years of transformative results</div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="story-section">
            <div className="container-story">
              <div className="story-content-grid">
                <div className="story-text-wrapper">
                  <h2 className="story-heading">Our Story</h2>
                  <div className="story-text">
                    Founded on the principle that every business deserves strategic marketing excellence, Illuminate Avenue has spent over two decades perfecting the art and science of transformative marketing.
                  </div>
                  <div className="story-text">
                    We don't just execute campaigns—we architect comprehensive marketing ecosystems that drive sustainable growth at enterprise scale. Our approach combines strategic thinking with flawless execution, ensuring every initiative contributes to your larger business objectives.
                  </div>
                </div>
                <div className="story-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" alt="Strategic team planning" className="story-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <div className="container-values">
              <h2 className="values-heading">Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3 className="value-title">Strategic Excellence</h3>
                  <div className="value-description">Every decision is rooted in deep strategic thinking and market intelligence.</div>
                </div>
                <div className="value-item">
                  <h3 className="value-title">Radical Transparency</h3>
                  <div className="value-description">Open communication and honest reporting on every aspect of our partnership.</div>
                </div>
                <div className="value-item">
                  <h3 className="value-title">Measurable Impact</h3>
                  <div className="value-description">Results that move the needle on your most important business metrics.</div>
                </div>
                <div className="value-item">
                  <h3 className="value-title">Partnership Focus</h3>
                  <div className="value-description">We're selective about our clients to ensure mutual success and long-term value.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="team-section">
            <div className="container-team">
              <h2 className="team-heading">Leadership Team</h2>
              <div className="team-grid">
                <div className="team-member">
                  <div className="member-image">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="CEO" className="member-photo" />
                  </div>
                  <h3 className="member-name">Strategic Leadership</h3>
                  <div className="member-title">Chief Executive Officer</div>
                  <div className="member-bio">20+ years of strategic marketing leadership across Fortune 500 companies.</div>
                </div>
                <div className="team-member">
                  <div className="member-image">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="CMO" className="member-photo" />
                  </div>
                  <h3 className="member-name">Marketing Excellence</h3>
                  <div className="member-title">Chief Marketing Officer</div>
                  <div className="member-bio">Expert in brand transformation and digital marketing ecosystems.</div>
                </div>
                <div className="team-member">
                  <div className="member-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="CTO" className="member-photo" />
                  </div>
                  <h3 className="member-name">Technology Innovation</h3>
                  <div className="member-title">Chief Technology Officer</div>
                  <div className="member-bio">Leading AI and automation integration for marketing transformation.</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container-cta">
              <div className="cta-content-wrapper">
                <h2 className="cta-heading">Ready to work together?</h2>
                <div className="cta-text">Let's discuss how we can accelerate your marketing transformation.</div>
                <a href="/contact" className="cta-button">
                  <div className="button-text">Start the Conversation</div>
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
      url: '/about',
    })
    .promise()

  return {
    props: {
      builderJson: builderJson || null,
    },
    revalidate: 10,
  }
}