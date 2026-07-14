import type { CategorySlug } from '@/types/product'

const TONES = ['porcelain', 'sand', 'ivory'] as const

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
