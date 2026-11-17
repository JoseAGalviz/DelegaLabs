import { metrics, pains, services, steps, quotes, about, faq } from '../data'
import { PainIcon } from './Icons'
import { ServiceArt } from './Illustrations'

export function Metrics() {
  return (
    <section className="sec metrics alt" aria-labelledby="m-t">
      <div className="wrap">
        <div className="metrics-top">
          <span id="m-t">Lo que puede cambiar en un negocio como el tuyo</span>
          <span className="tag">Cifras de ejemplo</span>
        </div>
        <dl className="num">
          {metrics.map((m) => (
            <div key={m.value}><dt>{m.label}</dt><dd>{m.value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Problem() {
  return (
    <section className="sec" aria-labelledby="p-t">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">El problema</span>
          <h2 id="p-t">Pierdes ventas y tiempo en tareas que se pueden hacer solas.</h2>
          <p>
            Responder los mismos mensajes, cuadrar la caja y cobrarle a quien debe se come el día de tu equipo. Hoy
            alguien tiene que hacerlo a mano, y cuando no puede, el negocio se detiene.
          </p>
        </div>
        <div className="grid g3">
          {pains.map((p) => (
            <div className="pain" key={p.title}>
              <PainIcon name={p.icon} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="sec alt" id="servicios" aria-labelledby="s-t">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Servicios</span>
          <h2 id="s-t">Cuatro soluciones. Empiezas por la que más tiempo te quita.</h2>
          <p>
            Cada una funciona por separado y se conecta con las demás cuando lo necesites. Pagas la implementación una
            vez y una mensualidad por el funcionamiento y el soporte.
          </p>
        </div>
        <div className="grid g2">
          {services.map((s, i) => (
            <article className="card" key={s.title}>
              <ServiceArt index={i} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="price num">
                <b><small>desde </small>${s.setup}</b>
                <span>mensual desde ${s.monthly}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="fine">
          Precios referenciales en dólares. El monto final depende del tamaño de tu catálogo, tus medios de pago y cómo
          trabajas hoy. Te damos el precio cerrado después del diagnóstico.
        </p>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="sec" id="proceso" aria-labelledby="c-t">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 id="c-t">Primero lo ves funcionando. Después decides.</h2>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li className="step" key={s.title}>
              <span className="when">{s.when}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Results() {
  return (
    <section className="sec alt" id="resultados" aria-labelledby="r-t">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Resultados</span>
          <h2 id="r-t">Así se ve cuando funciona.</h2>
          <p>
            Estos casos son escenarios de ejemplo para mostrar el tipo de resultado que buscamos. No son testimonios de
            clientes reales.
          </p>
        </div>
        <div className="grid g3">
          {quotes.map((q) => (
            <figure className="quote" key={q.fig}>
              <span className="tag">Cifras de ejemplo</span>
              <span className="fig num">{q.fig}</span>
              <blockquote>"{q.text}"</blockquote>
              <figcaption>{q.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="sec" id="nosotros" aria-labelledby="a-t">
      <div className="wrap about">
        <div className="sec-head">
          <span className="eyebrow">Quién está detrás</span>
          <h2 id="a-t">{about.title}</h2>
          <p>{about.text}</p>
        </div>
        <ul className="about-list">
          {about.points.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="sec" id="preguntas" aria-labelledby="f-t">
      <div className="wrap faq-layout">
        <div className="sec-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 id="f-t">Lo que todo dueño pregunta antes de empezar.</h2>
        </div>
        <div className="faq">
          {faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
