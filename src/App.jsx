import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./main.scss";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";
import CartProvider from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import LoginState from "./pages/Login/LoginState";

function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path='/' element={<LoginState />} />
          <Route path='products' element={<Products />} /> 
          {/* comentar la ruta products para ver simulación de autenticación */}
          <Route
            path='product-details/:ProductID'
            element={<ProductDetails />}
          />
          <Route path='shopping-cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
