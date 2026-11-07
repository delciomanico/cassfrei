import values from '../data/values.js'
import { useCollection } from '../hooks/useCollection.js'
import { useTexts } from '../hooks/useTexts.js'
import { fromValue } from '../lib/cms-maps.js'

function ValuesSection() {
  const { items: valuesList } = useCollection('values', values, { map: fromValue })
  const t = useTexts()

  return (
    <section className="values-section">
      <div className="container">
        <div className="values-section__head" data-aos="fade-up">
          <span className="values-section__kicker">{t('values.kicker', 'O que nos move')}</span>
          <h2 className="values-section__title">{t('values.title', 'Nossos Valores')}</h2>
        </div>
        <ul className="values-section__list">
          {valuesList.map(({ icon: Icon, title, text }, i) => (
            <li className="values-item" key={title} data-aos="fade-up" data-aos-delay={i * 80}>
              <Icon className="values-item__icon" size={28} strokeWidth={1.6} aria-hidden="true" />
              <h3 className="values-item__title">{title}</h3>
              <p className="values-item__text">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ValuesSection
