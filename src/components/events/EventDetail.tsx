import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, ArrowLeft, Clock } from "lucide-react";
import api from "../../api/api";
import BookingModal from "./BookingModal";
import SubscribeSection from "./SubscribeSection";

interface EventDetailProps {
  id: string;
}

const fetchEventById = async (id: string) => {
  try {
    const response = await api.get(`/event/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    throw error;
  }
};

const EventDetail = ({ id }: EventDetailProps) => {
  const navigate = useNavigate();
  const [event, setEvent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<any>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const loadEvent = async () => {
      if (!id) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchEventById(id);
        setEvent(response);
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadEvent();
  }, [id]);

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="ml-4 text-gray-600">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (isError || !event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => navigate("/events")}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              <span className="font-medium">Back to Events</span>
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Column - Event Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Hero Image Section */}
                <div className="relative h-96">
                  {event.image ? (
                    <img
                      src={`http://192.168.100.36:8000/storage/${event.image}`}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to default hero image
                        (e.currentTarget as HTMLImageElement).src =
                          "/images/event-hero.png";
                      }}
                    />
                  ) : (
                    <img
                      src="/images/event-hero.png"
                      alt="RICHFAM Event"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                {/* Event Content */}
                <div className="p-8">
                  <h1 className="text-3xl font-bold text-blue-900 mb-6">
                    {event.title}
                  </h1>
                  <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-red-500" />
                      <span className="font-medium">
                        {formatDate(event.created_at)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-red-500" />
                      <span className="font-medium">
                        {formatTime(event.created_at)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-red-500" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {event.intro && (
                      <div className="mb-8">
                        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                          {event.intro}
                        </p>
                      </div>
                    )}
                    {event.description && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Description
                        </h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {event.description}
                        </p>
                      </div>
                    )}
                    {event.details && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Event Details
                        </h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {event.details}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="mt-8 flex gap-4">
                    <button
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      onClick={() => setIsBookingModalOpen(true)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Subscribe Section */}
            <div className="lg:col-span-1">
              <SubscribeSection />
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        event={event}
      />
    </>
  );
};

export default EventDetail;
