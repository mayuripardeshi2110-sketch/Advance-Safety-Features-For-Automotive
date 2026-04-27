import { Users, GraduationCap, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Disha Rakesh Shinde",
    role: "Team Member",
    initial: "DS",
  },
  {
    name: "Mayuri Satish Pardeshi",
    role: "Team Member",
    initial: "MP",
  },
  {
    name: "Vaishnavi Bhagwan Mahajan",
    role: "Team Member",
    initial: "VM",
  },
]

const guide = {
  name: "Mr. B. L. Kulkarni",
  role: "Project Guide",
  initial: "BK",
}

export function TeamSection() {
  return (
    <section 
      id="team" 
      className="py-20 bg-background"
      aria-labelledby="team-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Group No: 19
            </span>
            <h2 id="team-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-secondary" aria-hidden="true" />
              <span className="text-balance">Team Details</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the dedicated team behind this automotive safety project.
            </p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:border-secondary/30 transition-all duration-300 bg-card text-center"
              >
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <span className="text-2xl font-bold text-secondary">{member.initial}</span>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Guide Card */}
          <Card className="max-w-md mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                <span className="text-3xl font-bold text-primary">{guide.initial}</span>
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-semibold text-foreground mb-1">{guide.name}</h3>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
                {guide.role}
              </p>
              
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  We express our sincere gratitude to our guide for their valuable guidance and support 
                  throughout this project.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
