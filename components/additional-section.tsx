import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Heart } from "lucide-react"

export function AdditionalSection() {
  const languages = ["English", "Hindi", "Marathi"]
  const interests = ["Cricket", "Trekking", "Chess"]

  return (
    <section className="mb-16">
      <SectionHeading id="additional" title="Additional Information" />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border border-border/40 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <Badge key={language} variant="secondary" className="px-3 py-1">
                  {language}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="px-3 py-1">
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

