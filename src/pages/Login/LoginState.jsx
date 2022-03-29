import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../data/login";

export default function LoginState({ authenticate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        await login({ username, password });
        authenticate();
        navigate("/products");
    } catch {
        setError("Incorrect username or password...");
        setIsLoading(false);
        setUsername("");
        setPassword("");
    }
  }

  return (
      <form onSubmit={submit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLoading ? "Logging in..." : "login"}</button>
  
        {error && <p>{error}</p>}
    </form>
  );
}
