import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Beaker, Laptop } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background purple-gradient">
      <header className="border-b border-primary/20">
        <nav className="container flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            AIMD
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm text-primary">
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
        <section className="mb-16">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative w-48 h-48 mb-8">
              <div className="absolute inset-0 animate-pulse">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SQF3EnUTcNjBsxo68ANtIVT8H6GIuV.png"
                  alt="AIMD Brain Logo"
                  width={192}
                  height={192}
                  className="object-contain"
                  priority
                  quality={100}
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
              About AI MD Club
            </h1>
          </div>
          <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
            <CardContent className="p-6">
              <p className="text-lg text-center leading-relaxed">
                Welcome to the future of medicine and technology! The AI MD Club at UT Dallas is here to revolutionize
                healthcare with cutting-edge technology. Join us on this exciting journey as we explore the limitless
                possibilities of artificial intelligence, ML, and other technology in medicine.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Divisions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Laptop className="mr-2" />
                  AIMD Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our projects division focuses on hands-on application of AI and ML in medical contexts. Members
                  collaborate on innovative projects that bridge the gap between theoretical knowledge and practical
                  implementation in healthcare.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Beaker className="mr-2" />
                  AIMD Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The research division delves deep into cutting-edge AI and ML techniques applicable to medicine.
                  Members engage in literature reviews, conduct experiments, and contribute to the growing body of
                  knowledge in AI-driven healthcare solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">Join Us in Shaping the Future of Healthcare</h2>
            <p className="text-muted-foreground mb-6">
              Whether you're passionate about AI, medicine, or both, there's a place for you in the AI MD Club.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Become a Member
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-primary/20">
        <div className="container">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2024 AIMD. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
