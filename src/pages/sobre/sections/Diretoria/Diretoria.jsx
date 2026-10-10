import './Diretoria.css'

// import das fotos
import diretoraImg from '../../../../assets/images/sobre/diretoria/paula.jpg'
import jeaneImg from '../../../../assets/images/sobre/diretoria/jeane.jpg'
import luizImg from '../../../../assets/images/sobre/diretoria/luiz.jpg'
import evelynImg from '../../../../assets/images/sobre/diretoria/evelyn.jpg'
import paulaImg from '../../../../assets/images/sobre/diretoria/paula.jpg'

// Destaque no topo (a diretora)
const diretora = {
  nome: 'Paula Suellen',
  cargo: 'Diretora da Arco',
  foto: diretoraImg,
}

// Cards dos demais membros — para adicionar alguém, copie um objeto abaixo
const membros = [
  { id: 'jeane', nome: 'Jeane Macelly', cargo: 'Projetos de Design', foto: jeaneImg },
  { id: 'luiz', nome: 'Luiz Henrique', cargo: 'Comunicação e Marketing', foto: luizImg },
  { id: 'evelyn', nome: 'Evelyn Diniz', cargo: 'Administrativo e Financeiro', foto: evelynImg },
  { id: 'paula', nome: 'Paula Suellen', cargo: 'Projetos de Arquitetura', foto: paulaImg },
]

function Diretoria() {
  return (
    <section className="diretoria">
      <div className="container">
        <header className="diretoria-cabecalho">
          <h2>Conheça a Diretoria</h2>
          <p>Pessoas que fazem a ARCO acontecer todos os dias.</p>
        </header>

        <div className="diretoria-destaque">
          <div className="diretoria-destaque-foto">
            <img src={diretora.foto} alt={diretora.nome} />
          </div>
          <h3>{diretora.nome}</h3>
          <span>{diretora.cargo}</span>
        </div>

        <div className="diretoria-divisor" />

        <div className="diretoria-grid">
          {membros.map(({ id, nome, cargo, foto }) => (
            <article key={id} className="diretoria-card">
              <div className="diretoria-card-foto">
                <img src={foto} alt={nome} />
              </div>
              <h3>{nome}</h3>
              <span>{cargo}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Diretoria
