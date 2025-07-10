"use client"
import { useState, useEffect } from "react"
import { fetchEvents } from "../api/api"
import EventsHero from "../components/events/Hero"
import EventsTabs from "../components/events/EventsTabs"

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState(null)

  const loadEvents = async () => {
    try {
      setIsLoading(true)
      setIsError(false)
      const data = await fetchEvents()
      setEvents(data)
    } catch (err) {
      setIsError(true)
      setError(err)
      console.error("Error loading events:", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadEvents()
  }, [])

  const refetch = () => {
    loadEvents()
  }

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
