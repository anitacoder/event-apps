import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";

const EventList: React.FC<{ events: any[]; page: number; setPage: (p: number) => void; totalPages: number; }> = ({ events, page, setPage, totalPages }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Link key={event.id} to={`/event/${event.id}`}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default EventList;