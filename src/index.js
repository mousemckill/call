import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import saveToLocal from "./saveToLocal";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const initialState = {
  company_name: "",
  company_city: "",
  company_address: "",
  employee_name: "",
  employee_email: "",
  employee_phone_number: "",
  local: false
};

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : initialState;

let store = createStore(reducer, persistedState, applyMiddleware(saveToLocal));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
