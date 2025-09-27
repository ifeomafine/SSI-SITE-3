//import './globals.css'//fix: correct css import path
import '../styles/globals.css'

export const metadata = {
  title: 'SSI — Soil & Silicon Initiative',
  description: 'Practical farming, project management, and AI for sustainable income.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <div className="brand">
              <div className="logo">SSI</div>
              <div className="brand-text">
                <div className="name">Soil & Silicon Initiative</div>
                <div className="tag">From Soil to Silicon — Smart Farming. Real Income.</div>
              </div>
            </div>
            <nav className="nav-links">
              <a href="/">Home</a>
              <a href="/blog">Blog</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">© {new Date().getFullYear()} Soil & Silicon Initiative — Lagos, Nigeria</div>
        </footer>
      </body>
    </html>
  )
}
