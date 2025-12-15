import { Hero } from "@/components/hero/Hero"
import { AboutSection } from "@/components/about/AboutSection"
import { SkillsSection } from "@/components/skills/SkillsSection"
import { FeaturedProjects } from "@/components/projects/FeaturedProjects"
import { Timeline } from "@/components/experience-timeline/Timeline"
import { ContactSection } from "@/components/contact/ContactSection"
import { Footer } from "@/components/footer/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <Timeline />
      <ContactSection />
      <Footer />
    </>
  )
}
