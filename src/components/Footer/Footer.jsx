import { Link } from 'react-router-dom'
import './Footer.css'
import iconInstagram from '../../assets/icons/icon_instagram.png'
import iconLinkedIn from '../../assets/icons/icon_linkedin.png'
import iconBehance from '../../assets/icons/icon_behance.png'
import iconFacebook from '../../assets/icons/icon_facebook.png'

const linksRapidos = [
  { label: 'Home', to: '/' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Sobre Nós', to: '/sobre' },
]

const contato = [
  { label: 'contato@arco.com.br', href: 'mailto:contato@arco.com.br' },
  { label: '(00) 0000-0000', href: 'tel:+550000000000' },
  { label: 'Manaus, AM', href: '#' },
]

const redesSociais = [
  { label: 'Instagram', icon: iconInstagram, href: 'https://www.instagram.com/arco' },
  { label: 'LinkedIn', icon: iconLinkedIn, href: 'https://www.linkedin.com/company/arco' },
  { label: 'Behance', icon: iconBehance, href: 'https://www.behance.net/arco' },
  { label: 'Facebook', icon: iconFacebook, href: 'https://www.facebook.com/arco' },
]
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>ARCO</h3>
          <p>
            Empresa júnior de arquitetura e design, transformando ideias em
            soluções criativas.
          </p>
        </div>

        <div>
          <h4>Links Rápidos</h4>
          <ul>
            {linksRapidos.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul>
            {contato.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Redes Sociais</h4>
          <div className="footer-social">
            {redesSociais.map(({ label, icon, href }) => (
              <a key={label} href={href} aria-label={label}>
                <img src={icon} alt={label} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-separator">
         <p className="footer-copy">© 2026 ARCO. Todos os direitos reservados.</p>
      </div>
    
          
      
    </footer>
  )
}

export default Footer
