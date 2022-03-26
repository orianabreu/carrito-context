import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./main.scss";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";
import CartProvider from "./context/CartContext";
import Cart from "./pages/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path='/' element={<Products />} />
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
