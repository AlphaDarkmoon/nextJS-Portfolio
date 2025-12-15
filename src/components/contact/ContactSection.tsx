import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Have a question, opportunity, or idea? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border bg-card p-8 shadow-sm md:p-10">
            {/* Decorative Accent */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Subject (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">
                  Subject <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, collaboration, etc."
                  className="w-full"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              {/* Action Area */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                {/* Send Button */}
                <Button type="submit" size="lg" className="group w-full sm:w-auto">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* Secondary Contact Option */}
                <div className="text-center text-sm text-muted-foreground sm:text-left">
                  Or email me at{" "}
                  <a
                    href="mailto:your.email@example.com"
                    className="font-medium text-primary hover:underline"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>I typically respond within 24-48 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}
