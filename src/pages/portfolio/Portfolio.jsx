import { useState } from 'react'
import PageBanner from '../../components/PageBanner/PageBanner'
import CallToAction from '../../components/CallToAction/CallToAction'
import FiltroCategorias from './sections/FiltroCategorias/FiltroCategorias'
import PortfolioCard from './sections/PortfolioCard/PortfolioCard'
import './Portfolio.css'

// ─── Imagens de cada projeto — troque pelos arquivos reais ───
import barbeariaImg from '../../assets/images/portfolio/barbearia-don-luiz.jpg'
import depyllareImg from '../../assets/images/portfolio/depyllare.jpg'
import serpanImg from '../../assets/images/portfolio/panificadora-serpan.jpg'
import bareJuniorImg from '../../assets/images/portfolio/bare-junior.jpg'
import miranteImg from '../../assets/images/portfolio/projeto-mirante.jpg'
import agexcomImg from '../../assets/images/portfolio/agexcom.jpg'
import queroPapierImg from '../../assets/images/portfolio/quero-papier.jpg'
import santaPreguicaImg from '../../assets/images/portfolio/santa-preguica.jpg'

// As categorias das abas — "Interface" já existe aqui mesmo sem nenhum
// projeto usando ela ainda; a aba só vai mostrar uma lista vazia até você
// adicionar um projeto com essa categoria no array `projetos` abaixo.
const CATEGORIAS = ['Todos', 'Residencial', 'Gráfico', 'Interface', 'Design de Interiores']

const projetos = [
  {
    id: 'barbearia-don-luiz',
    categoria: 'Design de Interiores',
    titulo: 'Barbearia Don Luiz',
    ano: 2024,
    descricao:
      'Projeto de interiores desenvolvido para a Barbearia Don Luiz, a qual se tornou um ambiente aconchegante e sofisticado para seus clientes.',
    imagem: barbeariaImg,
  },
  {
    id: 'depyllare',
    categoria: 'Design de Interiores',
    titulo: 'Depyllare',
    ano: 2024,
    descricao:
      'O projeto do Salão de Beleza e Estética Depyllare consistiu em uma proposta de novo layout e reforma do espaço.',
    imagem: depyllareImg,
  },
  {
    id: 'panificadora-serpan',
    categoria: 'Gráfico',
    titulo: 'Panificadora Serpan',
    ano: 2019,
    descricao:
      'Atualização visual por meio de pequenas intervenções estratégicas, como a redefinição da paleta de cores e a reorganização dos elementos gráficos.',
    imagem: serpanImg,
  },
  {
    id: 'bare-junior',
    categoria: 'Gráfico',
    titulo: 'Baré Júnior',
    ano: 2020,
    descricao:
      'Interface de website desenvolvida para a Federação Amazonense do Movimento Empresa Júnior, Baré Júnior.',
    imagem: bareJuniorImg,
  },
  {
    id: 'projeto-mirante',
    categoria: 'Residencial',
    titulo: 'Projeto Mirante',
    ano: 2024,
    descricao: 'Sala de estar de um apartamento projetado para ser aconchegante e com personalidade.',
    imagem: miranteImg,
  },
  {
    id: 'agexcom',
    categoria: 'Design de Interiores',
    titulo: 'Agexcom',
    ano: 2022,
    descricao: 'Um projeto desenvolvido para oferecer conforto e funcionalidade no ambiente de trabalho.',
    imagem: agexcomImg,
  },
  {
    id: 'quero-papier',
    categoria: 'Gráfico',
    titulo: 'Quero Papier',
    ano: 2022,
    descricao:
      'O projeto envolveu a criação de uma identidade consistente, pensada desde o conceito até sua aplicação prática no produto final.',
    imagem: queroPapierImg,
  },
  {
    id: 'santa-preguica',
    categoria: 'Gráfico',
    titulo: 'Santa Preguiça',
    ano: 2021,
    descricao:
      'Projeto de identidade visual desenvolvido para a loja Sta. Preguiça, a partir de um direcionamento conceitual definido em três pilares: cor, estilo e arte.',
    imagem: santaPreguicaImg,
  },
]

function Portfolio() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

  const projetosFiltrados =
    categoriaAtiva === 'Todos'
      ? projetos
      : projetos.filter((projeto) => projeto.categoria === categoriaAtiva)

  return (
    <>
      <PageBanner
        variant="orange"
        title="Portfólio"
        subtitle="Conheça os projetos que desenvolvemos com dedicação e criatividade para nossos clientes."
      />

      <section className="portfolio-conteudo">
        <div className="container">
          <FiltroCategorias
            categorias={CATEGORIAS}
            categoriaAtiva={categoriaAtiva}
            onSelecionar={setCategoriaAtiva}
          />

          <div className="portfolio-grid">
            {projetosFiltrados.map((projeto) => (
              <PortfolioCard key={projeto.id} projeto={projeto} />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Seu projeto pode aparecer aqui!"
        subtitle="Fala com a gente do que você está precisando!"
      />
    </>
  )
}

export default Portfolio
