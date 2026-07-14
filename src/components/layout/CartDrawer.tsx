import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice, buildOrderMessage, buildWhatsAppUrl } from '@/lib/whatsapp'
import { parseImageId } from '@/lib/image'
import PlaceholderArt from '@/components/ui/PlaceholderArt'
import QuantityStepper from '@/components/ui/QuantityStepper'
import Button from '@/components/ui/Button'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()

  const handleCheckout = () => {
    const message = buildOrderMessage(items, subtotal)
    window.open(buildWhatsAppUrl(message), '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink/40"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="font-display text-lg text-ink">
                Tu carrito {items.length > 0 && `(${items.length})`}
              </h2>
              <button onClick={closeCart} aria-label="Cerrar carrito" className="p-1">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag size={32} strokeWidth={1} className="text-stone" />
                <p className="text-sm text-stone">Tu carrito está vacío por ahora.</p>
                <Button variant="secondary" onClick={closeCart}>
                  <Link to="/tienda">Ver tienda</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5">
                  <ul className="space-y-6">
                    {items.map((item) => {
                      const img = parseImageId(item.image)
                      return (
                        <li
                          key={`${item.productId}-${item.size}-${item.color}`}
                          className="flex gap-4"
                        >
                          <div className="h-24 w-20 shrink-0 overflow-hidden bg-porcelain">
                            <PlaceholderArt
                              variant={img.variant}
                              tone={img.tone}
                              seed={img.seed}
                              className="h-full w-full"
                              label={item.name}
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="font-display text-sm text-ink">{item.name}</p>
                                <p className="mt-1 text-[0.7rem] tracking-wide text-stone">
                                  Talle {item.size} · {item.color}
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.productId, item.size, item.color)}
                                aria-label="Eliminar producto"
                                className="p-1 text-stone transition-colors hover:text-ink"
                              >
                                <Trash2 size={15} strokeWidth={1.5} />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <QuantityStepper
                                size="sm"
                                quantity={item.quantity}
                                onIncrease={() =>
                                  updateQuantity(
                                    item.productId,
                                    item.size,
                                    item.color,
                                    item.quantity + 1
                                  )
                                }
                                onDecrease={() =>
                                  updateQuantity(
                                    item.productId,
                                    item.size,
                                    item.color,
                                    item.quantity - 1
                                  )
                                }
                              />
                              <p className="text-sm text-ink">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="border-t border-line px-6 py-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="eyebrow">Subtotal</span>
                    <span className="font-display text-lg text-ink">{formatPrice(subtotal)}</span>
                  </div>
                  <Button onClick={handleCheckout} className="w-full">
                    Finalizar pedido por WhatsApp
                  </Button>
                  <p className="mt-3 text-center text-[0.68rem] leading-relaxed text-stone">
                    Coordinamos envío y pago directamente por WhatsApp.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
