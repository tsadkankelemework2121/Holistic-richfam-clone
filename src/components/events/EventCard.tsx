"use client"
import { useState } from "react"
import { Calendar, MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom"
import BookingModal from "./BookingModal"

const EventCard = ({ event }) => {
  const navigate = useNavigate()
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  // Date formatting logic
  const formatDate = (dateString) => {
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
  const getBgColor = (id) => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-red-500", "bg-yellow-500"]
    return colors[id % colors.length]
  }

  // Image error handling
  const handleImageError = (e) => {
    e.target.src = "/placeholder.svg" // Fallback to placeholder
    e.target.onerror = null // Prevent infinite loop
  }

  // Navigate to detail page
  const handleSeeMore = () => {
    navigate(`/events/${event.id}`)
  }

  // Handle book now click
  const handleBookNow = () => {
    setIsBookingModalOpen(true)
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:col-span-1">
            <div className={`${getBgColor(event.id)} h-full min-h-[300px] relative overflow-hidden`}>
              {event.image ? (
                <img
                  src={`http://192.168.100.36:8000/storage/event-images/${event.image}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  loading="lazy" // Add lazy loading
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
            <p className="text-gray-700 mb-6 leading-relaxed">
              {event.intro?.length > 150 ? `${event.intro.substring(0, 150)}...` : event.intro}
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={handleSeeMore}
                className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors"
              >
                See More
              </button>
              <button
                onClick={handleBookNow}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} event={event} />
    </>
  )
}

export default EventCard
