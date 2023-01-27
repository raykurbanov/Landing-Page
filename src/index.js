import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-f0z48vykdphoyhfb.us.auth0.com"
    clientId="9yYPswCVxtQHiTJ7QnJpo7GK4iLjpNUC"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
