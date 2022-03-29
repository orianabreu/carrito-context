import React, { useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../data/login";
import { reducer, initialState } from "./actions";


export default function LoginReducer({ authenticate }) {
    // state: el estado de nuestro componente antes de realizar un cambio
    // dispatch: función que despacha acciones (casos de uso de nuestro comp)
    // reducer: función reductora que se ejecuta automáticamente cuando se despacha una acción
    const [state, dispatch] = useReducer(reducer, initialState);
    const { username, password, isLoading, error } = state;

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
  //const [error, setError] = useState("");
  //const [isLoading, setIsLoading] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const inputRef = useRef();
  console.log(inputRef);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    //setIsLoading(true);
    dispatch({ type: "login" });

    try {
        await login({ username, password });
        authenticate();
        navigate("/products");
    } catch {
        // setError("Incorrect username or password...");
        // setIsLoggedIn(false);
        // setUsername("");
        // setPassword("");
        dispatch({ type: "error" });
    }
  }

  const focus = () => {
    if (username === "" && password === "") {
      inputRef.current.focus();
    }
  }

  return (
      <form onSubmit={submit}>
        <input
          ref={inputRef}
          type='text'
          value={username}
          //onChange={(e) => setUsername(e.target.value)}
          onChange={(e) => dispatch({ type: "inputFields", inputName: "username", payload: e.target.value })}
        />
        <input
          type='password'
          value={password}
          //onChange={(e) => setPassword(e.target.value)}
          onChange={(e) => dispatch({ type: "inputFields", inputName: "password", payload: e.target.value })}
        />
        <button onClick={focus} type="submit">{isLoading ? "Logging in..." : "login"}</button>
        {error && <p>{error}</p>}
    </form>
)}
