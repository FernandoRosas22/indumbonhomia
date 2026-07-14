import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '@/types/product'
import { formatPrice } from '@/lib/whatsapp'
import ProductImage from './ProductImage'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const primaryId = product.images[0]
  const secondaryId = product.images[1] ?? product.images[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.65, 0, 0.35, 1] }}
    >
      <Link to={`/producto/${product.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-porcelain">
          <ProductImage
            imageId={primaryId}
            label={product.name}
            className="img-zoom absolute inset-0 h-full w-full transition-opacity duration-700 group-hover:opacity-0"
          />
          <ProductImage
            imageId={secondaryId}
            label={product.name}
            className="img-zoom absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          {product.isNew && (
            <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[0.6rem] tracking-[0.2em] uppercase text-ink">
              Nuevo
            </span>
          )}
          {product.compareAtPrice && (
            <span className="absolute right-3 top-3 bg-ink px-2.5 py-1 text-[0.6rem] tracking-[0.2em] uppercase text-ivory">
              Oferta
            </span>
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center pb-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="bg-ivory px-5 py-2 text-[0.64rem] tracking-[0.2em] uppercase text-ink shadow-sm">
              Ver producto
            </span>
          </div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-[1.02rem] text-ink">{product.name}</h3>
            <p className="mt-1.5 text-[0.7rem] tracking-[0.08em] text-stone">
              {product.colors.length} {product.colors.length === 1 ? 'color' : 'colores'}
            </p>
          </div>
          <div className="shrink-0 text-right">
            {product.compareAtPrice && (
              <p className="text-[0.72rem] text-stone line-through">
                {formatPrice(product.compareAtPrice)}
              </p>
            )}
            <p className="text-[0.88rem] text-ink">{formatPrice(product.price)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
