import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Illuminate Avenue</h3>
            <p className="footer-tagline">Strategic marketing excellence that transforms businesses and creates lasting competitive advantages.</p>
          </div>
          <div className="footer-nav">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/strategy">Strategy</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-connect">
            <h4>Connect</h4>
            <ul>
              <li>Email:</li>
              <li><a href="mailto:info@illuminateavenue.com">info@illuminateavenue.com</a></li>
            </ul>
          </div>
          <div className="footer-follow">
            <h4>Follow</h4>
            <p>Strategic insights and industry intelligence delivered weekly.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Illuminate Avenue. All rights reserved. | Strategic Marketing Excellence</p>
        </div>
      </div>
    </footer>
  )
}