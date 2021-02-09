import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import { createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import { BrowserRouter, withRouter } from "react-router-dom";
import reducer from "./redux/reducer/reducer";
import App from "./PageComponents/App/App";

const reducers = combineReducers({
  reducer,
});
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
