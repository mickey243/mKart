import React from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import SingleProductView from "./components/AllProducts/SingleProductView";
import Test1 from "./Test/Test1";
import Test2 from "./Test/Test2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AllRouters = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AllProducts />} />
        <Route path="/product/:productId" element={<SingleProductView />} />
        <Route path="test2" element={<Test2 />} />
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
