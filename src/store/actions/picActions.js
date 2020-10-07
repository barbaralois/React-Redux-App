import axios from "axios";

export const fetchPic = () => {
  return dispatch => {
    dispatch({ type: "FETCH_PIC_START" });
    axios
      .get("https://aws.random.cat/meow")
      .then(res => {
        // res.data.file
        dispatch({ type: "FETCH_PIC_SUCCESS", payload: res.data.file });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PIC_ERROR", payload: err });
      });
  };
};
