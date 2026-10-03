import './FiltroCategorias.css'

// Componente controlado: quem decide qual categoria está ativa é o
// componente pai (Portfolio.jsx) — este aqui só mostra os botões e avisa
// (via onSelecionar) quando o usuário clica em um diferente.
function FiltroCategorias({ categorias, categoriaAtiva, onSelecionar }) {
  return (
    <div className="filtro-categorias">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          className={categoria === categoriaAtiva ? 'ativo' : ''}
          onClick={() => onSelecionar(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

export default FiltroCategorias
