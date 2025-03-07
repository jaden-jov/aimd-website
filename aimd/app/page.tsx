import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Github, Instagram, Linkedin, MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"

const sponsors = [
  {
    name: "State Farm",
    logo: "/placeholder.svg",
    width: 240,
    height: 80,
  },
  {
    name: "Paycom",
    logo: "/placeholder.svg",
    width: 240,
    height: 80,
  },
  {
    name: "CBRE",
    logo: "/placeholder.svg",
    width: 240,
    height: 80,
  },
  {
    name: "EOG Resources",
    logo: "/placeholder.svg",
    width: 240,
    height: 80,
  },
  {
    name: "Goldman Sachs",
    logo: "/placeholder.svg",
    width: 240,
    height: 80,
  },
]

export default function Home() {
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

      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h1 className="mb-6 text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
                  Bridging AI Innovation with Medical Excellence
                </h1>
                <p className="mb-8 text-lg text-muted-foreground">
                  Empowering the future of healthcare through collaborative innovation and cutting-edge technology
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.instagram.com/aimd_utd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://github.com/AIMD-UTDallas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/aimdutd/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://linktr.ee/utdaimd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-6 h-6 flex items-center justify-center font-bold">🌲</div>
                    <span className="sr-only">Linktree</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] aspect-square purple-glow rounded-full flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/transparent%20background%20AIMD%20logo-9XCZIwM7SyKJKjIQu91kFZExUqaCLw.png"
                    alt="AIMD Logo"
                    width={550}
                    height={550}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-primary">AI Innovation</h3>
                  <p className="text-muted-foreground">
                    Leveraging cutting-edge AI technology to transform healthcare delivery
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-primary">Community</h3>
                  <p className="text-muted-foreground">
                    Building a network of healthcare professionals and tech innovators
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
                <CardContent className="p-6">
                  <MessageSquare className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-primary">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Fostering partnerships between medical experts and tech pioneers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Sponsors</h2>
              <div className="text-xl font-medium text-[#B8860B] mb-8">gold</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center max-w-4xl mx-auto">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="relative w-48 h-20 transition-transform hover:scale-105">
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur rounded-lg">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      width={sponsor.width}
                      height={sponsor.height}
                      className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

