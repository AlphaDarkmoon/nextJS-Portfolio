"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Drawer, DrawerHeader, DrawerTitle, DrawerContent } from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "./FeaturedProjects"

interface ProjectDrawerProps {
  project: Project
  open: boolean
  onClose: () => void
}

export function ProjectDrawer({ project, open, onClose }: ProjectDrawerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  // Reset image index when drawer opens with a new project
  React.useEffect(() => {
    if (open) {
      setCurrentImageIndex(0)
    }
  }, [project.id, open])

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerHeader onClose={onClose}>
        <DrawerTitle>{project.title}</DrawerTitle>
      </DrawerHeader>

      <DrawerContent>
        <div className="space-y-8">
          {/* Image Carousel */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Carousel Controls */}
            {project.images.length > 1 && (
              <>
                {/* Previous Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-sm backdrop-blur-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Navigation (optional) */}
          {project.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "relative h-16 w-24 shrink-0 overflow-hidden rounded border-2 transition-all",
                    currentImageIndex === index
                      ? "border-primary"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Extended Description */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">About This Project</h3>
            <p className="leading-relaxed text-muted-foreground">
              {project.extendedDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

// Helper function for className utility
import { cn } from "@/lib/utils"
import * as React from "react"
