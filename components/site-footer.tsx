import Link from "next/link"
import { Github, Instagram, Mail, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-primary/20 bg-background/50 backdrop-blur">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            AIMD
          </Link>
          <p className="text-sm text-muted-foreground">Bridging AI Innovation with Medical Excellence at UT Dallas</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/officers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Officers
            </Link>
            <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Events
            </Link>
          </nav>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Connect with Us</h3>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <a
              href="mailto:aimdutd@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              aimdutd@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/aimd_utd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://github.com/AIMD-UTDallas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/aimdutd/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://linktr.ee/utdaimd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center">🌲</div>
              <span className="sr-only">Linktree</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-8 pt-8 border-t border-primary/20">
        <div className="text-center text-sm text-muted-foreground">© 2024 AIMD at UT Dallas. All rights reserved.</div>
      </div>
    </footer>
  )
}
