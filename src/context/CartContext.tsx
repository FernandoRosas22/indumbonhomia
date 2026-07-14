import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { CartItem } from '@/types/product'

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size: string, color: string) => void
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void
  subtotal: number
  count: number
  clear: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

function sameLine(a: CartItem, productId: string, size: string, color: string) {
  return a.productId === productId && a.size === size && a.color === color
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => sameLine(p, item.productId, item.size, item.color))
      if (existing) {
        return prev.map((p) =>
          sameLine(p, item.productId, item.size, item.color)
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        )
      }
      return [...prev, item]
    })
    setIsOpen(true)
  }

  const removeItem = (productId: string, size: string, color: string) => {
    setItems((prev) => prev.filter((p) => !sameLine(p, productId, size, color)))
  }

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((p) => (sameLine(p, productId, size, color) ? { ...p, quantity } : p))
    )
  }

  const clear = () => setItems([])

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])

  const value: CartContextValue = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    subtotal,
    count,
    clear,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider')
  return ctx
}
