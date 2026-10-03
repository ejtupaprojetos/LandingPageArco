import { Link } from 'react-router-dom'
import './CallToAction.css'

// CTA reutilizável (usado na Home e em Serviços). Título, subtítulo e o
// texto/destino do botão vêm todos por props, então cada página só
// precisa passar o texto certo, sem duplicar o componente.
function CallToAction({ title, subtitle, buttonText = 'Solicitar Orçamento', buttonTo = '/contato' }) {
  return (
    <section className="cta">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link to={buttonTo} className="btn btn-light">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
