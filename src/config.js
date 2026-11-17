// Número de WhatsApp de Delega Labs, sin "+" ni espacios. 
export const WA = '584127331521'
export const SALUDO = 'Hola Delega Labs, quiero mi diagnóstico de 20 minutos.'
export const waLink = (texto) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`
