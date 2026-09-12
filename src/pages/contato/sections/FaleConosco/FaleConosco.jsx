import './FaleConosco.css'
import iconInstagram from '../../../../assets/icons/icon_instagram.png'
import iconLinkedIn from '../../../../assets/icons/icon_linkedin.png'
import iconBehance from '../../../../assets/icons/icon_behance.png'
import iconFacebook from '../../../../assets/icons/icon_facebook.png'


function IconMail() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  )
}

// Ícones de exemplo (SVG). Se você já usa os mesmos PNGs no Footer,
// importe-os aqui do mesmo jeito e troque no array `redesSociais` abaixo.


const contatos = [
  { id: 'email', Icon: IconMail, label: 'Email', valor: 'contato@arco.com.br' },
  { id: 'telefone', Icon: IconPhone, label: 'Telefone', valor: '(00) 0000-0000' },
  { id: 'endereco', Icon: IconPin, label: 'Endereço', valor: 'Rua Exemplo, 123' },
]

const horarios = [
  { dia: 'Segunda a Sexta', hora: '9h às 18h' },
  { dia: 'Sábado', hora: '9h às 13h' },
  { dia: 'Domingo', hora: 'Fechado' },
]

const redesSociais = [
  { id: 'instagram', label: 'Instagram', icon: iconInstagram, href: '#' },
  { id: 'linkedin', label: 'LinkedIn', icon: iconLinkedIn, href: '#' },
  { id: 'behance', label: 'Behance', icon: iconBehance, href: '#' },
  { id: 'facebook', label: 'Facebook', icon: iconFacebook, href: '#' },
]

function FaleConosco() {
  return (
    <div className="fale-conosco">
      <h2>Fale conosco</h2>
      <p>
        Preencha o formulário ao lado ou entre em contato através dos nossos
        canais. Responderemos o mais breve possível!
      </p>

      <ul className="fale-conosco-lista">
        {contatos.map(({ id, Icon, label, valor }) => (
          <li key={id}>
            <span className="fale-conosco-icone">
              <Icon />
            </span>
            <div>
              <strong>{label}</strong>
              <span>{valor}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="fale-conosco-horario">
        <h3>Horário de Atendimento</h3>
        <ul>
          {horarios.map(({ dia, hora }) => (
            <li key={dia}>
              {dia}: {hora}
            </li>
          ))}
        </ul>
      </div>

      <div className="fale-conosco-social">
        <h3>Nos siga nas redes sociais</h3>
        <div className="fale-conosco-social-icons">
          {redesSociais.map(({ id, label, icon, href }) => (
            <a key={id} href={href} aria-label={label}>
              {/*<img src={icon} alt={label} /> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaleConosco
