function ValueCard({ icon: Icon, title, text }) {
  return (
    <div className="value-card" data-aos="fade-up">
      <div className="icon">
        <Icon size={28} strokeWidth={1.75} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default ValueCard
