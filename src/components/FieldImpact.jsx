import { Link } from 'react-router-dom'
import { Landmark, Briefcase, Map, CalendarDays } from 'lucide-react'
import Counter from './Counter.jsx'
import { useCollection } from '../hooks/useCollection.js'
import { fromStat } from '../lib/cms-maps.js'

// Foto + texto lado a lado e, por baixo, a faixa de estatísticas. O botão é opcional.
function FieldImpact({ kicker, title, text, image, alt, cta }) {
  const yearsActive = new Date().getFullYear() - 2013
  const { items: stats } = useCollection('stats', [
    { icon: Landmark, target: 7, label: 'Instituições Públicas Servidas' },
    { icon: Briefcase, target: 6, label: 'Instituições Privadas Servidas' },
    { icon: Map, target: 7, label: 'Projectos de Referência' },
    { icon: CalendarDays, target: yearsActive, label: 'Anos de Actuação' },
  ], { map: fromStat })

  return (
    <section className="field-impact">
      <div className="container">
        <div className="field-impact__split">
          <div className="field-impact__media" data-aos="fade-right">
            <img src={image} alt={alt} loading="lazy" />
          </div>
          <div className="field-impact__copy" data-aos="fade-left">
            <span className="field-impact__kicker">{kicker}</span>
            <h2 className="field-impact__title">{title}</h2>
            {text && <p className="field-impact__text">{text}</p>}
            {cta && <Link to={cta.to} className="btn btn-primary px-4 py-3">{cta.label}</Link>}
          </div>
        </div>
        <div className="field-impact__stats" id="section-counter">
          {stats.map((stat) => (
            <Counter key={`${stat.label}-${stat.target}`} variant="glass" icon={stat.icon} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FieldImpact
