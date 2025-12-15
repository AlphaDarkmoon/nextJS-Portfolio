"use client"

import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { TimelineExperience } from "./Timeline"

interface TimelinePopupProps {
  experience: TimelineExperience
  open: boolean
  onClose: () => void
}

export function TimelinePopup({ experience, open, onClose }: TimelinePopupProps) {
  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Card */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]">
        <div className="relative rounded-lg border bg-card shadow-lg">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold">{experience.title}</h3>
              <p className="text-lg text-muted-foreground">
                {experience.company}
              </p>
              <p className="mt-1 text-sm font-medium text-primary">
                {experience.period}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Role Overview
              </h4>
              <p className="leading-relaxed text-muted-foreground">
                {experience.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
