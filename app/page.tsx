"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TouchCard } from "@/components/ui/touch-card"
import { BottomSheet } from "@/components/ui/bottom-sheet"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Heart, Share2, Info } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("featured")
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const handleCardPress = (item: number) => {
    setSelectedItem(item)
    setIsBottomSheetOpen(true)
  }

  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <section className="container py-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight mb-6"
          >
            Discover
          </motion.h1>

          <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto py-1 h-auto">
              {["featured", "popular", "trending", "new"].map((tab) => (
                <TabsTrigger key={tab} value={tab} className="rounded-full capitalize">
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {[1, 2, 3].map((item) => (
                <TouchCard key={item} onPress={() => handleCardPress(item)}>
                  <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Item+${item}`}
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
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Like action
                        }}
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Share action
                        }}
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full ml-auto"
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsModalOpen(true)
                        }}
                      >
                        <Info className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </TouchCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <MobileNav />

      {/* Bottom Sheet */}
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        title={selectedItem ? `Item ${selectedItem} Details` : "Details"}
      >
        {selectedItem && (
          <div className="space-y-4">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=400&width=600&text=Item+${selectedItem}`}
                alt={`Item ${selectedItem}`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold">Featured Item {selectedItem}</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted p-3">
                <h3 className="font-medium">Category</h3>
                <p className="text-sm text-muted-foreground">Featured</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <h3 className="font-medium">Rating</h3>
                <p className="text-sm text-muted-foreground">4.8/5.0</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <h3 className="font-medium">Created</h3>
                <p className="text-sm text-muted-foreground">2 days ago</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <h3 className="font-medium">Views</h3>
                <p className="text-sm text-muted-foreground">1,234</p>
              </div>
            </div>
            <Button className="w-full rounded-full">View Full Details</Button>
          </div>
        )}
      </BottomSheet>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Item Information">
        <div className="space-y-4">
          <p>
            This is a featured item with premium content. Unlock additional features by subscribing to our premium plan.
          </p>
          <div className="rounded-lg bg-primary/10 p-4">
            <h4 className="font-medium text-primary">Premium Benefits</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• Unlimited access to all content</li>
              <li>• Early access to new features</li>
              <li>• Ad-free experience</li>
              <li>• Ad-free experience</li>
              <li>• Priority support</li>
            </ul>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => setIsModalOpen(false)}>
              Not Now
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                // Subscribe action
                setIsModalOpen(false)
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
