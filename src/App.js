import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "./redux/AuthSlice";

import AllProducts from "./components/AllProducts/AllProducts";
import SingleProductView from "./components/AllProducts/SingleProductView";
function App() {
  document.title = "mKart";

  return (
    <div className="App">
      <AllProducts />
      {/* <SingleProductView /> */}
    </div>
  );
}

export default App;
