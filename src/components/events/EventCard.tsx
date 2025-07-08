"use client"

import { Calendar, MapPin } from "lucide-react"

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    location: string
    description: string
    highlights: string[]
    image: string
    bgColor: string
    titleColor: string
  }
  onBookNow: () => void
}

const EventCard = ({ event, onBookNow }: EventCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left - Event Image */}
        <div className="lg:col-span-1">
          <div className={`${event.bgColor} h-full min-h-[300px] relative overflow-hidden`}>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Event Details */}
        <div className="lg:col-span-2 p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">{event.title}</h3>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-3">What to Expect:</h4>
            <ul className="space-y-2">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-bold text-gray-900 mr-2">•</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end">
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