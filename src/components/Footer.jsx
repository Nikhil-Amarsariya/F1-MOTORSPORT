import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Drivers", path: "/drivers" },
  { label: "Teams", path: "/teams" },
  { label: "Calendar", path: "/calendar" },
  { label: "News", path: "/news" },
  { label: "Tracks", path: "/tracks" },
];

function Footer({ darkMode }) {
  return (
    <footer className={darkMode ? "footer dark-footer" : "footer light-footer"}>
      <div className="footer-top">
        <div className="footer-brand">
          <h2>F1 Motorsport</h2>
          <p>
            Explore Formula 1 drivers, teams, race schedules and latest racing
            news.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons" aria-label="Social channels">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2026 F1 Motorsport. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
