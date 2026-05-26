import { useParams, Link } from "react-router-dom";

import teamsData from "../data/teamsData";

import "../styles/TeamDetails.css";

import useTitle from "../hooks/useTitle";



function TeamDetails() {
  const { id } = useParams();

  useTitle("Team Details");

  const team = teamsData.find(
    (item) => item.id === Number(id)
  );

  if (!team) {
    return <h1>Team Not Found</h1>;
  }

  return (
    <div className="team-details-page">
      <div
        className="team-details-card"
        style={{ background: team.color }}
      >
        <div className="details-top">
          <div>
            <h1>{team.name}</h1>

            <div className="details-drivers">
              <span>{team.driver1}</span>
              <span>{team.driver2}</span>
            </div> 
            
          </div>

          <img
            src={team.logo}
            alt={team.name}
            className="details-logo"
          />
        </div>

        <img
          src={team.image}
          alt={team.name}
          className="details-car"
        />

        <div className="details-grid">
          <div className="details-box">
            <h3>Team Principal</h3>
            <p>{team.principal}</p>
          </div>

          <div className="details-box">
            <h3>Engine</h3>
            <p>{team.engine}</p>
          </div>

          <div className="details-box">
            <h3>Championships</h3>
            <p>{team.championships}</p>
          </div>
        </div>

        <Link to="/teams">
          <button className="back-btn">
            Back To Teams
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TeamDetails;
