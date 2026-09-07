import './AreasAtuacao.css'

function IconDesign() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 3 5 7l4 4M15 21l4-4-4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4 10 20" strokeLinecap="round" />
    </svg>
  )
}

function IconArquitetura() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21h18M4 21V9l8-6 8 6v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const areas = [
  {
    id: 'design',
    Icon: IconDesign,
    title: 'Design',
    description:
      'Projetos de design que unem estética, estratégia e funcionalidade para dar forma a ideias e marcas.',
    items: ['Identidade Visual', 'Promocionais', 'Editoração', 'Interface', 'Embalagem', 'Sinalização'],
  },
  {
    id: 'arquitetura',
    Icon: IconArquitetura,
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
          {areas.map(({ id, Icon, title, description, items }) => (
            <article key={id} className={'areas-card areas-card--' + id}>
              <span className="areas-icon">
                <Icon />
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
