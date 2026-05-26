import "../styles/Hero.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import carImage from "../assets/Hero.jpg";

import { useAuth } from "../context/useAuth";

function Hero() {
  const {user} = useAuth();
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            Experience The Speed Of
            <span> Formula 1</span>
          </h1>

          <p>
            Explore Formula 1 drivers,
            teams, tracks, race schedules,
            and the latest motorsport news
            in one modern platform.
          </p>

          <div className="hero-buttons">
            <Link to="/drivers">
              <button className="primary-btn">
                Explore Drivers
              </button>
            </Link>

            <Link to="/tracks">
              <button className="secondary-btn">
                View Circuits
              </button>
            </Link>

            {!user && (
  <Link to="/login">
    <button className="primary-btn">
      Login
    </button>
  </Link>
)}

          </div>

          <div className="hero-stats">
            <div>
              <h2>20+</h2>
              <span>Drivers</span>
            </div>

            <div>
              <h2>10</h2>
              <span>Teams</span>
            </div>

            <div>
              <h2>24</h2>
              <span>Races</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={carImage}
            alt="Formula 1 Car"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
