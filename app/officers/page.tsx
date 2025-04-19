import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const teams = [
  {
    name: "Executive",
    members: [
      {
        name: "Zaina Ali",
        position: "President",
        initials: "ZA",
        image: null,
      },
      {
        name: "Varun Bhupathiraju",
        position: "Vice President",
        initials: "VB",
        image: null,
      },
      {
        name: "Rakshitha Kishore",
        position: "Secretary",
        initials: "RK",
        image: null,
      },
      {
        name: "Akshith Akula",
        position: "Director of Medicine",
        initials: "AA",
        image: null,
      },
      {
        name: "Arnav Mehta",
        position: "Director of Engineering",
        initials: "AM",
        image: null,
      },
    ],
  },
  {
    name: "Technical",
    members: [
      {
        name: "Chris Abraham",
        position: "Technical",
        initials: "CA",
        image: "/images/chris-abraham.png",
        imagePosition: "object-[center_top]", // Custom positioning for Chris's image
      },
      {
        name: "Sajid Memon",
        position: "Technical",
        initials: "SM",
        image: null,
      },
      {
        name: "Ali Ghorbani",
        position: "Technical",
        initials: "AG",
        image: null,
      },
      {
        name: "Jaden Jovan",
        position: "Technical",
        initials: "JJ",
        image: null,
      },
      {
        name: "Harshavarthan Mathapti",
        position: "Technical",
        initials: "HM",
        image: null,
      },
    ],
  },
  {
    name: "Industry",
    members: [
      {
        name: "Ishayu Gupta",
        position: "Industry",
        initials: "IG",
        image: null,
      },
      {
        name: "Abanish Khadka",
        position: "Industry",
        initials: "AK",
        image: null,
      },
      {
        name: "Akhil Nelapolu",
        position: "Industry",
        initials: "AN",
        image: null,
      },
    ],
  },
  {
    name: "Marketing",
    members: [
      {
        name: "Aarya Oswal",
        position: "Marketing",
        initials: "AO",
        image: null,
      },
      {
        name: "Rohini Viswanatham",
        position: "Marketing",
        initials: "RV",
        image: null,
      },
      {
        name: "Haly Shah",
        position: "Marketing",
        initials: "HS",
        image: null,
      },
    ],
  },
  {
    name: "Operations",
    members: [
      {
        name: "Srinidhi Vajinepalli",
        position: "Operations",
        initials: "SV",
        image: null,
      },
      {
        name: "Arnav Lanka",
        position: "Operations",
        initials: "AL",
        image: null,
      },
      {
        name: "Ishir Chandra",
        position: "Operations",
        initials: "IC",
        image: null,
      },
      {
        name: "Aamir Khan",
        position: "Operations",
        initials: "AK",
        image: null,
      },
    ],
  },
]

export default function OfficersPage() {
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
            <Link href="/officers" className="text-sm text-primary">
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

      <main className="container py-12 px-4">
        <h1 className="text-6xl font-bold mb-16 text-primary/90 text-center">Meet the Team</h1>

        <div className="space-y-32">
          {teams.map((team, teamIndex) => (
            <section key={teamIndex} className="space-y-12">
              <h2 className="text-3xl font-semibold text-primary/80 text-center">{team.name}</h2>
              <div className="flex flex-wrap justify-center gap-12">
                {team.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="flex flex-col items-center group">
                    <Avatar className="h-32 w-32 border-2 border-primary/20 group-hover:border-primary/50 transition-colors overflow-hidden">
                      {member.image ? (
                        <AvatarImage
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className={`object-cover scale-110 ${member.imagePosition || ""}`}
                        />
                      ) : (
                        <AvatarFallback className="text-2xl bg-background">{member.initials}</AvatarFallback>
                      )}
                    </Avatar>
                    <h3 className="mt-4 text-2xl font-semibold text-primary/90 group-hover:text-primary transition-colors text-center">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-center">{member.position}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
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
