import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers";
import middleware from "./middleware";
import App from "./components/App";

const persistConfig = {
  key: "currentUser",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h3>Loading...</h3>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
