import { useEffect, useState } from "react";

import {
  useParams,
  Link
} from "react-router-dom";

import Loader from "../components/Loader";

import { fetchDrivers }
  from "../services/driversService";

import "../styles/DriverDetails.css";

import useTitle
  from "../hooks/useTitle";

function DriverDetails() {

  const { id } = useParams();

  const [driver, setDriver] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* TITLE */

  useTitle("Driver Details");

  useEffect(() => {

    async function getDriver() {

      try {

        const data =
          await fetchDrivers();

        const foundDriver =
          data.find(
            (item) =>
              item.driver_number ===
              Number(id)
          );

        setDriver(foundDriver);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    }

    getDriver();

  }, [id]);

  /* LOADING */

  if (loading) {
    return <Loader />;
  }

  /* NOT FOUND */

  if (!driver) {

    return (

      <div className="not-found">

        <h1>
          Driver Not Found
        </h1>

        <Link to="/drivers">

          <button>
            Back To Drivers
          </button>

        </Link>

      </div>
    );
  }

  /* MAIN PAGE */

  return (

    <div className="details-page">

      <div className="details-card">

        <img
          src={
            driver.driver_number === 40

              ? "https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/1col/image.png"

              : driver.headshot_url ||
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }

          alt={driver.full_name}

          onError={(e) => {

            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
          }}
        />

        <div className="details-content">

          <h1>
            {driver.full_name}
          </h1>

          <p>
            <span>Team:</span>
            {" "}
            {driver.team_name ||
              "Formula 1"}
          </p>

          <p>
            <span>Country:</span>
            {" "}
            {driver.country_code ||
              "Unknown"}
          </p>

          <p>
            <span>
              Driver Number:
            </span>
            {" "}
            #
            {driver.driver_number}
          </p>

          <Link to="/drivers">

            <button>
              Back To Drivers
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default DriverDetails;
