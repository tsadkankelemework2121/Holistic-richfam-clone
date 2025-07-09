"use client"

import { useState } from "react"
import EventCard, { type Event } from "./EventCard" // Import Event from EventCard
import RegistrationModal from "./RegistrationModal"

interface EventsTabsProps {
  activeTab: string
  events: Event[]
  isLoading: boolean
  isError: boolean
  error: unknown
  refetch: () => void
}

const EventsTabs = ({ activeTab, events, isLoading, isError, error, refetch }: EventsTabsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState("")

  const handleBookNow = (eventTitle: string) => {
    setSelectedEvent(eventTitle)
    setIsModalOpen(true)
  }

  const getCurrentEvents = () => {
    switch (activeTab) {
      case "workshops":
        return events.filter(
          (e) => e.title.toLowerCase().includes("workshop") || e.intro.toLowerCase().includes("workshop"),
        )
      case "special":
        return events.filter(
          (e) =>
            e.title.toLowerCase().includes("holiday") ||
            e.title.toLowerCase().includes("special") ||
            e.intro.toLowerCase().includes("holiday") ||
            e.intro.toLowerCase().includes("special"),
        )
      default:
        return events
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="ml-4 text-gray-600">Loading events...</p>
          </div>
        </div>
      </section>
    )
  }

  // Error state
  if (isError) {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">
              Error loading events: {error instanceof Error ? error.message : "Failed to fetch events"}
            </p>
            <button onClick={() => refetch()} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  const filteredEvents = getCurrentEvents()

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No events found for the selected category.</p>
          </div>
        )}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onBookNow={() => handleBookNow(event.title)} />
          ))}
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} eventTitle={selectedEvent} />
    </section>
  )
}

export default EventsTabs
