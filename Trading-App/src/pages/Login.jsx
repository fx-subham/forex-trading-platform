import "./Login.css";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          PIP<span>X</span>
        </div>

        <h1>Welcome Back</h1>
        <p className="subtitle">Login to your Forex trading account</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <button type="button" className="forgot">
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?
          <button
            type="button"
            className="signup-button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
