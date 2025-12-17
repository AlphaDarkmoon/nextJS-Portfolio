"use client"

import { useEffect, useState } from "react"
import { Code2, Sparkles, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    // Prevent body scroll while splash screen is visible
    if (isVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isVisible])

  useEffect(() => {
    const minDisplayTime = 1200 // Minimum time to show splash (ms)
    const startTime = Date.now()
    let hasLoaded = false

    const handleLoad = () => {
      hasLoaded = true
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime)

      // Wait for minimum display time before fading out
      setTimeout(() => {
        setIsVisible(false)
        // Remove from DOM after fade transition completes
        setTimeout(() => {
          setShouldRender(false)
        }, 500) // Match transition duration
      }, remainingTime)
    }

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <Card className="relative overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur-md">
        <div className="flex flex-col items-center gap-6 p-12">
          {/* Brand Identity */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/30 to-primary/10 blur-xl" />
              
              {/* Icon container */}
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg">
                {/* Rotating icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="absolute h-8 w-8 animate-spin text-primary [animation-duration:3s]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary/80 animate-pulse" />
                </div>
                <Sparkles className="absolute -right-1 -top-1 h-5 w-5 animate-pulse text-primary [animation-delay:-0.5s]" />
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
          </div>

          <Separator className="w-48" />

          {/* Loading indicator */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              Preparing your experience
            </p>
            
            {/* Progress dots */}
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary shadow-sm shadow-primary/50 [animation-delay:-0.3s]" />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary shadow-sm shadow-primary/50 [animation-delay:-0.15s]" />
              <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-primary shadow-sm shadow-primary/50" />
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
      </Card>
    </div>
  )
}
