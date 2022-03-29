import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../data/login";

export default function LoginRedux({ authenticate }) {

   const dispatch = useDispatch(); // creamos la función despachadora
   const { username, password, error, isLoading } = useSelector(state => state) 
 
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      await login({ username, password });
      authenticate();
      navigate("/products");
    } catch {
      dispatch({ type: "error" });
    }
  };


  return (
    <form onSubmit={submit}>
      <input
        type='text'
        value={username}
        //onChange={(e) => setUsername(e.target.value)}
        onChange={(e) =>
          dispatch({
            type: "inputFields",
            inputName: "username",
            payload: e.target.value,
          })
        }
      />
      <input
        type='password'
        value={password}
        //onChange={(e) => setPassword(e.target.value)}
        onChange={(e) =>
          dispatch({
            type: "inputFields",
            inputName: "password",
            payload: e.target.value,
          })
        }
      />
      <button type='submit'>
        {isLoading ? "Logging in..." : "login"}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
