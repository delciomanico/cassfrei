import { MapPin, Users } from 'lucide-react'
import PlaceholderMedia from './PlaceholderMedia.jsx'

// Cartão de curso em linha: miniatura à esquerda, conteúdo ao centro e estado + botão de
// pré-inscrição (desactivado enquanto as vagas estão fechadas) no fim.
function FormacaoCard({ formacao }) {
  const { image, placeholder, title, modality, text, vagasAbertas, googleFormUrl } = formacao

  return (
    <article className="course-card" data-aos="fade-up">
      <div
        className="course-card__thumb"
        style={placeholder ? undefined : { backgroundImage: `url(${image})` }}
      >
        {placeholder && <PlaceholderMedia className="placeholder-media--formacao" />}
      </div>
      <div className="course-card__body">
        <span className={`course-card__status ${vagasAbertas ? 'is-open' : 'is-closed'}`}>
          {vagasAbertas ? 'Vagas abertas' : 'Inscrições encerradas'}
        </span>
        <h3 className="course-card__title">{title}</h3>
        {text && <p className="course-card__text">{text}</p>}
        <div className="course-card__foot">
          <ul className="course-card__meta">
            <li><Users size={15} /> {modality}</li>
            <li><MapPin size={15} /> Luanda</li>
          </ul>
          {vagasAbertas && googleFormUrl ? (
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="btn btn-primary course-card__btn">
              Pré-inscrição
            </a>
          ) : (
            <button
              type="button"
              className="btn btn-primary course-card__btn"
              disabled
              title="Inscrições temporariamente encerradas"
            >
              Pré-inscrição
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default FormacaoCard
