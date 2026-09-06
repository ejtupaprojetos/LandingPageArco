import './QuemSomos.css'

function QuemSomos() {
  return (
    <section id="sobre" className="quem-somos">
      <div className="container quem-somos-grid">
        <div className="quem-somos-text">
          <h2>Quem Somos</h2>
          <p>
            Somos uma empresa júnior dentro da Universidade Federal do Amazonas
            (UFAM), considerada um projeto de extensão dos cursos de
            Arquitetura e Design voltado para estimular o empreendedorismo.
          </p>
          <a href="#sobre" className="link-arrow">
            Conheça a Arco ›
          </a>
        </div>

        <div className="quem-somos-image">
          {/* troque por <img src={equipeFoto} alt="Equipe ARCO" /> quando tiver a foto */}
        </div>
      </div>
    </section>
  )
}

export default QuemSomos
