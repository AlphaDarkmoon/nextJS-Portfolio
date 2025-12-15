import Image from "next/image"
import { GraduationCap, Code2, Shield, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            About
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Building thoughtful, secure, and accessible web experiences
          </p>
        </div>

        {/* Professional Summary */}
        <div className="mb-20 max-w-3xl">
          <p className="text-xl leading-relaxed text-foreground md:text-2xl">
            I'm a Frontend Engineer with 5+ years of experience crafting modern web applications.
            I specialize in React, Next.js, and TypeScript, with a strong focus on building 
            secure, accessible, and performant interfaces that users love and teams can maintain.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN - Textual Depth */}
          <div className="space-y-12">
            {/* Education Background */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="ml-13 space-y-2">
                <p className="font-medium">Bachelor of Science in Computer Science</p>
                <p className="text-muted-foreground">University Name</p>
                <p className="text-sm text-muted-foreground">
                  Specialized in Software Engineering, Web Technologies, and User Experience Design
                </p>
              </div>
            </div>

            {/* Development Philosophy */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Development Philosophy</h3>
              </div>
              <div className="ml-13 space-y-3 text-muted-foreground">
                <p>
                  I believe great software starts with clarity. Every component should have a clear 
                  purpose, every interface should be intuitive, and every line of code should be 
                  maintainable by the team that comes after me.
                </p>
                <p>
                  My approach centers on four pillars: <strong className="text-foreground">simplicity</strong> in 
                  design, <strong className="text-foreground">maintainability</strong> in code, 
                  <strong className="text-foreground"> performance</strong> in execution, and 
                  <strong className="text-foreground"> accessibility</strong> for all users.
                </p>
              </div>
            </div>

            {/* Security Mindset */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Security Mindset</h3>
              </div>
              <div className="ml-13 space-y-3 text-muted-foreground">
                <p>
                  Security isn't an afterthought—it's woven into every decision. I design with 
                  secure-by-default principles, treating user data with respect and implementing 
                  defense in depth.
                </p>
                <p>
                  From input validation and sanitization to proper authentication flows and data 
                  handling, I build systems that protect users while remaining intuitive and 
                  performant. Every feature is an opportunity to do security right.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Visual Identity */}
          <div className="space-y-8">
            {/* Personal Photo */}
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-border bg-muted lg:mx-0">
              <Image
                src="/profile.jpg"
                alt="Professional headshot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
              {/* Placeholder overlay when image is not available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/80">
                <p className="text-sm text-muted-foreground">Professional Photo</p>
              </div>
            </div>

            {/* What Makes Me Different */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">What Makes Me Different</h3>
                </div>
                <ul className="ml-13 space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Systems thinker</strong> — I don't just 
                      build features; I consider how they fit into the larger product ecosystem and 
                      scale over time.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Detail-oriented</strong> — From pixel-perfect 
                      UI to edge case handling, I sweat the details that make software feel polished 
                      and reliable.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Ownership mentality</strong> — I take 
                      responsibility for outcomes, not just deliverables. If something breaks, I fix it. 
                      If something can improve, I improve it.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Long-term perspective</strong> — I write code 
                      for humans first. Future maintainers (including future me) will thank me for 
                      clear, well-documented decisions.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
