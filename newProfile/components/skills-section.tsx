import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Layout, Wrench } from "lucide-react"

export function SkillsSection() {
  const skills = {
    languages: ["Python", "JAVA", "JavaScript", "HTML", "CSS", "C", "C++"],
    databases: ["MySQL", "MongoDB", "SQLite"],
    frameworks: ["Django", "Flask", "Node.js", "React.js", "Tkinter", "Bootstrap"],
    tools: ["VS Code", "IntelliJ IDEA", "Google Cloud Platforms", "Jenkins"],
  }

  const codingProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/Narendra_3003/" },
    { name: "Codeforces", url: "https://codeforces.com/profile/Narendra_3003/" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/narendra_3003/" },
    { name: "Naukri360", url: "https://www.naukri.com/code360/profile/6af8d9f2-9c02-4ea6-8b3a-c19ee3982659" },
  ]

  return (
    <section className="mb-16">
      <SectionHeading id="skills" title="Technical Skills" />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border border-border/40 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <Badge key={lang} variant="secondary" className="px-3 py-1">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Database Systems</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((db) => (
                <Badge key={db} variant="secondary" className="px-3 py-1">
                  {db}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Layout className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework) => (
                <Badge key={framework} variant="secondary" className="px-3 py-1">
                  {framework}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="px-3 py-1">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 border border-border/40 shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Coding Profiles</h3>
          <div className="flex flex-wrap gap-3">
            {codingProfiles.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-md transition-colors"
              >
                <Code className="h-4 w-4" />
                <span>{profile.name}</span>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

