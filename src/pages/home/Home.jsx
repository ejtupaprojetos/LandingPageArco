import Hero from './sections/Hero/Hero'
import AreasAtuacao from './sections/AreasAtuacao/AreasAtuacao'
import Diferenciais from './sections/Diferenciais/Diferenciais'
import ProjetosDestaque from './sections/ProjetosDestaque/ProjetosDestaque'
import QuemSomos from './sections/QuemSomos/QuemSomos'
import Depoimentos from './sections/Depoimentos/Depoimentos'
import CallToAction from './sections/CallToAction/CallToAction'

function Home() {
  return (
    <>
      <Hero />
      <AreasAtuacao />
      <Diferenciais />
      <ProjetosDestaque />
      <QuemSomos />
      <Depoimentos />
      <CallToAction />
    </>
  )
}

export default Home
