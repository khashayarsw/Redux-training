import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Inc,Dec} from './actions';
import './App.css';

function App() {
  var counter = useSelector(state => state.counts);
  var logging = useSelector(state => state.login);
  var dispatch = useDispatch();

  return (
    <div className="App">
       <h1>Redux training</h1>
       <p>open your redux devtool</p>
       <p>{counter}</p>
       {logging ? <p>zdzd</p> : 'no'}
       <button onClick={()=>dispatch(Inc())}>+</button>
       <button onClick={()=>dispatch(Dec())}>-</button>
     </div>
  );
}

export default App;
