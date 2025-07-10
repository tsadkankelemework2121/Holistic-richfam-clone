import { useState, useEffect } from "react";
import api from "../../api/api";
import EventsHero from "./Hero";
import EventsTabs from "./EventsTabs";

const fetchEvents = async () => {
  try {
    const response = await api.get("/event");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

const EventsContainer = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const loadEvents = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchEvents();
      setEvents(data);
    } catch (err) {
      setIsError(true);
      setError(err);
      console.error("Error loading events:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const refetch = () => {
    loadEvents();
  };

  return (
    <div className="w-full">
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
  );
};

export default EventsContainer;
