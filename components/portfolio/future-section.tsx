import { Rocket, Smartphone, Brain, Cloud, Users, Cog } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const futureFeatures = [
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Companion mobile app for real-time monitoring, alerts, and vehicle health tracking on the go",
    status: "Planned",
  },
  {
    icon: Brain,
    title: "AI-based Drowsiness Detection",
    description: "Machine learning algorithms to detect driver fatigue and drowsiness patterns",
    status: "Research",
  },
  {
    icon: Cloud,
    title: "Cloud-based Accident Monitoring",
    description: "Centralized cloud platform for accident data analysis and emergency response coordination",
    status: "Planned",
  },
  {
    icon: Users,
    title: "Pedestrian Detection",
    description: "Advanced sensors and AI to detect pedestrians and cyclists near the vehicle",
    status: "Research",
  },
  {
    icon: Cog,
    title: "Advanced ADAS Integration",
    description: "Integration with existing Advanced Driver Assistance Systems for comprehensive safety",
    status: "Future",
  },
]

export function FutureSection() {
  return (
    <section 
      id="future" 
      className="py-20 bg-muted/30"
      aria-labelledby="future-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              What&apos;s Next
            </span>
            <h2 id="future-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Rocket className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-balance">Future Scope</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Potential enhancements and future development directions for our automotive safety system.
            </p>
          </div>
          
          {/* Future Features Timeline */}
          <div className="space-y-6">
            {futureFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 bg-card overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Icon Section */}
                    <div className="md:w-20 bg-primary/5 flex items-center justify-center p-6 md:p-0">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        <span className={`
                          inline-block px-3 py-1 rounded-full text-xs font-medium w-fit
                          ${feature.status === "Planned" ? "bg-secondary/10 text-secondary" : ""}
                          ${feature.status === "Research" ? "bg-accent/10 text-accent" : ""}
                          ${feature.status === "Future" ? "bg-muted text-muted-foreground" : ""}
                        `}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Vision Statement */}
          <Card className="mt-10 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6 md:p-8 text-center">
              <Rocket className="h-10 w-10 text-primary mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We envision a future where every vehicle is equipped with intelligent safety systems that 
                prevent accidents before they occur, making roads safer for everyone. Our goal is to 
                contribute to this vision through continuous innovation and research.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
