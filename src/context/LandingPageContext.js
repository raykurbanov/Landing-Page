import { createContext, useReducer } from "react";
import landingPageReducer from "./LandingPageReducer";

const LandingPageContext = createContext();

export const LandingPageProvider = ({ children }) => {
  const initialStatePage = {
    active: "chronologic",
  };

  const [state, dispatch] = useReducer(landingPageReducer, initialStatePage);

  const setActive = (sectionID) => {
    dispatch({
      type: "SET_ACTIVE",
      payload: sectionID,
    });
  };

  return (
    <LandingPageContext.Provider
      value={{
        active: state.active,
        setActive,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
};

export default LandingPageContext;
