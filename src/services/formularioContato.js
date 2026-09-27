export async function enviarMensagemContato(campos){
    const response = await fetch(
        'https://formsubmit.co/ajax/arcoempresajunior@gmail.com',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify({
                ...campos,
                _subject: 'Novo contato - ARCO Empresa',
                _template: 'table',
            })


        }
        
    )

    return response
}