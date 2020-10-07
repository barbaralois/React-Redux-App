import axios from "axios";

export const fetchFact = () => {
  let randomNum = Math.floor(Math.random() * Math.floor(229));
  return dispatch => {
    dispatch({ type: "FETCH_FACT_START" });
    axios
      .get("https://cat-fact.herokuapp.com/facts")
      .then(res => {
        // res.data.all[randomNum].text
        dispatch({
          type: "FETCH_FACT_SUCCESS",
          payload: res.data.all[randomNum].text
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_FACT_ERROR", payload: err });
      });
  };
};
