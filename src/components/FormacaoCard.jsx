import PlaceholderMedia from './PlaceholderMedia.jsx'

function FormacaoCard({ formacao }) {
  const { image, placeholder, title, modality, text, vagasAbertas, googleFormUrl } = formacao

  return (
    <div className="value-card formacao-card ftco-animate" data-aos="fade-up">
      <div
        className="formacao-card__image"
        style={placeholder ? undefined : { backgroundImage: `url(${image})` }}
      >
        {placeholder && <PlaceholderMedia className="placeholder-media--formacao" />}
      </div>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      <p className="formacao-modality">{modality}</p>
      <span className={`badge-vagas ${vagasAbertas ? 'badge-vagas--aberta' : 'badge-vagas--fechada'}`}>
        {vagasAbertas ? 'Vagas Abertas' : 'Inscrições Encerradas'}
      </span>
      {vagasAbertas && googleFormUrl ? (
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm mt-3"
        >
          Pré-inscrição
        </a>
      ) : (
        <button
          type="button"
          className="btn btn-primary btn-sm mt-3"
          disabled
          title="Inscrições temporariamente encerradas"
        >
          Pré-inscrição
        </button>
      )}
    </div>
  )
}

export default FormacaoCard
