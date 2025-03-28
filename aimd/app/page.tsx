import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Github, Instagram, Linkedin, MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const sponsors = [
  {
    logo: "https://goodneighborcenter.statefarm.com/images/our-success/logos/2012-SF-logo.png",
    width: 240,
    height: 80,
  },
  {
    logo: "https://www.paycom.com/images/paycom-logo-color-clear.png",
    width: 240,
    height: 80,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/CBRE_Logo.png",
    width: 240,
    height: 80,
  },
  {
    logo: "https://logotyp.us/file/eog-resources.svg",
    width: 240,
    height: 80,
  },
  {
    logo: "https://www.vectorlogo.zone/logos/goldmansachs/goldmansachs-ar21.svg",
    width: 240,
    height: 80,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background purple-gradient">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="text-center md:text-left">
                <h1 className="mb-6 text-5xl font-bold leading-tight text-[hsl(270,100%,70%)]">
                  Bridging AI Innovation with Medical Excellence
                </h1>
                <p className="mb-8 text-lg text-muted-foreground">
                  Empowering the future of healthcare through collaborative innovation and cutting-edge technology
                </p>
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
        <section className="py-20 bg-secondary/50 flex justify-center items-center">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
              <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="mb-2 text-xl font-semibold text-primary">AI Innovation</h3>
                  <p className="text-muted-foreground">
                    Leveraging cutting-edge AI technology to transform healthcare delivery
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mb-4 text-primary mx-auto" />
                  <h3 className="mb-2 text-xl font-semibold text-primary">Community</h3>
                  <p className="text-muted-foreground">
                    Building a network of healthcare professionals and tech innovators
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
                <CardContent className="p-6">
                  <MessageSquare className="w-12 h-12 mb-4 text-primary mx-auto" />
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
              <h3 className="text-10xl font-bold text-[#B8860B] mb-4">Gold</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={` logo`}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                  />
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