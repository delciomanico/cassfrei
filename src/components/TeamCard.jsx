import { User, Mail } from 'lucide-react'

function TeamCard({ member, colorClass }) {
  const { name, role, email, image } = member

  return (
    <div className="team-card" data-aos="fade-up">
      <div className="team-card__media">
        {image ? (
          <div
            className="team-card__photo team-card__photo--image"
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={name}
          ></div>
        ) : (
          <div className={`team-card__photo team-card__photo--${colorClass}`}>
            <User size={64} strokeWidth={1.25} />
          </div>
        )}
        <div className="team-card__icons">
          {email && (
            <a href={`mailto:${email}`} aria-label={`Enviar email a ${name}`} title={email}>
              <Mail size={16} />
            </a>
          )}
          <span className="team-card__divider"></span>
        </div>
      </div>
      <h3 className="team-card__name">{name}</h3>
      {role && <p className="team-card__role">{role}</p>}
    </div>
  )
}

export default TeamCard
