import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import SmokeyBackground from "@/components/ui/smokey-background"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      {/* Smokey Background */}
      <div className="absolute inset-0 -z-10">
        <SmokeyBackground
          backdropBlurAmount="lg"
          color="#471CE2"
          className="h-full w-full rounded-xl"
        />
      </div>
      
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Primary Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Name
            </span>
            {" "}— I build modern web experiences.
          </h1>

          {/* Subheading / Description */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl md:mt-8 md:text-2xl">
            Frontend Engineer specializing in React, Next.js, and TypeScript.
            I create fast, accessible, and beautiful web applications that solve real problems.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12">
            {/* Primary CTA */}
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          {/* Optional: Tech stack or social proof */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground md:mt-20">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>Available for work</span>
            </div>
            <span>•</span>
            <span>Based in Your Location</span>
            <span>•</span>
            <span>5+ years experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
