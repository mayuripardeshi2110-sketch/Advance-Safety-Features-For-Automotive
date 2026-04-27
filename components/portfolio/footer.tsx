import { Shield, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Top */}
          <div className="flex justify-center mb-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-background"
            >
              <a href="#introduction">
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
                Back to Top
              </a>
            </Button>
          </div>
          
          {/* Logo and Info */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-xl font-bold">Advance Safety Features for Automotive</span>
            </div>
            <p className="text-background/70 max-w-md mx-auto">
              A Digital Business Management Portfolio Project showcasing innovative automotive safety solutions.
            </p>
          </div>
          
          {/* Team Info */}
          <div className="text-center mb-8 pb-8 border-b border-background/10">
            <p className="text-sm text-background/70 mb-2">
              <strong className="text-background">Group 19</strong> | Digital Business Management Portfolio
            </p>
            <p className="text-sm text-background/60">
              Team: Disha R. Shinde, Mayuri S. Pardeshi, Vaishnavi B. Mahajan
            </p>
            <p className="text-sm text-background/60">
              Guide: Mr. B. L. Kulkarni
            </p>
          </div>
          
          {/* Quick Links */}
          <nav className="mb-8" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li><a href="#introduction" className="text-background/70 hover:text-background transition-colors">Introduction</a></li>
              <li><a href="#problem" className="text-background/70 hover:text-background transition-colors">Problem</a></li>
              <li><a href="#solution" className="text-background/70 hover:text-background transition-colors">Solution</a></li>
              <li><a href="#methodology" className="text-background/70 hover:text-background transition-colors">Methodology</a></li>
              <li><a href="#achievements" className="text-background/70 hover:text-background transition-colors">Achievements</a></li>
              <li><a href="#team" className="text-background/70 hover:text-background transition-colors">Team</a></li>
            </ul>
          </nav>
          
          {/* Copyright */}
          <div className="text-center text-sm text-background/50">
            <p>&copy; {currentYear} Group 19 - Advance Safety Features for Automotive. All rights reserved.</p>
            <p className="mt-1">Created for Digital Business Management Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
