import PageHeader from '../components/PageHeader.jsx'
import Seo from '../components/Seo.jsx'
import ValuesSection from '../components/ValuesSection.jsx'
import FieldImpact from '../components/FieldImpact.jsx'
import TeamCard from '../components/TeamCard.jsx'
import team from '../data/team.js'
import { publicClients, privateClients } from '../data/clients.js'
import { useCollection } from '../hooks/useCollection.js'
import { useTexts } from '../hooks/useTexts.js'
import { fromClient, fromTeamMember } from '../lib/cms-maps.js'
import { breadcrumbJsonLd } from '../lib/seo.js'

const teamColors = ['a', 'b', 'c']

const fallbackClients = [
  ...publicClients.map((c) => ({ ...c, tipo: 'publica' })),
  ...privateClients.map((c) => ({ ...c, tipo: 'privada' })),
]

function Sobre() {
  const t = useTexts()
  const { items: teamList } = useCollection('team', team, { map: fromTeamMember })
  const { items: clients } = useCollection('clients', fallbackClients, { map: fromClient })
  const publicList = clients.filter((c) => c.tipo === 'publica')
  const privateList = clients.filter((c) => c.tipo === 'privada')
  return (
    <>
      <Seo
        title="Sobre Nós"
        description="Conheça a Cassfrei-SIGT, Lda: mais de uma década de experiência em Cadastro Predial, Cartografia Geológica, Planeamento Urbano e Sistemas de Informação Geográfica em Angola."
        path="/sobre"
        jsonLd={breadcrumbJsonLd([{ name: 'Início', path: '/' }, { name: 'Sobre Nós', path: '/sobre' }])}
      />
      <PageHeader title="Sobre Nós" />

      <section className="about-home">
        <div className="container">
          <div className="about-home__grid">
            <div className="about-home__copy" data-aos="fade-up">
              <span className="about-home__kicker">{t('sobre.about.kicker', 'Quem somos')}</span>
              <h2 className="about-home__title">{t('sobre.about.title', 'Quem Somos')}</h2>
              <p>{t('sobre.about.p1', 'A CASSFREI – Sistemas de Informação e Gestão Territorial, Lda é uma empresa de consultoria e prestação de serviços, nas áreas de Engenharia, Geologia e Arquitectura.')}</p>
              <p>{t('sobre.about.p2', 'Formada com capitais exclusivamente angolanos, foi criada especialmente para a orientação e execução técnica de trabalhos de Cartografia Geológica, Gestão do Território, Planeamento Urbano, Cadastro Predial, Topografia e Sistemas de Informação Geográfica, quer a nível público quer a nível privado.')}</p>
              <h3 className="about-home__subtitle">{t('sobre.mission.title', 'Missão')}</h3>
              <p>{t('sobre.mission.text', 'As actividades realizadas pela Cassfrei-SIGT, Lda reflectem tranquilidade e agilidade para o cliente. Faz ainda parte da nossa missão sensibilizar os nossos clientes para que tomem decisões mais sustentáveis no seu dia a dia.')}</p>
            </div>
            <img className="about-home__img" data-aos="fade-up" src={t('sobre.about.image', '/images/foto-reuniao-corredor.jpg')} alt="Equipa da Cassfrei-SIGT em reunião" loading="lazy" />
          </div>
        </div>
      </section>

      <ValuesSection />

      <FieldImpact
        kicker={t('sobre.impact.kicker', 'A nossa experiência')}
        title={t('sobre.impact.title', 'Mais de uma Década ao Serviço do Território Angolano')}
        image={t('sobre.impact.image', '/images/foto-reuniao-sala.jpg')}
        alt="Reunião de trabalho da equipa da Cassfrei-SIGT"
      />

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">{t('sobre.clients.title', 'Trabalhos com Instituições')}</h2>
              <p>{t('sobre.clients.text', 'Colaboramos com instituições públicas e privadas em Angola desde 2013.')}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <h3 className="mb-4">{t('sobre.clients.public', 'Instituições Públicas')}</h3>
              <ul className="institutions-list">
                {publicList.map((client) => (
                  <li key={client.name}>
                    <span className="period">{client.period}</span>
                    <span>{client.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 mb-5">
              <h3 className="mb-4">{t('sobre.clients.private', 'Instituições Privadas')}</h3>
              <ul className="institutions-list">
                {privateList.map((client) => (
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

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-4">{t('sobre.team.title', 'Equipa')}</h2>
            </div>
          </div>
          <div className="row">
            {teamList.map((member, index) => (
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
