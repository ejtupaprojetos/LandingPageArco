import './ProjetosDestaque.css'

const projetos = [
  { id: 'agexcom', categoria: 'Arquitetura', titulo: 'Agexcom' },
  { id: 'mirante', categoria: 'Arquitetura', titulo: 'Projeto Mirante' },
  { id: 'quero-papier', categoria: 'Design', titulo: 'Quero Papier' },
  { id: 'bare-junior', categoria: 'Design', titulo: 'Baré Júnior' },
]

function ProjetosDestaque() {
  return (
    <section id="portfolio" className="projetos">
      <div className="container">
        <h2 className="section-title projetos-title">Projetos de Destaque</h2>

        <div className="projetos-grid">
          {projetos.map(({ id, categoria, titulo }) => (
            <article key={id} className="projeto-card">
              <div className="projeto-thumb">
                {/* troque por uma <img src={...} alt={titulo} /> quando tiver a foto real do projeto */}
                <span className="projeto-tag">{categoria}</span>
              </div>
              <h3>{titulo}</h3>
            </article>
          ))}
        </div>

        <a href="#portfolio" className="link-arrow projetos-link">
          Ver portfólio completo ›
        </a>
      </div>
    </section>
  )
}

export default ProjetosDestaque
