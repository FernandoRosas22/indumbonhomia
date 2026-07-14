import type { Product } from '@/types/product'

// Paleta de colores mapeada a los tonos reales informados por el catálogo de Bonhomía.
const palette = {
  negro: { name: 'Negro', hex: '#100F0D' },
  blanco: { name: 'Blanco', hex: '#FAF7F2' },
  marron: { name: 'Marrón', hex: '#6B4A34' },
  bordo: { name: 'Bordó', hex: '#6E1E2B' },
  gris: { name: 'Gris', hex: '#9B9B93' },
  natural: { name: 'Natural', hex: '#E8DFD1' },
  beige: { name: 'Beige', hex: '#C9B79C' },
  azul: { name: 'Azul', hex: '#1B3A6B' },
  ciruela: { name: 'Ciruela', hex: '#7A2452' },
}

// Catálogo real de Bonhomía (https://bonhomiaindum.mitiendanegocio.com/).
// Nota: la tienda de referencia no tiene productos de la categoría "pantalones" al
// momento del relevamiento, por eso esa categoría queda sin ítems (el listado ya
// contempla el caso vacío). Para la mayoría de los productos se usa el sistema de
// placeholders ilustrados existente (categoria-numero); los productos con foto real
// provista por el local (ruta que empieza con "/products/...") muestran esa foto.
export const products: Product[] = [
  {
    id: 'p1',
    slug: 'vestido-corto-encaje-negro',
    name: 'Vestido Corto Encaje Negro',
    price: 38000,
    category: 'vestidos',
    description:
      'Vestido corto en encaje negro de diseño femenino, con escote amplio levemente cuadrado, mangas largas y silueta entallada que se abre hacia la falda. Ideal para looks de noche o fiesta.',
    images: ['vestidos-1', 'vestidos-2', 'vestidos-3'],
    sizes: ['Único'],
    colors: [palette.negro],
    isNew: true,
  },
  {
    id: 'p2',
    slug: 'vestido-animal-print-mini-lentejuelas',
    name: 'Vestido Animal Print Mini Lentejuelas',
    price: 25000,
    category: 'vestidos',
    description:
      'Vestido corto con estampa animal print y mini lentejuelas. Talle único, con caída elastizada (cede aproximadamente hasta un talle 2).',
    images: ['vestidos-2', 'vestidos-1'],
    sizes: ['Único'],
    colors: [palette.natural],
  },
  {
    id: 'p3',
    slug: 'vestido-de-encaje-escote-abierto',
    name: 'Vestido de Encaje Escote Abierto',
    price: 35000,
    category: 'vestidos',
    description:
      'Vestido de encaje con escote abierto, incluye short interior de lycra debajo de la pollera. Talle único (cede aproximadamente hasta un talle 3).',
    images: ['vestidos-3', 'vestidos-2'],
    sizes: ['Único'],
    colors: [palette.natural],
  },
  {
    id: 'p4',
    slug: 'vestido-de-encaje',
    name: 'Vestido de Encaje',
    price: 35000,
    category: 'vestidos',
    description: 'Vestido de encaje con short interior de lycra debajo de la pollera.',
    images: ['/products/vestido-de-encaje.jpg'],
    sizes: ['Único'],
    colors: [palette.ciruela],
  },
  {
    id: 'p5',
    slug: 'vestido-lanilla-morley-grueso-encaje-breteles',
    name: 'Vestido Lanilla Morley con Puntillas de Encaje',
    price: 35000,
    category: 'vestidos',
    description: 'Vestido en lanilla morley gruesa, con puntillas de encaje y breteles.',
    images: ['vestidos-2', 'vestidos-3'],
    sizes: ['Único'],
    colors: [palette.natural],
    isNew: true,
  },
  {
    id: 'p6',
    slug: 'vestido-morley-lanilla-gruso',
    name: 'Vestido Morley Lanilla Grueso',
    price: 28000,
    category: 'vestidos',
    description: 'Vestido en morley de lanilla gruesa, ideal para las estaciones frías.',
    images: ['vestidos-3', 'vestidos-1'],
    sizes: ['Único'],
    colors: [palette.marron],
  },
  {
    id: 'p7',
    slug: 'camiseta-crop-de-algodon-gatito',
    name: 'Camiseta Crop de Algodón Gatito',
    price: 12000,
    category: 'remeras',
    description: 'Camiseta crop de algodón con estampa de gatito.',
    images: ['remeras-1', 'remeras-2'],
    sizes: ['Único'],
    colors: [palette.natural],
    isNew: true,
  },
  {
    id: 'p8',
    slug: 'musculosa-basica-lycra',
    name: 'Musculosa Básica Lycra',
    price: 12000,
    category: 'remeras',
    description: 'Musculosa básica confeccionada en lycra, ideal para el uso diario.',
    images: ['remeras-2', 'remeras-1'],
    sizes: ['Único'],
    colors: [palette.marron],
  },
  {
    id: 'p9',
    slug: 'top-musculosa-minis-lentejuelas',
    name: 'Top Musculosa de Minis Lentejuelas',
    price: 14000,
    category: 'remeras',
    description:
      'Musculosa corta con mini lentejuelas negras, escote redondo, breteles anchos y calce cómodo levemente entallado. Combina bien con jeans, pantalones o polleras para salidas de noche.',
    images: ['remeras-3', 'remeras-2'],
    sizes: ['Único'],
    colors: [palette.negro],
  },
  {
    id: 'p10',
    slug: 'camiseta-encaje-strass',
    name: 'Camiseta de Encaje con Strass',
    price: 20000,
    category: 'remeras',
    description:
      'Top corto de encaje negro con aplicaciones de strass, escote en V cruzado y mangas largas estilo Oxford con transparencias en abdomen y mangas. Mayor cobertura en el busto para más comodidad.',
    images: ['remeras-1', 'remeras-3'],
    sizes: ['Único'],
    colors: [palette.negro],
  },
  {
    id: 'p11',
    slug: 'remera-cuello-tortuga-micro-polar',
    name: 'Remera Cuello Tortuga Micro Polar',
    price: 18000,
    category: 'remeras',
    description: 'Remera de cuello tortuga en micro polar con detalle de mini lentejuelas.',
    images: ['remeras-2', 'remeras-3'],
    sizes: ['M', 'L', 'XXL'],
    colors: [palette.natural],
  },
  {
    id: 'p12',
    slug: 'camiseta-media-polera-lycra-puntillas',
    name: 'Camiseta Media Polera Lycra con Puntillas',
    price: 16000,
    category: 'remeras',
    description: 'Camiseta media polera en lycra con detalle de puntillas.',
    images: ['remeras-3', 'remeras-1'],
    sizes: ['Único'],
    colors: [palette.negro],
  },
  {
    id: 'p13',
    slug: 'top-lycra-con-aplique',
    name: 'Top Lycra con Aplique',
    price: 12000,
    category: 'remeras',
    description:
      'Top de lycra con aplique decorativo. Talle único, con caída elastizada (cede aproximadamente hasta un talle 3).',
    images: ['remeras-1', 'remeras-2'],
    sizes: ['Único'],
    colors: [palette.negro, palette.natural, palette.bordo],
  },
  {
    id: 'p14',
    slug: 'camisete-encaje-peludito',
    name: 'Camisete de Encaje con Peludito',
    price: 29000,
    category: 'remeras',
    description: 'Camisete de encaje con detalle de peludito, para looks de entretiempo.',
    images: ['remeras-2', 'remeras-1'],
    sizes: ['Único'],
    colors: [palette.natural],
  },
  {
    id: 'p15',
    slug: 'sweater-lana-frisada',
    name: 'Sweater de Lana Frisada',
    price: 35000,
    category: 'abrigos',
    description:
      'Sweater importado en lana frisada con apliques de flores y mini lentejuelas. Talle único y amplio (llega hasta aproximadamente un talle 4/5).',
    images: ['abrigos-1', 'abrigos-2'],
    sizes: ['Único'],
    colors: [palette.natural],
    isNew: true,
  },
  {
    id: 'p16',
    slug: 'sweater-lana-frisada-escote-v',
    name: 'Sweater Lana Frisada Escote V',
    price: 35000,
    category: 'abrigos',
    description: 'Sweater en lana frisada con escote en V. Talle único y amplio.',
    images: ['abrigos-2', 'abrigos-3'],
    sizes: ['Único'],
    colors: [palette.natural],
  },
  {
    id: 'p17',
    slug: 'sweater-bremer-importado',
    name: 'Sweater Bremer Importado',
    price: 57900,
    category: 'abrigos',
    description:
      'Sweater bremer importado de tejido grueso. Talle único (cede aproximadamente hasta un talle 4).',
    images: ['abrigos-3', 'abrigos-1'],
    sizes: ['Único'],
    colors: [palette.natural],
  },
  {
    id: 'p18',
    slug: 'piluso-corderito',
    name: 'Piluso Corderito',
    price: 15000,
    category: 'accesorios',
    description: 'Piluso de invierno con textura de corderito, suave y abrigado.',
    images: ['accesorios-1', 'accesorios-2'],
    sizes: ['Único'],
    colors: [palette.blanco],
    isNew: true,
  },
  {
    id: 'p19',
    slug: 'piluso-corderoy',
    name: 'Piluso Corderoy',
    price: 15000,
    category: 'accesorios',
    description: 'Piluso de invierno en corderoy.',
    images: ['accesorios-2', 'accesorios-3'],
    sizes: ['Único'],
    colors: [palette.negro],
  },
  {
    id: 'p20',
    slug: 'piluso-peludito',
    name: 'Piluso Peludito',
    price: 15000,
    category: 'accesorios',
    description:
      'Piluso confeccionado en material suave y abrigado, con textura de peluche. Color blanco/crudo, combinable con cualquier outfit de invierno.',
    images: ['accesorios-3', 'accesorios-1'],
    sizes: ['Único'],
    colors: [palette.blanco],
  },
  {
    id: 'p22',
    slug: 'camiseta-argentina-retro-1986',
    name: 'Camiseta Argentina Retro 1986',
    price: 40000,
    category: 'remeras',
    description: 'Camiseta retro de la selección Argentina, edición 1986.',
    images: ['/products/camiseta-argentina-retro-1986.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [palette.azul],
  },
  {
    id: 'p21',
    slug: 'botas-cana-arrugada',
    name: 'Botas Caña Arrugada',
    price: 60000,
    category: 'accesorios',
    description: 'Botas de caña arrugada, disponibles en talles del 36 al 39.',
    images: ['/products/botas-cana-arrugada.jpg'],
    sizes: ['36', '37', '38', '39'],
    colors: [palette.negro],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.slice(0, limit)
}

export function getNewProducts(limit = 8): Product[] {
  return products.filter((p) => p.isNew).slice(0, limit)
}
