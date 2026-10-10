import './Valores.css'
// Mesmos ícones usados em "Nossos diferenciais" na Home. Se tiver versões
// amarelas desses ícones, é só trocar os caminhos aqui.
import iconUnidade from '../../../../assets/icons/icon_unidade.png'
import iconExcelencia from '../../../../assets/icons/icon_excelencia.png'
import iconProatividade from '../../../../assets/icons/icon_proatividade.png'
import iconResponsabilidade from '../../../../assets/icons/icon_responsabilidade.png'
import iconCriatividade from '../../../../assets/icons/icon_criatividade.png'

const valores = [
  { id: 'unidade', label: 'Unidade', icon: iconUnidade },
  { id: 'excelencia', label: 'Excelência e Proatividade', icon: iconExcelencia },
  { id: 'proatividade', label: 'Proatividade', icon: iconProatividade },
  { id: 'responsabilidade', label: 'Responsabilidade e Engajamento', icon: iconResponsabilidade },
  { id: 'criatividade', label: 'Criatividade', icon: iconCriatividade },
]

function Valores() {
  return (
    <section className="valores">
      <div className="container">
        <h2>Nossos Valores</h2>

        <div className="valores-grid">
          {valores.map(({ id, label, icon }) => (
            <div key={id} className="valores-card">
              <span className="valores-icone">
                <img src={icon} alt="" />
              </span>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Valores
