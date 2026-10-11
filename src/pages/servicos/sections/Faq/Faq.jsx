import { useState } from 'react'
import './Faq.css'

const perguntas = [
  {
    id: 'prazo',
    pergunta: 'Quanto tempo leva para desenvolver um projeto?',
    resposta:
      'O prazo depende da complexidade e do escopo do projeto. Para demandas pontuais, o desenvolvimento pode levar alguns dias; já projetos que envolvem mais etapas, peças ou revisões podem levar algumas semanas.',
  },
  {
    id: 'processo',
    pergunta: 'Como funciona o processo de desenvolvimento?',
    resposta:
      'O processo começa com uma reunião inicial de alinhamento, para entender a demanda, objetivos e expectativas do projeto. A partir disso, o desenvolvimento é dividido em etapas. Ao final de cada etapa, o cliente recebe uma atualização e é realizada uma reunião para apresentação, aprovação ou solicitação de ajustes. Após os alinhamentos, o projeto segue para a próxima etapa, mantendo o cliente envolvido durante todo o processo até a entrega final.',
  },
  {
    id: 'outras-cidades',
    pergunta: 'Vocês atendem projetos em outras cidades?',
    resposta:
      'Sim! Atendemos projetos em outras cidades. Todo o processo pode ser realizado de forma remota, com reuniões e alinhamentos por videoconferência, mantendo o cliente atualizado durante todas as etapas do projeto.',
  },
  {
    id: 'diferenca-empresa-junior',
    pergunta: 'Qual a diferença entre empresa júnior e empresa convencional?',
    resposta:
      'A Empresa Júnior é formada e gerida por estudantes universitários, que desenvolvem projetos reais com orientação de professores e profissionais. Por estar inserida no ambiente acadêmico e ser composta por estudantes, consegue oferecer serviços com preços mais acessíveis que os praticados por empresas convencionais, ao mesmo tempo em que proporciona experiência prática e profissional aos seus integrantes.',
  },
  {
    id: 'pagamento',
    pergunta: 'Como é feito o pagamento?',
    resposta:
      'O pagamento pode ser realizado por Pix, cartão de crédito, cartão de débito ou boleto bancário, conforme as condições definidas para cada projeto.',
  },
  {
    id: 'revisoes',
    pergunta: 'Vocês fazem revisões no projeto?',
    resposta:
      'Sim. As revisões fazem parte do processo de desenvolvimento. Ao final de cada etapa, o projeto é apresentado ao cliente para aprovação e, caso necessário, são realizados ajustes antes de seguir para a próxima etapa.',
  },
]

function Faq() {
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
                  <span className={`faq-seta ${aberto ? 'aberta' : ''}`}>
                    ⌄
                  </span>
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
