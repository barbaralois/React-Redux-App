import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { fetchPic } from "../store/actions/picActions";

const CatPic = props => {
  useEffect(() => {
    props.fetchPic();
  }, []);

  if (props.picIsFetching) {
    return <Loader type="Hearts" color="pink" height={150} width={150} />;
  }

  if (props.picError) {
    return (
      <div>
        <h2>Uh oh!</h2>
        <p>There was an error loading a cat pic!</p>
      </div>
    );
  }

  return <div>{props.pic && <img src={props.pic} alt="a cat" />}</div>;
};

const mapStateToProps = state => {
  return {
    pic: state.picsReducer.pic,
    picIsFetching: state.picsReducer.picIsFetching,
    picError: state.picsReducer.picError
  };
};

export default connect(
  mapStateToProps,
  { fetchPic }
)(CatPic);
