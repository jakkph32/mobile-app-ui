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
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background/80 backdrop-blur-md border-t border-border md:hidden"
    >
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
              <motion.div
                className="relative"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute -inset-3 rounded-full bg-primary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon className={cn("h-6 w-6")} />
              </motion.div>
              <motion.span
                animate={{ scale: isActive ? 1.05 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item.label}
              </motion.span>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}
