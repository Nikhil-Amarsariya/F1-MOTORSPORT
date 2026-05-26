import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import loginData from "../data/loginData";

import { useAuth } from "../context/useAuth";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  function handleLogin(e) {

    e.preventDefault();

    const user = loginData.find(
      (u) =>
        u.email.toLowerCase() === email.trim().toLowerCase() &&
        u.password === password
    );

    if (user) {

      login(user);

      toast.success(
        `Welcome ${user.username}`
      );

      navigate("/");

    } else {

      setError(
        "Email doesn't exist or password incorrect"
      );

      toast.error(
        "Invalid Email or Password"
      );
    }
  }

  return (

    <div className="login-page">

      <motion.div
        className="login-container"
        initial={{
          opacity: 0,
          y: 40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5
        }}
      >

        <h1>F1 Login</h1>

        <p className="login-subtitle">
          Login to manage your favorite drivers
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <div className="password-box">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }
    placeholder="Enter Password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
  />

  <span
    className="eye-icon"
    onClick={() =>
      setShowPassword(!showPassword)
    }
  >

    {showPassword ? (
      <FaEyeSlash />
    ) : (
      <FaEye />
    )}

  </span>

</div>

          <button type="submit">
            Login
          </button>

        </form>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <div className="demo-users">

          <h3>Demo Accounts</h3>

          <p>
            max@f1.com / 1234
          </p>

          <p>
            lewis@f1.com / 1234
          </p>

          <p>
            charles@f1.com / 1234
          </p>

        </div>

      </motion.div>

    </div>
  );
}

export default Login;
