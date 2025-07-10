import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import RegistrationModal from "./RegistrationModal";
import api from "../../api/api";

const fetchEventsByCategory = async (category) => {
  try {
    let endpoint = "";
    switch (category) {
      case "upcoming":
        endpoint = "/event/category/upcoming-event";
        break;
      case "workshops":
        endpoint = "/event/category/workshop";
        break;
      case "special":
        endpoint = "/event/category/special-program";
        break;
      default:
        endpoint = "/event/category/upcoming-event";
    }
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`❌ fetchEventsByCategory error for ${category}:`, error);
    throw error;
  }
};

const EventsTabs = ({ activeTab }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const handleBookNow = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setIsModalOpen(true);
  };

  // Fetch events when activeTab changes
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setError(null);

        console.log(`Fetching events for category: ${activeTab}`);
        const data = await fetchEventsByCategory(activeTab);
        console.log(`Received data for ${activeTab}:`, data);

        // Handle different response structures
        let eventsArray = [];
        if (Array.isArray(data)) {
          eventsArray = data;
        } else if (data && Array.isArray(data.data)) {
          eventsArray = data.data;
        } else if (data && data.events && Array.isArray(data.events)) {
          eventsArray = data.events;
        } else {
          console.warn(`Unexpected data structure for ${activeTab}:`, data);
          eventsArray = [];
        }

        console.log(`Setting ${eventsArray.length} events for ${activeTab}`);
        setEvents(eventsArray);
      } catch (err) {
        console.error(`Error loading ${activeTab} events:`, err);
        setIsError(true);
        setError(err);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, [activeTab]);

  const refetch = () => {
    // Trigger a re-fetch
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        setError(null);

        const data = await fetchEventsByCategory(activeTab);

        // Handle different response structures
        let eventsArray = [];
        if (Array.isArray(data)) {
          eventsArray = data;
        } else if (data && Array.isArray(data.data)) {
          eventsArray = data.data;
        } else if (data && data.events && Array.isArray(data.events)) {
          eventsArray = data.events;
        } else {
          eventsArray = [];
        }

        setEvents(eventsArray);
      } catch (err) {
        console.error(`Error refetching ${activeTab} events:`, err);
        setIsError(true);
        setError(err);
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  };

  // Loading state
  if (isLoading) {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="ml-4 text-gray-600">Loading {activeTab} events...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">
              Error loading {activeTab} events:{" "}
              {error instanceof Error
                ? error.message
                : "Failed to fetch events"}
            </p>
            <button
              onClick={() => refetch()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No {activeTab} events found.</p>
            <p className="text-sm text-gray-500 mt-2">
              Endpoint: /event/category/
              {activeTab === "upcoming"
                ? "upcoming-event"
                : activeTab === "workshops"
                ? "workshop"
                : "special-program"}
            </p>
          </div>
        )}
        <div className="space-y-6">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onBookNow={() => handleBookNow(event.title)}
            />
          ))}
        </div>
      </div>
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle={selectedEvent}
      />
    </section>
  );
};

export default EventsTabs;
