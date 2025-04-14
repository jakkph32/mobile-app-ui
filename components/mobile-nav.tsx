"use client"

import { cn } from "@/lib/utils"
import { Home, MessageCircle, User, Compass, Bell, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

interface NavItem {
  icon: LucideIcon
  href: string
  label: string
}

const navItems: NavItem[] = [
  {
    icon: Home,
    href: "/",
    label: "Home",
  },
  {
    icon: MessageCircle,
    href: "/chat",
    label: "Chat",
  },
  {
    icon: Compass,
    href: "/explore",
    label: "Explore",
  },
  {
    icon: Bell,
    href: "/notifications",
    label: "Alerts",
  },
  {
    icon: User,
    href: "/profile",
    label: "Profile",
  },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border md:hidden">
      <div className="grid h-full grid-cols-5">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <div className="relative">
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute -inset-1 rounded-full bg-primary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn("h-6 w-6", isActive && "scale-110 transition-transform duration-200")} />
              </div>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
