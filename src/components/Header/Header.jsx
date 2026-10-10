import { useState } from 'react'
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
  const [menuAberto , setMenuAberto] = useState(false)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo">
          <img src={logoArco} alt="Logo ARCO" className="header-logo-img" />
          <span className="header-logo-text">Arquitetura e Design</span>
        </Link>

        <button
          className="header-menu-botao"
          type="button"
          aria-label={menuAberto ? 'Fechar menu': 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={()=> setMenuAberto(!menuAberto)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        <nav className={`header-nav ${menuAberto ? 'header-nav--aberto' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                  onClick={() => setMenuAberto(false)}
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
