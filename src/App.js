import LandingPage from "./Pages/LandingPage/LandingPage";
import { LandingPageProvider } from "./context/LandingPageContext";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <LandingPageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<LandingPage />} />
        </Routes>
      </Router>
    </LandingPageProvider>
  );
};

export default App;
