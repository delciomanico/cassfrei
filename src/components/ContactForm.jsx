function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = 'mailto:geral@cassfrei.com'
  }

  return (
    <form onSubmit={handleSubmit} className="bg-light p-5 contact-form">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="O seu nome" required />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="O seu email" required />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Assunto" />
      </div>
      <div className="form-group">
        <textarea rows="7" className="form-control" placeholder="Mensagem"></textarea>
      </div>
      <div className="form-group mb-2">
        <input type="submit" value="Enviar Mensagem" className="btn btn-primary py-3 px-5" />
      </div>
      <p className="mailto-fallback mb-0">
        Prefere email directo? Escreva-nos para <a href="mailto:geral@cassfrei.com">geral@cassfrei.com</a>
      </p>
    </form>
  )
}

export default ContactForm
