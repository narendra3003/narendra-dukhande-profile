import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "ExpenseEase - An Expense Tracking Desktop Application",
      techStack: ["JavaFX", "SceneBuilder", "CSS", "JAVA", "MySQL"],
      duration: "Sept 2023 - Dec 2023",
      description:
        "Developed a user-friendly desktop app for efficient personal expense management. Users can create custom categories, set budgets, and track finances. Features include managing borrowed/lent money and tracking over 90% of daily expenses.",
      github: "https://github.com/narendra3003/Expense_Ease_JavaProject",
      emoji: "💰",
    },
    {
      title: "SwiftSynk: Auto-Syncing and Backup Application",
      techStack: ["pyQT5", "Python", "MySQL", "Google Drive API"],
      duration: "Feb 2024 - May 2024",
      description:
        "Developed a user-centric app for seamless file/folder sync and backup with Google Drive. Implemented two-state versioning for easy access to previous file versions. Boosted user control by 70% with selective sync, pause, and delete options.",
      github: "https://github.com/narendra3003/SwiftSynk",
      emoji: "🔄",
    },
    {
      title: "Agriculture Trend Prediction",
      techStack: ["Machine Learning", "Python", "Pandas", "Numpy", "Matplotlib"],
      duration: "May 2023 - Aug 2023",
      description:
        "Analyzed agricultural trends based on climatic data to predict yields for the upcoming years using machine learning. The analysis improved agricultural planning by providing insights based on climatic data trends.",
      emoji: "🌱",
    },
    {
      title: "StudyXP: Gamified Self-Study Tracker Web App",
      techStack: ["Flask", "Python", "MySQL", "HTML", "CSS", "Chart.js"],
      duration: "22 April 2024 -One Day Hackathon",
      description:
        "Built a Flask-based web app to log daily subject-wise study hours and track mock tests. Integrated XP rewards (10–30 XP/day), consistency streaks, and progress analytics with smart reminders. Boosted user engagement by 40% through gamification and AI-based insights.",
      github: "https://github.com/narendra3003/StudyXP", // replace if different
      emoji: "📖",
    },
  ]

  return (
    <section className="mb-16">
      <SectionHeading id="projects" title="Projects" />
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="border border-border/40 shadow-sm overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/10"></div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                  {project.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{project.duration}</span>
                  </div>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            {project.github && (
              <CardFooter className="px-6 py-4 bg-muted/20 flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Code</span>
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}

