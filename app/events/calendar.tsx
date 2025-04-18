"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
}

interface CalendarProps {
  events: Event[]
}

export function Calendar({ events }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleDateClick = (day: number, dayEvents: Event[]) => {
    if (dayEvents.length > 0) {
      setSelectedEvent(dayEvents[0]) // For now, just show the first event if there are multiple
      setIsDialogOpen(true)
    }
  }

  const renderCalendarDays = () => {
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center p-2"></div>)
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const dateString = date.toISOString().split("T")[0]
      const dayEvents = events.filter((event) => event.date === dateString)
      days.push(
        <div
          key={day}
          className={`text-center p-2 ${
            dayEvents.length > 0
              ? "bg-primary/20 rounded-full cursor-pointer hover:bg-primary/30 transition-colors"
              : ""
          }`}
          onClick={() => handleDateClick(day, dayEvents)}
        >
          {day}
          {dayEvents.length > 0 && (
            <div className="text-xs text-primary mt-1">
              {dayEvents.length} event{dayEvents.length > 1 ? "s" : ""}
            </div>
          )}
        </div>,
      )
    }
    return days
  }

  return (
    <div className="bg-background/50 backdrop-blur rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <Button onClick={prevMonth} variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-lg font-semibold text-primary">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h3>
        <Button onClick={nextMonth} variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm font-medium text-muted-foreground mb-2">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm">{renderCalendarDays()}</div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-background/95 backdrop-blur border-primary/20 purple-glow">
          <DialogHeader>
            <DialogTitle className="text-primary text-xl">{selectedEvent?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedEvent?.date} | {selectedEvent?.time}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-primary">Location</h4>
              <p className="text-muted-foreground">{selectedEvent?.location}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-primary">Description</h4>
              <p className="text-muted-foreground">{selectedEvent?.description}</p>
            </div>
          </div>
          <DialogClose asChild>
            <Button className="absolute top-2 right-2" variant="ghost" size="icon">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  )
}
