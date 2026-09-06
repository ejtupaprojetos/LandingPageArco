import './Header.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="header-logo">
          <span className="header-logo-badge">AD</span>
          <span className="header-logo-text">Arquitetura e Design</span>
        </a>

        <nav className="header-nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
