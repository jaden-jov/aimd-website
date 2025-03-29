import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

const teams = [
  {
    name: "Executive",
    members: [
      {
        name: "Zaina Ali",
        position: "President",
        initials: "ZA",
      },
      {
        name: "Varun Bhapathiraju",
        position: "Vice President",
        initials: "VB",
      },
      {
        name: "Rakshitha Kishore",
        position: "Treasurer",
        initials: "RK",
      },
      {
        name: "Akshith Akula",
        position: "Director of Medicine",
        initials: "AA",
      },
    ],
  },
  {
    name: "Technical",
    members: [
      {
        name: "Chris Abraham",
        position: "Technical Member",
        initials: "CA",
      },
      {
        name: "Sajid Memon",
        position: "Technical Member",
        initials: "SM",
      },
      {
        name: "Ali",
        position: "Technical Member",
        initials: "A",
      },
      {
        name: "Jaden Jovan",
        position: "Technical Member",
        initials: "JJ",
      },
    ],
  },
  {
    name: "Industry",
    members: [
      {
        name: "Prabhas Gade",
        position: "Industry Member",
        initials: "PG",
      },
    ],
  },
  {
    name: "Marketing",
    members: [
      {
        name: "Aarya Oswal",
        position: "Marketing Member",
        initials: "AO",
      },
      {
        name: "Rohini Viswanatham",
        position: "Marketing Member",
        initials: "RV",
      },
    ],
  },
  {
    name: "Operations",
    members: [
      {
        name: "Srinidhi Vajinepalli",
        position: "Operations Member",
        initials: "SV",
      },
      {
        name: "Aarnav Lanka",
        position: "Operations Member",
        initials: "AL",
      },
    ],
  },
]

export default function OfficersPage() {
  return (
    <div className="min-h-screen bg-background purple-gradient">
      <SiteHeader />
      <main className="container py-12 px-4">
        <h1 className="text-6xl font-bold mb-16 text-primary/90 text-center">Meet the Team</h1>

        <div className="space-y-32">
          {teams.map((team, teamIndex) => (
            <section key={teamIndex} className="space-y-12">
              <h2 className="text-3xl font-semibold text-primary/80 text-center">{team.name}</h2>
              <div className="flex flex-wrap justify-center gap-12">
                {team.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="flex flex-col items-center group">
                    <Avatar className="h-32 w-32 border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                      <AvatarFallback className="text-2xl bg-background">{member.initials}</AvatarFallback>
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

