import React from "react";

const EventCard: React.FC<{ event: any }> = ({ event }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p>{event.description}</p>
      <p>Pets Allowed: {event.petsAllowed ? "Yes" : "No"}</p>
    </div>
  );
};

export default EventCard;