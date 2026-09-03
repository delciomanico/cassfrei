function ValueCard({ icon, title, text }) {
  return (
    <div className="value-card" data-aos="fade-up">
      <div className="icon">
        <span className={icon}></span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default ValueCard
