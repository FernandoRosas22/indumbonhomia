import { Link } from 'react-router-dom'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { categories } from '@/data/categories'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 md:pb-12 md:pt-28">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12 md:gap-8">
          <div className="col-span-2 md:col-span-5">
            <span className="font-display text-3xl tracking-[0.06em] text-ink md:text-4xl">
              BONHOMÍA
            </span>
            <p className="mt-5 max-w-[30ch] text-[0.92rem] leading-relaxed text-stone">
              Moda femenina premium. Colecciones cápsula pensadas para durar, no para
              consumirse.
            </p>
            <a
              href="https://www.instagram.com/indumbonhomia"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.15em] uppercase text-ink transition-colors hover:text-stone"
              aria-label="Instagram"
            >
              <InstagramIcon size={16} strokeWidth={1.5} />
              @indumbonhomia
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow mb-5">Tienda</p>
            <ul className="space-y-3.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/tienda?categoria=${cat.slug}`}
                    className="link-underline text-sm text-stone hover:text-ink"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Atención</p>
            <ul className="space-y-3.5 text-sm text-stone">
              <li>Merlo, Buenos Aires</li>
              <li>Lun a Vie, 10 a 18 hs</li>
              <li>
                <Link to="/contacto" className="link-underline text-stone hover:text-ink">
                  Escribinos por WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 text-[0.68rem] tracking-[0.08em] text-stone sm:flex-row sm:items-center md:mt-20">
          <p>© {new Date().getFullYear()} Bonhomía. Todos los derechos reservados.</p>
          <a
            href="https://www.instagram.com/indumbonhomia"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-ink"
          >
            Sitio por @fer.rosas22
          </a>
        </div>
      </div>
    </footer>
  )
}
