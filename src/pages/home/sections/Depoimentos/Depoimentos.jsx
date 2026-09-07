import {useState} from 'react'
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

  const [indiceAtual, setIndiceAtual] = useState(0)
  const [posicaoInicial, setPosicaoInicial] = useState(null)
  const limiteArraste= 50

  const posicaoIndicador = Math.min(2, Math.floor((indiceAtual/depoimentos.length)*3)

  )
 

  function proximoDepoimento(){
    if(indiceAtual === depoimentos.length-1){
      setIndiceAtual(0)
    }else{
      setIndiceAtual(indiceAtual + 1)
    }
  }

  function depoimentoAnterior(){
    if(indiceAtual === 0){
      setIndiceAtual(depoimentos.length-1)
    }else{
      setIndiceAtual(indiceAtual -1)
    }
  }

  

  function iniciarArraste(evento){
    setPosicaoInicial(evento.clientX)
    
  }

 

  function finalizarArraste(evento){
    const posicaoFinal = evento.clientX

    const distanciaArraste = posicaoFinal - posicaoInicial

    if(Math.abs(distanciaArraste)>=limiteArraste){
      if(distanciaArraste < 0){
        proximoDepoimento()
      }else{
        depoimentoAnterior()
      }
    }

   
    setPosicaoInicial(null)
  }



  return (
    <section className="depoimentos">
      <div className="container">
        <h2 className="section-title">Feedback de Clientes</h2>
        <p className="section-subtitle">Depoimentos de quem confiou no nosso trabalho</p>
        
      

      <div className="depoimentos-carrossel">
        <div 
         className="depoimentos-trilho"
         onPointerDown={iniciarArraste}
         onPointerUp={finalizarArraste}
         style={{
          transform: `translateX(-${indiceAtual * 100}%)`,
         }}
        >
          {depoimentos.map((depoimento)=>(
            <blockquote 
              key={depoimento.id}
              className="depoimento-card"
            >
              <p>“{depoimento.texto}”</p>

              <footer>
                <strong>{depoimento.nome}</strong>
                <span>{depoimento.cargo}</span>
              </footer>
            </blockquote>
          ))}
            
            
        </div>
      </div>

      <div className="indicadores">
        <span 
          className={
            posicaoIndicador===0 ? 'bolinha ativa' : 'bolinha'
          }
        />
        <span className={
          posicaoIndicador === 1 ? 'bolinha ativa' : 'bolinha'
        }
        />
        <span className={
          posicaoIndicador === 2 ? 'bolinha ativa' : 'bolinha'
        }
        />
      </div>
    </div>
    </section>
  )
}

export default Depoimentos
