export type CategorySlug =
  | 'vestidos'
  | 'remeras'
  | 'pantalones'
  | 'abrigos'
  | 'accesorios'

export interface Category {
  slug: CategorySlug
  name: string
  image: string
}

export interface Product {
  id: string
  slug: string
  name: string
  price: number
  compareAtPrice?: number
  category: CategorySlug
  description: string
  images: string[]
  sizes: string[]
  colors: { name: string; hex: string }[]
  isNew?: boolean
}

export interface CartItem {
  productId: string
  name: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}
