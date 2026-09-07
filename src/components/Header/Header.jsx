import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import logoArco from '../../assets/images/logo_arco_vertical.png'
import useIsScrolled from '../../hooks/useIsScrolled'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Sobre nós', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
]

function Header() {
  const isScrolled = useIsScrolled()

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src={logoArco} alt="Logo ARCO" className="header-logo-img" />
          <span className="header-logo-text">Arquitetura e Design</span>
        </Link>

        <nav className="header-nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
