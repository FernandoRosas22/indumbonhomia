import { Link } from 'react-router-dom'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { categories } from '@/data/categories'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl tracking-[0.08em] text-ink">BONHOMÍA</span>
            <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-stone">
              Moda femenina premium. Colecciones cápsula pensadas para durar.
            </p>
            <a
              href="https://www.instagram.com/indumbonhomia"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-stone transition-colors hover:text-ink"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div>
            <p className="eyebrow mb-4">Tienda</p>
            <ul className="space-y-3">
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

          <div>
            <p className="eyebrow mb-4">Marca</p>
            <ul className="space-y-3">
              <li>
                <Link to="/tienda" className="link-underline text-sm text-stone hover:text-ink">
                  Colección completa
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="link-underline text-sm text-stone hover:text-ink">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Atención</p>
            <ul className="space-y-3 text-sm text-stone">
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.7rem] tracking-wide text-stone">
            © {new Date().getFullYear()} Bonhomía. Todos los derechos reservados.
          </p>
          <a
            href="https://www.instagram.com/indumbonhomia"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-[0.7rem] tracking-wide text-stone hover:text-ink"
          >
            Sitio por @fer.rosas22
          </a>
        </div>
      </div>
    </footer>
  )
}
