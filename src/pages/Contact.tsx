import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import InstagramIcon from '@/components/ui/InstagramIcon'
import Button from '@/components/ui/Button'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

export default function Contact() {
  const generalMessage = 'Hola! Quería hacerles una consulta sobre sus productos.'

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 max-w-xl"
      >
        <p className="eyebrow mb-3">Estamos para ayudarte</p>
        <h1 className="text-4xl text-ink sm:text-5xl">Contacto</h1>
        <p className="mt-5 text-sm leading-relaxed text-stone">
          ¿Tenés dudas sobre talles, envíos o disponibilidad? Escribinos y te respondemos a la
          brevedad.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="border-t border-line pt-6"
        >
          <MessageCircle size={20} strokeWidth={1.5} className="mb-4 text-ink" />
          <p className="eyebrow mb-2">WhatsApp</p>
          <p className="mb-4 text-sm text-stone">Respuesta en el día, de lunes a viernes.</p>
          <a
            href={buildWhatsAppUrl(generalMessage)}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm text-ink"
          >
            Enviar mensaje
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t border-line pt-6"
        >
          <Mail size={20} strokeWidth={1.5} className="mb-4 text-ink" />
          <p className="eyebrow mb-2">Email</p>
          <p className="mb-4 text-sm text-stone">Para consultas mayoristas o prensa.</p>
          <a href="mailto:hola@indumbonhomia.com" className="link-underline text-sm text-ink">
            hola@indumbonhomia.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border-t border-line pt-6"
        >
          <MapPin size={20} strokeWidth={1.5} className="mb-4 text-ink" />
          <p className="eyebrow mb-2">Showroom</p>
          <p className="mb-4 text-sm text-stone">Merlo, Buenos Aires. Visitas con cita previa.</p>
          <a
            href="https://www.instagram.com/indumbonhomia"
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm text-ink"
          >
            <InstagramIcon size={14} strokeWidth={1.5} />
            @indumbonhomia
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20 flex flex-col items-start justify-between gap-6 bg-porcelain px-8 py-10 sm:flex-row sm:items-center"
      >
        <div>
          <p className="font-display text-xl text-ink">¿Lista para tu próximo look?</p>
          <p className="mt-1 text-sm text-stone">Escribinos y te asesoramos personalmente.</p>
        </div>
        <a href={buildWhatsAppUrl(generalMessage)} target="_blank" rel="noreferrer">
          <Button icon={<MessageCircle size={15} strokeWidth={1.5} />}>Escribir ahora</Button>
        </a>
      </motion.div>
    </div>
  )
}
