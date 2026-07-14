import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '@/types/product'
import { formatPrice } from '@/lib/whatsapp'
import { parseImageId } from '@/lib/image'
import PlaceholderArt from './PlaceholderArt'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const primary = parseImageId(product.images[0])
  const secondary = parseImageId(product.images[1] ?? product.images[0])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.65, 0, 0.35, 1] }}
    >
      <Link to={`/producto/${product.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-porcelain">
          <PlaceholderArt
            variant={primary.variant}
            tone={primary.tone}
            seed={primary.seed}
            label={product.name}
            className="absolute inset-0 h-full w-full transition-opacity duration-700 group-hover:opacity-0"
          />
          <PlaceholderArt
            variant={secondary.variant}
            tone={secondary.tone}
            seed={secondary.seed}
            label={product.name}
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          {product.isNew && (
            <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[0.62rem] tracking-[0.18em] uppercase text-ink">
              Nuevo
            </span>
          )}
          {product.compareAtPrice && (
            <span className="absolute right-3 top-3 bg-ink px-2.5 py-1 text-[0.62rem] tracking-[0.18em] uppercase text-ivory">
              Oferta
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[0.98rem] text-ink">{product.name}</h3>
            <p className="mt-1 text-[0.72rem] tracking-wide text-stone">
              {product.colors.length} {product.colors.length === 1 ? 'color' : 'colores'}
            </p>
          </div>
          <div className="text-right shrink-0">
            {product.compareAtPrice && (
              <p className="text-[0.72rem] text-stone line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
            <p className="text-[0.85rem] text-ink">{formatPrice(product.price)}</p>
          </div>
        </div>
        <span className="link-underline mt-2 inline-block text-[0.68rem] tracking-[0.16em] uppercase text-ink">
          Ver producto
        </span>
      </Link>
    </motion.div>
  )
}
