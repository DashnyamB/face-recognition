import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bulma/css/bulma.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import { BrowserRouter, withRouter } from "react-router-dom";
import LoginRegisterReducer from "./redux/reducer/reducer";
import thunk from "redux-thunk";
import App from "./PageComponents/App/App";

const reducers = combineReducers({
  LoginRegisterReducer,
});
const middlewares = [thunk];
const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
