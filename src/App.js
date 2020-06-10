import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import CatPic from './components/CatPic';
import CatFact from './components/CatFact';
import { fetchFact } from './store/actions/factActions';
import { fetchPic } from './store/actions/picActions';

function App(props) {
  const handleClick = () => {
    props.fetchPic();
    props.fetchFact();
  };
  return (
    <div className="App">
      <h1>Fun Facts Featuring Cats</h1>
      <CatPic />
      <CatFact />
      <button onClick={handleClick}>Get a New Fact</button>
    </div>
  );
}

export default connect(null, { fetchPic, fetchFact })(App);
