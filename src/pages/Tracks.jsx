import { useState } from "react";

import TrackCard from "../components/TrackCard";

import tracksData from "../services/tracksData";

import "../styles/Tracks.css";

import useTitle from "../hooks/useTitle";


function Tracks() {
  const [search, setSearch] =
    useState("");

  const filteredTracks =
    tracksData.filter(
      (track) =>
        track.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        track.country
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

    useTitle("Tracks");


  return (
    <div className="tracks-container">

      <h1>
        Formula 1 Circuits
      </h1>

      <input
        type="text"
        placeholder="Search circuits..."
        className="search-box"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      <div className="tracks-grid">

        {filteredTracks.length ===
        0 ? (
          <div className="empty-state">
            <h2>
              No circuits found
            </h2>
          </div>
        ) : (
          filteredTracks.map(
            (track) => (
              <TrackCard
                key={track.id}
                id={track.id}
                name={track.name}
                country={
                  track.country
                }
                length={
                  track.length
                }
                corners={
                  track.corners
                }
                laps={track.laps}
                image={
                  track.image
                }
              />
            )
          )
        )}

      </div>
    </div>
  );
}

export default Tracks;
