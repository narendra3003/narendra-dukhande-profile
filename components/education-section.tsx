import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      institution: "Don Bosco Institute of Technology",
      degree: "Bachelor of Engineering (Information Technology)",
      duration: "July 2022 - Present",
      location: "Kurla, Maharashtra",
      grade: "8.56 (Till Sem-5)",
    },
    {
      institution: "Ramniranjan Jhunjhunwala College",
      degree: "11th - 12th",
      duration: "July 2020 - March 2022",
      location: "Ghatkopar, Maharashtra",
      grade: "77.17%",
    },
  ]

  return (
    <section className="mb-16">
      <SectionHeading id="education" title="Education" />
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <Card key={index} className="border border-border/40 shadow-sm overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary/80 to-primary/20"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">{edu.institution}</h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>{edu.degree}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span>{edu.grade}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

