# Bonhomía — Tienda de Moda Femenina (V1)

Tienda online premium construida con React + TypeScript + Vite. Esta V1 incluye
únicamente la parte pública del sitio, navegable de punta a punta con datos mock.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173`.

Para build de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
  components/
    layout/     Header, Footer, CartDrawer, Layout (wrapper de todas las páginas)
    home/       Secciones exclusivas del Home (Hero, Categorías, Destacados, etc.)
    ui/         Componentes reutilizables (Button, ProductCard, SectionHeading,
                QuantityStepper, PlaceholderArt, InstagramIcon)
  pages/        Home, Shop (Tienda), Product (Producto), Contact, NotFound
  context/      CartContext — estado global del carrito (React Context)
  data/         products.ts y categories.ts — datos mock (15 productos, 5 categorías)
  lib/          whatsapp.ts (mensaje + link de checkout), image.ts (helper de imágenes)
  types/        Tipos TypeScript (Product, CartItem, Category)
```

## Decisiones clave

- **Imágenes**: como aún no hay fotografía real del cliente, se usa un sistema propio
  de ilustraciones lineales editoriales (`PlaceholderArt.tsx`) en vez de fotos de stock
  genéricas. Cuando tengan fotos reales, solo hay que reemplazar el componente
  `<PlaceholderArt />` por `<img src="..." />` en `ProductCard`, `Product`, `Hero`, etc.
- **Carrito**: manejado 100% en memoria con React Context (`CartContext`). No persiste
  al recargar la página — así fue definido para esta V1 sin backend.
- **Checkout**: no hay página de checkout. El botón "Finalizar pedido" arma un mensaje
  de WhatsApp automáticamente con el detalle del pedido y el subtotal.
- **Número de WhatsApp**: se configura en un único lugar, `src/lib/whatsapp.ts`
  (`WHATSAPP_NUMBER`). Reemplazar por el número real del negocio en formato
  internacional sin `+` (ej: `5491122334455`).

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router v7 · Framer Motion · Lucide React

## Deploy en Vercel

El proyecto está listo para desplegar sin configuración adicional:

1. Subir el repo a GitHub.
2. Importarlo en Vercel (framework detectado automáticamente: Vite).
3. Build command: `npm run build` — Output directory: `dist` (por defecto).

Incluye `vercel.json` con el rewrite necesario para que las rutas de React Router
(`/tienda`, `/producto/:slug`, `/contacto`, etc.) funcionen correctamente al
recargar la página o acceder directamente a una URL interna.

## Qué NO incluye esta V1 (a propósito)

Backend, base de datos, autenticación, panel de administrador, pasarela de pago,
usuarios registrados, favoritos, cupones y gestión de stock. Todo el catálogo es
mock y vive en `src/data/products.ts`.
