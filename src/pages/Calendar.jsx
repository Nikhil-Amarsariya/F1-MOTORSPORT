import { useEffect, useState } from "react";

import RaceCard from "../components/RaceCard";

import { fetchRaces } from "../services/racesService";

import "../styles/Calendar.css";

import useTitle from "../hooks/useTitle";



function Calendar() {
  const [races, setRaces] = useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    async function getRaces() {
      const data = await fetchRaces();

      setRaces(data);
    }

    getRaces();
  }, []);

  const filteredRaces = races.filter(
    (race) =>
      race.country_name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      race.location
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||

      race.circuit_short_name
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  useTitle("Calendar");

  return (
    <div className="calendar-container">

      <h1>Formula 1 Calendar</h1>

      <input
        type="text"
        placeholder="Search by country, location or circuit..."
        className="search-box"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="calendar-grid">

        {filteredRaces.length === 0 ? (
          <div className="empty-state">
            <h2>No races found</h2>
          </div>
        ) : (
          filteredRaces.map(
            (race, index) => (
              <RaceCard
                key={race.meeting_key}
                round={index + 1}
                country={
                  race.country_name
                }
                location={race.location}
                circuit={
                  race.circuit_short_name || "Unknown Circuit"
                }
                date={race.date_start}
              />
            )
          )
        )}

      </div>
    </div>
  );
}

export default Calendar;
