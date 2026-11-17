import { weave } from '../data'
import { Check } from './Icons'

// Tres hebras que se cruzan y terminan en un mismo punto.
const horizontal = [
  'M0 40 C100 40 100 200 200 200 S300 120 400 120',
  'M0 120 C100 120 100 40 200 40 S300 120 400 120',
  'M0 200 C100 200 100 120 200 120 S320 120 400 120',
]
const vertical = ['M50 0 C50 44 150 28 150 72', 'M150 0 V72', 'M250 0 C250 44 150 28 150 72']

function Strands({ className, viewBox, paths }) {
  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true">
      {paths.map((d, i) => (
        <g key={d} className={`strand s${i + 1}`}>
          <path d={d} />
          <path className="flow" d={d} />
        </g>
      ))}
    </svg>
  )
}

export default function Weave() {
  return (
    <section className="weave" id="trama" aria-labelledby="w-t">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">La solución</span>
          <h2 id="w-t">{weave.title}</h2>
          <p>{weave.text}</p>
        </div>
        <div className="weave-diagram">
          <ul className="weave-sources">
            {weave.sources.map((s, i) => (
              <li key={s.title} className={`weave-src s${i + 1}`}>
                <b>{s.title}</b>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
          <Strands className="weave-h" viewBox="0 0 400 240" paths={horizontal} />
          <Strands className="weave-v" viewBox="0 0 300 72" paths={vertical} />
          <div className="weave-out">
            <h3>{weave.result.title}</h3>
            <ul>
              {weave.result.items.map((item) => (
                <li key={item}><Check />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
