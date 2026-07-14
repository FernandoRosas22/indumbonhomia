import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import type { CategorySlug } from '@/types/product'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('categoria') as CategorySlug | null

  const filtered = useMemo(
    () => (activeCategory ? products.filter((p) => p.category === activeCategory) : products),
    [activeCategory]
  )

  const setCategory = (slug: CategorySlug | null) => {
    if (slug) {
      setSearchParams({ categoria: slug })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-14"
      >
        <p className="eyebrow mb-3">Colección completa</p>
        <h1 className="text-4xl text-ink sm:text-5xl">Tienda</h1>
      </motion.div>

      <div className="no-scrollbar mb-10 flex gap-3 overflow-x-auto pb-1 md:mb-14 md:flex-wrap">
        <button
          onClick={() => setCategory(null)}
          className={`shrink-0 border px-4 py-2 text-[0.68rem] tracking-[0.16em] uppercase transition-colors ${
            !activeCategory
              ? 'border-ink bg-ink text-ivory'
              : 'border-line text-stone hover:border-ink hover:text-ink'
          }`}
        >
          Todo
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setCategory(cat.slug)}
            className={`shrink-0 border px-4 py-2 text-[0.68rem] tracking-[0.16em] uppercase transition-colors ${
              activeCategory === cat.slug
                ? 'border-ink bg-ink text-ivory'
                : 'border-line text-stone hover:border-ink hover:text-ink'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-sm text-stone">
          No hay productos disponibles en esta categoría.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  )
}
