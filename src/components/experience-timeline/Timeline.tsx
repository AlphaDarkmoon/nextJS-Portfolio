"use client"

import { useState } from "react"
import { TimelineNode } from "./TimelineNode"
import { TimelinePopup } from "./TimelinePopup"

export interface TimelineExperience {
  id: string
  title: string
  company: string
  period: string
  year: string
  position: "above" | "below"
  description: string
  responsibilities: string[]
  technologies: string[]
  isActive?: boolean
}

// Sample timeline data - replace with your actual experience
const experiences: TimelineExperience[] = [
  {
    id: "1",
    title: "Cybersecurity Club Member",
    company: "JECRC University",
    period: "Sep 2024 - Jul 2025",
    year: "2025",
    position: "above",
description: "Active member of the Cyber Security Club, supporting infrastructure setup and hands-on security events.",
    responsibilities: [
  "Assisted in setting up systems and labs for cybersecurity workshops, CTFs, and awareness events",
  "Performed basic vulnerability assessments using industry-standard security tools",
  "Documented findings and shared remediation insights during team discussions and learning sessions",
  "Participated in red team exercises, security drills, and peer-led audits to strengthen practical skills"
    ],
  technologies: ["Nmap", "Wireshark", "Kali Linux", "OWASP ZAP", "Python"]
  },
  {
    id: "2",
    title: "Digital Forensics",
    company: "Forensic Academy",
    period: "May 2025 - July 2025",
    year: "2025",
    position: "below",
    isActive: false,
    description: "Conducted digital forensic investigations with a focus on evidence integrity, memory analysis, and mobile forensics.",
    responsibilities: [
  "Performed disk and file system analysis using Autopsy to recover, analyze, and validate digital evidence",
  "Conducted advanced memory forensics using Volatility 2 and 3 to identify malicious processes, artifacts, and indicators of compromise",
  "Analyzed Android devices to extract application data, logs, and user artifacts while maintaining forensic soundness",
  "Documented findings and timelines to support incident response and investigative reporting"
    ],
    technologies: ["Autopsy", "Volatility 2", "Volatility 3", "Android Forensics", "Linux", "Digital Evidence Handling"]

  },
]

export function Timeline() {
  const [selectedExperience, setSelectedExperience] = useState<TimelineExperience | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleNodeClick = (experience: TimelineExperience) => {
    setSelectedExperience(experience)
    setIsPopupOpen(true)
  }

  const handlePopupClose = () => {
    setIsPopupOpen(false)
    setTimeout(() => setSelectedExperience(null), 300)
  }

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary underline">
            Journey
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Experience Timeline
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Career progression and professional milestones
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

          {/* Scrollable Timeline */}
          <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div className="relative inline-flex min-w-full items-center justify-start px-8 py-48">
              {/* Timeline Base Line */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border" style={{ width: `${experiences.length * 350}px`, marginLeft: '100px' }} />

              {/* Timeline Nodes */}
              <div className="relative flex items-center gap-32" style={{ marginLeft: '100px' }}>
                {experiences.map((experience) => (
                  <TimelineNode
                    key={experience.id}
                    experience={experience}
                    onClick={() => handleNodeClick(experience)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12M8 12h12M8 17h12M3 7h.01M3 12h.01M3 17h.01"
              />
            </svg>
            Scroll horizontally to explore timeline
          </span>
        </div>
      </div>

      {/* Experience Detail Popup */}
      {selectedExperience && (
        <TimelinePopup
          experience={selectedExperience}
          open={isPopupOpen}
          onClose={handlePopupClose}
        />
      )}
    </section>
  )
}
