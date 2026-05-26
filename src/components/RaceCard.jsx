import "../styles/RaceCard.css";

function RaceCard({
  country,
  location,
  date,
  circuit,
  round,
}) {
  const formattedDate = new Date(
    date
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const today = new Date();

  const raceDate = new Date(date);

  const isCompleted =
    raceDate < today;

  const timeDifference =
    raceDate - today;

  const daysLeft = Math.ceil(
    timeDifference /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="race-card">


      <div className="race-top">

        <div className="race-round">
          Round {round}
        </div>

        <div
          className={
            isCompleted
              ? "race-status completed"
              : "race-status upcoming"
          }
        >
          {isCompleted
            ? "Completed"
            : "Upcoming"}
        </div>

      </div>

      <h2>{country} Grand Prix</h2>

      <div className="race-info">

        <p>
          <span>Location:</span>{" "}
          {location}
        </p>

        <p>
          <span>Circuit:</span>{" "}
          {circuit}
        </p>

        <p>
          <span>Date:</span>{" "}
          {formattedDate}
        </p>

      </div>

      {!isCompleted && (
        <div className="countdown">
          {daysLeft} Days Left
        </div>
      )}

    </div>
  );
}

export default RaceCard;