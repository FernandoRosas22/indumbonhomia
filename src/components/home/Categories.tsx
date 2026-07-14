import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '@/data/categories'
import PlaceholderArt from '@/components/ui/PlaceholderArt'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Categories() {
  return (
    <section className="bg-porcelain/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Explorar" title="Categorías" align="center" className="mb-12" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link to={`/tienda?categoria=${cat.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <PlaceholderArt
                    variant={cat.slug}
                    tone={i % 2 === 0 ? 'sand' : 'ivory'}
                    seed={i}
                    label={cat.name}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-5">
                    <span className="bg-ivory/90 px-4 py-1.5 font-display text-sm text-ink">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
