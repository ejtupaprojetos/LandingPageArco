import './Diferenciais.css'
import iconUnidade from '../../../../assets/icons/icon_unidade.png'
import iconExcelencia from '../../../../assets/icons/icon_excelencia.png'
import iconProatividade from '../../../../assets/icons/icon_proatividade.png'
import iconResponsabilidade from '../../../../assets/icons/icon_responsabilidade.png'
import iconCriatividade from '../../../../assets/icons/icon_criatividade.png'


const diferenciais = [
  { id: 'unidade', label: 'Unidade', icon: iconUnidade, color: 'purple' },
  { id: 'excelencia', label: 'Excelência e Proatividade', icon: iconExcelencia, color: 'orange' },
  { id: 'proatividade', label: 'Proatividade', icon: iconProatividade, color: 'purple' },
  { id: 'responsabilidade', label: 'Responsabilidade e Engajamento', icon: iconResponsabilidade, color: 'orange' },
  { id: 'criatividade', label: 'Criatividade', icon: iconCriatividade, color: 'purple' },
]

function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="container">
        <h2 className="section-title">Nossos diferenciais</h2>
        <p className="section-subtitle">Conheça os valores que prezamos na Arco.</p>

        <div className="diferenciais-grid">
          {diferenciais.map(({ id, label, icon, color }) => (
            <div key={id} className="diferenciais-item">
              <span className={'diferenciais-icon diferenciais-icon--' + color}>
                <img src={icon} alt={label} />
              </span>
              <p>{label}</p>
            </div>
          ))}
        </div>

        <a href="#sobre" className="link-arrow diferenciais-link">
          <span className="link-arrow-text">Saiba mais</span>
          <span className="link-arrow-icon">›</span>
        </a>
      </div>
    </section>
  )
}

export default Diferenciais
