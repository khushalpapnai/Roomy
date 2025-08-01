import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../demoData";
import { UserContext } from "../App";

const Login = () => {
  const [role, setRole] = useState("tenant");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = users.find(
      (u) => u.email === email && u.password === password && u.role === role
    );
    if (found) {
      login(found);
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <label>
        <input
          type="radio"
          value="tenant"
          checked={role === "tenant"}
          onChange={() => setRole("tenant")}
        />
        Tenant
      </label>
      <label>
        <input
          type="radio"
          value="landlord"
          checked={role === "landlord"}
          onChange={() => setRole("landlord")}
        />
        Landlord
      </label>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">
          Login as {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      </form>
    </div>
  );
};

export default Login;
