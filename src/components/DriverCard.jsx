import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth";
import "../styles/DriverCard.css";

const FALLBACK_DRIVER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";

const LIAM_LAWSON_IMAGE =
  "https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/1col/image.png";

const getStoredFavorites = (email) => {
  try {
    return JSON.parse(localStorage.getItem(`favorites_${email}`)) || [];
  } catch {
    return [];
  }
};

function DriverCard({ country, id, image, name, team }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [, refreshFavorites] = useState(0);

  const isFavorite = user
    ? getStoredFavorites(user.email).some((item) => item.id === id)
    : false;

  const toggleFavorite = () => {
    if (!user) {
      toast.error("Please login to add favorites");
      navigate("/login");
      return;
    }

    const favorites = getStoredFavorites(user.email);
    const exists = favorites.some((item) => item.id === id);

    if (exists) {
      const updatedFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(updatedFavorites));
      toast.error(`${name} removed from favorites`);
    } else {
      favorites.push({ id, name, team, country, image });
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
      toast.success(`${name} added to favorites`);
    }

    refreshFavorites((version) => version + 1);
  };

  const driverImage = id === 40 ? LIAM_LAWSON_IMAGE : image || FALLBACK_DRIVER_IMAGE;

  return (
    <motion.div
      className="driver-card"
      whileHover={{ scale: 1.03, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={driverImage}
        alt={name}
        onError={({ currentTarget }) => {
          currentTarget.src = FALLBACK_DRIVER_IMAGE;
        }}
      />

      <div className="driver-info">
        <h2>{name}</h2>

        <p>
          <span>Team:</span> {team}
        </p>

        <p>
          <span>Country:</span> {country}
        </p>

        <div className="driver-buttons">
          {user && (
            <button
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className={`favorite-btn ${isFavorite ? "active-favorite" : ""}`}
              onClick={toggleFavorite}
              type="button"
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          )}

          <Link to={`/drivers/${id}`} state={{ driver: { id, name, team, country, image } }}>
            <button className="profile-btn" type="button">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default DriverCard;
