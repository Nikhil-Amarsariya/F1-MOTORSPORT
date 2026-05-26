import { Link } from "react-router-dom";

import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>Looks like you went off the racing line.
         </p>

      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
