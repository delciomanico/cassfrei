import PageHeader from '../components/PageHeader.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import ContactForm from '../components/ContactForm.jsx'
import MapEmbed from '../components/MapEmbed.jsx'

function Contactos() {
  return (
    <>
      <PageHeader title="Contactos" />

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-8">
              <ContactInfo />
            </div>
          </div>
          <div className="row block-9 justify-content-center mb-5">
            <div className="col-md-8 mb-md-5">
              <h2 className="text-center">Tem alguma questão?<br />Envie-nos uma mensagem</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container-fluid px-0">
          <div className="row no-gutters justify-content-center">
            <div className="col-md-12">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contactos
