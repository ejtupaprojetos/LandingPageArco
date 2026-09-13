import { useState } from 'react'
import './FormularioContato.css'
import { enviarMensagemContato } from '../../../../services/formularioContato'

const CAMPOS_INICIAIS = {
  nome: '',
  email: '',
  whatsapp: '',
  servico: '',
  mensagem: '',
}

function FormularioContato() {
  const [campos, setCampos] = useState(CAMPOS_INICIAIS)
  const[erros, setErros] = useState({})
  const [enviando, setEnviando] = useState(false)

  function handleChange(evento) {
    const { name, value } = evento.target
    setCampos((anterior) => ({ ...anterior, [name]: value }))

    setErros((anteriores)=>{
      const novosErros= {...anteriores}
      delete novosErros[name]
      return novosErros
    })
  }

 async function handleSubmit(evento) {
    evento.preventDefault()

   

    const novosErros= {}
    
    if(campos.nome===''){
      novosErros.nome='Por favor, informe seu nome.'
    }

    if(campos.email===''){
      novosErros.email= 'Por favor, informe o seu e-mail'
      
    }

    const emailValido= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)

    if(campos.email !== '' && !emailValido){
      novosErros.email='Informe um e-mail válido.'
      
    }

    const whatsappValido = /^\(\d{2}\) \d{5}-\d{4}$/.test(campos.whatsapp)

    if(campos.whatsapp !== '' && !whatsappValido){
      novosErros.whatsapp = 'Informe o WhatsApp no formato (00) 00000-0000.'
    }

    if(campos.servico === ''){
      novosErros.servico= 'Por favor, informe o serviço de interesse.'
      
    }

    if(campos.mensagem===''){
      novosErros.mensagem= 'Por favor, escreva uma mensagem.'
      
    }

    setErros(novosErros)
    
    

    if(Object.keys(novosErros).length>0){
      return
    }

    
   setEnviando(true)
    

    


    // TODO: enviar `campos` para uma função em src/services/
    // (ex: enviarMensagemContato(campos), que faria o POST pra uma API ou e-mail)
    try{
      const response = await enviarMensagemContato(campos)

      if(response.ok){
      alert('Formulario enviado')
    }else{
      alert('Erro ao enviar o FormularioContato.')
    }
  }catch{
    alert('Não foi possivel enviar o formulario.')
  }
  finally{
    setEnviando(false)
  }
}


   

  return (
    <form className="formulario-contato" onSubmit={handleSubmit} noValidate>
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
      {erros.nome && <span className="mensagem-erro">{erros.nome}</span>}

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
      {erros.email && <span className="mensagem-erro">{erros.email}</span>}


      <label htmlFor="whatsapp">Número (Whatsapp)</label>
      <input
        id="whatsapp"
        name="whatsapp"
        type="tel"
        placeholder="(00) 00000-0000"
        value={campos.whatsapp}
        onChange={handleChange}
      />
      {erros.whatsapp && <span className="mensagem-erro">{erros.whatsapp}</span>}

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
      {erros.servico && <span className="mensagem-erro">{erros.servico}</span>}

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
      {erros.mensagem && <span className="mensagem-erro">{erros.mensagem}</span>}

      <button type="submit" className="btn btn-primary" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
 }


export default FormularioContato



