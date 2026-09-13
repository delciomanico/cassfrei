import { useEffect, useRef, useState } from 'react'

function Counter({ icon: Icon, target, label }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1200
            const startTime = performance.now()

            const step = (now) => {
              const progress = Math.min((now - startTime) / duration, 1)
              setValue(Math.round(progress * target))
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return (
    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate" data-aos="fade-up" ref={ref}>
      <div className="block-18">
        <div className="icon"><Icon size={40} strokeWidth={1.5} /></div>
        <div className="text">
          <strong className="number">{value}</strong>
          <span>{label}</span>
        </div>
      </div>
    </div>
  )
}

export default Counter
