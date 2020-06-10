import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFact } from "../store/actions/factActions";

const CatFact = props => {
  useEffect(() => {
    props.fetchFact();
  }, []);

  if (props.factIsFetching) {
    return <h2>Loading . . .</h2>;
  }

  if (props.factError) {
    return (
      <p className="error">
        There was an error loading a cat fact...click below to try again.
      </p>
    );
  }

  return <div>{props.fact && <h2>{props.fact}</h2>}</div>;
};

const mapStateToProps = state => {
  return {
    fact: state.factsReducer.fact,
    factIsFetching: state.factsReducer.factIsFetching,
    factError: state.factsReducer.factError
  };
};

export default connect(
  mapStateToProps,
  { fetchFact }
)(CatFact);
