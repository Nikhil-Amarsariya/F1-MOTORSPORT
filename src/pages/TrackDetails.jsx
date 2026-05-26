import {
  useParams,
  Link,
} from "react-router-dom";

import tracksData from "../services/tracksData";

import "../styles/TrackDetails.css";

import useTitle from "../hooks/useTitle";


function TrackDetails() {
  const { id } = useParams();

  useTitle("Track Details");

  const track =
    tracksData.find(
      (item) =>
        item.id === Number(id)
    );

  if (!track) {
    return (
      <div className="not-found">
        <h1>
          Circuit Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="track-details-page">

      <div className="track-details-card">

        <img
          src={track.image}
          alt={track.name}
        />

        <div className="track-details-content">

          <div className="track-badge">
            {track.country}
          </div>

          <h1>{track.name}</h1>

          <div className="details-grid">

            <div className="detail-box">
              <h3>
                Track Length
              </h3>

              <p>
                {track.length}
              </p>
            </div>

            <div className="detail-box">
              <h3>
                Corners
              </h3>

              <p>
                {track.corners}
              </p>
            </div>

            <div className="detail-box">
              <h3>
                Laps
              </h3>

              <p>
                {track.laps}
              </p>
            </div>

          </div>

          <p className="track-description">
            One of the most iconic
            Formula 1 circuits on
            the calendar featuring
            high-speed sections,
            legendary racing
            history, and dramatic
            wheel-to-wheel battles.
          </p>

          <Link to="/tracks">
            <button className="back-btn">
              ← Back To Circuits
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default TrackDetails;
