import { useState } from "react";

import TeamCard from "../components/TeamCard";

import teamsData from "../data/teamsData";

import "../styles/Teams.css";

import useTitle from "../hooks/useTitle";



function Teams() {
  const [search, setSearch] = useState("");

  const filteredTeams = teamsData.filter((team) =>
    team.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  useTitle("Teams");

  return (
    <div className="teams-page">

      <h1 className="teams-heading">
        Formula 1 Teams
      </h1>

      <input
        type="text"
        placeholder="Search teams..."
        className="search-box"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="teams-grid">
        {filteredTeams.length === 0 ? (
          <div className="empty-state">
            <h2>No teams found</h2>
          </div>
        ) : (
          filteredTeams.map((team) => (
            <TeamCard
              key={team.id}
              id={team.id}
              name={team.name}
              driver1={team.driver1}
              driver2={team.driver2}
              image={team.image}
              logo={team.logo}
              color={team.color}
            />
          ))
        )}
      </div>

    </div>
  );
}

export default Teams;
