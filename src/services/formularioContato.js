export async function enviarMensagemContato(campos){
    const response = await fetch(
        'https://formsubmit.co/ajax/codebynicoly@gmail.com',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(campos)


        }
        
    )

    return response
}