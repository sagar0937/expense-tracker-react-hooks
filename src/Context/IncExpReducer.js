export const IncExpReducer = (state, action) => {
  switch (action.type) {
    case "delete-trans":
      return {
        ...state,
      };
    case "add-trans":
      return {
        ...state,
      };

    default:
      return state;
  }
};
