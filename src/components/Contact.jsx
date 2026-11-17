import { useState } from 'react'
import { WA, SALUDO, waLink } from '../config'

const HINT = 'Este formulario no envía nada por su cuenta. Arma el mensaje y tú lo mandas desde tu WhatsApp.'
const campos = ['nombre', 'negocio', 'que']

export default function Contact() {
  const [valores, setValores] = useState({ nombre: '', negocio: '', que: '' })
  const [hint, setHint] = useState(HINT)
  const [mensaje, setMensaje] = useState(null)

  const cambiar = (e) => setValores((v) => ({ ...v, [e.target.name]: e.target.value }))

  const enviar = (e) => {
    e.preventDefault()
    const v = Object.fromEntries(campos.map((c) => [c, valores[c].trim()]))
    const vacio = campos.find((c) => !v[c])
    if (vacio) {
      setMensaje(null)
      setHint('Completa los tres campos para armar tu mensaje.')
      e.target.elements[vacio].focus()
      return
    }
    setMensaje(`Hola Delega Labs, soy ${v.nombre}, de ${v.negocio}.\nQuiero automatizar: ${v.que}`)
    setHint('Mensaje listo. Ábrelo en WhatsApp y envíalo.')
  }

  return (
    <section className="sec alt" id="contacto" aria-labelledby="x-t">
      <div className="wrap close-grid">
        <div className="close-copy">
          <span className="eyebrow">Empecemos</span>
          <h2 id="x-t">Cuéntanos qué quieres dejar de hacer a mano.</h2>
          <p>
            Escríbenos y agendamos tu diagnóstico de 20 minutos. Si no hay nada que valga la pena automatizar en tu
            negocio, también te lo decimos.
          </p>
          <a className="btn btn-primary btn-lg" href={waLink(SALUDO)} target="_blank" rel="noopener">
            Escríbenos por WhatsApp
          </a>
          <p className="wa-num">WhatsApp: <code>+{WA}</code></p>
        </div>
        <form className="contact-form" onSubmit={enviar} noValidate>
          <div className="field">
            <label htmlFor="f-nombre">Tu nombre</label>
            <input id="f-nombre" name="nombre" autoComplete="name" required value={valores.nombre} onChange={cambiar} />
          </div>
          <div className="field">
            <label htmlFor="f-negocio">Tu negocio</label>
            <input
              id="f-negocio" name="negocio" placeholder="Ej.: ferretería, clínica, farmacia"
              autoComplete="organization" required value={valores.negocio} onChange={cambiar}
            />
          </div>
          <div className="field">
            <label htmlFor="f-que">¿Qué quieres automatizar?</label>
            <textarea
              id="f-que" name="que" placeholder="Ej.: responder precios y tomar pedidos por WhatsApp"
              required value={valores.que} onChange={cambiar}
            />
          </div>
          <button className="btn btn-primary btn-lg" type="submit">Preparar mensaje</button>
          <p className="form-hint" role="status">{hint}</p>
          {mensaje && (
            <div className="form-out">
              <pre>{mensaje}</pre>
              <a className="btn btn-primary" href={waLink(mensaje)} target="_blank" rel="noopener">
                Abrir WhatsApp con este mensaje
              </a>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
