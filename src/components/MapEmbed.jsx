function MapEmbed() {
  const address = 'Rua Manuel F. Caldeira, 9º Distrito Urbano da Ingombota, Luanda, Angola'
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <iframe
      title="Localização da Cassfrei-SIGT em Luanda"
      src={src}
      width="100%"
      height="450"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}

export default MapEmbed
