import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { setupAxios } from "./base-axios";

import store from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

setupAxios(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>
);
