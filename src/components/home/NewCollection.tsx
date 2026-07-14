import { Link } from 'react-router-dom'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { getNewProducts } from '@/data/products'

export default function NewCollection() {
  const items = getNewProducts(4)

  return (
    <section className="section-space mx-auto max-w-7xl px-5 sm:px-8">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Recién llegado" title="Nueva colección" />
        <Link
          to="/tienda"
          className="link-underline shrink-0 text-[0.72rem] tracking-[0.18em] uppercase text-ink"
        >
          Ver todo
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-4">
        {items.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
