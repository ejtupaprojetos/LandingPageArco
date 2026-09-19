import {useEffect, useState} from 'react'
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
  {
    id: 4,
    texto:
      'A ARCO transformou completamente minha loja. O projeto arquitetônico superou todas as expectativas!',
    nome: 'Maria Silva',
    cargo: 'Empresária',
  },
  {
    id: 5,
    texto:
      'O design gráfico criado pela equipe deu uma identidade profissional à nossa startup. Recomendo!',
    nome: 'João Santos',
    cargo: 'Fundador · TechStart',
  },
   {
    id: 6,
    texto:
      'Trabalho impecável no desenvolvimento do nosso site. Equipe comprometida e criativa.',
    nome: 'Ana Costa',
    cargo: 'Diretora de Marketing',
  },
]




function Depoimentos() {

  const [indiceAtual, setIndiceAtual] = useState(0)
  const [posicaoInicial, setPosicaoInicial] = useState(null)
  const [autoplaAtivo, setAutoplayAtivo] = useState(false)
  const limiteArraste= 50

  const quantidadeCardsVisiveis = window.innerWidth <= 768 ? 1 : 3
  const quantidadeGrupos = Math.ceil(depoimentos.length / quantidadeCardsVisiveis)
  

 useEffect(()=>{
   if(!autoplaAtivo){
    return 
   }
   const intervalo = setTimeout(()=>{
    if(indiceAtual===0){
      setIndiceAtual(1)
      }
   },3000)
    return () => clearInterval(intervalo)
  }, [autoplaAtivo, indiceAtual])



 const posicaoIndicador = indiceAtual 
 

  function proximoDepoimento(){
    if(indiceAtual === quantidadeGrupos - 1){
      setIndiceAtual(0)
    }else{
      setIndiceAtual(indiceAtual + 1)
    }
  }

  function depoimentoAnterior(){
    if(indiceAtual === 0){
      setIndiceAtual(quantidadeGrupos - 1)
    }else{
      setIndiceAtual(indiceAtual - 1)
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
        
      

      <div className="depoimentos-carrossel"
        onMouseEnter={()=> setAutoplayAtivo(true)}
        onMouseLeave={()=> setAutoplayAtivo(false)}
      >
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
      {Array.from({
        length: quantidadeGrupos,
      }).map((_, indice)=>(
        <button
        key={indice}
        type="button"
        className={
          posicaoIndicador === indice ? 'bolinha ativa' : 'bolinha'
        }
        onClick={() => setIndiceAtual(indice)}
        aria-label={`Ir para o grupo ${indice + 1}`}
        />
      ))}
      </div>
    </div>
    </section>
  )
}

export default Depoimentos
