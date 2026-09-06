import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>
          Transformando
          <br />
          Ideias em Realidade
        </h1>
        <p>
          Somos a ARCO, uma empresa júnior com soluções criativas para o seu
          projeto sair do papel
        </p>
        <div className="hero-actions">
          <a href="#contato" className="btn btn-primary">
            Fale conosco
          </a>
          <a href="#portfolio" className="btn btn-secondary">
            Portfólio
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
