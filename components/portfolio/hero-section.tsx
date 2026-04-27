import { Shield, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      id="introduction" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" aria-hidden="true" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Group Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" aria-hidden="true" />
            Group No: 19 | Digital Business Management Portfolio
          </div>
          
          {/* Title */}
          <h1 
            id="hero-title" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight"
          >
            Advance Safety Features for{" "}
            <span className="text-primary">Automotive</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
            A proactive safety system using sensors, GPS, GSM, and microcontroller-based monitoring 
            to prevent accidents and ensure real-time vehicle health monitoring.
          </p>
          
          {/* Introduction Content */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border text-left max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" aria-hidden="true"></span>
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Road accidents are rising due to traffic, speed, human error, and poor hazard detection. 
              Traditional safety systems like airbags work after accidents, but this project focuses on 
              <strong className="text-foreground"> proactive safety</strong> using sensors, GPS, GSM, and 
              microcontroller-based monitoring. Our system aims to prevent accidents before they occur 
              by providing real-time alerts and monitoring vehicle health parameters.
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <a 
            href="#problem" 
            className="inline-flex flex-col items-center gap-2 mt-12 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to problem statement section"
          >
            <span className="text-sm font-medium">Explore More</span>
            <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
