import { useEffect, useRef, useState } from 'react'

const INITIAL_FORM = { name: '', email: '', checkIn: '', checkOut: '' }

export default function AvailabilityModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    if (!open) return

    setForm(INITIAL_FORM)
    setSubmitted(false)

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    firstFieldRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="availability-modal-title">
        <button className="modal__close" aria-label="Close" onClick={onClose}>
          &times;
        </button>

        {submitted ? (
          <div className="modal-confirmation">
            <p className="eyebrow">Request Sent</p>
            <h3>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
            <p>We&rsquo;ll be in touch shortly to confirm availability.</p>
            <button className="btn btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">Plan Your Stay</p>
            <h3 id="availability-modal-title">Check Availability</h3>
            <p className="modal__sub">
              Tell us your dates and we&rsquo;ll follow up to confirm your room.
            </p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  ref={firstFieldRef}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="modal-form__row">
                <label>
                  Check-in
                  <input
                    type="date"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Check-out
                  <input
                    type="date"
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <button type="submit" className="btn btn--primary modal-form__submit">
                Request Availability
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
