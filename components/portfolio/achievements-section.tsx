import { Trophy, Radar, MessageSquare, Eye, Coins, Cpu } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const achievements = [
  {
    icon: Radar,
    title: "Real-time Obstacle Detection",
    description: "Successfully implemented ultrasonic sensor-based obstacle detection with precise distance measurement",
  },
  {
    icon: MessageSquare,
    title: "Emergency SMS Alert",
    description: "Integrated GSM module sends emergency SMS with Google Maps location to contacts instantly",
  },
  {
    icon: Eye,
    title: "Improved Driver Awareness",
    description: "LCD display and buzzer alerts keep drivers informed about potential hazards",
  },
  {
    icon: Coins,
    title: "Low-cost Prototype",
    description: "Developed an affordable automotive safety prototype using readily available components",
  },
  {
    icon: Cpu,
    title: "Sensor & Microcontroller Integration",
    description: "Successfully integrated multiple sensors with ATmega328P for seamless operation",
  },
]

export function AchievementsSection() {
  return (
    <section 
      id="achievements" 
      className="py-20 bg-background"
      aria-labelledby="achievements-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Success
            </span>
            <h2 id="achievements-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 text-accent" aria-hidden="true" />
              <span className="text-balance">Achievements & Outcomes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones and outcomes achieved during our project development.
            </p>
          </div>
          
          {/* Image Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-0">
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <Image
                    src="/images/location.jpg"
                    alt="Working prototype demonstration showing obstacle detection in action - Edit this alt text"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Working Prototype
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">Prototype Demonstration</h3>
                  <p className="text-sm text-muted-foreground">
                    Our working prototype successfully detecting Locations
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-0">
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <Image
                    src="/images/alert.jpg"
                    alt="Emergency SMS alert received on mobile phone with location link - Edit this alt text"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      SMS Alert System
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">Emergency Alert System</h3>
                  <p className="text-sm text-muted-foreground">
                    SMS alerts sent to emergency contacts with Google Maps location link
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:border-accent/30 transition-all duration-300 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl shrink-0 group-hover:bg-accent/20 transition-colors">
                      <achievement.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
