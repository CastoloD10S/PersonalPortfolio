import { useState } from 'react'
import { personalInfo } from '../data/Index.jsx'

const EMPTY = { name: '', email: '', message: '' }

//validacion
export const validate = ({ name, email, message }) => {
  const errors = {}
  if (!name.trim()) errors.name = 'El nombre es requerido'
  if (!email.trim()) errors.email = 'El correo es requerido'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Correo inválido'
  if (message.trim().length < 10) errors.message = 'El mensaje debe tener al menos 10 caracteres'
  return errors
}

// Por defecto,  abre el cliente de correo con los datos cargados
const sendByMail = ({ name, email, message }) => {
  const subject = encodeURIComponent(`Contacto portafolio: ${name}`)
  const body = encodeURIComponent(`${message}\n\n${name} (${email})`)
  window.location.href = `mailto:${personalInfo.contactEmail}?subject=${subject}&body=${body}`
}

export const ContactForm = ({ onSubmit = sendByMail }) => {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }))
    setSent(false)
  }

  const handleSubmit = e => {
    e.preventDefault() // evita recargar la pag
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    onSubmit(values)
    setValues(EMPTY)
    setSent(true)
  }

  const input = 'w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm'

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto flex max-w-md flex-col gap-4 px-4 py-8">
      <h2 className="text-lg font-light uppercase tracking-widest">Contacto</h2>

      <div>
        <label htmlFor="name" className="text-sm">Nombre</label>
        <input id="name" name="name" value={values.name} onChange={handleChange} className={input} />
        {errors.name && <p role="alert" className="text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm">Correo</label>
        <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={input} />
        {errors.email && <p role="alert" className="text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-sm">Mensaje</label>
        <textarea id="message" name="message" rows={4} value={values.message} onChange={handleChange} className={input} />
        {errors.message && <p role="alert" className="text-xs text-red-400">{errors.message}</p>}
      </div>

      <button type="submit" className="rounded-lg bg-retro-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600">
        Enviar
      </button>

      {sent && <p role="status" className="text-sm text-green-400">¡Mensaje enviado!</p>}
    </form>
  )
}