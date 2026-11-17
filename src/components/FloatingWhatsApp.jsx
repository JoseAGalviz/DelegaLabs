import { SALUDO, waLink } from '../config'
import { WhatsApp } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a className="fab" href={waLink(SALUDO)} target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
      <WhatsApp />
    </a>
  )
}
