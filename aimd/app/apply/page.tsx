import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ClipboardCheck, Send } from "lucide-react"
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
              Apply to AIMD Projects
            </h1>
            <p className="text-muted-foreground">
              Join our team of innovators bridging AI and medical excellence. Fill out the form below to apply for AIMD
              projects.
            </p>
          </div>

          <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <ClipboardCheck className="mr-2" />
                Application Form
              </CardTitle>
              <CardDescription>Please provide all the required information to apply for AIMD projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-primary">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="bg-background/50 border-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="bg-background/50 border-primary/20"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-primary/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="major">Major</Label>
                    <Input
                      id="major"
                      placeholder="Your field of study"
                      className="bg-background/50 border-primary/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50 border-primary/20">
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Interest */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-primary">Project Interest</h3>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Which area are you most interested in?</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50 border-primary/20">
                        <SelectValue placeholder="Select an area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai">AI/ML Development</SelectItem>
                        <SelectItem value="medical">Medical Research</SelectItem>
                        <SelectItem value="data">Data Analysis</SelectItem>
                        <SelectItem value="frontend">Frontend Development</SelectItem>
                        <SelectItem value="backend">Backend Development</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Briefly describe your relevant experience or skills"
                      className="min-h-[100px] bg-background/50 border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join AIMD?</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Tell us why you're interested in joining AIMD projects"
                      className="min-h-[100px] bg-background/50 border-primary/20"
                      required
                    />
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-primary">Availability</h3>
                  <div className="space-y-2">
                    <Label htmlFor="commitment">How many hours per week can you commit?</Label>
                    <Select>
                      <SelectTrigger className="bg-background/50 border-primary/20">
                        <SelectValue placeholder="Select hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3">1-3 hours</SelectItem>
                        <SelectItem value="4-6">4-6 hours</SelectItem>
                        <SelectItem value="7-10">7-10 hours</SelectItem>
                        <SelectItem value="10+">10+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    I understand that by submitting this application, I am committing to actively participate in AIMD
                    projects if selected.
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

