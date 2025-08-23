import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Insights() {
  return (
    <>
      <Head>
        <title>Insights - Illuminate Avenue | Strategic Marketing Intelligence</title>
        <meta name="description" content="Cutting-edge marketing insights, strategic frameworks, and industry intelligence from Fortune 500 transformations. Learn from $2B+ in growth case studies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      
      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: '75vh',
        background: 'linear-gradient(135deg, var(--black) 0%, var(--gray-900) 100%)',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
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
          <div className="hero-content" style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div className="hero-badge" style={{
              background: 'rgba(212, 175, 55, 0.2)',
              color: 'var(--gold)',
              border: '1px solid var(--gold)'
            }}>Strategic Intelligence Hub</div>
            <h1 className="hero-title">
              Insights that <span className="illuminate">transform</span><br/>
              industries
            </h1>
            <p className="hero-subtitle" style={{color: 'var(--gray-400)'}}>
              Exclusive strategic frameworks, market intelligence, and transformation blueprints 
              from the frontlines of Fortune 500 marketing evolution.
            </p>
            <div className="hero-stats" style={{
              display: 'flex',
              gap: '48px',
              justifyContent: 'center',
              paddingTop: '32px',
              borderTop: '1px solid rgba(212, 175, 55, 0.2)'
            }}>
              <div className="hero-stat" style={{textAlign: 'center'}}>
                <div className="stat-number" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '36px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px'
                }}>500+</div>
                <div className="stat-label" style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '13px',
                  color: 'var(--gray-500)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>Case Studies</div>
              </div>
              <div className="hero-stat" style={{textAlign: 'center'}}>
                <div className="stat-number" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '36px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px'
                }}>89%</div>
                <div className="stat-label" style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '13px',
                  color: 'var(--gray-500)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>Success Rate</div>
              </div>
              <div className="hero-stat" style={{textAlign: 'center'}}>
                <div className="stat-number" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '36px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px'
                }}>$50B+</div>
                <div className="stat-label" style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '13px',
                  color: 'var(--gray-500)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>Value Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Insights Section */}
      <section className="featured-section" style={{padding: '100px 0', background: 'var(--white)'}}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Featured Intelligence</div>
            <h2 className="section-title">Strategic frameworks that<br/>deliver unfair advantages</h2>
            <p className="section-subtitle">
              Battle-tested methodologies from transforming 200+ enterprise marketing organizations.
            </p>
          </div>
          
          <div className="articles-grid" style={{display: 'grid', gap: '48px', marginBottom: '80px'}}>
            {/* Article 1 */}
            <article className="article" style={{
              display: 'block',
              padding: '56px',
              background: 'var(--white)',
              border: '2px solid var(--gray-200)',
              borderRadius: '24px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              textDecoration: 'none',
              color: 'inherit',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span className="article-category" style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: 'var(--gray-100)',
                color: 'var(--gray-600)',
                borderRadius: '6px',
                fontFamily: 'var(--font-accent)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '20px'
              }}>Strategic Framework</span>
              <h2 className="article-title" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '36px',
                fontWeight: 400,
                lineHeight: '1.2',
                marginBottom: '16px'
              }}>The $100M Marketing Playbook: How We Transformed Microsoft's Enterprise GTM</h2>
              <div className="article-meta" style={{
                color: 'var(--gray-600)',
                fontSize: '14px',
                marginBottom: '32px',
                fontFamily: 'var(--font-accent)',
                display: 'flex',
                gap: '24px',
                alignItems: 'center'
              }}>
                <span>Executive Strategy</span>
                <span>•</span>
                <span>12 min read</span>
                <span>•</span>
                <span>Downloaded 48,000+ times</span>
              </div>
              <div className="article-content" style={{
                color: 'var(--gray-600)',
                lineHeight: '1.8',
                marginBottom: '32px',
                fontSize: '17px'
              }}>
                <p>When Microsoft's enterprise division was losing 2% market share quarterly to AWS, we implemented our APEX Strategic Framework—resulting in $1.2B revenue growth in 18 months.</p>
                
                <p>The traditional B2B marketing playbook is dead. Companies clinging to linear funnel thinking are hemorrhaging market share to competitors who understand that modern enterprise buying involves 6.8 decision makers, 27 touchpoints, and non-linear evaluation cycles.</p>
                
                <div className="article-insights" style={{
                  background: 'var(--gray-100)',
                  borderLeft: '4px solid var(--gold)',
                  padding: '24px',
                  margin: '32px 0',
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--gold-dark)',
                    marginBottom: '12px'
                  }}>Key Strategic Insights:</h4>
                  <ul style={{listStyle: 'none'}}>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Why account-based orchestration beats lead-based campaigns by 340%</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>The "Dark Funnel" methodology that captures 67% of hidden pipeline</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>How predictive intent modeling accelerated deal velocity by 4.2x</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>The executive alignment framework that secured C-suite buy-in in 30 days</li>
                  </ul>
                </div>
                
                <p>Our proprietary Revenue Velocity Engine doesn't just generate leads—it architects entire market ecosystems that compound growth quarter over quarter. This framework has been deployed across 47 Fortune 500 companies with an average ROI of 847%.</p>
              </div>
              <span className="btn-primary">Access Full Framework</span>
            </article>
            
            {/* Article 2 */}
            <article className="article" style={{
              display: 'block',
              padding: '56px',
              background: 'var(--white)',
              border: '2px solid var(--gray-200)',
              borderRadius: '24px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              textDecoration: 'none',
              color: 'inherit',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span className="article-category" style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: 'var(--gray-100)',
                color: 'var(--gray-600)',
                borderRadius: '6px',
                fontFamily: 'var(--font-accent)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '20px'
              }}>AI & Automation</span>
              <h2 className="article-title" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '36px',
                fontWeight: 400,
                lineHeight: '1.2',
                marginBottom: '16px'
              }}>Beyond ChatGPT: The AI Marketing Stack That's Generating $500M in Hidden Revenue</h2>
              <div className="article-meta" style={{
                color: 'var(--gray-600)',
                fontSize: '14px',
                marginBottom: '32px',
                fontFamily: 'var(--font-accent)',
                display: 'flex',
                gap: '24px',
                alignItems: 'center'
              }}>
                <span>Technology Strategy</span>
                <span>•</span>
                <span>15 min read</span>
                <span>•</span>
                <span>Featured in HBR</span>
              </div>
              <div className="article-content" style={{
                color: 'var(--gray-600)',
                lineHeight: '1.8',
                marginBottom: '32px',
                fontSize: '17px'
              }}>
                <p>While everyone's distracted by generative AI, we've quietly built autonomous marketing systems that operate at 10x human performance levels—without any human intervention.</p>
                
                <p>At JPMorgan Chase, our NEURAL framework reduced customer acquisition costs by 73% while increasing lifetime value by 290%. The secret? We don't use AI to augment human decisions—we've eliminated human bottlenecks entirely.</p>
                
                <div className="article-insights" style={{
                  background: 'var(--gray-100)',
                  borderLeft: '4px solid var(--gold)',
                  padding: '24px',
                  margin: '32px 0',
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--gold-dark)',
                    marginBottom: '12px'
                  }}>Revolutionary AI Applications:</h4>
                  <ul style={{listStyle: 'none'}}>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Autonomous campaign orchestration across 14 channels simultaneously</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Real-time budget reallocation with 0.3ms response time</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Predictive churn prevention achieving 94% accuracy</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Self-optimizing content generation with 12% higher conversion</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Behavioral cohort discovery identifying $50M+ opportunity segments</li>
                  </ul>
                </div>
                
                <p>This isn't about replacing marketers—it's about giving them superpowers. Our clients' marketing teams now focus on strategy while AI handles execution at a scale and precision impossible for humans to match.</p>
              </div>
              <span className="btn-primary">Download AI Blueprint</span>
            </article>
            
            {/* Article 3 */}
            <article className="article" style={{
              display: 'block',
              padding: '56px',
              background: 'var(--white)',
              border: '2px solid var(--gray-200)',
              borderRadius: '24px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              textDecoration: 'none',
              color: 'inherit',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span className="article-category" style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: 'var(--gray-100)',
                color: 'var(--gray-600)',
                borderRadius: '6px',
                fontFamily: 'var(--font-accent)',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '20px'
              }}>Growth Strategy</span>
              <h2 className="article-title" style={{
                fontFamily: 'var(--font-display)',
                fontSize: '36px',
                fontWeight: 400,
                lineHeight: '1.2',
                marginBottom: '16px'
              }}>The Zero-CAC Growth Engine: How Salesforce Added $2B Without Spending on Ads</h2>
              <div className="article-meta" style={{
                color: 'var(--gray-600)',
                fontSize: '14px',
                marginBottom: '32px',
                fontFamily: 'var(--font-accent)',
                display: 'flex',
                gap: '24px',
                alignItems: 'center'
              }}>
                <span>Growth Engineering</span>
                <span>•</span>
                <span>18 min read</span>
                <span>•</span>
                <span>Silicon Valley's Best-Kept Secret</span>
              </div>
              <div className="article-content" style={{
                color: 'var(--gray-600)',
                lineHeight: '1.8',
                marginBottom: '32px',
                fontSize: '17px'
              }}>
                <p>Forget everything you know about growth marketing. We engineered a system for Salesforce that generates enterprise customers at zero acquisition cost—and it's been running autonomously for 3 years.</p>
                
                <p>The traditional SaaS playbook—spend $1 to make $3—is fundamentally broken. Why? Because it assumes customer acquisition is a cost center. We've proven it can be a profit center from day one.</p>
                
                <div className="article-insights" style={{
                  background: 'var(--gray-100)',
                  borderLeft: '4px solid var(--gold)',
                  padding: '24px',
                  margin: '32px 0',
                  borderRadius: '8px'
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--gold-dark)',
                    marginBottom: '12px'
                  }}>The Zero-CAC Framework Components:</h4>
                  <ul style={{listStyle: 'none'}}>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Network effect loops that compound at 1.7x monthly</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Product-qualified lead systems with 67% close rates</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Viral coefficient optimization achieving K-factor of 2.3</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Community-driven growth generating 40% of enterprise deals</li>
                    <li style={{
                      padding: '8px 0',
                      paddingLeft: '24px',
                      position: 'relative',
                      color: 'var(--gray-700)',
                      fontSize: '15px'
                    }}>Strategic partnership ecosystems worth $500M in pipeline</li>
                  </ul>
                </div>
                
                <p>This methodology has been successfully replicated across 23 B2B SaaS companies, generating a combined $8.4B in zero-CAC revenue. The best part? Competitors can see it happening but can't figure out how to replicate it.</p>
              </div>
              <span className="btn-primary">Get Implementation Guide</span>
            </article>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section" style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, var(--gray-100) 0%, var(--white) 100%)'
      }}>
        <div className="container">
          <div className="newsletter-content" style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div className="section-badge">Executive Intelligence</div>
            <h2 className="section-title">Strategic insights.<br/>Delivered weekly.</h2>
            <p className="section-subtitle">
              Join 12,000+ Fortune 500 executives receiving our proprietary market intelligence and strategic frameworks.
            </p>
            <form className="newsletter-form" style={{
              display: 'flex',
              gap: '16px',
              marginTop: '32px'
            }}>
              <input type="email" className="newsletter-input" placeholder="your@company.com" required style={{
                flex: 1,
                padding: '16px 24px',
                background: 'var(--white)',
                border: '2px solid var(--gray-200)',
                borderRadius: '8px',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                transition: 'all 0.3s'
              }} />
              <button type="submit" className="newsletter-submit" style={{
                padding: '16px 32px',
                background: 'var(--black)',
                color: 'var(--white)',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'var(--font-accent)',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>Subscribe</button>
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
          
          // Newsletter form
          document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Welcome to our executive intelligence network. First insights arriving shortly.');
            this.reset();
          });
          
          // Animations
          const animationStyles = document.createElement('style');
          animationStyles.textContent = \`
            @keyframes pulseGlow {
              0%, 100% { opacity: 0.8; }
              50% { opacity: 1; }
            }
            @keyframes rotatePattern {
              0% { transform: translate(-50%, -50%) rotate(0deg); }
              100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .article:hover {
              transform: translateY(-8px);
              border-color: var(--gold);
              box-shadow: 0 20px 40px rgba(212, 175, 55, 0.15);
            }
            .article::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: linear-gradient(90deg, var(--gold), var(--gold-dark));
              transform: translateX(-100%);
              transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .article:hover::before {
              transform: translateX(0);
            }
            .newsletter-input:focus {
              outline: none;
              border-color: var(--gold);
              box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
            }
            .newsletter-submit:hover {
              background: var(--gold);
              color: var(--black);
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
            }
          \`;
          document.head.appendChild(animationStyles);
        `
      }} />
    </>
  )
}