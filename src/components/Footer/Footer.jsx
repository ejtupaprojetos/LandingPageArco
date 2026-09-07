import './Footer.css'

const linksRapidos = ['Home', 'Serviços', 'Portfólio', 'Sobre Nós']

const contato = [
  { label: 'contato@arco.com.br', href: 'mailto:contato@arco.com.br' },
  { label: '(00) 0000-0000', href: 'tel:+550000000000' },
  { label: 'Manaus, AM', href: '#' },
]

const redesSociais = ['Instagram', 'LinkedIn', 'Behance', 'Facebook']

function Footer() {
  return (
    <footer id="contato" className="footer">
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
              <li key={link}>
                <a href="#home">{link}</a>
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
            {redesSociais.map((rede) => (
              <a key={rede} href="#" aria-label={rede}>
                {rede.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="footer-copy">© 2026 ARCO. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
