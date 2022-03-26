import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./main.scss";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />}/>
          <Route path="product-details/:ProductID" element={<ProductDetails />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
