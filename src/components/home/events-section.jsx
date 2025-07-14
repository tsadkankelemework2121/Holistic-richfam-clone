"use client"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import api from "../../API/api"

const EventsSection = () => {
  const fetchData = async () => {
    try {
      const response = await api.get("/events/category/upcoming-event")
      console.log("EventsSection API response:", response.data)
      return response.data // Assuming response.data is an array of events
    } catch (error) {
      console.error("Error fetching upcoming events:", error)
      throw error
    }
  }

  const {
    data: events,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["upcomingEvents"],
    queryFn: fetchData,
    staleTime: 10000,
  })

  // Display loading state
  if (isLoading) {
    return (
      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white">
        <div className="max-w-full sm:max-w-[1405px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6 sm:mb-8">Events</h2>
          <div className="bg-[#F5F5F5] rounded-lg shadow-lg overflow-hidden w-full animate-pulse">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section - Loading */}
              <div className="w-full lg:w-[374px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[375px] flex items-center justify-center p-3 sm:p-4">
                <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[374px] h-full rounded-[18px] overflow-hidden bg-gray-300"></div>
              </div>
              {/* Content Section - Loading */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between min-h-[300px] lg:min-h-[375px]">
                <div className="flex-1 space-y-4">
                  <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
                <div className="text-center sm:text-right mt-4 sm:mt-6">
                  <div className="inline-block bg-gray-300 h-10 w-32 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Display error state
  if (error) {
    return (
      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white">
        <div className="max-w-full sm:max-w-[1405px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6 sm:mb-8">Events</h2>
          <div className="bg-[#F5F5F5] rounded-lg shadow-lg p-8 text-center text-red-500">
            Error loading events: {error.message}
          </div>
        </div>
      </section>
    )
  }

  // If no events are found
  if (!events || events.length === 0) {
    return (
      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white">
        <div className="max-w-full sm:max-w-[1405px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6 sm:mb-8">Events</h2>
          <div className="bg-[#F5F5F5] rounded-lg shadow-lg p-8 text-center text-gray-500">
            No upcoming events found.
          </div>
        </div>
      </section>
    )
  }

  // Sort events by ID and pick the first one (smallest ID)
  const sortedEvents = [...events].sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0))
  const event = sortedEvents[0]

  // Construct image URL based on Detailevent's pattern (data.image)
  const eventImageUrl = event.image
    ? `https://admin.richfamcenter.com/storage/${event.image}`
    : event.image_url || "/placeholder.svg?height=375&width=374"

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white">
      <div className="max-w-full sm:max-w-[1405px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6 sm:mb-8">Events</h2>
        <div className="bg-[#F5F5F5] rounded-lg shadow-lg overflow-hidden w-full">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-[374px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[375px] flex items-center justify-center p-3 sm:p-4">
              <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[374px] h-full rounded-[18px] overflow-hidden">
                <img
                  src={eventImageUrl || "/placeholder.svg"}
                  alt={event.title || "Event banner"}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=375&width=374"
                    e.target.onerror = null
                  }}
                />
              </div>
            </div>
            {/* Content Section */}
            <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between min-h-[300px] lg:min-h-[375px]">
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#1E3A8A] mb-3 sm:mb-4 leading-tight">
                  {event.title || "Untitled Event"}
                </h3>
                <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 space-y-1">
                  <p>
                    📅 {event.date || "Date N/A"} | starting {event.time || "Time N/A"}
                  </p>{" "}
                  {/* Assuming date and time fields */}
                  <p>📍 {event.location || "Location N/A"}</p>
                </div>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                  {/* Use dangerouslySetInnerHTML for description, assuming it's HTML content */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: event.description || event.intro || "No description available.",
                    }}
                    className="leading-relaxed"
                  ></div>
                  {/* If you have specific bullet points or sections, you'd parse event.description here */}
                </div>
              </div>
              <div className="text-center sm:text-right mt-4 sm:mt-6">
                <Link
                  to="/events" // Link to your main events page
                  className="inline-block bg-[#FDD835] hover:bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base"
                >
                  Other Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
