import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <HeroSection />
      </main>
    </div>
  )
}
