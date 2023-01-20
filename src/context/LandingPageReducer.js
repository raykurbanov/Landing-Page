const landingPageReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        ...state,
        active: action.payload,
      };

    default:
      return state;
  }
};

export default landingPageReducer;
