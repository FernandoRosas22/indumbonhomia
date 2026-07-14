import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Tienda', to: '/tienda' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-ivory/90 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(27,24,21,0.02)]' : 'bg-ivory border-b border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 transition-all duration-500 ${
          scrolled ? 'py-3.5' : 'py-5 md:py-7'
        }`}
      >
        <button
          className="p-1 text-ink md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu size={19} strokeWidth={1.4} />
        </button>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `link-underline text-[0.68rem] tracking-[0.2em] uppercase ${
                  isActive ? 'text-ink' : 'text-stone hover:text-ink'
                } transition-colors duration-300`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/"
          className={`font-display tracking-[0.1em] text-ink absolute left-1/2 -translate-x-1/2 transition-all duration-500 md:static md:translate-x-0 ${
            scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
          }`}
        >
          BONHOMÍA
        </Link>

        <button
          onClick={openCart}
          className="relative p-1 text-ink transition-transform duration-300 hover:scale-[1.06]"
          aria-label="Abrir carrito"
        >
          <ShoppingBag size={19} strokeWidth={1.4} />
          {count > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[0.6rem] text-ivory">
              {count}
            </span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ivory md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-display text-xl tracking-[0.08em] text-ink">BONHOMÍA</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú" className="p-1">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-5 pt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-line py-5 font-display text-3xl text-ink"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
