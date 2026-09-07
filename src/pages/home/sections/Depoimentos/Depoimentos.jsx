import './Depoimentos.css'

const depoimentos = [
  {
    id: 1,
    texto:
      'A ARCO transformou completamente minha loja. O projeto arquitetônico superou todas as expectativas!',
    nome: 'Maria Silva',
    cargo: 'Empresária',
  },
  {
    id: 2,
    texto:
      'O design gráfico criado pela equipe deu uma identidade profissional à nossa startup. Recomendo!',
    nome: 'João Santos',
    cargo: 'Fundador · TechStart',
  },
  {
    id: 3,
    texto:
      'Trabalho impecável no desenvolvimento do nosso site. Equipe comprometida e criativa.',
    nome: 'Ana Costa',
    cargo: 'Diretora de Marketing',
  },
]

function Depoimentos() {
  return (
    <section className="depoimentos">
      <div className="container">
        <h2 className="section-title">Feedback de Clientes</h2>
        <p className="section-subtitle">Depoimentos de quem confiou no nosso trabalho</p>

        <div className="depoimentos-grid">
          {depoimentos.map(({ id, texto, nome, cargo }) => (
            <blockquote key={id} className="depoimento-card">
              <p>“{texto}”</p>
              <footer>
                <strong>{nome}</strong>
                <span>{cargo}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
