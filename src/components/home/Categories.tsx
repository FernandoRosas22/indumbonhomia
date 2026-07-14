import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '@/data/categories'
import PlaceholderArt from '@/components/ui/PlaceholderArt'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Categories() {
  return (
    <section className="section-space bg-porcelain/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Explorar" title="Categorías" align="center" className="mb-14 md:mb-16" />
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
                    className="img-zoom h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/12 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-5 flex justify-center">
                    <span className="link-underline font-display text-sm tracking-wide text-ink">
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
