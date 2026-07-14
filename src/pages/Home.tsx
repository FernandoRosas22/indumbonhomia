import Hero from '@/components/home/Hero'
import NewCollection from '@/components/home/NewCollection'
import Categories from '@/components/home/Categories'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import PromoBanner from '@/components/home/PromoBanner'
import InstagramSection from '@/components/home/InstagramSection'

export default function Home() {
  return (
    <>
      <Hero />
      <NewCollection />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <InstagramSection />
    </>
  )
}
