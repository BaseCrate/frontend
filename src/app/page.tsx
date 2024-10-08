import Image from 'next/image'
import HeroComponent from '@/components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroComponent />
    </main>
  )
}
