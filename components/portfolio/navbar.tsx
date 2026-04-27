"use client"

import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#introduction", label: "Introduction" },
  { href: "#problem", label: "Problem" },
  { href: "#objectives", label: "Objectives" },
  { href: "#solution", label: "Solution" },
  { href: "#methodology", label: "Methodology" },
  { href: "#presentation", label: "Presentation" },
  { href: "#achievements", label: "Achievements" },
  { href: "#future", label: "Future Scope" },
  { href: "#team", label: "Team" },
  { href: "#references", label: "References" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-primary font-bold text-lg">
            <Shield className="h-6 w-6" aria-hidden="true" />
            <span className="hidden sm:inline">Auto Safety</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
