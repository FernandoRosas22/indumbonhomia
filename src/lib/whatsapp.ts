import type { CartItem } from '@/types/product'

// Reemplazar por el número real de WhatsApp del negocio (formato internacional, sin +)
export const WHATSAPP_NUMBER = '5491100000000'

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(value)
}

export function buildOrderMessage(items: CartItem[], subtotal: number): string {
  const lines = [
    'Hola! Quiero hacer un pedido:',
    '',
    ...items.map(
      (item) =>
        `• ${item.name} — Talle ${item.size} / Color ${item.color} — x${item.quantity} — ${formatPrice(
          item.price * item.quantity
        )}`
    ),
    '',
    `Subtotal: ${formatPrice(subtotal)}`,
    '',
    'Quedo atenta a la confirmación. ¡Gracias!',
  ]
  return lines.join('\n')
}

export function buildWhatsAppUrl(message: string, phoneNumber: string = WHATSAPP_NUMBER): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encoded}`
}

export function buildSingleProductMessage(productName: string, size: string, color: string): string {
  return `Hola! Me interesa comprar "${productName}" — Talle ${size} / Color ${color}. ¿Está disponible?`
}
