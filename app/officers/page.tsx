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
        image: "/images/zaina-ali-new.png",
        imagePosition: "object-[center_40%] scale-110", // Centered on face for new image
      },
      {
        name: "Varun Bhupathiraju",
        position: "Vice President",
        initials: "VB",
        image: "/images/varun-bhupathiraju.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Updated positioning for Varun's new image
      },
      {
        name: "Rakshitha Kishore",
        position: "Secretary",
        initials: "RK",
        image: "/images/rakshitha-kishore.jpeg",
        imagePosition: "object-[center_30%] scale-125", // Zoomed in more on Rakshitha's face
      },
      {
        name: "Akshith Akula",
        position: "Director of Medicine",
        initials: "AA",
        image: "/images/akshith-akula.jpeg",
        imagePosition: "object-[center_30%]", // Custom positioning for Akshith's image
      },
      {
        name: "Arnav Mehta",
        position: "Director of Engineering",
        initials: "AM",
        image: "/images/arnav-mehta.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Custom positioning for Arnav's image
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
        image: "/images/sajid-memon.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Custom positioning for Sajid's image
      },
      {
        name: "Ali Ghorbani",
        position: "Technical",
        initials: "AG",
        image: "/images/ali-ghorbani.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Updated positioning for Ali's new image
      },
      {
        name: "Jaden Jovan",
        position: "Technical",
        initials: "JJ",
        image: "/images/jaden-jovan-new.jpeg",
        imagePosition: "object-[center_35%] scale-110", // Centered on face for new image
      },
      {
        name: "Harshavarthan Mathapti",
        position: "Technical",
        initials: "HM",
        image: "/images/harshavarthan-mathapti.jpeg",
        imagePosition: "object-[center_25%] scale-100", // Custom positioning for Harshavarthan's image
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
        image: "/images/ishayu-gupta.png",
        imagePosition: "object-[center_15%] scale-100", // Moved Ishayu's face up in the image
      },
      {
        name: "Abanish Khadka",
        position: "Industry",
        initials: "AK",
        image: "/images/abanish-khadka.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Custom positioning for Abanish's image
      },
      {
        name: "Akhil Nelapolu",
        position: "Industry",
        initials: "AN",
        image: "/images/ishir-chandra.jpeg", // Switched with Ishir's image
        imagePosition: "object-[center_30%] scale-100", // Using Ishir's positioning
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
        image: "/images/aarya-oswal.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Custom positioning for Aarya's image
      },
      {
        name: "Rohini Viswanatham",
        position: "Marketing",
        initials: "RV",
        image: "/images/rohini-viswanatham.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Custom positioning for Rohini's image
      },
      {
        name: "Haly Shah",
        position: "Marketing",
        initials: "HS",
        image: "/images/haly-shah.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Custom positioning for Haly's image
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
        image: "/images/srinidhi-vajinepalli.jpeg",
        imagePosition: "object-[center_30%] scale-100", // Custom positioning for Srinidhi's image
      },
      {
        name: "Arnav Lanka",
        position: "Operations",
        initials: "AL",
        image: "/images/arnav-lanka.png",
        imagePosition: "object-[center_top]", // Custom positioning for Arnav's image
      },
      {
        name: "Ishir Chandra",
        position: "Operations",
        initials: "IC",
        image: "/images/akhil-nelapolu.jpeg", // Switched with Akhil's image
        imagePosition: "object-[center_30%] scale-100", // Using Akhil's positioning
      },
      {
        name: "Aamir Khan",
        position: "Operations",
        initials: "AK",
        image: "/images/aamir-khan.jpeg",
        imagePosition: "object-[center_25%] scale-100", // Custom positioning for Aamir's image
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
                          className={`object-cover ${member.imagePosition?.includes("scale") ? member.imagePosition : `scale-110 ${member.imagePosition || ""}`}`}
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
