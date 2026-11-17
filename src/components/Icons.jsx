const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const LogoMark = () => (
  <img src="/logo.png" width="44" height="44" alt="" aria-hidden="true" />
)

export const WhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 13.9c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.3.5-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 .9c.3.2.5.2.5.4.1.1.1.6-.1 1.2Z" />
  </svg>
)

export const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.4" {...line}>
    <path d="m5 12 5 5 9-10" />
  </svg>
)

export const Ledger = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.2" {...line}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h4" />
  </svg>
)

const painIcons = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  swap: <path d="M4 7h13l-3-3M20 17H7l3 3" />,
  receipt: (
    <>
      <path d="M5 4h14v16l-3-2-2 2-2-2-2 2-2-2-3 2Z" />
      <path d="M9 9h6M9 13h4" />
    </>
  ),
}

export const PainIcon = ({ name }) => (
  <svg className="ic" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.8" {...line}>
    {painIcons[name]}
  </svg>
)
