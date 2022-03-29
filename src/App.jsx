import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./main.scss";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";
import CartProvider from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import LoginState from "./pages/Login/LoginState";
import LoginReducer from "./pages/Login/LoginReducer";
import LoginRedux from "./pages/Login/LoginRedux";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  const authenticate = () => {
    setAuth(true);
  };

  return (
    <Router>
      <CartProvider>
        {auth && <NavBar />}

        <Routes>
          {!auth && (
            // <Route
            //   path='auth'
            //   element={<LoginState authenticate={authenticate} />}
            // />
            // <Route
            //   path='auth'
            //   element={<LoginReducer authenticate={authenticate} />}
            // />
            <Route
              path='auth'
              element={<LoginRedux authenticate={authenticate} />}
            />
          )}

          {auth && (
            <>
              <Route path='products' element={<Products />} />
              {/* comentar la ruta products para ver simulación de autenticación */}
              <Route
                path='product-details/:productId'
                element={<ProductDetails />}
              />
              <Route path='shopping-cart' element={<Cart />} />
            </>
          )}

          <Route
            path='*'
            element={<Navigate to={auth ? "products" : "auth"} />}
          />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
