import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import App from "./App";

store.dispatch({ type: "account/deposit", payload: 0 });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

