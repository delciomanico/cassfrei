function ServiceCard({ icon: Icon, title, text, variant = 'grid', extraClass = '' }) {
  const baseClass = variant === 'feature' ? 'services' : 'services-2'

  return (
    <div className={`${baseClass} text-center ftco-animate ${extraClass}`.trim()} data-aos="fade-up">
      <div className="icon mt-2 d-flex justify-content-center align-items-center">
        <Icon size={40} strokeWidth={1.75} />
      </div>
      <div className="text media-body">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </div>
    </div>
  )
}

export default ServiceCard
