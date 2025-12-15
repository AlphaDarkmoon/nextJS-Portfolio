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
}

// Sample timeline data - replace with your actual experience
const experiences: TimelineExperience[] = [
  {
    id: "1",
    title: "Full Stack Developer",
    company: "WebSolutions Inc",
    period: "2021 - 2023",
    year: "2021",
    position: "below",
    description: "Built and maintained scalable web applications with focus on security and performance.",
    responsibilities: [
      "Developed RESTful APIs serving 100K+ daily requests",
      "Implemented secure authentication systems with OAuth 2.0 and JWT",
      "Optimized database queries reducing load time by 60%",
      "Mentored junior developers in secure coding practices"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "TypeScript"]
  },
  {
    id: "2",
    title: "Cybersecurity Intern",
    company: "SecureNet Systems",
    period: "2020 - 2021",
    year: "2020",
    position: "above",
    description: "Assisted in penetration testing and security assessment projects for financial sector clients.",
    responsibilities: [
      "Performed vulnerability assessments using industry-standard tools",
      "Documented security findings and remediation recommendations",
      "Participated in red team exercises and security audits",
      "Contributed to development of internal security automation tools"
    ],
    technologies: ["Nmap", "Wireshark", "Kali Linux", "OWASP ZAP", "Python"]
  },
  {
    id: "3",
    title: "Junior Developer",
    company: "StartupLabs",
    period: "2019 - 2020",
    year: "2019",
    position: "below",
    description: "Contributed to development of mobile and web applications in fast-paced startup environment.",
    responsibilities: [
      "Built responsive web interfaces with React and Vue.js",
      "Integrated third-party APIs and payment gateways",
      "Implemented user authentication and authorization systems",
      "Collaborated with design team to create intuitive user experiences"
    ],
    technologies: ["JavaScript", "React", "Vue.js", "Firebase", "REST APIs"]
  }
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
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
