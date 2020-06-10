const initialState = {
  pic: "",
  picIsFetching: false,
  picError: ""
};

export const picsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PIC_START":
      return {
        ...state,
        picIsFetching: true
      };
    case "FETCH_PIC_SUCCESS":
      return {
        ...state,
        picIsFetching: false,
        pic: action.payload,
        picError: ""
      };
    case "FETCH_PIC_ERROR":
      return {
        ...state,
        picIsFetching: false,
        picError: action.payload
      };
    default:
      return state;
  }
};
