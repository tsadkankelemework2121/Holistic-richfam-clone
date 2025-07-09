import axios from "axios"

// Only the base URL and fetch function - no interface here
const API_BASE_URL = "http://192.168.100.36:8000/api"

export const fetchEvents = async () => {
  const response = await axios.get(`${API_BASE_URL}/event`)
  return response.data
}

// New function to fetch single event by ID
export const fetchEventById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/event/${id}`)
  return response.data
}