"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BottomSheet } from "@/components/ui/bottom-sheet"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Heart, Share2, Bookmark, MessageCircle } from "lucide-react"

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false)

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
    setIsBottomSheetOpen(true)
  }

  const categories = ["all", "nature", "city", "food", "travel"]

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
            Explore
          </motion.h1>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto py-1 h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="rounded-full capitalize">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-2"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative aspect-square overflow-hidden rounded-lg"
                  onClick={() => handleImageClick(i)}
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}+${i + 1}`}
                    alt={`Explore image ${i + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <MobileNav />

      {/* Image Detail Bottom Sheet */}
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
        snapPoints={[0.5, 0.9]}
        initialSnap={1}
      >
        {selectedImage !== null && (
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=600&width=600&text=${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}+${selectedImage + 1}`}
                alt={`Image ${selectedImage + 1}`}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} {selectedImage + 1}
              </h2>
              <div className="text-sm text-muted-foreground">2 days ago</div>
            </div>

            <p className="text-muted-foreground">
              Beautiful {activeTab} scene captured during a recent trip. The perfect moment to share with everyone.
            </p>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button size="icon" variant="ghost" className="rounded-full">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>

            <div className="pt-2">
              <Button className="w-full rounded-full">View Full Gallery</Button>
            </div>
          </div>
        )}
      </BottomSheet>
    </div>
  )
}
