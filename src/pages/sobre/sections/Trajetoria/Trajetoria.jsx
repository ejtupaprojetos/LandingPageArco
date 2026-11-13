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
  { ano: '2018', titulo: 'EJ de Alto Crescimento', descricao: 'A ARCO bateu a meta de Alto Crescimento, comprovando sua evolução nos resultados e na vivência empresarial dentro do Movimento Empresa Júnior.' },
  { ano: '2021', titulo: 'Troféu Empresa Junior Reviravolta', descricao: 'A ARCO foi distinguida com este troféu no Prêmio Baré, marcando um momento de superação e retoma de destaque no estado do Amazonas.' },
  { ano: '2023', titulo: 'Empresa Júnior Inspiradora', descricao: 'A ARCO recebeu a placa de reconhecimento máximo no Prêmio Baré por ser a Empresa Júnior com maior influência e referência em colaboratividade na rede amazonense.' },
  { ano: '2025', titulo: 'Reconhecimento "EJ no Verde" no Amazônidas', descricao: 'A empresa foi reconhecida no palco do evento Amazônidas por alcançar os seus resultados e bater as metas estabelecidas até abril de 2025.' },
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
