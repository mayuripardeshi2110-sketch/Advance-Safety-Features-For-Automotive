import { BookOpen, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const references = [
  {
    title: "IEEE XplorenDigital Library",
    description: "Research papers on Advance Driver Assistance System",
    type: "Journal",
    url: "",
  },
  {
    title: "William H.Crouse,Donald L.Anglin",
    description: "Automative Mechanics, Tata McGraw-Hill Education",
    type: "Industry Resource",
    url: "",
  },
  {
    title: "SAE International Papers",
    description: "Vehical and Safety Syatem",
    type: "Handbook",
    url: "",
  },
  {
    title: "National Highway Traffic Safety",
    description: "Administration (NHTSA)-Vehical Safety Technologies",
    type: "Research",
    url: "#",
  },
]

export function ReferencesSection() {
  return (
    <section 
      id="references" 
      className="py-20 bg-muted/30"
      aria-labelledby="references-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Sources
            </span>
            <h2 id="references-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-balance">References</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key resources and references used in our research and development.
            </p>
          </div>
          
          {/* References List */}
          <div className="space-y-4">
            {references.map((reference, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-md hover:border-primary/30 transition-all duration-300 bg-card"
              >
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Number */}
                    <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {reference.title}
                        </h3>
                        <span className="inline-block bg-muted px-2 py-0.5 rounded text-xs font-medium text-muted-foreground w-fit">
                          {reference.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{reference.description}</p>
                     
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Citation Note */}
          <Card className="mt-8 bg-muted/50 border-dashed">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">
                All references have been cited following academic standards. 
                For detailed citations, please refer to the project documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
