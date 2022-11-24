import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { JWTProvider } from "./context/JWTContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <JWTProvider>
      <App />
    </JWTProvider>
  </React.StrictMode>
);

reportWebVitals();
