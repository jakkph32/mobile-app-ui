import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <section className="container py-6">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Discover</h1>

          <Tabs defaultValue="featured" className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto py-1 h-auto">
              <TabsTrigger value="featured" className="rounded-full">
                Featured
              </TabsTrigger>
              <TabsTrigger value="popular" className="rounded-full">
                Popular
              </TabsTrigger>
              <TabsTrigger value="trending" className="rounded-full">
                Trending
              </TabsTrigger>
              <TabsTrigger value="new" className="rounded-full">
                New
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid gap-4">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt="Featured image"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Featured Item {item}</h3>
                      <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">New</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <MobileNav />
    </div>
  )
}
