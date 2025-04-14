import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, UserPlus } from "lucide-react"

const notifications = [
  {
    id: 1,
    type: "like",
    user: "Alex Johnson",
    time: "2 minutes ago",
    icon: Heart,
    message: "liked your post",
  },
  {
    id: 2,
    type: "comment",
    user: "Taylor Smith",
    time: "1 hour ago",
    icon: MessageCircle,
    message: "commented on your post",
  },
  {
    id: 3,
    type: "follow",
    user: "Jordan Lee",
    time: "3 hours ago",
    icon: UserPlus,
    message: "started following you",
  },
  {
    id: 4,
    type: "like",
    user: "Casey Brown",
    time: "5 hours ago",
    icon: Heart,
    message: "liked your comment",
  },
  {
    id: 5,
    type: "follow",
    user: "Riley Wilson",
    time: "1 day ago",
    icon: UserPlus,
    message: "started following you",
  },
]

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <section className="container py-6">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Notifications</h1>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback>{notification.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{notification.user}</span>
                        <span className="text-muted-foreground">{notification.message}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <notification.icon className="h-4 w-4 text-primary" />
                    </div>
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
