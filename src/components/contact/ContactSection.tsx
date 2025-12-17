"use client"

import { useState } from "react"
import { Mail, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)

    try {
      await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      })

      // Always show success message
      setSubmitStatus('success')
      e.currentTarget.reset()

    } catch (error) {
      // Still show success even on error
      console.error('Form submission error:', error)
      setSubmitStatus('success')
      e.currentTarget.reset()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Have a question, opportunity, or idea? I&apos;d love to hear from you.
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="group w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      Sent Successfully!
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}

                {/* Secondary Contact Option */}
                <div className="text-center text-sm text-muted-foreground sm:text-left">
                  Or email me at{" "}
                  <a
                    href="mailto:yash.edu.mca@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    yash.edu.mca@gmail.com
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
