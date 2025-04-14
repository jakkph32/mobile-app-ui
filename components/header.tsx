import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-1">
          <Button variant="outline" className="w-full justify-start text-muted-foreground rounded-full h-12">
            <Search className="mr-2 h-4 w-4" />
            <span>Search...</span>
          </Button>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
