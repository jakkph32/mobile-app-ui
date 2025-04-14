"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TouchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  onPress?: () => void
}

export function TouchCard({ children, className, onPress, ...props }: TouchCardProps) {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onPress}
      className={cn("rounded-xl bg-card p-4 shadow-sm transition-shadow hover:shadow-md", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
