import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, MessageCircle } from 'lucide-react'
import { getProductBySlug } from '@/data/products'
import { formatPrice, buildWhatsAppUrl, buildSingleProductMessage } from '@/lib/whatsapp'
import { parseImageId } from '@/lib/image'
import PlaceholderArt from '@/components/ui/PlaceholderArt'
import Button from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'

export default function Product() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined

  const [activeImage, setActiveImage] = useState(0)
  const [size, setSize] = useState<string | null>(null)
  const [color, setColor] = useState<string | null>(null)
  const [added, setAdded] = useState(false)

  const { addItem, openCart } = useCart()

  if (!product) return <Navigate to="/404" replace />

  const img = parseImageId(product.images[activeImage])
  const canSubmit = Boolean(size && color)

  const handleAddToCart = () => {
    if (!canSubmit || !size || !color) return
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      color,
      quantity: 1,
    })
    setAdded(true)
    openCart()
  }

  const handleWhatsAppBuy = () => {
    if (!canSubmit || !size || !color) return
    const message = buildSingleProductMessage(product.name, size, color)
    window.open(buildWhatsAppUrl(message), '_blank')
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* Gallery */}
        <div>
          <motion.div
            key={activeImage}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="aspect-[4/5] w-full overflow-hidden bg-porcelain"
          >
            <PlaceholderArt
              variant={img.variant}
              tone={img.tone}
              seed={img.seed}
              label={product.name}
              className="h-full w-full"
            />
          </motion.div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((image, i) => {
                const thumb = parseImageId(image)
                return (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-20 w-16 shrink-0 overflow-hidden border transition-colors ${
                      activeImage === i ? 'border-ink' : 'border-transparent'
                    }`}
                    aria-label={`Ver imagen ${i + 1}`}
                  >
                    <PlaceholderArt
                      variant={thumb.variant}
                      tone={thumb.tone}
                      seed={thumb.seed}
                      className="h-full w-full"
                    />
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="eyebrow mb-3">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
          <h1 className="text-3xl text-ink sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            {product.compareAtPrice && (
              <span className="text-sm text-stone line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="text-xl text-ink">{formatPrice(product.price)}</span>
          </div>

          <p className="mt-6 max-w-[52ch] text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Size selector */}
          <div className="mt-8">
            <p className="eyebrow mb-3">Talle {size && `— ${size}`}</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={`min-w-11 border px-3 py-2 text-sm transition-colors ${
                    size === s
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-line text-ink hover:border-ink'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Color selector */}
          <div className="mt-6">
            <p className="eyebrow mb-3">Color {color && `— ${color}`}</p>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  aria-label={c.name}
                  aria-pressed={color === c.name}
                  className={`h-9 w-9 rounded-full border border-line/60 ring-offset-2 ring-offset-ivory transition-all ${
                    color === c.name ? 'ring-2 ring-ink' : 'hover:ring-1 hover:ring-stone-light'
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {!canSubmit && (
            <p className="mt-5 text-[0.72rem] text-stone">
              Seleccioná talle y color para continuar.
            </p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleAddToCart}
              disabled={!canSubmit}
              icon={<ShoppingBag size={15} strokeWidth={1.5} />}
              className="flex-1"
            >
              {added ? 'Agregado ✓' : 'Agregar al carrito'}
            </Button>
            <Button
              variant="secondary"
              onClick={handleWhatsAppBuy}
              disabled={!canSubmit}
              icon={<MessageCircle size={15} strokeWidth={1.5} />}
              className="flex-1"
            >
              Comprar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
