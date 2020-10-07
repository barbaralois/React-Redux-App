const initialState = {
  factIsFetching: false,
  fact: "meow meow I'm a cat",
  factError: ""
};

export const factsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FACT_START":
      return {
        ...state,
        factIsFetching: true
      };
    case "FETCH_FACT_SUCCESS":
      return {
        ...state,
        factIsFetching: false,
        fact: action.payload,
        factError: ""
      };
    case "FETCH_FACT_ERROR":
      return {
        ...state,
        factIsFetching: false,
        factError: action.payload
      };
    default:
      return state;
  }
};
