function ContactInfo() {
  return (
    <div className="row mb-5">
      <div className="col-md-4 text-center py-4">
        <div className="icon">
          <span className="icon-map-o"></span>
        </div>
        <p><span>Morada:</span> Rua Manuel F. Caldeira, n.º 23, 9º Distrito Urbano da Ingombota, Luanda, Angola</p>
      </div>
      <div className="col-md-4 text-center border-height py-4">
        <div className="icon">
          <span className="icon-mobile-phone"></span>
        </div>
        <p>
          <span>Telefone:</span> <a href="tel:+244923662140">+244 923 662 140</a> | <a href="tel:+244923764161">+244 923 764 161</a>
        </p>
      </div>
      <div className="col-md-4 text-center py-4">
        <div className="icon">
          <span className="icon-envelope-o"></span>
        </div>
        <p><span>Email:</span> <a href="mailto:geral@cassfrei.com">geral@cassfrei.com</a></p>
      </div>
    </div>
  )
}

export default ContactInfo
