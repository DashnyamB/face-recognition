import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./PageComponents/App/App";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { BrowserRouter, withRouter } from "react-router-dom";
import reducer from "./redux/reducer/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
