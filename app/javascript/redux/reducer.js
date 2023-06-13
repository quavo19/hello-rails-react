const initialState = "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RANDOM_GREETING_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
