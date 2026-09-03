import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { consultoriaServices, estudosServices } from '../data/services.js'
import { breadcrumbJsonLd, absoluteUrl } from '../lib/seo.js'

const allServices = [...consultoriaServices, ...estudosServices]

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: allServices.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.text,
      provider: { '@type': 'ProfessionalService', name: 'Cassfrei-SIGT, Lda' },
      areaServed: { '@type': 'Country', name: 'Angola' },
      url: absoluteUrl('/o-que-fazemos'),
    },
  })),
}

function Servicos() {
  return (
    <>
      <Seo
        title="O Que Fazemos"
        description="Serviços de Cadastro Predial e Urbano, Cadastro Fiscal, Cartografia, Análise de Geo-riscos, Toponímia e Sistemas de Informação Geográfica (SIG) para instituições públicas e privadas em Angola."
        path="/o-que-fazemos"
        jsonLd={[
          breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'O Que Fazemos', path: '/o-que-fazemos' }]),
          servicesJsonLd,
        ]}
      />
      <PageHeader title="O Que Fazemos" />

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Consultoria e Prestação de Serviços</h2>
              <p>Serviços técnicos de cadastro e apoio à gestão territorial, a nível público e privado.</p>
            </div>
          </div>
          <div className="row mt-5">
            {consultoriaServices.map((service) => (
              <div className="col-lg-6" key={service.title}>
                <ServiceCard variant="feature" icon={service.icon} title={`${service.title} (${service.abbr})`} text={service.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Caracterização Físico-Geográfica, Estudos e Soluções</h2>
              <p>Estudos técnicos especializados em Geologia, Geografia e Sistemas de Informação Geográfica.</p>
            </div>
          </div>
          <div className="row no-gutters">
            {estudosServices.map((service) => (
              <div className="col-lg-3 col-md-6 d-flex" key={service.title}>
                <ServiceCard
                  icon={service.icon}
                  title={service.abbr ? `${service.title} (${service.abbr})` : service.title}
                  text={service.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicos
