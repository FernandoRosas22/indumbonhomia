import InstagramIcon from '@/components/ui/InstagramIcon'
import { motion } from 'framer-motion'
import PlaceholderArt from '@/components/ui/PlaceholderArt'

const tiles: Array<{ variant: 'vestidos' | 'remeras' | 'pantalones' | 'abrigos' | 'accesorios' | 'portrait'; seed: number }> = [
  { variant: 'portrait', seed: 1 },
  { variant: 'vestidos', seed: 5 },
  { variant: 'accesorios', seed: 6 },
  { variant: 'abrigos', seed: 7 },
  { variant: 'portrait', seed: 8 },
  { variant: 'remeras', seed: 9 },
]

export default function InstagramSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="eyebrow mb-3">Síganos</p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-display text-3xl text-ink hover:text-stone transition-colors"
        >
          <InstagramIcon size={22} strokeWidth={1.5} />
          @muriel.style
        </a>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
        {tiles.map((tile, i) => (
          <motion.a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group block aspect-square overflow-hidden"
          >
            <PlaceholderArt
              variant={tile.variant}
              tone={i % 2 === 0 ? 'porcelain' : 'sand'}
              seed={tile.seed}
              className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
