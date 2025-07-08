"use client"

import { useState } from "react"
import EventsHero from "../components/events/Hero"
import EventsTabs from "../components/events/EventsTabs"


const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div>
      <EventsHero activeTab={activeTab} setActiveTab={setActiveTab} />
      <EventsTabs activeTab={activeTab} />
    </div>
  )
}

export default EventsPage
