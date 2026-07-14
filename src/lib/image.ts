import type { CategorySlug } from '@/types/product'

const TONES = ['porcelain', 'sand', 'ivory'] as const

/**
 * Las fotos reales de producto se referencian con una ruta (empiezan con "/",
 * ej. "/products/vestido-de-encaje.jpg"). Los ids de placeholder ilustrado
 * siguen el formato "categoria-numero" (ej. "vestidos-1").
 */
export function isPhotoPath(imageId: string): boolean {
  return imageId.startsWith('/')
}

export function parseImageId(imageId: string): {
  variant: CategorySlug | 'portrait' | 'texture'
  seed: number
  tone: (typeof TONES)[number]
} {
  const parts = imageId.split('-')
  const variant = (parts[0] as CategorySlug) ?? 'vestidos'
  const seed = Number(parts[1] ?? 1)
  const tone = TONES[seed % TONES.length]
  return { variant, seed, tone }
}
