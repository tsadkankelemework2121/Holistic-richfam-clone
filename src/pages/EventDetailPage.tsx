"use client"
import { useParams } from "react-router-dom"
import EventDetail from "../components/events/EventDetail"

const EventDetailPage = () => {
  const { id } = useParams()

  if (!id) return null

  return <EventDetail id={id} />
}

export default EventDetailPage
