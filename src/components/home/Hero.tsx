import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PlaceholderArt from '@/components/ui/PlaceholderArt'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-[minmax(0,0.86fr)_1.14fr] md:items-center">
        <div className="order-2 px-5 py-14 sm:px-8 md:order-1 md:py-0 md:pl-8 md:pr-10 lg:pl-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-stone-light" />
            Colección Primavera
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="text-[3.1rem] leading-[0.98] text-ink sm:text-7xl md:text-[4.6rem] lg:text-[5.2rem]"
          >
            Vestir con
            <br />
            <span className="italic font-normal text-stone">intención.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 max-w-[36ch] text-[0.95rem] leading-relaxed text-stone"
          >
            Piezas atemporales, materiales nobles y siluetas pensadas para acompañar el
            movimiento real de cada día.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Link
              to="/tienda"
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-ivory transition-all duration-300 hover:gap-4 hover:bg-black"
            >
              Descubrir la colección
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/tienda?categoria=vestidos"
              className="link-underline text-[0.72rem] tracking-[0.18em] uppercase text-ink"
            >
              Ver vestidos
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="group order-1 aspect-[4/5] w-full overflow-hidden md:order-2 md:aspect-auto md:h-[94vh] md:max-h-[980px]"
        >
          <PlaceholderArt
            variant="portrait"
            tone="porcelain"
            seed={2}
            label="Look de la colección"
            className="img-zoom h-full w-full"
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -left-12 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
        <span className="eyebrow whitespace-nowrap">Bonhomía — Buenos Aires</span>
      </div>
    </section>
  )
}
