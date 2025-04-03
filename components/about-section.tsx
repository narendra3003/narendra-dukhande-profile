import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="mb-16">
      <SectionHeading id="about" title="About Me" />
      <Card className="border border-border/40 shadow-sm">
        <CardContent className="p-6">
          <p className="leading-relaxed">
            I'm a highly motivated and results-driven software engineering student at Don Bosco Institute of Technology.
            I have a passion for coding and problem-solving, and thrive on creating impactful software solutions. With
            experience in both backend and frontend technologies, I'm eager to contribute to innovative teams and apply
            my skills in a real-world development setting. Currently seeking internship opportunities to further enhance
            my coding expertise and gain industry experience.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

