import PageBanner from '../../components/PageBanner/PageBanner'
import ServicoCard from './sections/ServicoCard/ServicoCard'
import './Servicos.css'


import iconIdentidade from '../../assets/icons/servicos_t1.png'
import iconArquitetonico from '../../assets/icons/servicos_t2.png'
import iconInterface from '../../assets/icons/servicos_t1.png'
import iconConsultoria from '../../assets/icons/servicos_t3.png'
import iconReforma from '../../assets/icons/servicos_t4.png'
import iconPromocionais from '../../assets/icons/servicos_t5.png'

// ─── Imagens de cada serviço 
// Cada serviço pode ter mais de uma imagem: é só colocar vários caminhos no
// array `imagens` do serviço (ex: [imagem1, imagem2, imagem3]) que o
// carrossel (as bolinhas) aparece sozinho no ServicoCard.
import identidadeImg1 from '../../assets/images/servicos/identidade_visual_1.jpg'
import projetoArqImg1 from '../../assets/images/servicos/projeto_arquitetonico_1.jpg'
import interfaceImg1 from '../../assets/images/servicos/interface_1.png'
import consultoriaImg1 from '../../assets/images/servicos/consultoria_1.jpg'
import reformaImg1 from '../../assets/images/servicos/reforma_1.jpg'
import promocionaisImg1 from '../../assets/images/servicos/promocionais_1.jpg'

// `layout: 'horizontal'` = card "destaque", ocupando a linha toda.
// `imagePosition` só importa quando o layout é 'horizontal' ('left' ou 'right').
const servicos = [
  {
    id: 'identidade-visual',
    layout: 'vertical',
    icon: iconIdentidade,
    titulo: 'Identidade Visual',
    descricao:
      'Logotipo, símbolo, e elementos vão representar de maneira única a sua marca!',
    itens: [
      'Posicionamento e identidade de marca',
      'Coerência visual em todos os pontos',
      'Reconhecimento e diferenciação',
    ],
    imagens: [identidadeImg1],
  },
  {
    id: 'projeto-arquitetonico',
    layout: 'vertical',
    icon: iconArquitetonico,
    titulo: 'Projeto arquitetônico',
    descricao:
      'Desenvolvemos a arquitetura do local a partir do estudo do terreno, atendendo às suas necessidades.',
    itens: [
      'Soluções personalizadas para cada espaço',
      'Funcionalidade, estética e conforto',
      'Projetos pensados para uso real',
    ],
    imagens: [projetoArqImg1],
  },
  {
    id: 'interface',
    layout: 'horizontal',
    imagePosition: 'left',
    icon: iconInterface,
    titulo: 'Interface',
    descricao: 'Criamos um layout único para o seu site ou aplicativo em desenvolvimento!',
    itens: ['Experiência do usuário (UX)', 'Interfaces funcionais e intuitivas', 'Layouts responsivos'],
    imagens: [interfaceImg1],
  },
  {
    id: 'consultoria',
    layout: 'vertical',
    icon: iconConsultoria,
    titulo: 'Consultoria',
    descricao:
      'Analisamos o espaço e desenvolvemos as melhores soluções de layout para garantir mais funcionalidade.',
    itens: [
      'Diagnóstico espacial detalhado',
      'Melhor aproveitamento do ambiente',
      'Redução de erros antes da execução',
    ],
    imagens: [consultoriaImg1],
  },
  {
    id: 'reforma',
    layout: 'vertical',
    icon: iconReforma,
    titulo: 'Reforma',
    descricao: 'Alteramos ambientes existentes para transformar em um lugar ideal para você!',
    itens: [
      'Adequação do espaço às novas necessidades',
      'Melhorias estéticas e funcionais',
      'Transformação sem desperdícios',
    ],
    imagens: [reformaImg1],
  },
  {
    id: 'promocionais',
    layout: 'horizontal',
    imagePosition: 'right',
    icon: iconPromocionais,
    titulo: 'Promocionais',
    descricao:
      'Produzimos material gráfico como panfletos, apresentações e postagens para promover o seu produto ou marca da melhor forma!',
    itens: ['Materiais impressos e digitais', 'Comunicação visual estratégica', 'Conteúdos alinhados à marca'],
    imagens: [promocionaisImg1],
  },
]

function Servicos() {
  return (
    <>
      <PageBanner
        variant="purple"
        title="Nossos Serviços"
        subtitle="Oferecemos soluções em arquitetura e design para transformar suas ideias em realidade"
      />

      <section className="servicos-lista">
        <div className="container servicos-grid">
          {servicos.map((servico) => (
            <ServicoCard key={servico.id} servico={servico} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Servicos
