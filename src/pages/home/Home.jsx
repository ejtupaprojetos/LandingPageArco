import Hero from './sections/Hero/Hero'
import AreasAtuacao from './sections/AreasAtuacao/AreasAtuacao'
import Diferenciais from './sections/Diferenciais/Diferenciais'
import ProjetosDestaque from './sections/ProjetosDestaque/ProjetosDestaque'
import QuemSomos from './sections/QuemSomos/QuemSomos'
import Depoimentos from './sections/Depoimentos/Depoimentos'
import CallToAction from '../../components/CallToAction/CallToAction'

function Home() {
  return (
    <>
      <Hero />
      <AreasAtuacao />
      <Diferenciais />
      <ProjetosDestaque />
      <QuemSomos />
      <Depoimentos />
      <CallToAction
        title="Seu projeto pode aparecer aqui!"
        subtitle="Fala com a gente do que você está precisando!"
      />
    </>
  )
}

export default Home
