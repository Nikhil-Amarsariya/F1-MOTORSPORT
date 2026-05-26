import "../styles/TrackCard.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

function TrackCard(props) {
  return (
    <motion.div
      className="track-card"
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
    >

      <img
        src={props.image}
        alt={props.name}
      />

      <div className="track-content">

        <div className="track-country">
          {props.country}
        </div>

        <h2>{props.name}</h2>

        <div className="track-info">

          <p>
            <span>
              Length:
            </span>{" "}
            {props.length}
          </p>

          <p>
            <span>
              Corners:
            </span>{" "}
            {props.corners}
          </p>

          <p>
            <span>
              Laps:
            </span>{" "}
            {props.laps}
          </p>

        </div>

        <Link
          to={`/tracks/${props.id}`}
        >
          <button>
            View Circuit
          </button>
        </Link>

      </div>
    </motion.div>
  );
}

export default TrackCard;