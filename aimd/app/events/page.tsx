import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar } from "./calendar"
import { SiteHeader } from "@/components/site-header"

const upcomingEvents = [
  {
    id: 1,
    title: "AI in Radiology Workshop",
    date: "2024-03-15",
    time: "14:00 - 16:00",
    location: "Virtual",
    description: "Learn how AI is revolutionizing radiology diagnostics.",
  },
  {
    id: 2,
    title: "Machine Learning for Drug Discovery",
    date: "2024-03-22",
    time: "10:00 - 12:00",
    location: "Science Building, Room 302",
    description: "Explore the latest ML techniques in pharmaceutical research.",
  },
  {
    id: 3,
    title: "Ethics in AI Healthcare Panel",
    date: "2024-04-05",
    time: "15:00 - 17:00",
    location: "Student Union Auditorium",
    description: "Join our expert panel to discuss ethical considerations in AI-driven healthcare.",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background purple-gradient">
      <SiteHeader />
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-300">
          Upcoming Events
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Event List</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
                  <CardHeader>
                    <CardTitle className="text-primary">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      <strong>Date:</strong> {event.date} | <strong>Time:</strong> {event.time}
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Event Calendar</h2>
            <Card className="bg-background/50 backdrop-blur border-primary/20 purple-glow">
              <CardContent>
                <Calendar events={upcomingEvents} />
              </CardContent>
            </Card>
          </section>
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

