"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TouchCard } from "@/components/ui/touch-card"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Heart, MessageCircle, UserPlus, Bell, Check, X } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "like",
    user: "Alex Johnson",
    time: "2 minutes ago",
    icon: Heart,
    message: "liked your post",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/20",
  },
  {
    id: 2,
    type: "comment",
    user: "Taylor Smith",
    time: "1 hour ago",
    icon: MessageCircle,
    message: "commented on your post",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    id: 3,
    type: "follow",
    user: "Jordan Lee",
    time: "3 hours ago",
    icon: UserPlus,
    message: "started following you",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    actionable: true,
  },
  {
    id: 4,
    type: "like",
    user: "Casey Brown",
    time: "5 hours ago",
    icon: Heart,
    message: "liked your comment",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/20",
  },
  {
    id: 5,
    type: "follow",
    user: "Riley Wilson",
    time: "1 day ago",
    icon: UserPlus,
    message: "started following you",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    actionable: true,
  },
]

export default function NotificationsPage() {
  const [selectedNotification, setSelectedNotification] = useState<(typeof notifications)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNotificationPress = (notification: (typeof notifications)[0]) => {
    if (notification.type === "follow") {
      setSelectedNotification(notification)
      setIsModalOpen(true)
    }
  }

  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <section className="container py-6">
          <motion.div
            className="flex justify-between items-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <TouchCard onPress={() => handleNotificationPress(notification)}>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${notification.user.charAt(0)}`} />
                      <AvatarFallback>{notification.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{notification.user}</span>
                        <span className="text-muted-foreground">{notification.message}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${notification.bgColor}`}>
                      <notification.icon className={`h-5 w-5 ${notification.color}`} />
                    </div>
                  </div>

                  {notification.actionable && (
                    <div className="flex gap-2 mt-3 ml-14">
                      <Button size="sm" className="rounded-full">
                        Follow Back
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full">
                        Ignore
                      </Button>
                    </div>
                  )}
                </TouchCard>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <MobileNav />

      {/* Follow Request Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Follow Request">
        {selectedNotification && (
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={`/placeholder.svg?height=80&width=80&text=${selectedNotification.user.charAt(0)}`} />
                <AvatarFallback>{selectedNotification.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{selectedNotification.user}</h3>
                <p className="text-sm text-muted-foreground">Wants to follow you</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-muted p-3">
                <p className="text-lg font-bold">245</p>
                <p className="text-xs text-muted-foreground">Posts</p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <p className="text-lg font-bold">1.2k</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1 rounded-full" onClick={() => setIsModalOpen(false)}>
                <X className="h-4 w-4 mr-1" />
                Ignore
              </Button>
              <Button className="flex-1 rounded-full" onClick={() => setIsModalOpen(false)}>
                <Check className="h-4 w-4 mr-1" />
                Accept
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
