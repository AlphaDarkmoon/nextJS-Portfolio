import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: Github,
      ariaLabel: "Visit GitHub profile",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: Mail,
      ariaLabel: "Send email",
    },
  ]

  return (
    <footer className="relative border-t border-border/40 bg-muted/30">
      <div className="container px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Identity Block */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Your Name</h3>
            <p className="text-sm text-muted-foreground">
              Security-focused Software Engineer
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3" aria-label="Footer navigation">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </h4>
            <ul className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="text-foreground/60 transition-colors hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Footer Meta */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p className="text-xs">Built with Next.js & shadcn/ui</p>
        </div>
      </div>
    </footer>
  )
}
