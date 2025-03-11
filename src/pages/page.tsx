import React from "react";
import { useParams } from "react-router-dom";
import { useEventById } from "../Api";

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <p>Invalid event ID</p>;

  const { data, isLoading, error } = useEventById(id);

  if (isLoading) return <p>Loading event details...</p>;
  if (error) return <p>Error loading event: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{data?.title}</h1>
      <p>{data?.description}</p>
      <p>Location: {data?.location}</p>
      <p>Date: {data?.date} at {data?.time}</p>
      <p>Organizer: {data?.organizer}</p>
      <p>Pets Allowed: {data?.petsAllowed ? "Yes" : "No"}</p>
    </div>
  );
};

export default EventPage;
