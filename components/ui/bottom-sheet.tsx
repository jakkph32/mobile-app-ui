"use client"

import * as React from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  className?: string
  snapPoints?: number[]
  initialSnap?: number
}

export function BottomSheet({
  isOpen,
  onClose,
  children,
  title,
  className,
  snapPoints = [0.5, 0.9],
  initialSnap = 0,
}: BottomSheetProps) {
  const [currentSnap, setCurrentSnap] = React.useState(initialSnap)
  const overlayRef = React.useRef<HTMLDivElement>(null)

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100
    if (info.offset.y > threshold) {
      onClose()
    } else {
      // Determine which snap point to go to based on velocity
      const velocity = info.velocity.y
      if (velocity > 500) {
        onClose()
      } else if (velocity < -500 && currentSnap < snapPoints.length - 1) {
        setCurrentSnap(currentSnap + 1)
      } else if (velocity > 500 && currentSnap > 0) {
        setCurrentSnap(currentSnap - 1)
      }
    }
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleOverlayClick}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{
              y: `${(1 - snapPoints[currentSnap]) * 100}%`,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 300,
              },
            }}
            exit={{ y: "100%" }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className={cn("absolute bottom-0 left-0 right-0 rounded-t-3xl bg-background shadow-lg", className)}
          >
            <div className="flex flex-col">
              <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-muted-foreground/20" />
              <div className="flex items-center justify-between p-4">
                {title && <h3 className="text-lg font-semibold">{title}</h3>}
                <button onClick={onClose} className="ml-auto rounded-full p-2 text-muted-foreground hover:bg-muted">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-auto p-4 pb-8">{children}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
