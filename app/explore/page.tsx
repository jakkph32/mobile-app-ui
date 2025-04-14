import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <section className="container py-6">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Explore</h1>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto py-1 h-auto">
              <TabsTrigger value="all" className="rounded-full">
                All
              </TabsTrigger>
              <TabsTrigger value="nature" className="rounded-full">
                Nature
              </TabsTrigger>
              <TabsTrigger value="city" className="rounded-full">
                City
              </TabsTrigger>
              <TabsTrigger value="food" className="rounded-full">
                Food
              </TabsTrigger>
              <TabsTrigger value="travel" className="rounded-full">
                Travel
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Image+${i + 1}`}
                  alt={`Explore image ${i + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <MobileNav />
    </div>
  )
}
