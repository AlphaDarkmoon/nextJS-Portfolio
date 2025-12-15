"use client"

import { useState } from "react"
import { ProjectCard } from "./ProjectCard"
import { ProjectDrawer } from "./ProjectDrawer"

export interface Project {
  id: string
  title: string
  shortDescription: string
  extendedDescription: string
  technologies: string[]
  thumbnail: string
  images: string[]
}

// Sample projects data - replace with your actual projects
const projects: Project[] = [
  {
    id: "1",
    title: "Secure Authentication System",
    shortDescription: "Multi-factor authentication platform with biometric integration and zero-trust architecture",
    extendedDescription: "Built a comprehensive authentication system implementing OWASP security best practices. The solution addresses credential stuffing and session hijacking through adaptive authentication flows. Successfully reduced unauthorized access attempts by 95% while maintaining seamless user experience.",
    technologies: ["Django", "Redis", "PostgreSQL", "OAuth 2.0", "TOTP"],
    thumbnail: "/projects/auth-system.jpg",
    images: [
      "/projects/auth-system.jpg",
      "/projects/auth-dashboard.jpg",
      "/projects/auth-analytics.jpg"
    ]
  },
  {
    id: "2",
    title: "Vulnerability Scanner Dashboard",
    shortDescription: "Real-time security monitoring dashboard aggregating SIEM data with threat intelligence feeds",
    extendedDescription: "Developed an enterprise-grade security dashboard that consolidates data from multiple SIEM sources. Implemented custom correlation rules to identify attack patterns across network segments. Reduced mean-time-to-detect (MTTD) from hours to minutes through intelligent alerting.",
    technologies: ["React", "Python", "Splunk API", "WebSockets", "D3.js"],
    thumbnail: "/projects/vulnerability-scanner.jpg",
    images: [
      "/projects/vulnerability-scanner.jpg",
      "/projects/scanner-results.jpg",
      "/projects/scanner-reports.jpg"
    ]
  },
  {
    id: "3",
    title: "Mobile Security Audit Tool",
    shortDescription: "Automated mobile application security testing framework for Android and iOS platforms",
    extendedDescription: "Created a comprehensive mobile app security testing framework that automates OWASP Mobile Top 10 checks. The tool performs static and dynamic analysis, identifying vulnerabilities in data storage, cryptography, and network communication. Used by security teams to assess applications before production deployment.",
    technologies: ["Flutter", "Dart", "Frida", "Burp Suite API", "Firebase"],
    thumbnail: "/projects/mobile-audit.jpg",
    images: [
      "/projects/mobile-audit.jpg",
      "/projects/mobile-tests.jpg",
      "/projects/mobile-findings.jpg"
    ]
  },
  {
    id: "4",
    title: "Network Traffic Analyzer",
    shortDescription: "Deep packet inspection tool for identifying anomalous network behavior and data exfiltration",
    extendedDescription: "Built a network traffic analysis tool that performs deep packet inspection and behavioral analysis. Implements machine learning algorithms to establish baseline network patterns and detect anomalies. Successfully identified several data exfiltration attempts during penetration testing engagements.",
    technologies: ["Python", "Wireshark", "Scapy", "TensorFlow", "Elasticsearch"],
    thumbnail: "/projects/network-analyzer.jpg",
    images: [
      "/projects/network-analyzer.jpg",
      "/projects/network-flows.jpg",
      "/projects/network-alerts.jpg"
    ]
  },
  {
    id: "5",
    title: "Incident Response Platform",
    shortDescription: "Collaborative incident management system streamlining security incident workflows and playbooks",
    extendedDescription: "Designed an incident response platform that centralizes security event handling and team collaboration. Features automated playbook execution, evidence collection, and timeline reconstruction. Reduced incident response time by 60% through standardized workflows and integrated communication channels.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    thumbnail: "/projects/incident-response.jpg",
    images: [
      "/projects/incident-response.jpg",
      "/projects/incident-timeline.jpg",
      "/projects/incident-playbooks.jpg"
    ]
  },
  {
    id: "6",
    title: "API Security Gateway",
    shortDescription: "Rate-limiting and threat protection layer for RESTful APIs with real-time monitoring",
    extendedDescription: "Developed a security gateway that protects APIs from common attacks including injection, broken authentication, and excessive data exposure. Implements intelligent rate limiting, request validation, and threat detection. Processes over 10,000 requests per second with minimal latency overhead.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "Prometheus"],
    thumbnail: "/projects/api-gateway.jpg",
    images: [
      "/projects/api-gateway.jpg",
      "/projects/api-metrics.jpg",
      "/projects/api-policies.jpg"
    ]
  }
]

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
    // Delay clearing the project to allow drawer close animation
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Selected projects demonstrating real-world impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Drawer */}
      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          open={isDrawerOpen}
          onClose={handleDrawerClose}
        />
      )}
    </section>
  )
}
