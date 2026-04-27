import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProblemSection } from "@/components/portfolio/problem-section"
import { ObjectivesSection } from "@/components/portfolio/objectives-section"
import { SolutionSection } from "@/components/portfolio/solution-section"
import { MethodologySection } from "@/components/portfolio/methodology-section"
import { PresentationSection } from "@/components/portfolio/presentation-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { FutureSection } from "@/components/portfolio/future-section"
import { TeamSection } from "@/components/portfolio/team-section"
import { ReferencesSection } from "@/components/portfolio/references-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ObjectivesSection />
        <SolutionSection />
        <MethodologySection />
        <PresentationSection />
        <AchievementsSection />
        <FutureSection />
        <TeamSection />
        <ReferencesSection />
      </main>
      <Footer />
    </>
  )
}
