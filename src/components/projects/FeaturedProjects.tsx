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
    title: "Django Web Application Security Scanner",
    shortDescription: "Web application security scanner with modern UI and automated vulnerability detection",
    extendedDescription: "Developed a comprehensive security analysis platform for Django applications with a React frontend and FastAPI backend. The tool integrates multiple security scanning engines (Bandit, Semgrep, pip-audit, Pylint) to identify vulnerabilities, dependency risks, and code quality issues. By providing real-time scanning and detailed reports, the solution strengthens application security and improves developers' ability to remediate risks efficiently.",
    technologies: ["React", "TypeScript", "FastAPI", "Celery", "Redis", "Bandit", "Semgrep", "pip-audit", "Pylint"],
    thumbnail: "/blob-scene-haikei.png",
    // images: [
    //   "/projects/vulnerability-scanner.jpg",
    //   "/projects/scanner-results.jpg",
    //   "/projects/scanner-reports.jpg"
    // ]
    images: ["/blob-scene-haikei.png"]
  },
  {
    id: "2",
    title: "SecureNotes",
    shortDescription: "Encrypted secure note-taking app with user authentication and data protection",
    extendedDescription: "Built a secure notes platform that encrypts user content at rest and in transit, ensuring confidentiality and integrity. The system includes robust user authentication, client-side encryption before storage, and protection against common web threats such as XSS and CSRF. Designed with usability and security in mind, it helps users safely store sensitive information without compromising experience.",
    technologies: ["Django", "React", "AES Encryption", "JWT Authentication", "OWASP Best Practices"],
    thumbnail: "/layered-waves-haikei.png",
    // images: [
    //   "/projects/vulnerability-scanner.jpg",
    //   "/projects/scanner-results.jpg",
    //   "/projects/scanner-reports.jpg"
    // ]
    images: ["/layered-waves-haikei.png"]
  },
  {
    id: "3",
    title: "Integrity Verification System",
    shortDescription: "Python-based file integrity monitoring system with dynamic hash verification",
    extendedDescription: "Developed a real-time file integrity monitoring tool that uses SHA-512 hashing to detect unauthorized file modifications. The solution features a Flask API backend for hash storage and retrieval, cross-platform monitoring, and alerting for integrity violations. This strengthens system security by enabling timely detection of tampering and compliance with baseline integrity requirements.",
    technologies: ["Python", "Flask", "Watchdog", "SQLite", "SHA-512 Hashing"],
    thumbnail: "/stacked-waves-haikei.png",
    // images: [
    //   "/projects/vulnerability-scanner.jpg",
    //   "/projects/scanner-results.jpg",
    //   "/projects/scanner-reports.jpg"
    // ]
    images: ["/stacked-waves-haikei.png"]
  },
  {
    id: "4",
    title: "FortiFiles E2E Secured",
    shortDescription: "End-to-end encrypted file management system with secure access controls",
    extendedDescription: "Created an encrypted file upload/download platform using Django with client-side AES encryption. The solution ensures that only authenticated users can access their files, and data remains encrypted on the server. It emphasizes secure handling of user data, protection against unauthorized access, and easy, intuitive interaction for managing private documents.",
    technologies: ["Django", "AES Encryption", "Django-Encrypted-Files", "PostgreSQL", "User Authentication"],
    thumbnail: "/stacked-peaks-haikei.png",
    // images: [
    //   "/projects/vulnerability-scanner.jpg",
    //   "/projects/scanner-results.jpg",
    //   "/projects/scanner-reports.jpg"
    // ]
    images: ["/stacked-peaks-haikei.png"]
  },
  {
    id: "5",
    title: "headless eCommerce Platform(Android)",
    shortDescription: "Bagisto-based eCommerce platform with GraphQL API integration for Android app",
    extendedDescription: "Built a fully functional eCommerce platform using Bagisto, exposing secure GraphQL APIs to enable seamless connectivity with an Android application. The system supports core eCommerce features such as product management, user authentication, cart, and order processing while ensuring efficient data fetching and scalable API communication. Designed to deliver a smooth shopping experience across web and mobile platforms with a focus on performance and maintainability.",
    technologies: ["Bagisto", "Laravel", "GraphQL", "MySQL", "Android","Flutter", "REST & API Security"],
    thumbnail: "/low-poly-grid-haikei.png",
    // images: [
    //   "/projects/vulnerability-scanner.jpg",
    //   "/projects/scanner-results.jpg",
    //   "/projects/scanner-reports.jpg"
    // ]
    images: ["/low-poly-grid-haikei.png"]
  },
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary underline">
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
