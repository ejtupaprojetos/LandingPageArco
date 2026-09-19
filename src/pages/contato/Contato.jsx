import PageBanner from '../../components/PageBanner/PageBanner'
import FaleConosco from './sections/FaleConosco/FaleConosco'
import FormularioContato from './sections/FormularioContato/FormularioContato'
import MapaLocalizacao from './sections/MapaLocalizacao/MapaLocalizacao'
import './Contato.css'

function Contato() {
  return (
    <>
      <PageBanner
        title="Vamos tornar esse sonho real?"
        subtitle="Estamos prontos para ouvir suas ideias e transformá-las em realidade!"
      />

      <section className="contato-conteudo">
        <div className="container contato-grid">
          <FaleConosco />
          <FormularioContato />
        </div>
      </section>

      <MapaLocalizacao />
    </>
  )
}

export default Contato
