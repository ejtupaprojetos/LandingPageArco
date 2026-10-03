import './PageBanner.css'

// Banner reutilizável para o topo de páginas internas (Contato, Serviços,
// Portfólio, Sobre...). Recebe o texto por props em vez de ter conteúdo
// fixo, pra poder ser usado em várias páginas diferentes.
function PageBanner({ title, subtitle, variant = 'dark'}) {
  return (
    <section className={`page-banner page-banner--${variant}`}>
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}

export default PageBanner
