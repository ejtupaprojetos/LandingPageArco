import './ProjetosDestaque.css'
import agexImg from '../../../../assets/images/agex_con.png'
import bareImg from '../../../../assets/images/bare_jr.png'
import miranteImg from '../../../../assets/images/mirante.png'
import queroImg from '../../../../assets/images/quero_papier.png'

const projetos = [
  { id: 'agexcom', categoria: 'Arquitetura', titulo: 'Agexcom', imagem: agexImg },
  { id: 'mirante', categoria: 'Arquitetura', titulo: 'Projeto Mirante', imagem: miranteImg },
  { id: 'quero-papier', categoria: 'Design', titulo: 'Quero Papier', imagem: queroImg },
  { id: 'bare-junior', categoria: 'Design', titulo: 'Baré Júnior', imagem: bareImg },
]

function ProjetosDestaque() {
  return (
    <section id="portfolio" className="projetos">
      <div className="container">
        <h2 className="section-title projetos-title">Projetos de Destaque</h2>

        <div className="projetos-grid">
          {projetos.map(({ id, categoria, titulo, imagem }) => (
            <article key={id} className="projeto-card">
              <div className="projeto-thumb">
                <span className="projeto-tag">{categoria}</span>
                <img src={imagem } alt={titulo} />
                
              </div>
              <h3>{titulo}</h3>
            </article>
          ))}
        </div>

        <a href="#portfolio" className="link-arrow projetos-link">
          <span className="link-arrow-text">Ver portfólio completo</span>
          <span className="link-arrow-icon">›</span>
        </a>
      </div>
    </section>
  )
}

export default ProjetosDestaque
