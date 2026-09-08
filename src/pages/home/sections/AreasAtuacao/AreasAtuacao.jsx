import './AreasAtuacao.css'
import designIcon from '../../../../assets/icons/icon_design.png'
import arquiteturaIcon from '../../../../assets/icons/icon_arquitetura.png'


const areas = [
  {
    id: 'design',
    icon: designIcon,
    title: 'Design',
    description:
      'Projetos de design que unem estética, estratégia e funcionalidade para dar forma a ideias e marcas.',
    items: ['Identidade Visual', 'Promocionais', 'Editoração', 'Interface', 'Embalagem', 'Sinalização'],
  },
  {
    id: 'arquitetura',
    icon: arquiteturaIcon,
    title: 'Arquitetura',
    description:
      'Arquitetura aplicada de forma estratégica para transformar espaços em experiências funcionais e significativas.',
    items: ['Projeto arquitetônico', 'Projeto de interiores', 'Reforma', 'Paisagismo', 'Consultoria'],
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
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a href="#portfolio" className="link-arrow areas-link">
          Ver detalhes ›
        </a>
      </div>
    </section>
  )
}

export default AreasAtuacao
