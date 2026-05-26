import DriverCard from "../components/DriverCard";
import { useAuth } from "../context/useAuth";
import useTitle from "../hooks/useTitle";

const getStoredFavorites = (email) => {
  try {
    return JSON.parse(localStorage.getItem(`favorites_${email}`)) || [];
  } catch {
    return [];
  }
};

function Favorites() {
  const { user } = useAuth();
  const favorites = user ? getStoredFavorites(user.email) : [];

  useTitle("Favorites");

  return (
    <div className="drivers-container">
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Favorite Drivers
      </h1>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>No favorite drivers yet</h2>
          <p>Add drivers to favorites from the Drivers page.</p>
        </div>
      ) : (
        <div className="drivers-page">
          {favorites.map((driver) => (
            <DriverCard
              key={driver.id}
              id={driver.id}
              name={driver.name}
              team={driver.team}
              country={driver.country}
              image={driver.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
