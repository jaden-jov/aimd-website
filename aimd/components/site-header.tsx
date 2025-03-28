// components/site-header.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Github, Instagram, Linkedin, MessageSquare, Users } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[hsl(260, 20%, 5%)] border-b border-[hsla(270,80%,60%,0.1)]">
      <nav className="container flex items-center justify-center h-16">
        {/* Centered Navigation */}
        <div className="flex items-center justify-center gap-1">
          {/* Logo */}
          <Link href="/">
            <Button
              variant="ghost"
              className="ml-2 bg-[hsl(270,100%,70%)] hover:bg-[hsl(270,100%,60%)] text-white px-6"
            >
              AIMD
            </Button>
          </Link>
          
          {/* Navigation Links */}
          <Link href="/about">
            <Button 
              variant="ghost" 
              className="ml-2 bg-[hsl(270,100%,70%)] hover:bg-[hsl(270,100%,60%)] text-white px-6"
            >
              About
            </Button>
          </Link>
          
          <Link href="/events">
            <Button 
              variant="ghost" 
              className="ml-2 bg-[hsl(270,100%,70%)] hover:bg-[hsl(270,100%,60%)] text-white px-6"
            >
              Events
            </Button>
          </Link>
          
          <Link href="/officers">
            <Button 
              variant="ghost" 
              className="ml-2 bg-[hsl(270,100%,70%)] hover:bg-[hsl(270,100%,60%)] text-white px-6"
            >
              Officers
            </Button>
          </Link>
          
          {/* Join Now Button */}
          <Link href="/apply">
            <Button className="ml-2 bg-[hsl(270,100%,70%)] hover:bg-[hsl(270,100%,60%)] text-white px-6">
              Join Now
            </Button>
          </Link>
            <div className="flex justify-center md:justify-start space-x-4">
                <Link
                    href="https://www.instagram.com/aimd_utd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                        <Instagram className="w-6 h-6" />
                        <span className="sr-only">Instagram</span>
                </Link>
                <Link
                    href="https://github.com/AIMD-UTD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                </Link>
                <Link
                    href="https://www.linkedin.com/company/aimdutd/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                    href="https://linktr.ee/utdaimd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors">
                        <div className="w-6 h-6 flex items-center justify-center font-bold">🌲</div>
                        <span className="sr-only">Linktree</span>
                </Link>
            </div>
        </div>
      </nav>
    </header>
  )
}