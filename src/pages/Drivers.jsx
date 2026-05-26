import { useEffect, useState } from "react";

import DriverCard from "../components/DriverCard";

import { fetchDrivers } from "../services/driversService";

import "../styles/Drivers.css";

import useTitle from "../hooks/useTitle";

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getDrivers() {
      try {
        const data = await fetchDrivers();

        // remove duplicate drivers
        const uniqueDrivers = Array.from(
          new Map(
            data.map((driver) => [
              driver.driver_number,
              driver,
            ])
          ).values()
        );

        setDrivers(uniqueDrivers);
      } catch {
        setDrivers([]);
      }
    }

    getDrivers();
  }, []);

  const filteredDrivers = drivers.filter((driver) =>
    driver.full_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

useTitle("Drivers");


  return (
    <div className="drivers-container">
      <h1>Formula 1 Drivers</h1>

      <input
        type="text"
        placeholder="Search drivers..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="drivers-page">
        {filteredDrivers.length === 0 ? (
          <div className="empty-state">
            <h2>No drivers found</h2>
          </div>
        ) : (
          filteredDrivers.map((driver) => (
            <DriverCard
              key={driver.driver_number}
              id={driver.driver_number}
              name={driver.full_name}
              team={driver.team_name || "Formula 1"}
              country={driver.country_code || "Unknown"}
              image={driver.headshot_url}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Drivers;
