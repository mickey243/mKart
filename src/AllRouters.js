import React from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import SingleProductView from "./components/AllProducts/SingleProductView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPageView from "./components/AllProducts/CartPageView";

const AllRouters = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<AllProducts />} /> */}
        <Route exact path="/" element={<CartPageView />} />
        <Route path="/product/:productId" element={<SingleProductView />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Error</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default AllRouters;
