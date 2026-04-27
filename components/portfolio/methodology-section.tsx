import { Workflow, Radio, Cpu, Monitor, Volume2, MapPin, MessageSquare, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const methodologySteps = [
  {
    step: 1,
    icon: Radio,
    title: "Data Collection",
    description: "Sensors collect real-time vehicle and obstacle data continuously",
    color: "bg-primary",
  },
  {
    step: 2,
    icon: Cpu,
    title: "Data Processing",
    description: "ATmega328P microcontroller processes all sensor data",
    color: "bg-secondary",
  },
  {
    step: 3,
    icon: Monitor,
    title: "Display Status",
    description: "LCD displays distance measurements and warning messages",
    color: "bg-accent",
  },
  {
    step: 4,
    icon: Volume2,
    title: "Alert Driver",
    description: "Buzzer provides audible alerts during danger situations",
    color: "bg-destructive",
  },
  {
    step: 5,
    icon: MapPin,
    title: "Location Fetch",
    description: "GPS module fetches current location coordinates",
    color: "bg-primary",
  },
  {
    step: 6,
    icon: MessageSquare,
    title: "Emergency SMS",
    description: "GSM sends emergency SMS with Google Maps location link",
    color: "bg-secondary",
  },
]

export function MethodologySection() {
  return (
    <section 
      id="methodology" 
      className="py-20 bg-background"
      aria-labelledby="methodology-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 id="methodology-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Workflow className="h-8 w-8 text-accent" aria-hidden="true" />
              <span className="text-balance">Methodology</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Step-by-step process of how our safety system detects hazards and responds to emergencies.
            </p>
          </div>
          
          {/* Methodology Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.map((item, index) => (
              <Card 
                key={index} 
                className="relative group hover:shadow-lg transition-all duration-300 bg-card overflow-hidden"
              >
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-muted/20 group-hover:text-muted/40 transition-colors">
                    {String(item.step).padStart(2, "0")}
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <div className={`inline-flex p-3 ${item.color}/10 rounded-xl w-fit`}>
                      <item.icon className={`h-6 w-6 ${item.color.replace("bg-", "text-")}`} aria-hidden="true" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Arrow indicator for flow */}
                  {index < methodologySteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-muted-foreground/30" aria-hidden="true" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Flow Summary */}
          <Card className="mt-10 bg-muted/50 border-dashed">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-3 text-center">System Flow Summary</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Sensors</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full">Microcontroller</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">Display & Alerts</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="bg-destructive/10 text-destructive px-3 py-1 rounded-full">Emergency SMS</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
