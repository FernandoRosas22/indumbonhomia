import type { CategorySlug } from '@/types/product'

type Variant = CategorySlug | 'portrait' | 'texture'

interface PlaceholderArtProps {
  variant: Variant
  tone?: 'ivory' | 'porcelain' | 'sand' | 'ink'
  seed?: number
  className?: string
  label?: string
}

const TONES: Record<string, string> = {
  ivory: '#FAF7F2',
  porcelain: '#F1EBE2',
  sand: '#E8DFD1',
  ink: '#1B1815',
}

/**
 * Editorial line-art "croquis" illustrations used as photography placeholders.
 * Single-stroke, hand-drawn-feel garment/figure sketches in the brand's ink tone,
 * set on a soft background — reads as an intentional lookbook aesthetic rather
 * than a broken image.
 */
function GarmentPath({ variant, seed = 0 }: { variant: Variant; seed?: number }) {
  const wobble = (n: number) => n + ((seed * 13) % 7) - 3

  switch (variant) {
    case 'vestidos':
      return (
        <path
          d={`M ${wobble(180)} 90 C 150 110, 140 150, 150 190 C 120 260, 110 340, 130 430 C 160 460, 240 460, 270 430 C 290 340, 280 260, 250 190 C 260 150, 250 110, ${wobble(220)} 90 C 210 70, 190 70, ${wobble(180)} 90 Z`}
          fill="none"
        />
      )
    case 'remeras':
      return (
        <path
          d={`M ${wobble(150)} 130 L 130 110 L 100 150 L 130 190 L 150 175 L 150 340 L 250 340 L 250 175 L 270 190 L 300 150 L 270 110 L ${wobble(250)} 130 C 240 110, 160 110, ${wobble(150)} 130 Z`}
          fill="none"
        />
      )
    case 'pantalones':
      return (
        <path
          d={`M ${wobble(150)} 90 L 250 90 L 260 120 L 235 430 L 205 430 L 200 220 L 195 430 L 165 430 L 140 120 Z`}
          fill="none"
        />
      )
    case 'abrigos':
      return (
        <path
          d={`M ${wobble(160)} 100 L 130 130 L 115 260 L 140 260 L 150 430 L 250 430 L 260 260 L 285 260 L 270 130 L ${wobble(240)} 100 C 225 120, 175 120, ${wobble(160)} 100 Z M 200 100 L 200 430`}
          fill="none"
        />
      )
    case 'accesorios':
      return (
        <path
          d={`M 200 150 A 55 55 0 1 1 199 150 M 200 205 L 200 320 M 165 260 Q 200 240 235 260`}
          fill="none"
        />
      )
    case 'portrait':
      return (
        <path
          d={`M 200 90 A 38 38 0 1 1 199 90 M 200 128 C 160 150, 145 220, 150 300 C 155 380, 170 430, 200 460 C 230 430, 245 380, 250 300 C 255 220, 240 150, 200 128 Z`}
          fill="none"
        />
      )
    default:
      return (
        <path d="M 100 250 C 150 150, 250 150, 300 250 C 250 350, 150 350, 100 250 Z" fill="none" />
      )
  }
}

export default function PlaceholderArt({
  variant,
  tone = 'porcelain',
  seed = 0,
  className = '',
  label,
}: PlaceholderArtProps) {
  const bg = TONES[tone]
  const stroke = tone === 'ink' ? TONES.ivory : TONES.ink
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={label ?? `Ilustración ${variant}`}
    >
      <rect x="0" y="0" width="400" height="500" fill={bg} />
      <g stroke={stroke} strokeWidth="1" opacity="0.55" strokeLinecap="round" strokeLinejoin="round">
        <GarmentPath variant={variant} seed={seed} />
      </g>
      <line x1="24" y1="470" x2="70" y2="470" stroke={stroke} strokeWidth="0.75" opacity="0.35" />
    </svg>
  )
}
