import LandingPage from "./Pages/LandingPage/LandingPage";
import { LandingPageProvider } from "./context/LandingPageContext";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

const App = () => {
  return (
    <LandingPageProvider>
      <Router>
        <Auth0ProviderWithHistory>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<LandingPage />} />
          </Routes>
        </Auth0ProviderWithHistory>
      </Router>
    </LandingPageProvider>
  );
};

export default App;
