import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="container">
          <div className="nav-container">
            <Link href="/" className="logo-text">
              Illuminate Avenue
            </Link>
            <ul className="nav-menu">
              <li><Link href="/strategy">Strategy</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            <Link href="/contact" className="nav-cta">
              Connect With Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}