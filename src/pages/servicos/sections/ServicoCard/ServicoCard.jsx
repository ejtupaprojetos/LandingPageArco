import { useState } from 'react'
import './ServicoCard.css'

// `servico` é um objeto vindo do array em Servicos.jsx, com o formato:
// { titulo, descricao, itens, icon, imagens, layout, imagePosition }
function ServicoCard({ servico }) {
  const { titulo, descricao, itens, icon, imagens, layout, imagePosition } = servico
  const [indiceAtual, setIndiceAtual] = useState(0)

  const classeCard = [
    'servico-card',
    layout === 'horizontal' ? 'servico-card--horizontal' : '',
    layout === 'horizontal' && imagePosition === 'right' ? 'servico-card--imagem-direita' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={classeCard}>
      <div className="servico-card-imagem">
        <img src={imagens[indiceAtual]} alt={titulo} />

        {/* o carrossel (as bolinhas) só aparece se o serviço tiver mais de uma imagem */}
        {imagens.length > 1 && (
          <div className="servico-card-dots">
            {imagens.map((_, indice) => (
              <button
                key={indice}
                type="button"
                aria-label={`Ver imagem ${indice + 1} de ${titulo}`}
                className={indice === indiceAtual ? 'ativo' : ''}
                onClick={() => setIndiceAtual(indice)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="servico-card-conteudo">
        <span className="servico-card-icone">
          <img src={icon} alt="" />
        </span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <ul>
          {itens.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ServicoCard
