import { Landmark, Briefcase, Map, CalendarDays } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import ValueCard from '../components/ValueCard.jsx'
import Counter from '../components/Counter.jsx'
import TeamCard from '../components/TeamCard.jsx'
import values from '../data/values.js'
import team from '../data/team.js'
import { publicClients, privateClients } from '../data/clients.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

const teamColors = ['a', 'b', 'c']

function Sobre() {
  const yearsActive = new Date().getFullYear() - 2013

  return (
    <>
      <Seo
        title="Sobre Nós"
        description="Conheça a Cassfrei-SIGT, Lda: mais de uma década de experiência em Cadastro Predial, Cartografia Geológica, Planeamento Urbano e Sistemas de Informação Geográfica em Angola."
        path="/sobre"
        jsonLd={breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Sobre Nós', path: '/sobre' }])}
      />
      <PageHeader title="Sobre Nós" />

      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about align-items-stretch">
              <div className="wrap-about-border">
                <div className="img" style={{ backgroundImage: 'url(/images/foto-reuniao-corredor.jpg)' }}></div>
                <div className="text">
                  <h3>Missão</h3>
                  <p>As actividades realizadas pela Cassfrei-SIGT, Lda reflectem tranquilidade e agilidade para o cliente. Faz ainda parte da nossa missão sensibilizar os nossos clientes para que tomem decisões mais sustentáveis no seu dia a dia.</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 wrap-about pr-md-4">
              <h2 className="mb-4">Quem Somos</h2>
              <p>A CASSFREI – Sistemas de Informação e Gestão Territorial, Lda é uma empresa de consultoria e prestação de serviços, nas áreas de Engenharia, Geologia e Arquitectura.</p>
              <p>Formada com capitais exclusivamente angolanos, foi criada especialmente para a orientação e execução técnica de trabalhos de Cartografia Geológica, Gestão do Território, Planeamento Urbano, Cadastro Predial, Topografia e Sistemas de Informação Geográfica, quer a nível público quer a nível privado.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Nossos Valores</h2>
            </div>
          </div>
          <div className="row">
            {values.map((value) => (
              <div className="col-md-6 col-lg-3 mb-4" key={value.title}>
                <ValueCard {...value} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ftco-intro ftco-no-pb img" style={{ backgroundImage: 'url(/images/foto-reuniao-sala.jpg)' }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-10 text-center heading-section heading-section-white">
              <h2 className="mb-0">Mais de uma Década ao Serviço do Território Angolano</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-counter" id="section-counter">
        <div className="container">
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="wrapper">
              <div className="row d-md-flex align-items-center">
                <Counter icon={Landmark} target={7} label="Instituições Públicas Servidas" />
                <Counter icon={Briefcase} target={6} label="Instituições Privadas Servidas" />
                <Counter icon={Map} target={7} label="Projectos de Referência" />
                <Counter icon={CalendarDays} target={yearsActive} label="Anos de Actuação" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Trabalhos com Instituições</h2>
              <p>Colaboramos com instituições públicas e privadas em Angola desde 2013.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <h3 className="mb-4">Instituições Públicas</h3>
              <ul className="institutions-list">
                {publicClients.map((client) => (
                  <li key={client.name}>
                    <span className="period">{client.period}</span>
                    <span>{client.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 mb-5">
              <h3 className="mb-4">Instituições Privadas</h3>
              <ul className="institutions-list">
                {privateClients.map((client) => (
                  <li key={client.name}>
                    <span className="period">{client.period}</span>
                    <span>{client.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">Equipa</h2>
            </div>
          </div>
          <div className="row">
            {team.map((member, index) => (
              <div className="col-md-4 mb-4" key={member.name}>
                <TeamCard member={member} colorClass={teamColors[index % teamColors.length]} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre
