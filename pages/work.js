import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <>
      <Head>
        <title>Work - Illuminate Avenue | Transformation Stories</title>
        <meta name="description" content="Real transformation stories from businesses we've illuminated. See how strategic marketing excellence creates lasting competitive advantages." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Transformation Stories</div>
            <h1 className="hero-title">
              Every business has a story.<br/>
              We <span className="illuminate">illuminate</span> their path to greatness.
            </h1>
            <p className="hero-subtitle">
              These aren't just case studies. They're transformation stories of businesses 
              that dared to think differently and trusted us to light the way.
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Featured Transformations</div>
            <h2 className="section-title">From hidden potential<br/>to market leadership</h2>
          </div>
          
          {/* Case Study 1 */}
          <div className="case-study">
            <div className="case-visual">
              <div className="case-industry">Technology SaaS</div>
            </div>
            <div className="case-content">
              <h3>The Challenger That Became The Champion</h3>
              <h4>Enterprise SaaS Platform Transformation</h4>
              <p>
                A mid-market SaaS company was bleeding customers to a competitor with 10x their marketing budget. 
                Traditional agencies told them to outspend. We told them to outthink.
              </p>
              <p>
                We discovered their customers didn't want more features—they wanted simplicity. While competitors 
                added complexity, we positioned our client as the "anti-bloatware" solution. We turned their 
                constraint into their greatest competitive advantage.
              </p>
              <p>
                The result? They didn't just survive—they thrived. Market share doubled in 18 months. 
                The competitor that was crushing them? They're now acquiring them.
              </p>
              <div className="case-metrics">
                <div className="case-metric">
                  <div className="case-metric-number">312%</div>
                  <div className="case-metric-label">Revenue Growth</div>
                </div>
                <div className="case-metric">
                  <div className="case-metric-number">2.4x</div>
                  <div className="case-metric-label">Market Share</div>
                </div>
                <div className="case-metric">
                  <div className="case-metric-number">67%</div>
                  <div className="case-metric-label">CAC Reduction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="case-study">
            <div className="case-content">
              <h3>From Commodity to Category King</h3>
              <h4>Financial Services Reinvention</h4>
              <p>
                A traditional financial services firm was losing relevance with younger demographics. 
                Everyone told them to "go digital." We told them to go deeper.
              </p>
              <p>
                We uncovered that millennials didn't distrust banks—they distrusted complexity. 
                We rebuilt their entire brand around radical transparency and simplicity. No fine print. 
                No hidden fees. Just honest financial partnership.
              </p>
              <p>
                Within 24 months, they went from the "bank your parents use" to the fastest-growing 
                financial platform for next-generation wealth builders. Their waitlist has 100,000+ people.
              </p>
              <div className="case-metrics">
                <div className="case-metric">
                  <div className="case-metric-number">$2.3B</div>
                  <div className="case-metric-label">New Assets</div>
                </div>
                <div className="case-metric">
                  <div className="case-metric-number">428%</div>
                  <div className="case-metric-label">User Growth</div>
                </div>
                <div className="case-metric">
                  <div className="case-metric-number">91</div>
                  <div className="case-metric-label">NPS Score</div>
                </div>
              </div>
            </div>
            <div className="case-visual">
              <div className="case-industry">Financial Services</div>
            </div>
          </div>
          
          {/* Case Study 3 */}
          <div className="case-study">
            <div className="case-visual">
              <div className="case-industry">Healthcare Tech</div>
            </div>
            <div className="case-content">
              <h3>The Startup That Disrupted Giants</h3>
              <h4>Healthcare Technology Revolution</h4>
              <p>
                A healthcare startup with revolutionary technology couldn't get hospitals to listen. 
                They had 18 months of runway and zero enterprise customers.
              </p>
              <p>
                We discovered the problem wasn't the product—it was the promise. Hospitals didn't want 
                "disruption"; they wanted evolution. We repositioned from "replacing your system" to 
                "empowering your excellence."
              </p>
              <p>
                The shift was immediate. Three Fortune 500 healthcare systems signed within 90 days. 
                Today, they're the industry standard, processing 40 million patient interactions annually.
              </p>
              <div className="case-metrics">
                <div className="case-metric">
                  <div className="case-metric-number">$180M</div>
                  <div className="case-metric-label">Series C Funding</div>
                </div>
                <div className="case-metric">
                  <div className="case-metric-number">40M</div>
                  <div className="case-metric-label">Patients Served</div>
                </div>
                <div className="case-metric">
                  <div className="case-metric-number">85%</div>
                  <div className="case-metric-label">Market Penetration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial">
            <p className="quote">
              "Illuminate Avenue doesn't just deliver marketing strategy—they deliver business transformation. 
              They saw potential in our company that we didn't even see ourselves. The results speak for themselves."
            </p>
            <div className="quote-author">Sarah Chen</div>
            <div className="quote-title">CEO, TechVision Global</div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to write your<br/>transformation story?</h2>
          <p className="cta-subtitle">
            Every great business has untapped potential. Let us illuminate yours.
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