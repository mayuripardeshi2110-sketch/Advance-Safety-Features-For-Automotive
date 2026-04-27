import { Target, ShieldCheck, Activity, Bell, Cpu, Radio } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const objectives = [
  {
    icon: ShieldCheck,
    title: "Reduce Human Error",
    description: "Minimize driving errors through automated hazard detection and driver alerts",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Monitor brakes, tire pressure, and vehicle health parameters continuously",
  },
  {
    icon: Bell,
    title: "Accident Prevention Alerts",
    description: "Provide timely alerts to prevent accidents before they occur",
  },
  {
    icon: Cpu,
    title: "ADAS Prototype",
    description: "Develop an Advanced Driver Assistance System prototype using modern sensors",
  },
  {
    icon: Radio,
    title: "Sensor Integration",
    description: "Integrate ultrasonic sensor, GPS, GSM, LCD, buzzer, and ATmega328P microcontroller",
  },
]

export function ObjectivesSection() {
  return (
    <section 
      id="objectives" 
      className="py-20 bg-background"
      aria-labelledby="objectives-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Goals
            </span>
            <h2 id="objectives-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Target className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-balance">Project Objectives</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key goals driving our automotive safety innovation project.
            </p>
          </div>
          
          {/* Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:border-primary/30 transition-all duration-300 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <objective.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{objective.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{objective.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Components Used */}
          <div className="mt-12 bg-muted/50 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Components Used</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Ultrasonic Sensor", "GPS Module", "GSM Module", "LCD Display", "Buzzer", "ATmega328P"].map((component) => (
                <span 
                  key={component}
                  className="bg-card px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-colors"
                >
                  {component}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
