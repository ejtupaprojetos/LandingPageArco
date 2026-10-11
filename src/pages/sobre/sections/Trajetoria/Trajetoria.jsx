import './Trajetoria.css'

// ─── Linha do tempo ───
// Cada item do array vira uma coluna na linha do tempo. Para completar,
// é só trocar os textos dos itens de exemplo (ou adicionar/remover itens —
// a linha se ajusta sozinha ao número de itens).
const marcos = [
  {
    ano: '2017',
    titulo: 'Criação da Arco',
    descricao: 'No dia 13 de novembro foi fundada a Arco empresa júnior.',
  },
  {
    ano: '2017',
    titulo: 'Baré Júnior',
    descricao: 'No dia 28 de dezembro a Arco foi federada pela Baré Júnior.',
  },
  { ano: 'Ano', titulo: 'Fato temporal', descricao: 'Descrição breve do fato aqui.' },
  { ano: 'Ano', titulo: 'Fato temporal', descricao: 'Descrição breve do fato aqui.' },
  { ano: 'Ano', titulo: 'Fato temporal', descricao: 'Descrição breve do fato aqui.' },
  { ano: 'Ano', titulo: 'Fato temporal', descricao: 'Descrição breve do fato aqui.' },
]

function Trajetoria() {
  return (
    <section className="trajetoria">
      <div className="container">
        <h2>Nossa Trajetória</h2>

        <ol
          className="trajetoria-lista"
          style={{ gridTemplateColumns: `repeat(${marcos.length}, 1fr)` }}
        >
          {marcos.map(({ ano, titulo, descricao }, indice) => (
            <li key={indice} className="trajetoria-item"
            style={{'--indice': indice}}>
              <span className="trajetoria-ano">{ano}</span>
              <div className="trajetoria-marcador">
                <span className="trajetoria-ponto" />
              </div>
              <h3>{titulo}</h3>
              <p>{descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Trajetoria
