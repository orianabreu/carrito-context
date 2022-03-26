import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { login } from "../../data/login";
import Products from "../Products/Products";

export default function LoginState({ authenticated, loginAuth, location }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        await loginAuth({ username, password });
    } catch {
        setError("Incorrect username or password...");
    }
  }

  const { from } = location.state || { from: { pathname: "/products" }}
  if (authenticated) return <Products />

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
