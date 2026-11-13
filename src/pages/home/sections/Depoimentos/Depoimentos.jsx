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
      'Gente, o material está impecável. Acabei de dar uma olhada com mais calma. Gostaria de agradecer vocês pelo trabalho, dedicação e pelo empenho em fazerem parte dessa reformulação que estamos fazendo pelo nosso esporte e pela nossa universidade.',
    nome: 'Lucas Robson',
    cargo: 'Professor de Educação Física · Projeto de Design',
  },
  {
    id: 5,
    texto:
      'Contratamos a empresa junior de design Arco, para desenvolver a identidade visual completa do novo museu de Geociencias da UFAM, e para criar infográficos para serem colados e usados no museu. Ambos os serviços foram feitos com profissionalismo, cordialidade e pontualidade. Vale destacar que houve momentos que foram necessárias várias reuniões para ajustes e durante todo este processo, que durou quase 1 ano, os colaboradores da empresa foram muito prestativos e pacientes. Para todos os serviços, foram gerados orçamentos e contratos prévios e, após as entregas, foram geradas notas ficais dos serviços executados. Assim, recomendo os serviços da Arco e dou 5 estrelas de um total de 5 por tudo.',
    nome: 'Tiago Felipe Arruda Maia',
    cargo: 'Professor e Coordenador de geologia da UFAM',
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
              <p
                onScroll={(e) => {
                  const elemento = e.currentTarget;

                  elemento.classList.add('scrolling');

                  clearTimeout(elemento.scrollTimeout);

                  elemento.scrollTimeout = setTimeout(() => {
                    elemento.classList.remove('scrolling');
                  }, 700);
                }}
              >
                “{depoimento.texto}”
              </p>

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
