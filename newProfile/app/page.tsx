import { Navbar } from "@/components/navbar"
import { ProfileHeader } from "@/components/profile-header"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ExtracurricularsSection } from "@/components/extracurriculars-section"
import { AdditionalSection } from "@/components/additional-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProfileHeader />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ExtracurricularsSection />
        <AdditionalSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

