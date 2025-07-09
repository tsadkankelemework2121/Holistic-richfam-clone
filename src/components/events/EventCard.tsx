"use client"

import type React from "react"
import { Calendar, MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Event interface defined here in EventCard
export interface Event {
  id: number
  title: string
  image: string
  intro: string
  location: string
  created_at: string
  updated_at: string
}

interface EventCardProps {
  event: Event
  onBookNow: () => void
}

const EventCard = ({ event, onBookNow }: EventCardProps) => {
  const navigate = useNavigate()

  // Date formatting logic
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch {
      return "Date TBD"
    }
  }

  // Color generation logic
  const getBgColor = (id: number) => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-yellow-500"]
    return colors[id % colors.length]
  }

  // Image error handling
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error("Failed to load image:", event.image)
    e.currentTarget.style.display = "none"
  }

  // Navigate to detail page
  const handleSeeMore = () => {
    navigate(`/events/${event.id}`)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <div className="lg:col-span-1">
          <div className={`${getBgColor(event.id)} h-full min-h-[300px] relative overflow-hidden`}>
            {event.image ? (
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover"
              
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                {event.title.charAt(0)}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">{event.title}</h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              <span>{formatDate(event.created_at)}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Truncated intro text */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {event.intro.length > 150 ? `${event.intro.substring(0, 150)}...` : event.intro}
          </p>

          {/* Updated button section with See More and Book Now */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleSeeMore}
              className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors"
            >
              See More
            </button>
            <button
              onClick={onBookNow}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
