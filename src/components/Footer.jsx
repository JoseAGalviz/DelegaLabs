const ANIO = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <a className="logo" href="#inicio">Delega Labs</a>
        <span>Automatización con WhatsApp e IA · San Cristóbal, Táchira · Cúcuta</span>
        <span>© {ANIO} Delega Labs</span>
      </div>
    </footer>
  )
}
