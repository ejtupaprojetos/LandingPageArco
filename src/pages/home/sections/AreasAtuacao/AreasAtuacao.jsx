import './AreasAtuacao.css'

import designIcon from '../../../../assets/icons/icon_design.png'
import arquiteturaIcon from '../../../../assets/icons/icon_arquitetura.png'

import {
  Eye,
  Megaphone,
  BookOpen,
  Monitor,
  Package,
  Sparkles,
  Building2,
  Armchair,
  Home,
  Layers,
  User,
} from 'lucide-react'

const areas = [
  {
    id: 'design',
    icon: designIcon,
    title: 'Design',
    description:
      'Projetos de design que unem estética, estratégia e funcionalidade para dar forma a ideias e marcas.',
    items: [
      { label: 'Identidade Visual', icon: Eye, color: 'purple' },
      { label: 'Promocionais', icon: Megaphone, color: 'yellow' },
      { label: 'Editoração', icon: BookOpen, color: 'dark' },
      { label: 'Interface', icon: Monitor, color: 'orange' },
      { label: 'Embalagem', icon: Package, color: 'orange' },
      { label: 'Sinalização', icon: Sparkles, color: 'purple' },
    ],
  },
  {
    id: 'arquitetura',
    icon: arquiteturaIcon,
    title: 'Arquitetura',
    description:
      'Arquitetura aplicada de forma estratégica para transformar espaços em experiências funcionais e significativas.',
    items: [
      { label: 'Projeto arquitetônico', icon: Building2, color: 'purple' },
      { label: 'Projeto de interiores', icon: Armchair, color: 'yellow' },
      { label: 'Reforma', icon: Home, color: 'dark' },
      { label: 'Paisagismo', icon: Layers, color: 'purple' },
      { label: 'Consultoria', icon: User, color: 'orange' },
    ],
  },
]

function AreasAtuacao() {
  return (
    <section id="servicos" className="areas">
      <div className="container">
        <h2 className="section-title">Áreas de Atuação</h2>

        <p className="section-subtitle areas-subtitle">
          Oferecemos soluções completas para transformar seus projetos:
        </p>

        <div className="areas-grid">
          {areas.map(({ id, icon, title, description, items }) => (
            <article key={id} className={'areas-card areas-card--' + id}>
              <span className="areas-icon">
                <img src={icon} alt={title} />
              </span>

              <h3>{title}</h3>

              <p>{description}</p>

              <ul className="areas-items">
                {items.map(({ label, icon: ItemIcon, color }) => (
                  <li key={label} className="areas-item">
                    <span className={'areas-item-icon areas-item-icon--' + color}>
                      <ItemIcon size={16} strokeWidth={2} />
                    </span>
                    <span className="areas-item-label">{label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a href="#portfolio" className="link-arrow areas-link">
          <span className="link-arrow-text">Ver detalhes</span>
          <span className="link-arrow-icon">›</span>
        </a>

      </div>
    </section>
  )
}

export default AreasAtuacao