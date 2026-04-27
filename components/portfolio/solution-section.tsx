import { Lightbulb, Radar, MapPin, MessageSquare, Monitor, Volume2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const solutionFeatures = [
  {
    icon: Radar,
    title: "Ultrasonic Sensors",
    description: "Obstacle detection with precise distance measurement",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time location tracking for emergency response",
  },
  {
    icon: MessageSquare,
    title: "GSM Alerts",
    description: "Emergency SMS with Google Maps location to contacts",
  },
  {
    icon: Monitor,
    title: "LCD Display",
    description: "Live status display showing distance and warnings",
  },
  {
    icon: Volume2,
    title: "Buzzer Alerts",
    description: "Audible warning alerts for immediate driver attention",
  },
]

export function SolutionSection() {
  return (
    <section 
      id="solution" 
      className="py-20 bg-muted/30"
      aria-labelledby="solution-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 id="solution-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Lightbulb className="h-8 w-8 text-secondary" aria-hidden="true" />
              <span className="text-balance">Solution / Concept</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              An integrated safety system that combines multiple sensors and communication modules 
              to provide proactive accident prevention and emergency response.
            </p>
          </div>
          
          {/* Solution Description */}
          <Card className="mb-10 bg-card border-secondary/20 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                The system uses <strong className="text-foreground">ultrasonic sensors</strong> for obstacle detection, 
                <strong className="text-foreground"> GPS</strong> for location tracking, 
                <strong className="text-foreground"> GSM</strong> for emergency alerts, 
                <strong className="text-foreground"> LCD</strong> for live status display, and 
                <strong className="text-foreground"> buzzer</strong> for warning alerts. 
                If an accident or obstacle is detected, the system alerts the driver and sends location details 
                to emergency contacts via SMS with Google Maps integration.
              </p>
            </CardContent>
          </Card>
          
          {/* Image Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-0">
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <Image
                    src="/images/diagram.jpeg"
                    alt="System architecture diagram showing sensor integration with microcontroller - Edit this alt text"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      System Architecture
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">System Architecture</h3>
                  <p className="text-sm text-muted-foreground">
                    Overview of the integrated safety system components and their connections
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-0">
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <Image
                    src="/images/project.jpeg"
                    alt="Sensor module configuration and wiring diagram - Edit this alt text"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Sensor Configuration
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">Sensor Configuration</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed view of sensor modules and their placement in the system
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {solutionFeatures.map((feature, index) => (
              <Card key={index} className="group hover:border-secondary/50 transition-colors bg-card">
                <CardContent className="p-4 text-center">
                  <div className="inline-flex p-3 bg-secondary/10 rounded-xl mb-3 group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
