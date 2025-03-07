"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
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
        <div key={day} className={`text-center p-2 ${dayEvents.length > 0 ? "bg-primary/20 rounded-full" : ""}`}>
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
    </div>
  )
}

