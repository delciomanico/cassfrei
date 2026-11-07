import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import { Link } from 'react-router-dom'
import { consultoriaServices, estudosServices } from '../data/services.js'
import { useServices } from '../hooks/useServices.js'
import { useTexts } from '../hooks/useTexts.js'
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

// Grupo de serviços: à esquerda o título (fixo ao fazer scroll em ecrãs largos) e à direita a
// lista de serviços em linhas separadas por filetes.
function ServiceGroup({ id, alt = false, kicker, title, text, services }) {
  return (
    <section className={`service-group${alt ? ' service-group--alt' : ''}`} id={id}>
      <div className="container">
        <div className="service-group__grid">
          <div className="service-group__intro" data-aos="fade-up">
            <span className="service-group__kicker">{kicker}</span>
            <h2 className="service-group__title">{title}</h2>
            <p className="service-group__text">{text}</p>
            <span className="service-group__count">{services.length} serviços</span>
          </div>
          <ul className="service-group__list">
            {services.map(({ icon: Icon, title: name, abbr, text: description }) => (
              <li className="service-row" key={name} data-aos="fade-up">
                <Icon className="service-row__icon" size={26} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <h3 className="service-row__title">
                    {name}
                    {abbr && <span className="service-row__abbr">{abbr}</span>}
                  </h3>
                  <p className="service-row__text">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Servicos() {
  const t = useTexts()
  const { consultoria, estudos } = useServices()

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

      <ServiceGroup
        id="consultoria"
        kicker="Consultoria"
        title={t('servicos.consultoria.title', 'Consultoria e Prestação de Serviços')}
        text={t('servicos.consultoria.text', 'Serviços técnicos de cadastro e apoio à gestão territorial, a nível público e privado.')}
        services={consultoria}
      />

      <ServiceGroup
        id="estudos"
        alt
        kicker="Estudos"
        title={t('servicos.estudos.title', 'Caracterização Físico-Geográfica, Estudos e Soluções')}
        text={t('servicos.estudos.text', 'Estudos técnicos especializados em Geologia, Geografia e Sistemas de Informação Geográfica.')}
        services={estudos}
      />

      <section className="services-cta">
        <div className="container services-cta__inner">
          <div>
            <h2 className="services-cta__title">{t('servicos.cta.title', 'Precisa de algum destes serviços?')}</h2>
            <p className="services-cta__text">{t('servicos.cta.text', 'Fale connosco e receba uma proposta adaptada ao seu projecto.')}</p>
          </div>
          <Link to="/contactos" className="btn btn-white px-4 py-3">Pedir Orçamento</Link>
        </div>
      </section>
    </>
  )
}

export default Servicos
