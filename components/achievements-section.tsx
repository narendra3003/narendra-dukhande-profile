import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      title: "Winner of DBIT Innoquest 2023",
      description: "Our team won 1st prize at DBIT Innoquest in SE-IT division.",
      date: "Dec 2023",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "Skilled Assessment Badge for Python",
      description: "In top 30% LinkedIn Users.",
      icon: <Award className="h-5 w-5 text-blue-500" />,
    },
    {
      title: "Runner-up in GDGC Pillai Debug-a-thon 2024",
      description: "2nd place in the Debug-a-thon organized by GDGC Pillai.",
      date: "March 2024",
      icon: <Trophy className="h-5 w-5 text-grey-500" />,
    },
  ]

  return (
    <section className="mb-16">
      <SectionHeading id="achievements" title="Honors and Achievements" />
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <Card key={index} className="border border-border/40 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                  {achievement.date && <p className="text-sm text-muted-foreground mt-2">{achievement.date}</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

