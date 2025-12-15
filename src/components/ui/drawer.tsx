"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface DrawerProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Drawer({ open, onClose, children }: DrawerProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 md:inset-y-0 md:left-auto md:right-0 md:max-w-2xl",
          "h-[85vh] md:h-full md:w-full",
          "flex flex-col overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-t-none",
          "border-t md:border-l md:border-t-0 bg-background shadow-lg",
          "animate-in slide-in-from-bottom md:slide-in-from-right duration-300"
        )}
      >
        {children}
      </div>
    </>
  )
}

interface DrawerHeaderProps {
  children: React.ReactNode
  onClose: () => void
}

export function DrawerHeader({ children, onClose }: DrawerHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b px-6 py-4">
      <div className="flex-1">{children}</div>
      <button
        onClick={onClose}
        className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  )
}

export function DrawerTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>
  )
}

export function DrawerContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex-1 overflow-y-auto px-6 py-6", className)}>
      {children}
    </div>
  )
}
