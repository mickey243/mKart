import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AllRouters from "./AllRouters";
import { Provider } from "react-redux";
import MyState from "./redux/MyStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={MyState}>
      <AllRouters />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
