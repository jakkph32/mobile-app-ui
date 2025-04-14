"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TouchCard } from "@/components/ui/touch-card"
import { Modal } from "@/components/ui/modal"
import { motion } from "framer-motion"
import { Settings, LogOut, Heart, Bookmark, MapPin, Camera, Edit, Share2 } from "lucide-react"

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <section className="container py-6">
          <motion.div
            className="flex flex-col items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Avatar className="h-24 w-24 mb-4 border-4 border-background">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-3 right-0 rounded-full h-8 w-8"
                onClick={() => setIsEditModalOpen(true)}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <motion.h1
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Jane Doe
            </motion.h1>
            <motion.p
              className="text-muted-foreground flex items-center gap-1 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MapPin className="h-3 w-3" /> San Francisco, CA
            </motion.p>
            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="outline" size="sm" className="rounded-full" onClick={() => setIsEditModalOpen(true)}>
                <Edit className="h-4 w-4 mr-1" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <TouchCard className="mb-6">
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Stats</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <p className="text-2xl font-bold">128</p>
                    <p className="text-xs text-muted-foreground">Posts</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <p className="text-2xl font-bold">2.4k</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <p className="text-2xl font-bold">364</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </motion.div>
                </div>
              </CardContent>
            </TouchCard>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileTap={{ scale: 0.98 }} transition={{ type: "spring" }}>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                <span>Favorites</span>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.98 }} transition={{ type: "spring" }}>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Bookmark className="mr-2 h-5 w-5" />
                <span>Saved</span>
              </Button>
            </motion.div>
            <Separator />
            <motion.div whileTap={{ scale: 0.98 }} transition={{ type: "spring" }}>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Settings className="mr-2 h-5 w-5" />
                <span>Settings</span>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.98 }} transition={{ type: "spring" }}>
              <Button variant="ghost" className="w-full justify-start text-destructive" size="lg">
                <LogOut className="mr-2 h-5 w-5" />
                <span>Log out</span>
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <MobileNav />

      {/* Edit Profile Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="Edit Profile">
        <div className="space-y-4">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Avatar className="h-20 w-20 border-4 border-background">
                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              defaultValue="Jane Doe"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Location</label>
            <input
              type="text"
              defaultValue="San Francisco, CA"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            <textarea
              defaultValue="Digital creator and photography enthusiast."
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm min-h-[80px]"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button className="flex-1" onClick={() => setIsEditModalOpen(false)}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
