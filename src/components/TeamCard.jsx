import "../styles/TeamCard.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

function TeamCard(props) {
  return (
    <motion.div
      className="team-card"
      style={{ background: props.color }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="team-top">
        <div>
          <h1>{props.name}</h1>

          <div className="team-drivers">
            <span>{props.driver1}</span>
            <span>{props.driver2}</span>
          </div>
        </div>

        <img
          src={props.logo}
          alt={props.name}
          className="team-logo"
        />
      </div>

      <Link
        to={`/teams/${props.id}`}
        className="car-link"
      >
        <img
          src={props.image}
          alt={props.name}
          className="team-car"
        />
      </Link>
    </motion.div>
  );
}

export default TeamCard;