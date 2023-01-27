import LandingPage from "./Pages/LandingPage/LandingPage";
import { LandingPageProvider } from "./context/LandingPageContext";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <Auth0Provider>
      <LandingPageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<LandingPage />} />
          </Routes>
        </Router>
      </LandingPageProvider>
    </Auth0Provider>
  );
};

export default App;
