export const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#preguntas', label: 'Preguntas' },
]

export const metrics = [
  { value: '24/7', label: 'atención de pedidos, también de noche y en domingo' },
  { value: '−2 h', label: 'menos en el cuadre de caja diario' },
  { value: '100%', label: 'de tus cuentas por cobrar con recordatorio a tiempo' },
]

export const pains = [
  {
    icon: 'clock',
    title: 'Pedidos que se pierden fuera de horario',
    text: 'El cliente escribe a las 8 de la noche preguntando precio. Nadie responde hasta la mañana y ya le compró a otro.',
  },
  {
    icon: 'swap',
    title: 'Un cuadre de caja en tres monedas',
    text: 'Pago Móvil en bolívares, Zelle y efectivo en dólares, y pesos colombianos si vendes en la frontera. Cada cierre es una hoja de cálculo y horas de trabajo.',
  },
  {
    icon: 'receipt',
    title: 'Cobranza hecha a mano',
    text: 'Alguien revisa quién debe, escribe uno por uno y se le olvida la mitad. El dinero de lo que ya vendiste tarda semanas en entrar.',
  },
]

export const services = [
  {
    title: 'Bot de catálogo y pedidos',
    text: 'Responde precios y disponibilidad con tu catálogo, arma el pedido y te lo pasa listo para despachar.',
    bullets: ['Precios en Bs, USD o COP según tu tasa del día', 'Pasa la conversación a una persona cuando hace falta'],
    setup: 300,
    monthly: 40,
  },
  {
    title: 'Cuadre de caja multimoneda',
    text: 'Registra lo que entra por cada medio de pago y te entrega el cierre del día en un solo resumen.',
    bullets: ['Pago Móvil, Zelle y efectivo', 'Diferencias a la vista antes de cerrar'],
    setup: 250,
    monthly: 30,
  },
  {
    title: 'Cobranza automática por WhatsApp',
    text: 'Recordatorios amables a quien te debe, en la fecha que tú definas, con el monto y la forma de pago.',
    bullets: ['Tú decides el tono y la frecuencia', 'Ves quién respondió y quién sigue pendiente'],
    setup: 200,
    monthly: 30,
  },
  {
    title: 'Conciliación de pagos',
    text: 'Compara los pagos que te reportan con lo que de verdad llegó, para que no despaches sin cobrar.',
    bullets: ['Cada pago queda asociado a su pedido o factura', 'Aviso cuando un comprobante no coincide'],
    setup: 300,
    monthly: 40,
  },
]

export const steps = [
  { when: '20 minutos', title: 'Diagnóstico', text: 'Nos cuentas cómo vendes, cobras y cierras caja hoy. Te decimos qué vale la pena automatizar y qué no.' },
  { when: 'Antes de pagar', title: 'Demo con tus datos', text: 'Montamos una prueba con tus productos y tus precios para que la uses desde tu teléfono.' },
  { when: 'Plazo acordado', title: 'Implementación', text: 'Lo conectamos a tu WhatsApp, ajustamos las reglas contigo y entrenamos a tu equipo.' },
  { when: 'Cada mes', title: 'Soporte mensual', text: 'Mantenemos el servicio, actualizamos catálogo y reglas, y atendemos tus dudas por WhatsApp.' },
]

export const quotes = [
  { fig: '+18', text: 'Antes los mensajes de la noche se quedaban sin responder. Ahora amanecemos con unos 18 pedidos a la semana ya armados.', who: 'Ferretería, 8 empleados · San Cristóbal' },
  { fig: '15 min', text: 'El cierre nos tomaba casi dos horas entre bolívares, dólares y pesos. Hoy lo revisamos en 15 minutos.', who: 'Farmacia, 12 empleados · Cúcuta' },
  { fig: '−40%', text: 'Las cuentas vencidas bajaron cerca de 40% en dos meses, sin que nadie del equipo tuviera que perseguir a los clientes.', who: 'Distribuidora, 15 empleados · San Cristóbal' },
]

export const faq = [
  {
    q: '¿Y si se va la luz o el internet?',
    a: 'Sabemos que los cortes son parte del día a día. En el diagnóstico revisamos qué pasa en tu negocio cuando falla la luz o la conexión y acordamos cómo se manejan los pedidos y los cobros en esos momentos. No te vamos a prometer que todo sigue igual sin conexión.',
  },
  {
    q: '¿El bot inventa precios?',
    a: 'No. Solo responde con tu catálogo y con las reglas que tú apruebas. Si le preguntan algo que no está ahí, o el cliente pide un descuento o un caso especial, pasa la conversación a una persona de tu equipo.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Cada persona de tu equipo entra con su propio acceso y ve solo lo que le corresponde según su rol. No guardamos claves bancarias ni datos sensibles de tus clientes. En el diagnóstico te explicamos qué información se usa y para qué.',
  },
  {
    q: '¿Qué pasa si dejo de pagar?',
    a: 'La mensualidad cubre el funcionamiento y el soporte, así que el servicio se pausa. Tu información sigue siendo tuya. Cómo y en qué plazo te la entregamos queda acordado por escrito desde el diagnóstico, antes de que pagues nada.',
  },
]

export const about = {
  title: 'Una persona real que te responde, no un formulario.',
  text: 'Delega Labs es un estudio pequeño de San Cristóbal. Construimos cada automatización contigo y la dejamos funcionando con el WhatsApp y los medios de pago que ya usas.',
  points: [
    { title: 'Hablas con quien lo construye', text: 'Sin intermediarios ni tickets. Quien te hace el diagnóstico es quien programa tu solución.' },
    { title: 'Pensado para Bs, USD y COP', text: 'Tasas del día, Pago Móvil, Zelle y pesos desde el primer día, no como un añadido.' },
    { title: 'Sin letra pequeña', text: 'Alcance y horas de soporte por escrito antes de empezar. Si algo no vale la pena automatizar, te lo decimos.' },
  ],
}

export const weave = {
  title: 'Tres cosas separadas. Un solo flujo.',
  text: 'Hoy tus pedidos, tus pagos y tu caja van cada uno por su lado. Delega Labs los une en un solo flujo.',
  sources: [
    { title: 'WhatsApp', text: 'Pedidos y preguntas de tus clientes' },
    { title: 'Pagos', text: 'Pago Móvil, Zelle y efectivo' },
    { title: 'Caja', text: 'Bolívares, dólares y pesos' },
  ],
  result: {
    title: 'Un solo cierre al final del día',
    items: ['Cada pedido registrado', 'Cada pago verificado', 'La caja cuadrada en tres monedas'],
  },
}
