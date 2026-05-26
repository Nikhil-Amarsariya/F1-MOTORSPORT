import { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from "react-icons/fa";

import { useAuth } from "../context/useAuth";

import "../styles/Navbar.css";

import logo from "../assets/f11.png";

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const { user, logout } = useAuth();

  return (

    <nav
      className={
        darkMode
          ? "navbar dark-nav"
          : "navbar light-nav"
      }
    >

      {/* LEFT SIDE */}

      <div className="logo-section">

        <img
          src={logo}
          alt="F1"
          className="f1-logo"
        />

        <h2>F1 Motorsport</h2>

      </div>

      {/* NAV LINKS */}

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li>
          <NavLink
            to="/"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/drivers"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Drivers
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/teams"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Teams
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/calendar"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Calendar
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/news"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            News
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tracks"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Tracks
          </NavLink>
        </li>

        {/* FAVORITES ONLY WHEN LOGIN */}

        {user && (
          <li>
            <NavLink
              to="/favorites"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Favorites
            </NavLink>
          </li>
        )}

        {/* LOGIN / LOGOUT */}

        <li>

          {user ? (

            <button
              className="auth-btn"
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
            >
              Logout
            </button>

          ) : (

            <Link
              to="/login"
              className="auth-link"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Login
            </Link>

          )}

        </li>

      </ul>

      {/* RIGHT SIDE */}

      <div className="right-section">

        {/* THEME TOGGLE */}

        <div
          className="theme-toggle"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </div>

        {/* MOBILE MENU */}

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
