import PageBanner from '../../components/PageBanner/PageBanner'
import CallToAction from '../../components/CallToAction/CallToAction'
import NossaHistoria from './sections/NossaHistoria/NossaHistoria'
import Trajetoria from './sections/Trajetoria/Trajetoria'
import MissaoVisao from './sections/MissaoVisao/MissaoVisao'
import Valores from './sections/Valores/Valores'
import Diretoria from './sections/Diretoria/Diretoria'
import MovimentoEj from './sections/MovimentoEj/MovimentoEj'

function Sobre() {
  return (
    <>
      <PageBanner
        variant="yellow"
        title="Sobre a Arco"
        subtitle="Somos uma empresa júnior comprometida em transformar ideias em soluções criativas de arquitetura e design"
      />
      <NossaHistoria />
      <Trajetoria />
      <MissaoVisao />
      <Valores />
      <Diretoria />
      <MovimentoEj />
      <CallToAction
        variant="yellow"
        title="Vamos trabalhar juntos?"
        subtitle="Fala com a gente do que você está precisando!"
      />
    </>
  )
}

export default Sobre
