import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Instagram, Linkedin, Calendar, AlertCircle } from "lucide-react"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background purple-gradient">
      <header className="border-b border-primary/20">
        <nav className="container flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            AIMD
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/events" className="text-sm hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/officers" className="text-sm hover:text-primary transition-colors">
              Officers
            </Link>
            <Link href="/apply">
              <Button variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                Join Now
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
              Applications Closed
            </h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your interest in joining AIMD. Applications are currently closed.
            </p>
          </div>

          <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <AlertCircle className="mr-2" />
                Applications Update
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Calendar className="h-16 w-16 text-primary" />
                <h2 className="text-2xl font-bold text-primary">AIMD Projects Fall 2025</h2>
                <p className="text-muted-foreground">
                  Applications for AIMD Projects will open in Fall 2025. Follow our social media channels for updates on
                  application deadlines and requirements.
                </p>
              </div>

              <div className="border-t border-primary/10 pt-6"></div>

              <div className="flex flex-col items-center text-center space-y-4">
                <Calendar className="h-16 w-16 text-primary" />
                <h2 className="text-2xl font-bold text-primary">AIMD Research Fall 2025</h2>
                <p className="text-muted-foreground">
                  AIMD Research applications will also open in Fall 2025. Stay connected with us to learn about exciting
                  research opportunities at the intersection of AI and medicine.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
            <CardHeader>
              <CardTitle className="text-center text-primary">Stay Connected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-8">
                <Link
                  href="https://www.instagram.com/aimd_utd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Instagram
                  </span>
                </Link>
                <Link
                  href="https://github.com/AIMD-UTDallas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    GitHub
                  </span>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/aimdutd/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    LinkedIn
                  </span>
                </Link>
                <Link
                  href="https://linktr.ee/utdaimd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <div className="h-6 w-6 flex items-center justify-center text-primary font-bold">🌲</div>
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Linktree
                  </span>
                </Link>
              </div>
              <p className="text-center mt-8 text-muted-foreground">
                Follow us on social media to stay updated on events, workshops, and future application cycles.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
