import { SALUDO, waLink } from '../config'

function Threads() {
  return (
    <svg className="threads" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path className="th th-1" pathLength="1" d="M-40 150 C 260 90, 420 330, 760 300 S 1120 120, 1480 250" />
      <path className="th th-2" pathLength="1" d="M-40 520 C 300 620, 480 300, 820 380 S 1160 620, 1480 470" />
      <path className="th th-3" pathLength="1" d="M-40 340 C 240 220, 520 560, 860 440 S 1200 240, 1480 360" />
    </svg>
  )
}
export default function Hero() {
  return (
    <section className="hero">
      <Threads />
      <div className="wrap">
        <div className="hero-copy">
          <span className="pill"><i></i>Automatización para pymes de San Cristóbal y Cúcuta</span>
          <h1>Tu negocio atiende, cobra y cuadra <em>solo</em>.</h1>
          <p className="lead">
            Conectamos tu WhatsApp con tu catálogo, tus pagos y tu caja. Tus clientes reciben respuesta al momento, en
            bolívares, dólares o pesos, y tú cierras el día sin sacar cuentas a mano.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary btn-lg" href={waLink(SALUDO)} target="_blank" rel="noopener">
              Pide tu diagnóstico gratis
            </a>
            <a className="btn btn-ghost btn-lg" href="#servicios">Ver servicios y precios</a>
          </div>
          <p className="hero-note">20 minutos por WhatsApp o llamada. Sin compromiso.</p>
        </div>

        <div className="stage" aria-label="Ejemplo de conversación: un bot toma un pedido de ferretería por WhatsApp">
          <div className="phone">
            <div className="phone-head">
              <span className="avatar">FA</span>
              <div><b>Ferretería Los Andes</b><small>Asistente automático · en línea</small></div>
            </div>
            <div className="chat">
              <div className="msg out">
                Buenas, ¿tienen cemento gris? Necesito 10 sacos y 2 cabillas de 1/2"<time>7:42 p. m.</time>
              </div>
              <div className="typing" aria-hidden="true"><i></i><i></i><i></i></div>
              <div className="msg in">
                ¡Hola! Sí hay disponibilidad. Te armo el pedido:
                <div className="order num">
                  <div><span>10 × Cemento gris 42,5 kg</span><span>$90,00</span></div>
                  <div><span>2 × Cabilla 1/2" × 12 m</span><span>$15,00</span></div>
                  <div className="tot"><span>Total</span><span>$105,00</span></div>
                  <div className="tot"><span>En bolívares</span><span>Bs 12.600,00</span></div>
                </div>
                <span className="rate">Tasa del día en este ejemplo: Bs 120,00 por dólar</span>
                <time>7:42 p. m.</time>
              </div>
            </div>
          </div>
          <ol className="flow" aria-label="Cómo funciona">
            <li><b>1</b>El cliente pide por WhatsApp</li>
            <li><b>2</b>El bot arma el pedido con precio en Bs y USD</li>
            <li><b>3</b>Tú cobras y tu caja queda cuadrada</li>
          </ol>
        </div>
      </div>
    </section>
  )
}
