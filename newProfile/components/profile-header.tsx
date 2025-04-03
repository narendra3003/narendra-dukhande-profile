import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProfileHeader() {
  return (
    <div className="w-full bg-gradient-to-b from-primary/10 to-background pt-24 pb-10">
      <Card className="container mx-auto max-w-4xl border-none bg-transparent shadow-none">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image
                  src="profile-photo.png?height=144&width=144"
                  alt="Narendra Dukhande"
                  width={144}
                  height={144}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-xl">👨‍💻</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Narendra Dukhande</h1>
              <p className="text-muted-foreground mb-4">DSA Expert & Full-Stack Developer</p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">8356840696</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href="mailto:narendradukhande@gmail.com" className="text-sm hover:text-primary transition-colors">
                    narendradukhande@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Thane (W), Maharashtra</span>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/narendra-dukhande" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/narendra3003" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="sm">
                <a href="https://drive.google.com/file/d/18uumf4pFB3bO45xu-G1juITJ9_3Q5Uyc/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

