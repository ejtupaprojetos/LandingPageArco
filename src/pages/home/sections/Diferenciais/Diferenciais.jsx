import './Diferenciais.css'

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M12 21s-7-4.35-9.5-8.5C.7 8.9 2.6 5 6.2 5c2 0 3.3 1.1 3.8 2 .5-.9 1.8-2 3.8-2 3.6 0 5.5 3.9 3.7 7.5C19 16.65 12 21 12 21Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M16 8a3 3 0 1 1 0-6M17 14c2.8.5 5 2.5 5 6" strokeLinecap="round" />
    </svg>
  )
}

const diferenciais = [
  { id: 'unidade', label: 'Unidade', icon: IconPlus, color: 'purple' },
  { id: 'excelencia', label: 'Excelência e Proatividade', icon: IconBolt, color: 'orange' },
  { id: 'proatividade', label: 'Proatividade', icon: IconBolt, color: 'purple' },
  { id: 'responsabilidade', label: 'Responsabilidade e Engajamento', icon: IconHeart, color: 'orange' },
  { id: 'criatividade', label: 'Criatividade', icon: IconUsers, color: 'purple' },
]

function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="container">
        <h2 className="section-title">Nossos diferenciais</h2>
        <p className="section-subtitle">Conheça os valores que prezamos na Arco.</p>

        <div className="diferenciais-grid">
          {diferenciais.map(({ id, label, icon: Icon, color }) => (
            <div key={id} className="diferenciais-item">
              <span className={'diferenciais-icon diferenciais-icon--' + color}>
                <Icon />
              </span>
              <p>{label}</p>
            </div>
          ))}
        </div>

        <a href="#sobre" className="link-arrow diferenciais-link">
          Saiba mais ›
        </a>
      </div>
    </section>
  )
}

export default Diferenciais
