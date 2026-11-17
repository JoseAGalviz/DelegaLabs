import { nav } from '../data'
import { SALUDO, waLink } from '../config'
import { LogoMark, WhatsApp } from './Icons'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="logo" href="#inicio" aria-label="Delega Labs, inicio">
          <LogoMark />
          Delega Labs
        </a>
        <nav className="nav" aria-label="Secciones">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </nav>
        <a className="btn btn-wa" href={waLink(SALUDO)} target="_blank" rel="noopener">
          <WhatsApp />
          <span className="long">Escríbenos por WhatsApp</span>
          <span className="short">WhatsApp</span>
        </a>
      </div>
    </header>
  )
}
