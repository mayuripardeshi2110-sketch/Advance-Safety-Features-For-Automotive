import { Presentation, FileText, Download, Play, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PresentationSection() {
  return (
    <section 
      id="presentation" 
      className="py-20 bg-muted/30"
      aria-labelledby="presentation-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Documentation
            </span>
            <h2 id="presentation-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Presentation className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-balance">Project Presentation</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              View our project presentation and documentation materials.
            </p>
          </div>
          
          {/* Presentation Embed */}
          <Card className="mb-8 overflow-hidden bg-card shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-[16/9] w-full bg-muted relative">
                <iframe
                  src="/ppt.pdf"
                  title="Advance Safety Features for Automotive Project PPT PDF"
                  className="w-full h-full"
                  loading="lazy"
                >
                  <p className="p-8 text-center text-muted-foreground">
                    Your browser does not support PDF viewing. Please download the PDF to view.
                  </p>
                </iframe>
                {/* Fallback overlay for when PDF is not loaded */}
                <div className="absolute inset-0 flex items-center justify-center bg-muted/90 group-hover:bg-muted/70 transition-colors pointer-events-none" id="pdf-fallback">
                  <div className="text-center p-8">
                    <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                    <p className="text-muted-foreground mb-2">Project Presentation PDF</p>
                    <p className="text-sm text-muted-foreground/70">
                      
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="/ppt.pdf" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View Project PPT PDF
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="gap-2"
            >
              <a href="/ppt.pdf" download="Advance-Safety-Features-Automotive-PPT.pdf">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PPT PDF
              </a>
            </Button>
            
          </div>
          
         
          {/* Instructions for embedding */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              
             
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
