import './MovimentoEj.css'
import movimentoImg from '../../../../assets/images/sobre/movimento_ej.jpg'
import logoMovimento from '../../../../assets/images/sobre/logo_movimento_ej.png'
import logoBrasilJunior from '../../../../assets/images/sobre/logo_brasil_junior.png'

const estatisticas = [
  { id: 'empresas', numero: '+1200', legenda: 'empresas júniores' },
  { id: 'membros', numero: '+30 mil', legenda: 'membros' },
]

const logos = [
  { id: 'movimento', src: logoMovimento, alt: 'Movimento Empresa Júnior' },
  { id: 'brasil-junior', src: logoBrasilJunior, alt: 'Brasil Júnior' },
]

function MovimentoEj() {
  return (
    <section className="movimento">
      <div className="container movimento-grid">
        <div className="movimento-texto">
          <h2>Movimento Empresa Júnior</h2>
          <p>
            Fazemos parte do maior movimento de empreendedorismo universitário do
            Brasil, formando jovens líderes e transformando o mercado.
          </p>
          <p>
            Através das empresas juniores, estudantes desenvolvem projetos reais,
            ganham experiência profissional e contribuem para o desenvolvimento da
            sociedade.
          </p>

          <div className="movimento-numeros">
            {estatisticas.map(({ id, numero, legenda }) => (
              <div key={id}>
                <strong>{numero}</strong>
                <span>{legenda}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="movimento-midia">
          <div className="movimento-imagem">
            <img src={movimentoImg} alt="Equipe da ARCO em evento do Movimento Empresa Júnior" />
          </div>

          <div className="movimento-logos">
            {logos.map(({ id, src, alt }) => (
              <img key={id} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovimentoEj
