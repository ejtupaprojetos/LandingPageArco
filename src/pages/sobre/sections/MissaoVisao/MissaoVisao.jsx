import './MissaoVisao.css'
import iconMissao from '../../../../assets/icons/icon_missao.png'
import iconVisao from '../../../../assets/icons/icon_visao.png'

const cards = [
  {
    id: 'missao',
    icon: iconMissao,
    titulo: 'Missão',
    texto:
      'Ser referência, executando projetos de alto impacto, crescendo exponencialmente e desenvolvendo seus membros.',
  },
  {
    id: 'visao',
    icon: iconVisao,
    titulo: 'Visão',
    texto: 'Ser uma EJ conectada, de alto crescimento e de alto impacto.',
  },
]

function MissaoVisao() {
  return (
    <section className="missao-visao">
      <div className="container missao-visao-grid">
        {cards.map(({ id, icon, titulo, texto }) => (
          <article key={id} className="missao-visao-card">
            <span className="missao-visao-icone">
              <img src={icon} alt="" />
            </span>
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MissaoVisao
