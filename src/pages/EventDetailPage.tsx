"use client";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin, ArrowLeft, Clock, Users } from "lucide-react";
import { fetchEventById } from "../api/api";
import type { Event } from "../components/events/EventCard";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: event,
    isLoading,
    isError,
    error,
  } = useQuery<Event>({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id!),
    enabled: !!id,
  });

  // Date formatting logic
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
    } catch {
      return "Date TBD";
    }
  };

  const formatTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Time TBD";
    }
  };

  // Color generation logic
  const getBgColor = (id: number) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
    ];
    return colors[id % colors.length];
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="ml-4 text-gray-600">Loading event details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (isError || !event) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            Error loading event:{" "}
            {error instanceof Error ? error.message : "Event not found"}
          </p>
          <button
            onClick={() => navigate("/events")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with back button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/events")}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </button>
        </div>
      </div>

      {/* Event Detail Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image Section */}
          <div className="relative h-96">
            <div
              className={`${getBgColor(
                event.id
              )} w-full h-full relative overflow-hidden`}
            >
              {event.image ? (
                <img
                  src={`http://192.168.100.36:8000/storage/${event.image}`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                  {event.title.charAt(0)}
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {event.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Event
                </h2>
                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="leading-relaxed">{event.intro}</p>

                  {/* Additional content sections */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      What to Expect
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">•</span>
                        <span>
                          Interactive sessions and networking opportunities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">•</span>
                        <span>Expert speakers and industry insights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">•</span>
                        <span>Hands-on activities and workshops</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2">•</span>
                        <span>Refreshments and networking lunch</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Event Details
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Date</p>
                        <p className="text-gray-600">
                          {formatDate(event.created_at)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Time</p>
                        <p className="text-gray-600">
                          {formatTime(event.created_at)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Capacity</p>
                        <p className="text-gray-600">Limited seats available</p>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <div className="mt-8">
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-6 rounded-full transition-colors shadow-lg hover:shadow-xl">
                      Book Now
                    </button>
                  </div>

                  {/* Share Section */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                      Share this event
                    </p>
                    <div className="flex space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        Facebook
                      </button>
                      <button className="text-blue-400 hover:text-blue-600 text-sm">
                        Twitter
                      </button>
                      <button className="text-blue-700 hover:text-blue-900 text-sm">
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
