import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import usersReducers from "./redux/usersSlice.jsx";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    users: usersReducers,
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
