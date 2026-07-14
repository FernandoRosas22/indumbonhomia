import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderArt from '@/components/ui/PlaceholderArt'

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderArt variant="texture" tone="ink" seed={4} className="h-full w-full" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-5 text-stone-light"
        >
          Por tiempo limitado
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-xl text-4xl leading-tight text-ivory sm:text-5xl"
        >
          20% off en la segunda unidad
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-md text-sm leading-relaxed text-stone-light"
        >
          Válido en toda la colección. La promoción se aplica automáticamente al coordinar tu
          pedido por WhatsApp.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9"
        >
          <Link
            to="/tienda"
            className="link-underline text-[0.75rem] tracking-[0.18em] uppercase text-ivory"
          >
            Comprar ahora →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
