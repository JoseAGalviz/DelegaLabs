const svgProps = { viewBox: '0 0 320 150', role: 'img', preserveAspectRatio: 'xMidYMid meet' }

const Check = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <circle r="9" className="il-ok" />
    <path d="M-4 0l3 3 5-6" className="il-tick" />
  </g>
)

function Catalogo() {
  return (
    <svg {...svgProps} aria-label="Chat donde un cliente pide y el bot responde con el precio">
      <rect x="150" y="14" width="150" height="34" rx="10" className="il-accent" />
      <rect x="164" y="26" width="90" height="6" rx="3" className="il-on-accent" />
      <rect x="164" y="36" width="56" height="5" rx="2.5" className="il-on-accent il-soft" />
      <rect x="20" y="58" width="190" height="78" rx="10" className="il-card" />
      <rect x="34" y="70" width="110" height="7" rx="3.5" className="il-line" />
      <rect x="34" y="88" width="72" height="12" rx="6" className="il-chip" />
      <text x="42" y="97.5" className="il-label">$90</text>
      <rect x="112" y="88" width="82" height="12" rx="6" className="il-chip" />
      <text x="120" y="97.5" className="il-label">Bs 10.800</text>
      <rect x="34" y="110" width="76" height="16" rx="8" className="il-accent" />
      <text x="48" y="121.5" className="il-label il-on-accent-fill">Pedir</text>
    </svg>
  )
}

function Caja() {
  const bars = [
    { x: 38, h: 58, label: 'Pago Móvil' },
    { x: 120, h: 40, label: 'Zelle' },
    { x: 202, h: 24, label: 'Efectivo' },
  ]
  return (
    <svg {...svgProps} aria-label="Barras de ingresos por medio de pago con el total del día">
      <line x1="20" y1="110" x2="300" y2="110" className="il-axis" />
      {bars.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={110 - b.h} width="64" height={b.h} rx="6" className="il-accent" />
          <text x={b.x + 32} y="128" textAnchor="middle" className="il-label il-muted">{b.label}</text>
        </g>
      ))}
      <rect x="244" y="16" width="62" height="44" rx="10" className="il-card" />
      <text x="275" y="33" textAnchor="middle" className="il-label il-muted">Total</text>
      <text x="275" y="50" textAnchor="middle" className="il-label il-strong">$1.240</text>
      <Check x="296" y="16" />
    </svg>
  )
}

function Cobranza() {
  const rows = [
    { y: 16, paid: true },
    { y: 54, paid: false },
    { y: 92, paid: false },
  ]
  return (
    <svg {...svgProps} aria-label="Lista de clientes con pagos recibidos y pendientes">
      {rows.map((r, i) => (
        <g key={r.y}>
          <rect x="20" y={r.y} width="280" height="32" rx="10" className="il-card" />
          <circle cx="40" cy={r.y + 16} r="8" className="il-chip" />
          <rect x="58" y={r.y + 9} width={96 - i * 12} height="6" rx="3" className="il-line" />
          <rect x="58" y={r.y + 19} width="56" height="5" rx="2.5" className="il-line il-soft" />
          {r.paid ? (
            <>
              <rect x="232" y={r.y + 8} width="56" height="16" rx="8" className="il-ok-soft" />
              <text x="260" y={r.y + 19.5} textAnchor="middle" className="il-label il-ok-text">Pagó</text>
            </>
          ) : (
            <>
              <rect x="224" y={r.y + 8} width="64" height="16" rx="8" className="il-accent" />
              <text x="256" y={r.y + 19.5} textAnchor="middle" className="il-label il-on-accent-fill">Recordar</text>
            </>
          )}
        </g>
      ))}
    </svg>
  )
}

function Conciliacion() {
  return (
    <svg {...svgProps} aria-label="Un pedido y un pago que coinciden">
      <rect x="20" y="22" width="112" height="106" rx="12" className="il-card" />
      <text x="34" y="44" className="il-label il-muted">Pedido #124</text>
      <text x="34" y="70" className="il-big">$105</text>
      <rect x="34" y="86" width="72" height="6" rx="3" className="il-line" />
      <rect x="34" y="100" width="48" height="6" rx="3" className="il-line il-soft" />
      <rect x="188" y="22" width="112" height="106" rx="12" className="il-card" />
      <text x="202" y="44" className="il-label il-muted">Pago Móvil</text>
      <text x="202" y="70" className="il-big">$105</text>
      <rect x="202" y="86" width="72" height="6" rx="3" className="il-line" />
      <rect x="202" y="100" width="48" height="6" rx="3" className="il-line il-soft" />
      <line x1="132" y1="75" x2="188" y2="75" className="il-link" />
      <Check x="160" y="75" />
    </svg>
  )
}

const art = [Catalogo, Caja, Cobranza, Conciliacion]

export function ServiceArt({ index }) {
  const Art = art[index]
  return Art ? <div className="card-art"><Art /></div> : null
}
