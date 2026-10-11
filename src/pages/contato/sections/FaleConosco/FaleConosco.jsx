import './FaleConosco.css'
import iconInstagram from '../../../../assets/icons/instagram_amarelo.png'
import iconLinkedIn from '../../../../assets/icons/linkedin_amarelo.png'
import iconBehance from '../../../../assets/icons/behance_amarelo.png'
import iconFacebook from '../../../../assets/icons/facebook_amarelo.png'
import iconEmail from '../../../../assets/icons/email_amarelo.png'
import iconPhone from '../../../../assets/icons/smartphone_amarelo.png'
import iconlocalizacao from '../../../../assets/icons/localizacao_amarelo.png'


const contatos = [
  { id: 'email', icon: iconEmail, label: 'Email', valor: 'arcoempresajunior@gmail.com' , href: 'https://mail.google.com/?view=cm&fs=1&to=arcoempresajunior@gmail.com' },
  { id: 'telefone-maria', icon: iconPhone, label: 'Telefone', valor: '(92) 8262-1787' , href: 'https://wa.me/559282621787' },
  { id: 'telefone-gabriela', icon: iconPhone, label: 'Telefone', valor: '(92) 8255-6105', href: 'https://wa.me/559282556105' },
  { id: 'endereco', icon: iconlocalizacao, label: 'Endereço', valor: 'Av. Ephigênio Salles, 1327, Sala E, Box 77, Manaus - AM' },
]

const horarios = [
  { dia: 'Segunda a Sexta', hora: '9h às 18h' },
  { dia: 'Sábado', hora: '9h às 13h' },
  { dia: 'Domingo', hora: 'Fechado' },
]

const redesSociais = [
  { id: 'instagram', label: 'Instagram', icon: iconInstagram, href: 'https://www.instagram.com/arcoej' },
  { id: 'linkedin', label: 'LinkedIn', icon: iconLinkedIn, href: 'https://www.linkedin.com/company/arcoej/home/' },
  { id: 'behance', label: 'Behance', icon: iconBehance, href: 'https://www.behance.net/arcoej' },
  { id: 'facebook', label: 'Facebook', icon: iconFacebook, href: 'https://www.facebook.com/profile.php?id=100062942905993' },

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
        {contatos.map(({ id, icon, label, valor, href }) => (
          <li key={id}>
            <span className="fale-conosco-icone">
              <img src={icon} alt={label} />
            </span>
            <div>
              <strong>{label}</strong>
              {href ? (
                <a href={href}>{valor}</a>
              ) : (
                <span>{valor}</span>
              )}
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
              <img src={icon} alt={label} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaleConosco
