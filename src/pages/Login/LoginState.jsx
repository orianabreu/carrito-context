import React, { useState } from "react";
import { Link } from "react-router-dom";

import { login } from "../../data/login";
import Products from "../Products/Products";

export default function LoginState() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        await login({ username, password });
        setIsLoggedIn(true);
    } catch {
        setError("Incorrect username or password...");
    }
  }

  return (
    <>
    {isLoggedIn ? (
      <>
        <h1>Hola {username}</h1>
        <Products />
      </>
    ) : (
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
        <Link to="/products">
          <button type="submit">{isLoading ? "Logging in..." : "login"}</button>
        </Link>
        {error && <p>{error}</p>}
    </form>
    )}
    </>
  );
}
