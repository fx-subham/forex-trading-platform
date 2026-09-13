import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Account created successfully!");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-logo">
          PIP<span>X</span>
        </div>

        <h1>Create Account</h1>

        <p className="signup-subtitle">
          Join PipX and start your Forex journey
        </p>

        <form onSubmit={handleSignup}>
          <div className="signup-input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <label className="terms">
            <input type="checkbox" required />I agree to the Terms & Conditions
          </label>

          <button
            type="button"
            className="signup-button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </form>

        <p className="login-text">
          Already have an account?
          <button type="button" className="login-link">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
