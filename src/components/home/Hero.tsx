import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderArt from '@/components/ui/PlaceholderArt'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="order-2 px-5 py-12 sm:px-8 md:order-1 md:py-0">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-5"
          >
            Colección Primavera
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[2.75rem] leading-[1.04] text-ink sm:text-6xl md:text-[4.2rem]"
          >
            Vestir con
            <br />
            <span className="italic font-normal">intención.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-[38ch] text-[0.95rem] leading-relaxed text-stone"
          >
            Piezas atemporales, materiales nobles y siluetas pensadas para acompañar el
            movimiento real de cada día.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9"
          >
            <Link
              to="/tienda"
              className="link-underline text-[0.75rem] tracking-[0.18em] uppercase text-ink"
            >
              Descubrir la colección →
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="order-1 aspect-[4/5] w-full md:order-2 md:aspect-auto md:h-[88vh]"
        >
          <PlaceholderArt
            variant="portrait"
            tone="porcelain"
            seed={2}
            label="Look de la colección"
            className="h-full w-full"
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 -rotate-90 md:block">
        <span className="eyebrow whitespace-nowrap">Bonhomía — Buenos Aires</span>
      </div>
    </section>
  )
}
