import { useState } from 'react'
import './Faq.css'

// lembar de adicionar as respostas reais quando a arco manda
const perguntas = [
  {
    id: 'prazo',
    pergunta: 'Quanto tempo leva para desenvolver um projeto?',
    resposta:
      ' texto de resposta',
  },
  {
    id: 'processo',
    pergunta: 'Como funciona o processo de desenvolvimento?',
    resposta:
      'texto de resposta',
  },
  {
    id: 'outras-cidades',
    pergunta: 'Vocês atendem projetos em outras cidades?',
    resposta:
      'texto de resposta',
  },
  {
    id: 'diferenca-empresa-junior',
    pergunta: 'Qual a diferença entre empresa júnior e empresa convencional?',
    resposta:
      'texto de resposta',
  },
  {
    id: 'pagamento',
    pergunta: 'Como é feito o pagamento?',
    resposta:
      'texto de resposta',
  },
  {
    id: 'revisoes',
    pergunta: 'Vocês fazem revisões no projeto?',
    resposta:
      'texto de resposta',
  },
]

function Faq() {
  // Guarda só o id da pergunta aberta (não uma lista) — por isso abrir uma
  // pergunta nova fecha a anterior automaticamente. Se quiser permitir
  // várias abertas ao mesmo tempo, troque isso por um array/Set de ids.
  const [abertoId, setAbertoId] = useState(null)

  function alternar(id) {
    setAbertoId((atual) => (atual === id ? null : id))
  }

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title faq-title">Dúvidas Frequentes</h2>
        <p className="section-subtitle faq-subtitle">
          Respondemos as principais perguntas sobre nossos serviços.
        </p>

        <div className="faq-lista">
          {perguntas.map(({ id, pergunta, resposta }) => {
            const aberto = abertoId === id

            return (
              <div key={id} className="faq-item">
                <button
                  type="button"
                  className="faq-pergunta"
                  onClick={() => alternar(id)}
                  aria-expanded={aberto}
                >
                  <span>{pergunta}</span>
                  <span className={`faq-seta ${aberto ? 'aberta' : ''}`}>⌄</span>
                </button>

                {aberto && <p className="faq-resposta">{resposta}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
