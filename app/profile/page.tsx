import { Header } from "@/components/header"
import { MobileNav } from "@/components/mobile-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Settings, LogOut, Heart, Bookmark, MapPin } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-1">
        <section className="container py-6">
          <div className="flex flex-col items-center mb-6">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold">Jane Doe</h1>
            <p className="text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" /> San Francisco, CA
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="sm" className="rounded-full">
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Share
              </Button>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <h2 className="text-lg font-semibold">Stats</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">128</p>
                  <p className="text-xs text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">2.4k</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">364</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              <span>Favorites</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="lg">
              <Bookmark className="mr-2 h-5 w-5" />
              <span>Saved</span>
            </Button>
            <Separator />
            <Button variant="ghost" className="w-full justify-start" size="lg">
              <Settings className="mr-2 h-5 w-5" />
              <span>Settings</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-destructive" size="lg">
              <LogOut className="mr-2 h-5 w-5" />
              <span>Log out</span>
            </Button>
          </div>
        </section>
      </main>
      <MobileNav />
    </div>
  )
}
