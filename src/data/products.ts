import type { Product } from '@/types/product'

const neutrals = [
  { name: 'Crudo', hex: '#F1EBE2' },
  { name: 'Negro', hex: '#100F0D' },
  { name: 'Arena', hex: '#C9B79C' },
]

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'vestido-lino-la-baie',
    name: 'Vestido Lino La Baie',
    price: 128000,
    category: 'vestidos',
    description:
      'Vestido midi en lino de fibra larga con caída fluida y escote cruzado. Confeccionado en un solo lienzo para minimizar costuras. Pieza atemporal para el día y la noche.',
    images: ['vestidos-1', 'vestidos-2', 'vestidos-3'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [neutrals[0], neutrals[1]],
    isNew: true,
  },
  {
    id: 'p2',
    slug: 'vestido-satin-noir',
    name: 'Vestido Satén Noir',
    price: 154000,
    compareAtPrice: 189000,
    category: 'vestidos',
    description:
      'Vestido slip en satén de seda con tiras regulables y corte al bies. El brillo mate del tejido acompaña el movimiento del cuerpo sin marcar.',
    images: ['vestidos-2', 'vestidos-1'],
    sizes: ['XS', 'S', 'M'],
    colors: [neutrals[1]],
  },
  {
    id: 'p3',
    slug: 'vestido-camisero-arena',
    name: 'Vestido Camisero Arena',
    price: 112000,
    category: 'vestidos',
    description:
      'Vestido camisero en algodón orgánico con cinturón a tono y botonadura frontal. Silueta relajada, ideal para uso diario con cualquier calzado.',
    images: ['vestidos-3', 'vestidos-1'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [neutrals[2], neutrals[0]],
  },
  {
    id: 'p4',
    slug: 'remera-basica-costillar',
    name: 'Remera Básica Costillar',
    price: 42000,
    category: 'remeras',
    description:
      'Remera de punto costillar en algodón peinado premium. Calce entallado, cuello redondo y terminaciones reforzadas. La base perfecta del guardarropa.',
    images: ['remeras-1', 'remeras-2'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: neutrals,
    isNew: true,
  },
  {
    id: 'p5',
    slug: 'remera-oversize-crudo',
    name: 'Remera Oversize Crudo',
    price: 46000,
    category: 'remeras',
    description:
      'Remera de corte oversize en jersey pesado de algodón. Hombro caído y largo extendido para un estilo desestructurado y contemporáneo.',
    images: ['remeras-2', 'remeras-3'],
    sizes: ['S', 'M', 'L'],
    colors: [neutrals[0], neutrals[1]],
  },
  {
    id: 'p6',
    slug: 'remera-manga-larga-canale',
    name: 'Remera Manga Larga Canalé',
    price: 51000,
    category: 'remeras',
    description:
      'Remera de manga larga en canalé fino con cuello barco. Tejido de segunda piel que acompaña el cuerpo sin ajustar.',
    images: ['remeras-3', 'remeras-1'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [neutrals[1], neutrals[2]],
  },
  {
    id: 'p7',
    slug: 'pantalon-sastrero-recto',
    name: 'Pantalón Sastrero Recto',
    price: 98000,
    category: 'pantalones',
    description:
      'Pantalón de tiro alto con pinzas frontales y caída recta hasta el piso. Tejido con leve elastano para mayor comodidad durante todo el día.',
    images: ['pantalones-1', 'pantalones-2'],
    sizes: ['36', '38', '40', '42'],
    colors: [neutrals[1], neutrals[2]],
    isNew: true,
  },
  {
    id: 'p8',
    slug: 'pantalon-palazzo-lino',
    name: 'Pantalón Palazzo Lino',
    price: 89000,
    category: 'pantalones',
    description:
      'Pantalón palazzo en lino liviano con pretina elastizada. Silueta amplia que estiliza y permite libertad de movimiento.',
    images: ['pantalones-2', 'pantalones-3'],
    sizes: ['S', 'M', 'L'],
    colors: [neutrals[0], neutrals[2]],
  },
  {
    id: 'p9',
    slug: 'pantalon-cargo-relajado',
    name: 'Pantalón Cargo Relajado',
    price: 94000,
    category: 'pantalones',
    description:
      'Pantalón cargo de gabardina con bolsillos funcionales y cintura ajustable con cordón. Un clásico utilitario reinterpretado en clave minimal.',
    images: ['pantalones-3', 'pantalones-1'],
    sizes: ['36', '38', '40'],
    colors: [neutrals[2]],
  },
  {
    id: 'p10',
    slug: 'abrigo-lana-oversize',
    name: 'Abrigo Lana Oversize',
    price: 235000,
    category: 'abrigos',
    description:
      'Abrigo largo en paño de lana con solapas anchas y cierre cruzado con cinturón. Volumen oversize pensado para superponer sobre cualquier look.',
    images: ['abrigos-1', 'abrigos-2'],
    sizes: ['S', 'M', 'L'],
    colors: [neutrals[1], neutrals[2]],
    isNew: true,
  },
  {
    id: 'p11',
    slug: 'trench-algodon-encerado',
    name: 'Trench Algodón Encerado',
    price: 198000,
    category: 'abrigos',
    description:
      'Trench clásico en algodón encerado hidrorrepelente, con cinturón, charreteras y forro interior en viscosa. Pieza de entretiempo esencial.',
    images: ['abrigos-2', 'abrigos-3'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [neutrals[0], neutrals[1]],
  },
  {
    id: 'p12',
    slug: 'chaleco-lana-boucle',
    name: 'Chaleco Lana Bouclé',
    price: 76000,
    category: 'abrigos',
    description:
      'Chaleco corto en lana bouclé con botones forrados. Ideal para capas intermedias en las estaciones frías.',
    images: ['abrigos-3', 'abrigos-1'],
    sizes: ['S', 'M', 'L'],
    colors: [neutrals[0], neutrals[2]],
  },
  {
    id: 'p13',
    slug: 'panuelo-seda-pintado',
    name: 'Pañuelo Seda Pintado',
    price: 38000,
    category: 'accesorios',
    description:
      'Pañuelo cuadrado en seda 100% con estampa pintada a mano por artesanos locales. Versátil: al cuello, en el cabello o como accesorio de cartera.',
    images: ['accesorios-1', 'accesorios-2'],
    sizes: ['Único'],
    colors: [neutrals[0], neutrals[1]],
    isNew: true,
  },
  {
    id: 'p14',
    slug: 'cinturon-cuero-fino',
    name: 'Cinturón Cuero Fino',
    price: 45000,
    category: 'accesorios',
    description:
      'Cinturón fino en cuero vacuno curtido al vegetal con hebilla metálica minimalista. Terminación artesanal en cada pieza.',
    images: ['accesorios-2', 'accesorios-3'],
    sizes: ['S/M', 'L/XL'],
    colors: [neutrals[1], neutrals[2]],
  },
  {
    id: 'p15',
    slug: 'bolso-tote-lino',
    name: 'Bolso Tote Lino',
    price: 67000,
    category: 'accesorios',
    description:
      'Bolso tote estructurado en lino grueso con asas de cuero cosidas a mano. Interior con bolsillo para objetos pequeños.',
    images: ['accesorios-3', 'accesorios-1'],
    sizes: ['Único'],
    colors: [neutrals[0], neutrals[2]],
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
