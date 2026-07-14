import { parseImageId, isPhotoPath } from '@/lib/image'
import PlaceholderArt from './PlaceholderArt'

interface ProductImageProps {
  imageId: string
  label?: string
  className?: string
}

/**
 * Renderiza una foto real de producto (cuando el id es una ruta, ej.
 * "/products/foto.jpg") o, si no hay foto real disponible, el placeholder
 * ilustrado existente (ids tipo "categoria-numero").
 */
export default function ProductImage({ imageId, label, className }: ProductImageProps) {
  if (isPhotoPath(imageId)) {
    return (
      <img
        src={imageId}
        alt={label ?? ''}
        className={className}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    )
  }

  const { variant, seed, tone } = parseImageId(imageId)
  return <PlaceholderArt variant={variant} tone={tone} seed={seed} label={label} className={className} />
}
