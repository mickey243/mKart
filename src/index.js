import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import MyState from "./redux/MyStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={MyState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
