import React, { useState } from "react";
import { useEvents } from "../Api";
import EventList from "../components/EventList";
import SearchBar from "../components/searchBar";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [petsAllowed, setPetsAllowed] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  
  const { data, isLoading, error } = useEvents(search, petsAllowed, page);

  if (isLoading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error.message}</p>;

  return (
    <div className="p-4">
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        petsAllowed={petsAllowed} 
        setPetsAllowed={setPetsAllowed} 
      />
      <EventList 
        events={data?.events ?? []} 
        page={page} 
        setPage={setPage} 
        totalPages={data?.totalPages ?? 1} 
      />
    </div>
  );
};

export default Home;
