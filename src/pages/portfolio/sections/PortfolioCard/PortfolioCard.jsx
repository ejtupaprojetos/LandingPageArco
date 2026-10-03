import './PortfolioCard.css'

function PortfolioCard({ projeto }) {
  const { titulo, ano, categoria, descricao, imagem } = projeto

  return (
    <article className="portfolio-card">
      <div className="portfolio-card-imagem">
        <img src={imagem} alt={titulo} />
        <span className="portfolio-card-tag">{categoria}</span>
      </div>

      <div className="portfolio-card-conteudo">
        <h3>{titulo}</h3>
        <span className="portfolio-card-ano">{ano}</span>
        <p>{descricao}</p>
      </div>
    </article>
  )
}

export default PortfolioCard
