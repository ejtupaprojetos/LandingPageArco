import './NossaHistoria.css'
import historiaImg from '../../../../assets/images/sobre/nossa_historia_1.jpg'

function NossaHistoria() {
  return (
    <section className="historia">
      <div className="container historia-grid">
        <div className="historia-texto">
          <h2>Nossa História</h2>
          <p>
            Idealizada por um grupo de alunas de Arquitetura e Design da Ufam.
            Ambos os grupos se sentiam inconformadas com o ensino metódico da
            graduação e no dia <strong>13 de novembro de 2017</strong> a proposta
            da Arco foi apresentada e aconteceu sua fundação.
          </p>
          <p>
            Em <strong>28 de dezembro</strong> do mesmo ano fomos federados a
            Baré, federação de empresas juniores do estado do Amazonas (a maior
            federação!) para nos conectarmos a uma rede imensa de empresas
            juniores, não apenas no Norte, mas no Brasil inteiro.
          </p>
        </div>

        <div className="historia-imagem">
          <img src={historiaImg} alt="Equipe da ARCO reunida" />
        </div>
      </div>
    </section>
  )
}

export default NossaHistoria
