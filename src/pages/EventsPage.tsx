"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchEvents } from "../api/eventsApi"
import type { Event } from "../components/events/EventCard" // Import Event from EventCard
import EventsHero from "../components/events/Hero"
import EventsTabs from "../components/events/EventsTabs"

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const {
    data: events,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Event[]>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  })

  return (
    <div>
      <EventsHero activeTab={activeTab} setActiveTab={setActiveTab} />
      <EventsTabs
        activeTab={activeTab}
        events={events || []}
        isLoading={isLoading}
        isError={isError}
        error={error}
        refetch={refetch}
      />
    </div>
  )
}

export default EventsPage
