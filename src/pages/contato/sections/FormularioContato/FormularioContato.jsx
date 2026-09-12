import { useState } from 'react'
import './FormularioContato.css'

const CAMPOS_INICIAIS = {
  nome: '',
  email: '',
  whatsapp: '',
  servico: '',
  mensagem: '',
}

function FormularioContato() {
  const [campos, setCampos] = useState(CAMPOS_INICIAIS)

  function handleChange(evento) {
    const { name, value } = evento.target
    setCampos((anterior) => ({ ...anterior, [name]: value }))
  }

  function handleSubmit(evento) {
    evento.preventDefault()
    // TODO: enviar `campos` para uma função em src/services/
    // (ex: enviarMensagemContato(campos), que faria o POST pra uma API ou e-mail)
    console.log('Formulário enviado:', campos)
  }

  return (
    <form className="formulario-contato" onSubmit={handleSubmit}>
      <h2>Envie sua mensagem</h2>

      <label htmlFor="nome">Nome Completo *</label>
      <input
        id="nome"
        name="nome"
        type="text"
        placeholder="Seu nome"
        value={campos.nome}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email *</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="seu@email.com"
        value={campos.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="whatsapp">Número (Whatsapp)</label>
      <input
        id="whatsapp"
        name="whatsapp"
        type="tel"
        placeholder="(00) 00000-0000"
        value={campos.whatsapp}
        onChange={handleChange}
      />

      <label htmlFor="servico">Serviço de Interesse *</label>
      <input
        id="servico"
        name="servico"
        type="text"
        placeholder="Ex: Identidade visual, Projeto arquitetônico..."
        value={campos.servico}
        onChange={handleChange}
        required
      />

      <label htmlFor="mensagem">Mensagem *</label>
      <textarea
        id="mensagem"
        name="mensagem"
        rows={5}
        placeholder="Conte-nos sobre seu projeto..."
        value={campos.mensagem}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  )
}

export default FormularioContato
