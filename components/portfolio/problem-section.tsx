import { AlertTriangle, Car, Activity, Gauge, Droplet, Wind, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const problemPoints = [
  { icon: AlertTriangle, text: "Human error in driving decisions", color: "text-destructive" },
  { icon: Car, text: "Poor hazard detection systems", color: "text-accent" },
  { icon: Activity, text: "Lack of real-time brake monitoring", color: "text-primary" },
  { icon: Gauge, text: "No tire pressure alerts", color: "text-secondary" },
  { icon: Droplet, text: "Oil health not monitored", color: "text-accent" },
  { icon: Wind, text: "Emissions not tracked", color: "text-primary" },
  { icon: Users, text: "Passenger safety risks", color: "text-destructive" },
]

export function ProblemSection() {
  return (
    <section 
      id="problem" 
      className="py-20 bg-muted/30"
      aria-labelledby="problem-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-destructive/10 text-destructive px-4 py-1 rounded-full text-sm font-medium mb-4">
              The Challenge
            </span>
            <h2 id="problem-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Problem Statement
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Understanding the critical issues that lead to road accidents and vehicle safety concerns.
            </p>
          </div>
          
          {/* Main Problem Card */}
          <Card className="mb-8 border-destructive/20 bg-card shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg shrink-0">
                  <AlertTriangle className="h-6 w-6 text-destructive" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Core Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    High road accidents occur due to human error, poor hazard detection, lack of real-time 
                    monitoring of brakes, tire pressure, oil health, emissions, and passenger safety risks. 
                    Current automotive safety systems are reactive rather than proactive, addressing issues 
                    only after an accident has occurred.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Problem Points Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {problemPoints.map((point, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow bg-card">
                <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform`}>
                    <point.icon className={`h-5 w-5 ${point.color}`} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{point.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
