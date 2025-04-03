import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, ExternalLink } from "lucide-react"

export function ExtracurricularsSection() {
  const extracurriculars = [
    {
      role: "Design Team Core Member - DOMAIN Club",
      duration: "Oct 2023 - Mar 2024",
      achievements: "Poster making, Instagram handling, taught juniors in workshops, and organized quiz competitions.",
      link: "https://www.instagram.com/domain_dbit",
    },
    {
      role: "DSA Expert - Google Developers Group",
      duration: "Sept 2024 - Present",
      achievements: "Solving DSA problems and mentoring juniors in DSA and Competitive Programming.",
      link: "https://www.instagram.com/gdgc.dbit",
    },
  ]

  return (
    <section className="mb-16">
      <SectionHeading id="extracurriculars" title="Extracurricular Experience" />
      <div className="grid gap-6">
        {extracurriculars.map((item, index) => (
          <Card key={index} className="border border-border/40 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.duration}</span>
                  </div>
                  <p>{item.achievements}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-6 py-4 bg-muted/20 flex justify-end">
              <Button variant="outline" size="sm" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit Page</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

