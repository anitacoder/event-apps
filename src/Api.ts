import { useQuery } from "@tanstack/react-query";

interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

interface EventsResponse {
  events: Event[];
  totalPages: number;
}

const fetchEvents = async (search: string, petsAllowed: boolean, page: number): Promise<EventsResponse> => {
  const response = await fetch(`https://example.com/events?search=${search}&petsAllowed=${petsAllowed}&page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch events");
  return response.json();
};

const fetchEventById = async (id: string): Promise<Event> => {
  const response = await fetch(`https://example.com/events/${id}`);
  if (!response.ok) throw new Error("Event not found");
  return response.json();
};

export const useEvents = (search: string, petsAllowed: boolean, page: number) => {
  return useQuery({
    queryKey: ["events", search, petsAllowed, page],
    queryFn: () => fetchEvents(search, petsAllowed, page),
  });
};

export const useEventById = (id: string) => {
  return useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchEventById(id),
  });
};
