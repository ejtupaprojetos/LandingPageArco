import './MapaLocalizacao.css'

// Endereço de exemplo — troque pelo endereço real da ARCO.
// Esse formato (maps.google.com/maps?q=...&output=embed) não precisa de
// chave de API do Google, mas é menos preciso que o Google Maps Embed API
// oficial (que exige uma chave). Serve bem pra desenvolvimento e projetos simples.
const ENDERECO = 'Universidade Federal do Amazonas, Manaus, AM'

function MapaLocalizacao() {
  return (
    <section className="mapa">
      <iframe
        title="Localização da ARCO"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}

export default MapaLocalizacao
